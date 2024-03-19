import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import bg from "../../Assets/image.jpg";
import placeholderImage from "../../Assets/image.jpg"; // Import a placeholder image
import { FcGoogle } from "react-icons/fc";
import { HiArrowSmallLeft } from "react-icons/hi2";
import Register from "./Register";
import Navbar from '../HomePage/Navbar.jsx';

const SignIn = () => {
    const [page, setPage] = useState("");
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = bg;
        image.onload = () => {
            setImageLoaded(true);
        };
        // Preload the image
    }, []);

    return (
        <>
            <Navbar/>
            {page === "" ?
                <div className='w-full h-screen flex items-start bg-white'>
                    <div className='relative w-1/2 h-full flex flex-col'>
                        <div className='absolute top-[20%] left-[10%] flex-col'>
                            <h1 className='text-2xl text-white font-bold my-4'>Turn Your Ideas into reality</h1>
                            <p className='text-xl text-white font-normal'>Start for free, hire your future</p>
                        </div>
                        {imageLoaded ? (
                            <LazyLoadImage
                                src={bg}
                                effect="fadeIn" // Use fadeIn effect for a smoother appearance
                                className='w-full h-full object-cover'
                            />
                        ) : (
                            <img src={placeholderImage} alt="Placeholder" className='w-full h-full object-cover' />
                        )}
                    </div>
                    <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>

                        <h1 className='w-full max-w-[500px] mx-auto text-xl text-[#bfb749] font-semibold'>CloudFusion.</h1>

                        <div className='w-full flex flex-col max-w-[500px]'>
                            <div className='w-full flex flex-col mb-2'>
                                <h3 className='text-3xl font-semibold mb-2'>Login</h3>
                                <p className='text-base mb-2'>Welcome Back! Please enter your details.</p>
                            </div>
                            <div className='w-full flex flex-col'>
                                <input required type='email' placeholder='Email' className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
                                <input required type='password' placeholder='Password' className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div className='w-full flex items-center'>
                                    <input type='checkbox' className='w-4 h-4 mr-2' />
                                    <p className='text-sm'>Remember Me</p>
                                </div>
                                <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password</p>
                            </div>
                            <div className='w-full flex flex-col my-4'>
                                <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>Log In</button>
                                <button onClick={() => setPage("Register")} className='w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>Register</button>
                            </div>
                            <div className='w-full flex items-center justify-center relative py-2'>
                                <div className='w-full h-[1px] bg-black/40'></div>
                                <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>
                            </div>
                            <div>
                                <div className='w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                                    <FcGoogle className='size-20 h-6 pl-3' />
                                    <p className='pr-7'>Sign In With Google</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-center'>
                            <p className='text-sm font-normal text-[#060606]'>Don't have an account? <span onClick={() => setPage("Register")} className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free!</span></p>
                        </div>
                    </div>
                </div>
                :
                <Register />
            }
        </>
    );
}
export default SignIn;
