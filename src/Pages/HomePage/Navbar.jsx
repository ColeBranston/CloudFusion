import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import Logo from '../../Assets/Logo.png'

const Navbar = () => {

    const [nav,setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    };
    return (
        <div className='bg-white shadow-xl z-10'>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#000300]'>
                <Link to='/' className = 'w-1/3 text-3xl font-bold text-[#bfb749]'><img src={Logo}/></Link>

                <div className = 'flex h-full text-right justify-center'>
                    <Link to='/teams' className = 'hidden md:block lg:block mr-5 ml-5 my-auto hover:animate-pulse'> Team </Link>
                    <Link to='/signin' className = 'hidden md:block lg:block mr-5 ml-5 my-auto hover:animate-pulse'> Signup/Login </Link>
                    <Link to='/settings' className = 'hidden md:block lg:block mr-5 ml-5 my-auto hover:animate-pulse'> Settings </Link>   
                </div>

                {/* Hamburger icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>
        </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10' : ' top-0 w-[50%] h-full ease-in-out duration-500 fixed left-[-100%] z-10'}>
                <ul className='pt-24 uppercase p-4 border-b border-gray-600'>
                <h1 className = 'w-full sm:text-xl md:text-3xl font-bold text-[#bfb749] m-4'>CloudFusion.</h1>
                    <Link to='/' className='flex p-4 border-b border-gray-600 text-white cursor-pointer'>Home</Link>
                    <Link to='/teams' className ='flex p-4 border-b border-gray-600 text-white cursor-pointer'> Team </Link>
                    <Link to='/signin' className ='flex p-4 border-b border-gray-600 text-white cursor-pointer'> Signup/Login </Link>
                    <Link to='/settings' className ='flex p-4 text-white cursor-pointer'> Settings </Link>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;