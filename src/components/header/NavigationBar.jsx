import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-expand-lg">
      <Navbar.Brand>
        <Link to="/">
          <img
            src="/Projet_Pimp_My_Ride/src/assets/logo-sans-fond.svg"
            alt="Logo"
            width="40"
            height="40"
            className="navbar-brand-logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/covoiturage" className="nav-link">Covoiturage</Link> {/* Utilise Link ici */}
          <Link to="/application" className="nav-link">Application</Link> {/* Utilise Link ici */}
        </Nav>
        <Nav>
          <Link to="/publier-trajet" className="nav-link">Publier un trajet</Link> {/* Utilise Link ici */}
          <Button variant="outline-primary" as={Link} to="/sign-in" className="nav-button">Sign In</Button>
          <Button variant="primary" as={Link} to="/register" className="nav-button">Register</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;