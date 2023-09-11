import React from 'react';
import '../css/MainPage.css';
import SmokeGif from '../assets/fumee.gif';
import SearchBarForm from '../routes/search/SearchBarForm';

const MainPage = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-start min-vh-100">
        <div className="main-content">
          <h1 className="title_appli">Welcome To Pimp My Ride</h1>
          <h4 className="description_appli"> Prêt(e) à rejoindre la ligue des covoiturés intrépides ? Alors fais ta réservation et embarque avec nous !</h4>
          <SearchBarForm/>
          <img src={SmokeGif} alt="Smoke" className="smoke" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
