import React from 'react';
import { ReactTyped } from "react-typed";

const Hero = ({links2}) => {
    return(
        <div className='text-[#000300]'>
            <div className ='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#bfb749] font-bold p-2'> GROW WITH SCALABLE SOLUTIONS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md: py-6'> Become a Creator. </h1> 

                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'> Find programmers for</p>
                    <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['UI/UX','Backend','Cloud']} typeSpeed={120} backSpeed={140} loop/>
                </div>
                    <p className='md:text-2xl text-xl font-bold text-gray-500'> Grow your business with results-orientated intelligent programmers.</p>
                    <button onClick={links2} className='bg-[#bfb749] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Get Started </button>
            </div>
        </div>
    )
}

export default Hero