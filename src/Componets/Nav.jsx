import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src="/interneelogo.png" alt="Logo" width={100} className="logo-img" />
        </a>

        {/* Navbar Toggler (For Small Screens) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items (Collapsible) */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link-custom" to={'/'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-custom" to={'internship'}>Internship</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-custom" to={'graduateprogram'}>Graduate Program</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-custom" to={'companycollabration'}>Company Collaboration</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-custom" to={'contact'}>Contact</Link>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex">
            <Link className="btn btn-custom" to={'jobportal'}>Job Portal</Link>
            <Link className="btn btn-outline-primary btn-custom ms-2" to={'interneesportal'}>Internee's Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}





