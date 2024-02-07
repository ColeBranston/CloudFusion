import { React, useState } from 'react'
import { HiArrowSmallLeft } from "react-icons/hi2";

const Settings = ({returnHome}) =>{
    var [page, setPage] = useState('Account');
    return(
        <>
        <div className='flex'>
            <div className="w-[20%] h-screen bg-gray-100">
                <div onClick={returnHome} className='w-full max-w-[500px] p-10 text-xl text-[#060606] font-semibold'>
                    <button className="flex rounded-md"><HiArrowSmallLeft className="w-[1.75vw] h-[100%] size-[10]"/><span className="ml-[5%]">Back</span></button>
                </div>
                <div className='flex flex-col my-auto'>
                    <button className='m-6' onClick={() => setPage("Account")}>Account</button>
                    <button className='m-6' onClick={() => setPage("Information")}>Information</button>
                    <button className='m-6' onClick={() => setPage("Billing")}>Billing</button>
     
                </div>
            </div>
            <div className='w-[80%] h-screen' >
                {page == "Account"? 
                // Section for accounting page
                <div className='w-[100%] h-full'>
                    <p>Accounting</p>
                </div >
                : page=='Information'?  
                // Section for information page
                <div className='w-[100%] h-full'>
                    <p>Information</p>
                </div > 
                : 
                // Section for the billing page
                <div className='w-[100%] h-full'>
                    <p>Billing</p>
                </div> 
                }
            </div>
        </div>
        </>
    );
}

export default Settings;