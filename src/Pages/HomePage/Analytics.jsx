import React from 'react'
import Laptop from '../../Assets/laptop.png'
import { Link } from 'react-router-dom';
const Analytics = ({links1}) => {
    return(
        <div className='w-full bg-gray-100 py-16 px-4'>
            <div className = 'max-w-[1240px] mx-auto grid md:grid-cols-2'>

                <img className='w-[500px] mx-auto my-4 bg-transparent'src={Laptop} alt='/'/>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#bfb749] font-bold'> SEARCH FOR YOUR SOLUTION </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Find Solutions That Work </h1>

                    <p>
                        Conntect with our experienced tech professionals who drive the results you want. 
                        From innovative approaches to proven methodologies, we have the expertise to 
                        address your challenges and exceed your expectations.
                        Take the first step towards success.
                    </p>
                    <Link to='/teams' className='flex bg-black text-[#bfb749] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 justify-center'>Get Started</Link>
                        
                   
                </div>

            </div>
        </div>
    )   
}

export default Analytics
