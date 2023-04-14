import React from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {

  return (
    <nav>
      <h1>Travel Hub</h1>
      
      <div className="side-links">
        <Link to="/">Home</Link>
        <div className="buttons">
          <Link to='/create'>Create Post</Link>        
        </div>
      </div>     
    </nav>
  )
}

export default NavBar;