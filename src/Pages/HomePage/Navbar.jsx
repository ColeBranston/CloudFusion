import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = ({links1,links2,links3}) => {

    const [nav,setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    };
    return (
        <div className='bg-white shadow-lg'>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#000300]'>
                <h1 className = 'w-1/3 text-3xl font-bold text-[#bfb749]'>CloudFusion.</h1>

                <div className = 'flex h-full text-right justify-center'>
                    <button className = 'hidden md:block lg:block mr-5 ml-5 hover:animate-pulse' onClick={links1}> Team </button>
                    <button className = 'hidden md:block lg:block mr-5 ml-5 hover:animate-pulse' onClick={links2}> Signup/Login </button>
                    <button className = 'hidden md:block lg:block mr-5 ml-5 hover:animate-pulse' onClick={links3} > Settings </button>   
                </div>

                {/* Hamburger icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>
        </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : ' top-0 w-[50%] h-full ease-in-out duration-500 fixed left-[-100%]'}>
                <ul className='pt-24 uppercase p-4 border-b border-gray-600'>
                <h1 className = 'w-full text-3xl font-bold text-[#bfb749] m-4'>CloudFusion.</h1>
                    <li className ='p-4 border-b border-gray-600 text-white cursor-pointer' onClick={links1}> Team </li>
                    <li  className ='p-4 border-b border-gray-600 text-white cursor-pointer' onClick={links2}> Signup/Login </li>
                    <li className ='p-4 text-white cursor-pointer'> Settings </li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;