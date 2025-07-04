import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div>
            <Link to="/">Movie App</Link>
        </div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/favourite">Favorites</Link>
        </div>
      
    </div>
  )
}

export default Navbar
