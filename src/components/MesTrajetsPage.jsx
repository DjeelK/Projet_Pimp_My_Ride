import React from "react";
import trajetsData from "../json/trajets.json";
import NavigationBar from "./NavigationBar";
import TrajetCard from "./TrajetCard";
import "../css/MesTrajets.css";

const MesTrajetsPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container mt-4">
        <h2>Mes Trajets</h2>
        <div className="row">
          {trajetsData.trajets.map((trajet) => (
            <TrajetCard key={trajet.id} trajet={trajet} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default MesTrajetsPage;