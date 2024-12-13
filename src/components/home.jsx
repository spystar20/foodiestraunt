import React, { useState,useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const foodImg=[{
  id:1,
  img:"https://foodies-zone.netlify.app/assets/biryani2-0YgeW9Uq.png",
},{
  id:2,
  img:"https://foodies-zone.netlify.app/assets/biryani3-2P17nmNK.png",
},
{
id:3,
img:"https://foodies-zone.netlify.app/assets/biryani5-Dqmynf2n.png" ,
}]
const Home = () => {
 
const [imgId,setImgId]=useState("https://foodies-zone.netlify.app/assets/biryani2-0YgeW9Uq.png")
 const imgHandle=(imgSrc)=>{
  setImgId(imgSrc)
 }
 useEffect(()=>{
  Aos.init({duration:2000})
  },[])

  return (
    <div  className='w-full min-h-[666px]   md:min-h-[600px] px-3 py-14 md:px-10 bg-gray-100 dark:bg-black flex'  style={{backgroundImage:"url('https://raw.githubusercontent.com/dilshad-ahmed/foodies-restaurant/048c76f898079055901233129da8eecf69e3802b/src/assets/vector3.png')", backgroundPosition:'center',backgroundSize:'cover'}}>
<div className='flex flex-col gap-6 md:flex-row-reverse'>
<div className='flex flex-col justify-center items-center pt-12 gap-2 lg:flex-row'>
  <div data-aos="fade-in" ><img className='max-w-[260px] lg:max-w-[450px] md:max-w-[367px] main-img ' src={imgId} alt="" /></div>

<div  className='flex flex-row rounded-full bg-white/30 w-72 h-20 lg:flex-col lg:h-60 md:justify-center lg:w-20 cursor-pointer '>
{foodImg.map((item)=>{
  return (
<div><img data-aos="zoom-in"  onClick={()=>imgHandle(item.img)} src={item.img} key={item.id}  alt={item.img} /></div>)
{/* <div><img  src="https://foodies-zone.netlify.app/assets/biryani3-2P17nmNK.png" alt="" /></div>
<div><img  src="https://foodies-zone.netlify.app/assets/biryani5-Dqmynf2n.png" alt="" /></div> */}

})}
</div>
</div>
<div data-aos='zoom-out' className='flex text-black dark:text-white justify-center items-center flex-col text-center gap-6 md:text-left md:px-3 md:items-start md:pt-20'>
  <h2 className='text-5xl md:text-7xl font-bold'>Welcome to the <span className='bg-clip-text text-transparent bg-gradient-to-r  from-yellow-500 to-orange-400'>Foodie</span> Zone </h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint ex quod quos neque reprehenderit nihil suscipit iure vero deserunt.</p>
  <button className='capitalize flex items-center text-xl gap-3  bg-gradient-to-r from-yellow-500 to-orange-400 px-4 py-1 text-white rounded-full hover:scale-100 transition-all scale-95'>
        order now

          </button>
</div>
</div>

    </div>
  )
}

export default Home
