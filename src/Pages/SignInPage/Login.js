const Login = () => {
    return(
        <div>
            <div>
            <h1>Login</h1>
                <form>
                <div>
                    <input type="email" />
                    <label htmlFor="" >Your Email</label>
                </div>
                <div>
                    <input type="email" />
                    <label htmlFor="" >Your Email</label>
                </div>
                <div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="" >Remember Me</label>
                    </div>
                    <span>Forgot Password?</span>
                </div>
                <button type="submit">Login</button>
                <div>
                    <span>New Her? <link to='Register'>Create an Account</link></span>
                </div>
                </form>
            </div>
        </div>
    );
}
export default Login;