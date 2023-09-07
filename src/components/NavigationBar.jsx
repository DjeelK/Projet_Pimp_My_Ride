import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavigationBar.css'; 
import ImgLogo from '../assets/logo-sans-fond.svg';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img
          src={ImgLogo}
          alt="Logo"
          className="navbar-brand-logo"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/covoiturage" className="nav-link">Covoiturage</Link>
          </li>
          <li className="nav-item">
            <Link to="/application" className="nav-link">Application</Link>
          </li>
        </ul>
      </div>
      <div className="nav-separator">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/publier-trajet" className="nav-link publier-link">
              <i className="bi bi-plus-circle bi-lg"></i> Publier un trajet
            </Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <button className="nav-button btn">Sign In</button>
        </li>
        <li className="nav-item">
          <button className="nav-button btn">Register</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
