import React from 'react'

const Playstore = () => {
  return (
    <div className='py-9 dark:bg-slate-900 '>
        <div className='grid grid-cols-1 max-h-[500px] bg-slate-100 dark:bg-slate-800  gap-5 px-3 py-11 md:grid-cols-2 md:px-6'>
            <div data-aos='fade-up' data-aos-duration='300' className='pt-6 ' >
                <h2 className='text-2xl font-semibold text-center text-gray-700 md:text-4xl dark:text-gray-500'>Foodly is Available for Android and IOS</h2>
                <div className='flex gap-1 justify-center items-center pt-6 '>
                    <div><img className='max-w-[150px] md:max-w-[200px]' src="https://foodies-zone.netlify.app/assets/play_store-25MAnoNl.png" alt="" /></div>
                    <div><img className='max-w-[150px] md:max-w-[200px]' src="https://foodies-zone.netlify.app/assets/app_store-aoAyJ2T_.png" alt="" /></div>
                </div>
            </div>
            <div data-aos='zoom-in' data-aos-duration='200' className='max-w-[300px] m-auto'><img src="https://foodies-zone.netlify.app/assets/mobile_bike-mOS0gbAl.gif" alt="" /></div>
        </div>
    </div>
  )
}

export default Playstore