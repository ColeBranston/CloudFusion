import React from 'react'
import Laptop from '../../Assets/laptop.png'
import { Link } from 'react-router-dom';
const Analytics = ({links1}) => {
    return(
        <div className='w-full bg-gray-100 py-16 px-4'>
            <div className = 'max-w-[1240px] mx-auto grid md:grid-cols-2'>

                <img className='w-[500px] mx-auto my-4 bg-transparent'src={Laptop} alt='/'/>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#bfb749] font-bold'> SEARCH FOR HIRING </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Find Solutions That Work </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsam facilis, 
                        fuga molestias consequuntur cupiditate maiores magnam assumenda quaerat maxime, 
                        repellendus totam veritatis, culpa modi velit nobis itaque unde possimus.
                    </p>
                    <Link to='/teams' className='flex bg-black text-[#bfb749] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 justify-center'>Get Started</Link>
                        
                   
                </div>

            </div>
        </div>
    )   
}

export default Analytics