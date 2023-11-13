import React, { Component } from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return(
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4'  src= {Laptop} alt="Laptop" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#56cb56] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4'>Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo corporis nesciunt enim. Vitae eum neque labore totam praesentium rem autem alias quidem corrupti perspiciatis nobis, hic maxime voluptatem quibusdam! Minus?
                    </p>
                    <button className='bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#56cb56] md:mx-0'>Get Started</button>
                </div>
            </div>
        </div>
    )
}   

export default Analytics        