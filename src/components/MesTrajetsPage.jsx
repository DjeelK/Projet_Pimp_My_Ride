import React from "react";
import trajetsData from "../json/trajets.json";
import NavigationBar from "./NavigationBar";

const MesTrajetsPage = () => {
  return (
    <div>
      <NavigationBar/>
      <div className="container mt-4">
        <h2>Mes Trajets</h2>
        <div className="row">
          {trajetsData.trajets.map((trajet) => (
            <div key={trajet.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Trajet #{trajet.id}</h5>
                  <p className="card-text">
                    <strong>Départ:</strong> {trajet.depart}
                  </p>
                  <p className="card-text">
                    <strong>Arrivée:</strong> {trajet.arrivee}
                  </p>
                  <p className="card-text">
                    <strong>Date:</strong> {trajet.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MesTrajetsPage;