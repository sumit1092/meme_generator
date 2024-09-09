import React from 'react'
import img from '../Images/trollface.png'

const Header = () => {
  return (
    <header className='header'>
      <img className='header--image' src={img} alt="img" />
      <h2 className='title'>Meme Generator</h2>
    </header>
  )
}

export default Header
