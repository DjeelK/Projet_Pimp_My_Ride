import React from "react";
import NavigationBar from "./NavigationBar";
import OverlayRectangle from "../components/OverlayRectangle"; 
import "../css/Covoiturage.css";
import SearchBar_2 from "./SearchBar_2";

const CovoituragePage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container-fluid-covoit">
        <div className="main-content-covoit col-5">
          <SearchBar_2 />
          <OverlayRectangle />
        </div>
      </div>
    </div>
  );
};

export default CovoituragePage;