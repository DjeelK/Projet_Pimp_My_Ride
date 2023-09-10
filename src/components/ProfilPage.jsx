import React from "react";
import NavigationBar from "./NavigationBar";
import "../css/Rectangle.css";
import ProfilForm from "../routes/profil/ProfilForm";
import "../css/ProfilPage.css"; 

const ProfilPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container-fluid-profil">
        <div className="container mt-5">
          <div className="row">
            <div className="overlay-rectangle col-md-6 offset-md-3">
              <ProfilForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;