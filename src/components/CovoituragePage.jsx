import React from "react";
import "../css/Covoiturage.css";
import NavigationBar from './NavigationBar';
import SearchBarForm from "../routes/search/SearchBarForm";

const CovoituragePage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container-fluid-covoit">
        <div className="main-content-covoit">
          <div className="overlay-rectangle d-flex align-items-start justify-content-center">
            <SearchBarForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovoituragePage;
