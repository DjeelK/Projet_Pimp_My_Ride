import React, { useState } from 'react';
import '../../css/Trip.css';
import {postRide} from "../../services/RideService";
import {useNavigate} from "react-router-dom";

const TripForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    depart: '',
    arrival: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouveauTrajet = {
      depart: formData.depart,
      arrival: formData.arrival,
      date: formData.date,
    };


    postRide(nouveauTrajet.date,nouveauTrajet.depart,nouveauTrajet.arrival).then((response) => {
      console.log(response.data)
      navigate('/mesTrajets')
    }).catch(error => {
      console.error(error);
    })



    // // Récupérer la liste actuelle des trajets depuis localStorage
    // const trajets = JSON.parse(localStorage.getItem('trajets')) || [];
    //
    //   // Ajouter le nouveau trajet à la liste
    // trajets.push(nouveauTrajet);
    //
    // // Enregistrer la liste mise à jour dans localStorage
    // localStorage.setItem('trajets', JSON.stringify(trajets));

     // Réinitialiser le formulaire
    setFormData({
    depart: '',
      arrival: '',
    date: '',
  });

  };

  return (
    <div className="create-trip-form">
      <h2>Publier un nouveau trajet 🚘 </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="depart">Départ :</label>
          <input
            type="text"
            name="depart"
            value={formData.depart}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrivee">Arrivée :</label>
          <input
            type="text"
            name="arrival"
            value={formData.arrival}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date :</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default TripForm;
