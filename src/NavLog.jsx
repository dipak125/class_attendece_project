import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/yodafy.jpg"

import './homef.css'
import './App.css'
const NavLog = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-hover bg-dark">
      <div className="container-fluid">
      <Link to="/" ><img src={logo} alt="" className="yodafy" /></Link>
        <Link to="/" className="navbar-brand">&nbsp;&nbsp;Yodafy</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
         
            <li className="nav-item">
              <Link to="/" className="nav-link active">&nbsp;&nbsp;&nbsp;Login&nbsp;<i class="fas fa-user"></i></Link>
            </li>
            <li className="nav-item">
              <Link to="/Register" className="nav-link">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavLog ;