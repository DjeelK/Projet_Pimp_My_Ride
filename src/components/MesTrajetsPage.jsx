import React, { useEffect, useState } from 'react';
import NavigationBar from "./NavigationBar";
import TrajetCard from "./TrajetCard";
import "../css/MesTrajets.css";

const MesTrajetsPage = () => {

  const [trajets, setTrajets] = useState([]);
  useEffect(() => {
    // Récupérer la liste des trajets depuis localStorage
    const trajetsStorage = JSON.parse(localStorage.getItem('trajets')) || [];
    setTrajets(trajetsStorage);
  }, []);

  return (
    <div>
      <NavigationBar />
      <div className="container mt-4">
        <h2>Mes Trajets</h2>
        <div className="row">
        {trajets.map((trajet) => (
          <TrajetCard key={trajet.id} trajet={trajet} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MesTrajetsPage;