import { Component, useState } from 'react'
import { AiOutlineMenu,AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const  [nav, setNav] = useState(false);

  const handleNav = () =>{
    setNav(!nav);
  };
    return (
      <div className='flex items-center h-24 justify-between text-white mx-w-[1024px] mx-auto px-4'>
          <h1 className='font-bold text-3xl w-full text-[#56cb56]'>React</h1>
          <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
          </ul>

          <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiFillCloseCircle size={20}/> : <AiOutlineMenu size={20}/>}
          </div>
          <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <ul className='uppercase p-4 pt-24'>
              <li className='p-4 border-b border-gray-600'>Home</li>
              <li className='p-4 border-b border-gray-600'>Company</li>
              <li className='p-4 border-b border-gray-600'>Resources</li>
              <li className='p-4 border-b border-gray-600'>About</li>
              <li className='p-4'>Contact</li>
            </ul>
          </div>
      </div>
    )
}

export default Navbar