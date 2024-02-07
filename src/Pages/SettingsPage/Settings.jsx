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
                    <button className='m-6' onClick={() => setPage("Billing")}>Billing</button>
                    <button className='m-6' onClick={() => setPage("Information")}>Information</button>
                </div>
            </div>
            <div className='w-[80%] h-screen' >
                {page == "Account"? 
                // Section for accounting page
                <div className='w-full h-full flex bg-gray-200'>
                    <div className='bg-white flex flex-col rounded-2xl px-[30%] py-[23%] my-auto mx-auto'>
                        <p className='text-3xl py-5 font-semibold text-left'>Account</p>
                        <div className=''>
                            <ul className='flex flex-col my-4'>
                                <li className='my-1 flex justify-between'>Username: <span className='md:text-right mx-20'>Cole Branston</span></li>
                                <li className='my-1 flex justify-between'>Password: <span className='md:text-right mx-20'>myPass123</span></li>
                                <li className='my-1 flex justify-between'></li>
                            </ul>
                        </div>
                    </div>
                </div>
                : page=='Billing'?  
                // Section for information page
                <div className='w-full h-full flex bg-gray-200'>
                    <div className='bg-white flex flex-col rounded-2xl px-[30%] py-[23%] my-auto mx-auto'>
                        <p className='text-3xl py-5 font-semibold text-left'>Billing</p>
                        <div className=''>
                            <ul className='flex flex-col my-4'>
                            <li className='my-1 flex justify-between'>First Name<span className='md:text-right mx-20'>Cole</span></li>
                            <li className='my-1 flex justify-between'>Last Name: <span className='md:text-right mx-20'>Branston</span></li>
                                <li className='my-1 flex justify-between'>Card Number: <span className='md:text-right mx-20'>***********</span></li>
                                <li className='my-1 flex justify-between'>Exp. Date: <span className='md:text-right mx-20'>01/07/2025</span></li>
                                <li className='my-1 flex justify-between'>CVV: <span className='md:text-right mx-20'>819</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                : page=='Information'?
                <div className='w-full h-full flex bg-gray-200'>
                    <div className='bg-white flex flex-col rounded-2xl px-[30%] py-[23%] my-auto mx-auto'>
                        <p className='text-3xl py-5 font-semibold text-left'>Information</p>
                        <div className=''>
                            <ul className='flex flex-col my-4'>
                                <li className='my-1 flex justify-between'>First Name: <span className='md:text-right mx-20'>Cole</span></li>
                                <li className='my-1 flex justify-between'>Last Name: <span className='md:text-right mx-20'>Branston</span></li>
                                <li className='my-1 flex justify-between'>Date of Birth: <span className='md:text-right mx-20'>07/14/2005</span></li>
                                <li className='my-1 flex justify-between'>Account Status: <span className='md:text-right mx-20'>Active</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                :null
                }
            </div>
        </div>
        </>
    );
}

export default Settings;