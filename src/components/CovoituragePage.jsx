import React from "react";
import "../css/Covoiturage.css";
import SearchBar from "./SearchBar";
import NavigationBar from './NavigationBar';

const CovoituragePage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container-fluid-covoit">
        <div className="main-content-covoit">
          <div className="overlay-rectangle d-flex align-items-start justify-content-center"> {/* Ajoutez ces classes pour aligner en haut */}
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovoituragePage;
