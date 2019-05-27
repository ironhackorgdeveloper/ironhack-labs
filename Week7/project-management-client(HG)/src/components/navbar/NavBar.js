import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const navbar = () => {
  return (
    <div>
      <strong>NavBar</strong>
      <nav className="nav-style">
        <ul>
          <li><Link to="/projects" style={{ textDecoration: 'none' }}>Projects</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar;