import { React, useState } from 'react'
import { HiArrowSmallLeft } from "react-icons/hi2";
import Navbar from '../HomePage/Navbar.jsx';
const Settings = () =>{
    var [page, setPage] = useState('Account');
    return(
        <>
        <Navbar />
        <div className='flex'>
            <div className="w-[20%] h-screen bg-gray-100">
                <div className='flex flex-col my-auto'>
                    <button className='m-6' onClick={() => setPage("Account")}>Account</button>
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
                                <li className='my-1 flex justify-between'>Username: <span className='md:text-right mx-20'>-</span></li>
                                <li className='my-1 flex justify-between'>Password: <span className='md:text-right mx-20'>-</span></li>
                                <li className='my-1 flex justify-between'></li>
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
                                <li className='my-1 flex justify-between'>First Name: <span className='md:text-right mx-20'>-</span></li>
                                <li className='my-1 flex justify-between'>Last Name: <span className='md:text-right mx-20'>-</span></li>
                                <li className='my-1 flex justify-between'>Date of Birth: <span className='md:text-right mx-20'>-</span></li>
                                <li className='my-1 flex justify-between'>Account Status: <span className='md:text-right mx-20'>-</span></li>
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