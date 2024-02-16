import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/explore"> Explore Courses</Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">About</a> */}
              </li>
              <li className="nav-item"> <Link className="nav-link" to="/student">Student Dashboard</Link> </li>

              <li className="nav-item"> <Link className="nav-link" to="/admin">Admin Dashboard</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link>  </li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link> </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar