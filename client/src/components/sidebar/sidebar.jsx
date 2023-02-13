import React from 'react'
import './sidebar.css'

const sidebar = () => {
  return (
    <div className='sidebar-container'>
        <h1 className='sidebar-header'>LTD.<span>MOVIES</span></h1>
        <div className='sidebar-feed'>
            <p>New feed</p>
            <a>Browse</a>
            <a>Watchlist</a>
            <a>Remind</a>
        </div>
    </div>
  )
}

export default sidebar