import React from "react";

import { Link, useNavigate } from "react-router-dom";

import "../css/NavigationBar.css";

import ImgLogo from "../assets/logo-sans-fond.svg";

import {isUserLoggedIn, logout } from "../services/AuthService";



const NavigationBar = () => {

  const navigate = useNavigate();

  const isLogged = isUserLoggedIn();

  const deconnexion = () => {

    navigate("/")

    logout();



  }

  return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <Link to="/" className="navbar-brand">

          <img src={ImgLogo} alt="Logo" className="navbar-brand-logo" />

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
              <Link to="/covoiturage" className="nav-link">
                Covoiturage
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/application" className="nav-link">
                Application
              </Link>
            </li>
            <Link to="/addTrajet" className="nav-link publier-link">
              <i className="bi bi-plus-circle bi-lg"></i> Publier un trajet
            </Link>
          </ul>
        </div>
        <div className="nav-separator">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/profil" className="nav-link">
                Mon profil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mesTrajets" className="nav-link">
                Mes trajets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/commentaires" className="nav-link">
                Mes commentaires <i className="bi bi-star-fill star-icon"></i>
              </Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav ml-auto">
          {isLogged == false ?
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link nav-button btn">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link nav-button btn">
                    Sign Up
                  </Link>
                </li>
              </>
              :<button className="btn btn-outline-danger" onClick={deconnexion}>logout</button>}
        </ul>
      </nav>
  );
};


export default NavigationBar;