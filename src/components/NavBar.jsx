import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css"
import Logo from "../assets/logo3.png" 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = ({userID,search, setSearch}) => {


  return (
    <nav>
       <Link to="/">
          <div className='logo'> 
              <img src={Logo} alt="The Explorer's Hub Logo" width="300" height="200"/>
              <p>The Explorer's Hub</p>
          </div>
      </Link>
      <div className="side-links">
          <input
            className='search-bar'
            type="text"
            placeholder="Search destinations"
            onChange={(e) => setSearch(e.target.value)}
          />
        <div className="buttons">
          <Link to='/create'>Create Post</Link>        
        </div>
        <div className='user-profile'>
          <AccountCircleIcon/>{userID}
        </div>
      </div>     
    </nav>
  )
}

export default NavBar;