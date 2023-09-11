
import React, { useState } from 'react';
import '../../css/SearchBar.css';
import IconeLocalisation from '../../components/IconeLocalisation';
import LocalisationIcon from '../../assets/location-2955.png';
import CalendrierIcon from '../../assets/vecteezy_calendar-icon-sign-symbol-design_10160301_960.png';
import ButtonTool from '../../components/ButtonTool';
import { useNavigate } from 'react-router-dom';

const SearchBarForm = () => {
  const [formData, setFormData] = useState({
    depart: '',
    arrivee: '',
    date: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log('Name:', name);
    // console.log('Value:', value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    navigate('/coivoiturage', { state: formData });
  };

  return (
    <div className="search-bar" id="bar_search_icone">
      <form className="row d-flex justify-content-between px-3" onSubmit={handleSubmit}>
        <div className="col-3 d-flex flex-column align-items-center">
          <IconeLocalisation
            iconeLocalisation={LocalisationIcon}
            className="align-self-center"
          />
          <div className="col-auto title-container">
            <div className="title-icon">Départ</div>
            <input
              type="text"
              name="depart"
              value={formData.depart}
              onChange={handleInputChange}
              placeholder="Lieu de départ"
              required
            />
          </div>
        </div>
        <div className="col-3 d-flex flex-column align-items-center">
          <IconeLocalisation
            iconeLocalisation={LocalisationIcon}
            className="align-self-center"
          />
          <div className="col-auto title-container">
            <div className="title-icon">Arrivée</div>
            <input
              type="text"
              name="arrivee"
              value={formData.arrivee}
              onChange={handleInputChange}
              placeholder="Lieu d'arrivée"
              required
            />
          </div>
        </div>

        <div className="col-3 d-flex flex-column align-items-center">
          <IconeLocalisation
            iconeLocalisation={CalendrierIcon}
            className="align-self-center"
          />
          <div className="col-auto title-container">
            <div className="title-icon-date">Date</div>
            <input
              type="date"
              className="date-input"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              placeholder="Date"
              required
            />
          </div>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-end">
          <ButtonTool onClick={onsubmit}/>
        </div>
      </form>
    </div>
  );
};

export default SearchBarForm;

