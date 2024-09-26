import React from 'react'
import { TbGridDots } from "react-icons/tb";

const Header = () => {
  
  return (
    <div className="fixed z-[99] w-full">
    <div className='px-[64px] py-[42px] flex justify-between '>
      <div className="flex items-center ">
        <TbGridDots />
        <span>
          Company
        </span> 
      </div>
      <div className='pl-[64px] flex w-6/12 justify-between '>
        <div className='flex gap-[32px]'>
          <div className='hover:underline'>Projects</div>
          <div className='hover:underline'>About us</div>
        </div>
        <div className='hover:underline'>Contact</div>
      </div>
    </div>
      </div>
  )
}

export default Header