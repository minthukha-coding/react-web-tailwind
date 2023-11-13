import React from 'react'

export const Newletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] grid lg:grid-cols-3 mx-auto'>
            <div className='lg:col-span-2 sm:col-span-3 py-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Singn up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4 '>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 rounded-md text-black w-full  ' type="email" placeholder='Enter Email' />
                    <button className='bg-[#56cb56] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
                </div>
                    <p>We care bout the protection of your data. Read our <span className='text-[#56cb56]'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}