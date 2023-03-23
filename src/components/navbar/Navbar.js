import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navb'>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link to='/' style={{textDecoration:"none"}}>
    <span className="navbar-brand">ReCyclo</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-items" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <Link to="/" style={{textDecoration:"none"}}>
        <li className="nav-item">
          <span className="nav-link" >Home</span>
        </li>
        </Link>
       
        {/* <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li> */}
        <Link to="/sell" style={{textDecoration:"none"}}>
        <li className="nav-item">
          <span className="nav-link" >Sell Now</span>
        </li>
        </Link>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar