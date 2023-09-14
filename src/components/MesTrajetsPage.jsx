import React, { useEffect, useState } from 'react';
import NavigationBar from "./NavigationBar";
import TrajetCard from "./TrajetCard";
import "../css/MesTrajets.css";
import {getAllRide} from "../services/RideService";

const MesTrajetsPage = () => {

    const [rides, setRides] = useState([])
  const [trajets, setTrajets] = useState([]);
  useEffect(() => {
    // Récupérer la liste des trajets depuis localStorage
    // const trajetsStorage = JSON.parse(localStorage.getItem('trajets')) || [];
    // setTrajets(trajetsStorage);
      listRides();

  }, []);

    function listRides(){
        getAllRide().then((response) => {
            console.log("test")
            setRides(response.data);
        }).catch(error => {
            console.error(error.response.data);
        })
    }

  return (
    <div>
      <NavigationBar />
      <div className="container mt-4">
        <h2>Mes Trajets</h2>
        <div className="row">
        {rides.map((ride) => (
          <TrajetCard key={ride.id} ride={ride} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MesTrajetsPage;