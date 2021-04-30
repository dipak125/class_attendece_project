import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/yodafy.jpg"

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-hover bg-dark">
      <div className="container-fluid">
        <Link to="/" ><img src={logo} alt="" className="yodafy" /></Link>
        <Link to="/" className="navbar-brand">&nbsp;&nbsp;Yodafy</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <Link to="/home" className="nav-link active">&nbsp;&nbsp;&nbsp;Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/members" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">&nbsp;Member's Area</Link>
              <ul className="dropdown-menu">
                <li><Link to="/students" className="dropdown-item">&nbsp;Student's Corner</Link></li>
                <li><Link to="/add" className="dropdown-item">&nbsp;Add New Student</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="/teacher" className="dropdown-item">&nbsp;Teacher's Corner</Link></li>
                <li><Link to="/attend" className="dropdown-item">&nbsp;Students Attendence</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/members" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">&nbsp;Feedback</Link>
              <ul className="dropdown-menu">
                <li><Link to="/feed" className="dropdown-item">&nbsp;Students Feedback</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="/feed" className="dropdown-item">&nbsp;Teachers Feedback</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav;