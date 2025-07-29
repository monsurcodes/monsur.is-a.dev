import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-slate-950'>
      <Navbar />
      <Home />
      <Footer />

    </div>
  )
}

export default page
