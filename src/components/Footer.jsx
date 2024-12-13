import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='w-auto dark:bg-slate-950 dark:text-white bg-gray-100'>
    <div className='grid grid-cols-1 w-auto pt-14 px-6 md:grid-cols-2 '>
       
<div className='flex flex-col gap-5 pb-10 '>
<div className='flex text-xl font-bold items-center gap-3 '>
    <img className='w-12' src="https://foodies-zone.netlify.app/assets/food-logo-4PF6fRLL.png" alt="" />
    <h2>FOODIE</h2>
</div>
<p className='md:pr-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.
</p>
<div className='flex items-center gap-3'>
   <FaLocationArrow className='text-lg'/>
Noida, Uttar Pradesh
</div>
<div className='flex items-center gap-3'>
<MdOutlinePhoneIphone className='text-xl' />
+91 123456789
</div>
<div className='flex text-3xl items-center gap-3 '>
<FaInstagram />
<FaFacebook />
<FaLinkedin/>
</div>
</div>
<div className='grid grid-cols-2 gap-6 pb-14 md:grid-cols-3'>
<ul className='flex flex-col gap-4 capitalize'>
    <li className='text-xl font-bold'>Important Links</li>
        <a href=""><li>home</li></a>
        <a href=""><li>about</li></a>
        <a href=""><li>services</li></a>
        <a href=""><li>login</li></a>
    </ul>
    <ul className='flex flex-col gap-4 capitalize'>
    <li className='text-xl font-bold'>Important Links</li>
        <a href=""><li>home</li></a>
        <a href=""><li>about</li></a>
        <a href=""><li>services</li></a>
        <a href=""><li>login</li></a>
    </ul>
    <ul className='flex flex-col gap-4 capitalize'>
    <li className='text-xl font-bold'>Important Links</li>
        <a href=""><li>home</li></a>
        <a href=""><li>about</li></a>
        <a href=""><li>services</li></a>
        <a href=""><li>login</li></a>
    </ul>
</div>
</div>

    <div className='w-full h-0.5 bg-slate-200'></div>
    <div className='text-center py-10 px-2'>@copyright 2024 All rights reserved || Made with ❤️ by SANTOSHI</div>


    </div>
  )
}

export default Footer