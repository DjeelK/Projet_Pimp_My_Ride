import React from "react";
import NavigationBar from "./NavigationBar";
import SearchBar from "../components/SearchBar";
import OverlayRectangle from "../components/OverlayRectangle"; 
import "../css/Covoiturage.css";

const CovoituragePage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container-fluid-covoit">
        <div className="main-content-covoit col-5">
          <SearchBar />
          <OverlayRectangle />
        </div>
      </div>
    </div>
  );
};

export default CovoituragePage;