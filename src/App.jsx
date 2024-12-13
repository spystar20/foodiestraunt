import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/home'
import Service from './components/service'
import About from './components/About'
import Playstore from './components/Playstore'
import Testimonials from './components/testimonials'
import Footer from './components/footer'

export const App = () => {
  return (
    <div className='w-auto m-0 bg-blue-300  dark:bg-slate-50'>
   <Navbar/>
      <Home/>
<Service/>
<About/>
<Playstore/>
<Testimonials/>
<Footer/>
    </div>
  )
}

export default App

