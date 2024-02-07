import React from 'react'
import { HiArrowSmallLeft } from "react-icons/hi2";

const Settings = ({returnHome}) =>{
    return(
        <>
        <div className="w-[20%] h-screen bg-gray-100">
            <div onClick={returnHome} className='w-full max-w-[500px] p-10 text-xl text-[#060606] font-semibold'>
                <button className="flex rounded-md"><HiArrowSmallLeft className="w-[1.75vw] h-[100%] size-[10]"/><span className="ml-[5%]">Back</span></button>
            </div>
            <div className='flex flex-col my-auto'>
                <button className='m-6'>Account</button>
                <button className='m-6'>Information</button>
                <button className='m-6'>Billing</button>
                <button className='m-6'>Appearance</button>
            </div>
        </div>
        <div className='w-[60%] h-screen bg-black'>
            <p>Hello</p>
        </div>
        </>
    );
}

export default Settings;