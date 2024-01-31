import bg from "../../Assets/image.jpg";
import { FcGoogle } from "react-icons/fc";
import { HiArrowSmallLeft } from "react-icons/hi2";


const Register = ({goBack}) => {
    return(
        <div className='w-full h-screen flex items-start'> 
            <div className='relative w-1/2 h-full flex flex-col'>
                <div className='absolute top-[20%] left-[10%] flex-col'>
                    <h1 className='text-2xl text-white font-bold my-4'>Turn Your Ideas into reality</h1>
                    <p className='text-xl text-white font-normal'>Start for free and get attractive offers from the community</p>
                </div>
                <img src={bg} className='w-full h-full object-cover'/>
            </div>
            <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
                
                <h1 className='w-full max-w-[500px] mx-auto text-xl text-[#bfb749] font-semibold'>CloudFusion.</h1>
                <div onClick={() => goBack("")} className='w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mb-16'>
                    <button className="flex rounded-md"><HiArrowSmallLeft className="w-[1.75vw] h-[100%]"/><span className="ml-[5%]">Back</span></button>
                </div>

                <div className='w-full flex flex-col max-w-[500px]'>
                    <div className='w-full flex flex-col mb-2'>
                        <h3 className='text-3xl font-semibold mb-2'>Sign Up</h3>
                        <p className='text-base mb-2'>Enter your information/details</p>
                    </div>
                    <div className='w-full flex flex-col'>
                        <input required type='email' placeholder='Email' className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
                        <input required type='password' placeholder='Password' className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
                        <input required type='password' placeholder='Confirm Password*' className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
                    </div>
                    <div className='w-full flex flex-col mb-20 '>
                        <button className='w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>Register</button>
                    </div>
                    
                    
                </div>
                <div className='w-full flex items-center justify-center'>
                    <p className='text-sm font-normal text-[#060606]'>Already have an account? <span onClick={() => goBack("")} className='font-semibold underline underline-offset-2 cursor-pointer'>Log in here!</span></p>
                </div>
            </div>
        </div>
    )
};
export default Register