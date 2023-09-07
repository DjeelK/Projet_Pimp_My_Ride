import React from 'react';
import '../css/MainPage.css';
import SearchBar from './SearchBar';
import IconeLocalisation from './IconeLocalisation';

const MainPage = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-start min-vh-100">
        <div className="main-content">
          <h1 className="title_appli">Welcome To Pimp My Ride</h1>
          <h4 className="description_appli"> Prêt(e) à rejoindre la ligue des covoiturés intrépides ? Alors fais ta réservation et embarque avec nous !</h4>
          <SearchBar/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
