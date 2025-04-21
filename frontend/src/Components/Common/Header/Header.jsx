import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <Link to="/">logo</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div className="signin">
        <Link to="/login">SignIn</Link>
      </div>
    </div>
  )
}

export default Header
