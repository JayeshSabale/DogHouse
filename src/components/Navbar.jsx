import React from 'react'
import logo from '/images/Dog.png'

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="navLogo" className="nav--logo" />
      <h2 className="nav--title">Dog House</h2>
      <h3 className="nav--projectNO">React Project by Chinmay Lokhande</h3>
    </nav>
  )
}

export default Navbar
