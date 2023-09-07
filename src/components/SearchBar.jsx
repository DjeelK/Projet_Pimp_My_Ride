import React from 'react';
import '../css/SearchBar.css'
import IconeLocalisation from './IconeLocalisation';
import LocalisationIcon from '../assets/location-2955.png'; 
import CalendrierIcon from '../assets/vecteezy_calendar-icon-sign-symbol-design_10160301_960.png';


const SearchBar = () => {
  return (
    <div className="container col-12">
      <div className="row justify-content-center align-items-center vh-100 col-12">
        <div className="rounded p-3 text-light text-center" id="bar_search">
          <div class="row">
          <div class="col">
          <IconeLocalisation iconeLocalisation = {LocalisationIcon} />
          </div>
          <div class="col">
          <IconeLocalisation iconeLocalisation = {LocalisationIcon} />
          </div>
          <div class="col">
          <IconeLocalisation iconeLocalisation = {CalendrierIcon} />
          </div>
          </div>
          </div>
        </div>
      </div>
  );
};

export default SearchBar;
