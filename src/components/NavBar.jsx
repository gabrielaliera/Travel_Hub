import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className="NavBar">
      <h1>Travel Hub</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/create'> Create Post</Link></li>
      </ul>
    </div>
  )
}

export default NavBar;