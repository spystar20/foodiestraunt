import React from 'react'

const Service = () => {
    return (
        <div className='grid grid-flow-row gap-2 px-9 py-10 lg:px-24 bg-white dark:bg-slate-900'>
            <div className='flex flex-col text-center items-center md:justify-center md:px-24 lg:px-80'>
                <h2 className=' text-sm bg-clip-text text-transparent bg-gradient-to-r  from-amber-300 to-orange-400'>Our Services</h2>
                <h1 className='text-3xl font-bold text-black dark:text-white'>Services
                </h1>
                <p className='text-gray-500 text-xs dark:text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?</p>
            </div >
            <div className='flex-col flex text-center  md:flex-row md:gap-3 lg:gap-16'>
                <div data-aos="zoom-in" data-aos-duration="300" className='flex flex-col justify-center items-center group cursor-pointer  '>
                    < div className='max-h-[100px]'>  <img className='max-w-[220px] relative top-1/4 gap-1 rotate-0 scale-95 group-hover:rotate-12 group-hover:scale-100  transition-all' src="https://foodies-zone.netlify.app/assets/biryani2-0YgeW9Uq.png" alt="" /></div>
                    <div className='min-h-[100px] pt-28 shadow-lg bg-white dark:bg-slate-700 rounded-2xl text-black pb-4 group-hover:bg-gradient-to-r from-yellow-400 to-orange-300 group-hover:text-white'>
                        <h2 className='text-xl font-bold dark:text-white'>
                            Biryani</h2>
                        <p className='text-gray-500 text-sm group-hover:text-white'>Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit</p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="300"  className='flex flex-col justify-center items-center group cursor-pointer'>
                    <div className='max-h-[100px]'>  <img className='max-w-[220px] relative top-1/4 gap-1 rotate-0 scale-95 group-hover:rotate-12 group-hover:scale-100  transition-all' src="https://foodies-zone.netlify.app/assets/biryani2-0YgeW9Uq.png" alt="" /></div>
                    <div className='min-h-[100px] pt-28 shadow-lg rounded-2xl text-black pb-4 group-hover:bg-gradient-to-r from-yellow-400 to-orange-300 group-hover:text-white  bg-white dark:bg-slate-700' > <h2 className='dark:text-white text-xl font-bold'>Biryani</h2>
                        <p className='text-gray-500 text-sm group-hover:text-white'>Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit</p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="300"  className='flex flex-col justify-center items-center group cursor-pointer'>
                    <div className='max-h-[100px]' > <img className='max-w-[220px] relative top-1/4 gap-1 rotate-0 scale-95 group-hover:rotate-12 group-hover:scale-100  transition-all' src="https://foodies-zone.netlify.app/assets/biryani2-0YgeW9Uq.png" alt="" /></div>
                    <div className='min-h-[100px] pt-28 shadow-lg rounded-2xl text-black pb-4 group-hover:bg-gradient-to-r from-yellow-400 to-orange-300 group-hover:text-white  bg-white dark:bg-slate-700'>    <h2 className='text-xl font-bold dark:text-white' >Biryani</h2>
                        <p className='text-gray-500 text-sm group-hover:text-white'>Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
