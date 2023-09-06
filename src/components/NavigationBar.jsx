
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavigationBar.css'; 
import ImgLogo from '../assets/logo-sans-fond.svg';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            src={ImgLogo}
            alt="Logo"
            className="navbar-brand-logo"
          />
        </Link>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/covoiturage" className="nav-link">Covoiturage</Link>
        </li>
        <li className="nav-item">
          <Link to="/application" className="nav-link">Application</Link>
        </li>
      </ul>
      <div className="nav-separator">
        <ul className="nav">
          <Link to="/publier-trajet" className="nav-link publier-link">
            <i className="bi bi-plus-circle bi-lg"></i> Publier un trajet
          </Link>
        </ul>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <button className="nav-button">Sign In</button>
        </li>
        <li className="nav-item">
          <button className="nav-button">Register</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;