import React from 'react';
import '../css/MainPage.css'; 
import ImgFondSite from '../assets/website_home.png';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-content">
      <img
            src={ImgFondSite}
            alt="Voiture,gps,fond bleu"
            className="main-page-fond"
          />
      </div>
    </div>
  );
};

export default MainPage;