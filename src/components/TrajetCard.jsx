import React from "react";
import '../css/Trip.css'; 
import '../json/trajets.json';


const TrajetCard = ({ ride }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Trajet #{ride.id}</h5>
          <p className="card-text">
            <strong>Départ:</strong> {ride.depart}
          </p>
          <p className="card-text">
            <strong>Arrivée:</strong> {ride.arrival}
          </p>
          <p className="card-text">
            <strong>Date:</strong> {ride.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrajetCard;