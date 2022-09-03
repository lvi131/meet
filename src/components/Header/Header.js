import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <div className='header'>
        <img src='https://www.kindpng.com/picc/m/459-4593856_video-conferencing-clipart-png-transparent-png.png' alt='logo' className='header__logo'/> 
        <button className='header__button'>Login with Google</button>
    </div>
  )
}

export default Header