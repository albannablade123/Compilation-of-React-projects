import React from 'react'
import '../App.css'
import logoImage from '../images/logo-world.png'

const Navbar = () => {
  return (
    <nav className='navbar-container'>
        <div className='logo-group'>
        <img src={logoImage} className='logo-image'/>
        <h1 className='web-title'>my travel journal.</h1>
        </div>
        
    </nav>
  )
}

export default Navbar