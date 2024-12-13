import React from 'react'
import { GiPadlock } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { div } from 'motion/react-m';
const About = () => {
    return (
      
        <div  className=' bg-white dark:bg-slate-900 md:pt-7' >
              <div data-aos='slide-up' data-aos-duration='200' className='grid grid-cols-1 px-4 gap-6 py-10 md:grid-cols-2 md:items-center md:px-8 md:py-20 lg:pt-8'>
            <div className='max-w-[340px] md:max-w-[420px] md:m-auto'><img src="https://foodies-zone.netlify.app/assets/biryani5-Dqmynf2n.png" alt="" /></div>
            <div className='text-sm text-gray-500 container flex flex-col gap-6'>
                <h1 className='text-3xl font-bold text-black dark:text-white'>
                    Lorem ipsum dolor</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed, exercitationem minima aliquid eligendi distinctio? Fugit repudiandae numquam hic quo recusandae. Excepturi totam ad nam velit quasi quidem aspernatur.
                </p>
<div className='flex flex-row text-4xl text-black gap-6'>
<div className='w-20 h-20 bg-purple-100 dark:bg-purple-300 rounded-full flex items-center justify-center'><GiPadlock  /></div>
<div className='w-20 h-20 bg-orange-100 dark:bg-orange-300 rounded-full flex items-center justify-center'><IoFastFoodSharp /></div>
<div className='w-20 h-20 bg-green-100 dark:bg-green-300 rounded-full flex items-center justify-center'><GiFoodTruck/></div>
</div>
<div><button className='capitalize flex items-center text-xl gap-3  bg-gradient-to-r from-yellow-500 to-orange-400 px-4 py-1 text-white rounded-full hover:scale-100 transition-all scale-95'>
        order now

          </button></div>
            </div>
        </div>
        </div>
    )
}

export default About