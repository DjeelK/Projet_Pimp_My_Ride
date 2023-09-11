import React from "react";
import '../css/Trip.css'; 
import '../json/trajets.json';


const TrajetCard = ({ trajet }) => {
  return (
    <div className="col-md-4 mb-4">
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
  );
};

export default TrajetCard;