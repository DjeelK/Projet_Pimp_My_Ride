import React from 'react';
import '../css/SearchBar.css'
import IconeLocalisation from './IconeLocalisation';
import LocalisationIcon from '../assets/location-2955.png'; 
import CalendrierIcon from '../assets/vecteezy_calendar-icon-sign-symbol-design_10160301_960.png';
import ButtonTool from './ButtonTool';

const SearchBar = () => {
  return (
    <div className="container col-12">
      <div className="row justify-content-center align-items-center vh-100 col-12">
        <div className="rounded p-3 text-light text-center" id="bar_search_icone">
          <div className="row align-items-center">
            <div className="col-auto"> 
              <IconeLocalisation iconeLocalisation={LocalisationIcon} />
            </div>
            <div className="col-auto title-container"> 
              <div className="title-icon">Départ</div>
            </div>
            <div className="col">
              <IconeLocalisation iconeLocalisation={LocalisationIcon} />
            </div>
            <div className="col-auto title-container arrival">
              <div className="title-icon">Arrivée</div>
            </div>
            <div className="col">
              <IconeLocalisation iconeLocalisation={CalendrierIcon} />
            </div>
            <div className="col-auto title-container date"> 
              <div className="title-icon">Date</div>
            </div>
            <div className="col">
              <ButtonTool />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
