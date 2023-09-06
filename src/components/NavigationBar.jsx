import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            src="/Projet_Pimp_My_Ride/src/assets/logo-sans-fond.svg"
            alt="Logo"
            width="40"
            height="40"
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
      <ul className="nav">
        <li className="nav-item">
          <Link to="/publier-trajet" className="nav-link">Publier un trajet</Link>
        </li>
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
