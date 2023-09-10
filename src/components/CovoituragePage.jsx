import React from "react";
import NavigationBar from "./NavigationBar";
import SearchBar from "../components/SearchBar";
import "../css/Covoiturage.css";

const CovoituragePage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container-fluid-covoit">
        <div className="main-content-covoit col-6">
          <SearchBar />
          <div className="overlay-rectangle">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovoituragePage;
