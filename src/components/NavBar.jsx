import React from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {

  return (
    <nav>
      <h1>Travel Hub</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/create'> Create Post</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;