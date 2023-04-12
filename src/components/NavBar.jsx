import React from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {

  return (
    <nav>
      <h1>Travel Hub</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to='/create'> Create Post</Link>
      </div>
    </nav>
  )
}

export default NavBar;