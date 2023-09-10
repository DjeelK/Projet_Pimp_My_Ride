
import React from "react";
import NavigationBar from "./NavigationBar";
import OverlayRectangle from "../components/OverlayRectangle";
import "../css/ProfilPage.css";
import "../css/Rectangle.css";

const ProfilPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container-fluid-profil">
        <OverlayRectangle leftMargin={100} />
      </div>
    </div>
  );
};

export default ProfilPage;