import React from "react";
import NavigationBar from "./NavigationBar";
import "../css/Rectangle.css";
import ProfilForm from "../routes/profil/ProfilForm";
import "../css/ProfilPage.css"; 

const ProfilPage = () => {

  return (
    <div>
      <NavigationBar />
      <ProfilForm />
    </div>
  );
};

export default ProfilPage;