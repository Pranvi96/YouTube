import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <li><Link to="/" className='remove-anchor'>Home</Link></li>
            <li>Shorts</li>
            <li>Subscriptions</li>
        </ul>
        <ul>
        <li>Library</li>
            <li>History</li>
            <li>Your Videos</li>
        </ul>
    </div>
  )
}

export default SideBar