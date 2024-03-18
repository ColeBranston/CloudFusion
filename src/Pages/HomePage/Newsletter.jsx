import React from 'react'

const Newsletter = () => {
    return (
        <div className ='w-full py-16 text-white bg-[#000300] px-4 z-0'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-2xl text-2x font-bond py-2'> Want tips & tricks to optimize your flow? </h1>
                    <p> Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'> 
                        <input className='p-3 flex w-full rounded-md text-black bg-gray-100' type='email' placeholder='Enter Email'/> 
                        <button className='bg-[#bfb749] text-black rounded-md font-medium w-[200px]  ml-4 my-6 px-6 py-3'> Notify Me</button>  
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-[#bfb749]'> Privacy Policy. </span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter