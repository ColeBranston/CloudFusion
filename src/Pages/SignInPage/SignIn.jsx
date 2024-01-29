import Login from "./Login";
const SignIn = ({returnHome}) =>{
    
    return(
        <div className="text-white h-{100vh} flex justify-center items-center bg-cover" style={{background: "url('../../Assets/bgImage.webp')"}}>
        <Login />
        </div>
    );
}
export default SignIn;