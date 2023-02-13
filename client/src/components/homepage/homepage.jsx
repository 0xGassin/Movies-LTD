import React from 'react'
import './homepage.css'
import Sidebar from '../sidebar/sidebar'
import Navbar from '../navbar/navbar'

const homepage = () => {
  return (
    <div className='homepage-container'>
        <Sidebar />
        <div className='homepage-content'>
          <Navbar />
            Content
        </div>
    </div>
  )
}

export default homepage