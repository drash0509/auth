import React from 'react'
import { Link } from 'react-router-dom'; // Import Link


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#342F2B'}}>
  <Link className="navbar-brand" href="/MainScreen">Plant Book</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <Link className="nav-item nav-link active" to="/MainScreen">Home</Link> 
            <Link className="nav-item nav-link active" to="/aboutUs">About Us</Link> 
    </div>
  </div>
</nav>
    </div>
  )
}
