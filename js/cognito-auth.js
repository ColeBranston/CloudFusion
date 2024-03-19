/*global CloudFusion _config AmazonCognitoIdentity AWSCognito gapi*/

var CloudFusion = window.CloudFusion || {};

(function scopeWrapper($) {
    var signinUrl = '/signin'; //change it to the sign in page - Edit: Changed to sign in path

    var poolData = {
        UserPoolId: _config.cognito.userPoolId,
        ClientId: _config.cognito.userPoolClientId
    };

    var userPool;

    if (!(_config.cognito.userPoolId &&
        _config.cognito.userPoolClientId &&
        _config.cognito.region)) {
        $('#noCognitoMessage').show();
        return;
    }

    userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    if (typeof AWSCognito !== 'undefined') {
        AWSCognito.config.region = _config.cognito.region;
    }

    CloudFusion.signOut = function signOut() {
        userPool.getCurrentUser().signOut();
    };

    CloudFusion.authToken = new Promise(function fetchCurrentAuthToken(resolve, reject) {
        var cognitoUser = userPool.getCurrentUser();

        if (cognitoUser) {
            cognitoUser.getSession(function sessionCallback(err, session) {
                if (err) {
                    reject(err);
                } else if (!session.isValid()) {
                    resolve(null);
                } else {
                    resolve(session.getIdToken().getJwtToken());
                }
            });
        } else {
            resolve(null);
        }
    });

    /*
     * Google Sign-In functions
     */

    function googleSignIn() {
        gapi.auth2.getAuthInstance().signIn().then(
            function(googleUser) {
                var id_token = googleUser.getAuthResponse().id_token;

                // Use the id_token to sign in with Cognito
                signInWithGoogle(id_token);
            },
            function(error) {
                console.error('Google sign-in error: ' + JSON.stringify(error));
            }
        );
    }

    function signInWithGoogle(id_token) {
        var loginKey = 'cognito-idp.' + _config.cognito.region + '.amazonaws.com/' + _config.cognito.userPoolId;
        var login = {};
        login[loginKey] = id_token;
        var credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: _config.cognito.identityPoolId,
            Logins: login
        });

        AWS.config.update({
            credentials: credentials
        });

        // Refresh AWS credentials to authenticate with AWS services
        credentials.refresh(function(err) {
            if (err) {
                console.error('AWS credentials refresh error: ' + err);
            } else {
                console.log('Successfully signed in with Google');
                window.location.href = '/'; // Redirect to desired page after successful sign-in -Edit: Changed to homepage
            }
        });
    }

    /*
     * Cognito User Pool functions
     */

    function register(email, password, onSuccess, onFailure) {
        var dataEmail = {
            Name: 'email',
            Value: email
        };
        var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

        userPool.signUp(email, password, [attributeEmail], null,
            function signUpCallback(err, result) {
                if (!err) {
                    onSuccess(result);
                } else {
                    onFailure(err);
                }
            }
        );
    }

    function signin(email, password, onSuccess, onFailure) {
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
            Username: email,
            Password: password
        });

        var cognitoUser = createCognitoUser(email);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: onSuccess,
            onFailure: onFailure
        });
    }

    function verify(email, code, onSuccess, onFailure) {
        createCognitoUser(email).confirmRegistration(code, true, function confirmCallback(err, result) {
            if (!err) {
                onSuccess(result);
            } else {
                onFailure(err);
            }
        });
    }

    function createCognitoUser(email) {
        return new AmazonCognitoIdentity.CognitoUser({
            Username: email,
            Pool: userPool
        });
    }

    /*
     *  Event Handlers
     */

    $(function onDocReady() {
        $('#signinForm').submit(handleSignin);
        $('#registrationForm').submit(handleRegister);
        $('#verifyForm').submit(handleVerify);
        $('#googleSignInBtn').click(googleSignIn); // Add click event handler for Google sign-in button
    });

    function handleSignin(event) {
        var email = $('#emailInputSignin').val();
        var password = $('#passwordInputSignin').val();
        event.preventDefault();
        signin(email, password,
            function signinSuccess() {
                console.log('Successfully Logged In');
                window.location.href = '/teams'; // change this to the teams page - Edit: Changed to teams page
            },
            function signinError(err) {
                alert(err);
            }
        );
    }

    function handleRegister(event) {
        var email = $('#emailInputRegister').val();
        var password = $('#passwordInputRegister').val();
        var password2 = $('#password2InputRegister').val();

        var onSuccess = function registerSuccess(result) {
            var cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
            var confirmation = ('Registration successful. Please check your email inbox or spam folder for your verification code.');
            if (confirmation) {
                window.location.href = '/signin'; //check the video from 25:44 you will see this page in a few secs --> modify API to what we need
            }
        };
        var onFailure = function registerFailure(err) {
            alert(err);
        };
        event.preventDefault();

        if (password === password2) {
            register(email, password, onSuccess, onFailure);
        } else {
            alert('Passwords do not match');
        }
    }

    function handleVerify(event) {
        var email = $('#emailInputVerify').val();
        var code = $('#codeInputVerify').val();
        event.preventDefault();
        verify(email, code,
            function verifySuccess(result) {
                console.log('call result: ' + result);
                console.log('Successfully verified');
                alert('Verification successful. You will now be redirected to the login page.');
                window.location.href = signinUrl;
            },
            function verifyError(err) {
                alert(err);
            }
        );
    }
}(jQuery));
