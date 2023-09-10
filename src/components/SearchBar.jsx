import React from "react";
import "../css/SearchBar.css";
import IconeLocalisation from "./IconeLocalisation";
import LocalisationIcon from "../assets/location-2955.png";
import CalendrierIcon from "../assets/vecteezy_calendar-icon-sign-symbol-design_10160301_960.png";
import ButtonTool from "./ButtonTool";

const SearchBar = () => {
  
  return (
    <div className="search-bar" id="bar_search_icone">
      <form className="row d-flex justify-content-between px-3">
        <div className="col-3 d-flex flex-column align-items-center">
          <IconeLocalisation
            iconeLocalisation={LocalisationIcon}
            className="align-self-center"
          />
          <div className="col-auto title-container">
            <div className="title-icon">Départ</div>
            <input type="text" />
          </div>
        </div>

        <div className="col-3 d-flex flex-column align-items-center">
          <IconeLocalisation
            iconeLocalisation={LocalisationIcon}
            className="align-self-center"
          />
          <div className="col-auto title-container">
            <div className="title-icon">Arrivée</div>
            <input type="text" />
          </div>
        </div>

        <div className="col-3 d-flex flex-column align-items-center">
          <IconeLocalisation
            iconeLocalisation={CalendrierIcon}
            className="align-self-center"
          />
          <div className="col-auto title-container">
        <div className="title-icon-date">Date</div>
          <input type="date" className="date-input" />
        </div>
        </div>

        <div className="col-3 d-flex align-items-center justify-content-end">
          <ButtonTool />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
