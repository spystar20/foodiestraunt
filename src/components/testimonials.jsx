import React from 'react'
import Slider from "react-slick";

const cards = [{
  id: '1',
  name: 'John Doe',
  img: 'https://picsum.photos/102/102'
},
{
  id: '2',
  name: 'smith',
  img: 'https://picsum.photos/103/103'
},
{
  id: '3',
  name: 'sameul',
  img: 'https://picsum.photos/101/101'
}
]
const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed:500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
 
  return (
    <div className='h-full grid grid-cols-1 px-5 pb-10 dark:bg-slate-900 '  >
      <div data-aos='fade-up' data-aos-duration='300' className='flex flex-col text-center pb-20  items-center md:justify-center md:px-24 lg:px-44 lg:pb-11'>
        <h2 className=' text-sm bg-clip-text text-transparent bg-gradient-to-r  from-amber-300 to-orange-400'>Testimonials</h2>
        <h1 className='text-3xl font-bold dark:text-white text-black'>Testimonial
        </h1>
        <p className='text-gray-500 text-base text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?</p>
      </div >
   <div className='md:px-20 lg:px-72'>
      <Slider {...settings} css={{}}>
        {cards.map((card)=>{
        return (
 <div className='my-6'>
        <div key={card.id} data-aos='zoom-in' data-aos-duration='200' className='bg-amber-50 dark:bg-slate-800  mx-4  px-3  py-3 shadow-lg  m-auto rounded-xl flex justify-center items-center gap-4 flex-col text-center ' >
          <img className='block rounded-full' src={card.img} alt="" />

          <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
          <h2 className='text-black text-xl font-bold capitalize dark:text-white'>{card.name}</h2>
        </div>
      </div>
        )})}
      </Slider>
      </div>
    </div>
  )
}

export default Testimonials