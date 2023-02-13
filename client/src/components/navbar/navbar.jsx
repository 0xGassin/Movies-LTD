import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-left'>
            <input type="search" placeholder='search any movies...'/>
        </div>
        <div className='navbar-right'>
            <button>A</button>
            <button>A</button>
            <button>A</button>
        </div>
    </div>
  )
}

export default navbar