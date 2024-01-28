import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";


const Cards = () => {
    return(
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'> 
                    <FaCode className='size-20 mx-auto mt-[-3rem] bg-white'/>
                    <h2 className='text-2xl font-bold text-center py-8'> Front-End </h2>
                    <p className='text-center text-4xl font-bold'> $149 </p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8 mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>

                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'> 
                    <FaDatabase className='size-20 mx-auto mt-[-3rem] bg-white'/>
                    <h2 className='text-2xl font-bold text-center py-8'> Back-End </h2>
                    <p className='text-center text-4xl font-bold'> $149 </p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8 mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'> 
                    <HiMiniSquare3Stack3D className='size-20 mx-auto mt-[-3rem] bg-white'/>
                    <h2 className='text-2xl font-bold text-center py-8'> Full-Stack </h2>
                    <p className='text-center text-4xl font-bold'> $149 </p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8 mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards