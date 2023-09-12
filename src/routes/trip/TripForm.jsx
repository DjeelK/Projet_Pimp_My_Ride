import React, { useState } from 'react';
import '../../css/Trip.css'; 

const TripForm = () => {
  const [formData, setFormData] = useState({
    depart: '',
    arrivee: '',
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
      id: Date.now(), // valeur unique pour l'ID (= date actuelle)
      depart: formData.depart,
      arrivee: formData.arrivee,
      date: formData.date,
    };

    // Récupérer la liste actuelle des trajets depuis localStorage
    const trajets = JSON.parse(localStorage.getItem('trajets')) || [];

      // Ajouter le nouveau trajet à la liste
    trajets.push(nouveauTrajet);

    // Enregistrer la liste mise à jour dans localStorage
    localStorage.setItem('trajets', JSON.stringify(trajets));

     // Réinitialiser le formulaire
    setFormData({
    depart: '',
    arrivee: '',
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
            name="arrivee"
            value={formData.arrivee}
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
