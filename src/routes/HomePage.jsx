import React from 'react';
import NavigationBar from '../components/header/NavigationBar'; // Assure-toi d'utiliser le chemin correct pour importer NavigationBar

const HomePage = () => {
  return (
    <div>
      <NavigationBar /> 
      <div className="container">
        <h1>Bienvenue sur la page d'accueil</h1>
      </div>
    </div>
  );
};

export default HomePage;