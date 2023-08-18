import React, { Component } from 'react'
import Typed from 'react-typed';

const Hero = () =>{
    return(
        <div className='text-white'>
            <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#56cb56] font-bold p-2'>GROWIN WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>

                <div className='flex justify-center items-center py-4'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexigle finacing for</p>
                    <Typed
                    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        strings={['BTC','BTB','SASS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='md:2xl text-xl font-bold text-gray-500 '>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platform.</p>
                <button className='bg-[#56cb56] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero