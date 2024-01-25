import React from 'react'
import Single from '../Assets/single.png'
import Double from '../Assets/double.png'
import Triple from '../Assets/triple.png'

const Cards = () => {
    return(
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div lcassName='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full'> 
                    <img src={Single} alt='/'/>
                </div>
            </div>
        </div>
    )
}

export default Cards