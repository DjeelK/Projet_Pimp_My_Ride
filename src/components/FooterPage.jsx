import React from 'react';
import '../css/FooterPage.css';

const FooterPage = () => {
  return (
    <div className="footer-container">
      <div className="left-content">
      </div>
      <div className="center-content-nb1">
        <h1 className="large-text">50K</h1>
        <div className="small-text-nb1">Utilisateurs</div>
      </div>
      <div className="right-content-nb2">
        <h1 className="right-h1">500K</h1> 
        <div className="small-text-nb2">Km parcourus</div>
      </div>
    </div>
  );
};

export default FooterPage;
