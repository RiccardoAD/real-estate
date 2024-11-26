import React from 'react'
import assets from '../assets/assets'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full 
    overflow-hidden' style={{ backgroundImage: `url(${assets.header})` }} id='Header'>
      <Navbar />
    </div>
  )
}

export default Header