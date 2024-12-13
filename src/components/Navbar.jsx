import React, { useState } from 'react'
import { TbShoppingCartFilled } from "react-icons/tb";
const Navbar = () => {
  const [IsDarkMode,setDarkMode]=useState(localStorage.theme==='dark')
  const toggleTheme=()=>{
   let htmlClass=document.querySelector("html").classList
    if(localStorage.theme==='dark'){
      htmlClass.remove('dark')
      localStorage.removeItem('theme')
      setDarkMode(false)
    }else{
      htmlClass.add('dark')
      localStorage.setItem('theme','dark')
setDarkMode(true)
    }
  }
  return (
    <div className='bg-white dark:bg-slate-900 shadow-lg w-full py-4  px-2  absolute top-0 md:px-14 md:py-3'>
      <div className=' flex justify-between items-center '>
        <div className='text-3xl flex font-bold capitalize gap-2 text-black dark:text-white'>
          <img className='w-10 ' src='https://foodies-zone.netlify.app/assets/food-logo-4PF6fRLL.png' alt="" />
          foodie
        </div>
        <div className='flex gap-7 items-center '>
          <div onClick={toggleTheme}>{IsDarkMode ? <img  className='w-11' src="https://raw.githubusercontent.com/dilshad-ahmed/foodies-restaurant/048c76f898079055901233129da8eecf69e3802b/src/assets/website/light-mode-button.png" alt="" />:<img  className='w-11' src="https://foodies-zone.netlify.app/assets/dark-mode-button-85jBkhOs.png" alt="" />}</div>
          <ul className='hidden  md:flex gap-11 text-lg capitalize text-black cursor-pointer '>
            <a href="#home"> <li className=' text-black dark:text-white hover:dark:text-yellow-400 hover:text-yellow-400'>home</li> </a>
            <a href="#about">  <li className='text-black dark:text-white hover:dark:text-yellow-400 hover:text-yellow-400'>about</li></a>
            <a href="#contact"><li className='text-black dark:text-white hover:dark:text-yellow-400 hover:text-yellow-400' >contact</li></a>
          </ul>
          <button className='capitalize flex items-center text-xl gap-3  bg-gradient-to-r from-yellow-500 to-orange-400 px-4 py-1 text-white rounded-full hover:scale-100 transition-all scale-95'>
            order
            <TbShoppingCartFilled />

          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar