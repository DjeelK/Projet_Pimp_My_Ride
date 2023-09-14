import React, { useEffect,useState } from 'react'

import '../../css/Trip.css';

import {useNavigate, useParams } from 'react-router-dom'

import {postRide,getRide,updateUserRide} from "../../services/RideService";

const TripForm = () => {

  // const [formData, setFormData] = useState({

  //   depart: '',

  //   arrival: '',

  //   date: '',

  // });

  const [depart, setDepart] = useState('')

  const [arrival, setArrival] = useState('')

  const [date, setDate]  = useState('')
  const [userId ,setUserId] = useState('')

  const navigate = useNavigate();

  // const {id} = useParams();



  function saveOrUpdateRide(e){

    e.preventDefault()

    const ride = {date,depart,arrival,userId}

    console.log("Bouton Publier cliqué !");

    console.log(ride);

    postRide(date,depart,arrival,userId).then((response) => {

      console.log(response.data)

      navigate('/mesTrajets')

    }).catch(error => {

      console.error(error);

    })
    // if(id){
    //
    //   updateUserRide(id,ride).then((response) => {
    //
    //     navigate('/mesTrajets')
    //
    //   }).catch(error => {
    //
    //     console.error(error);
    //
    //   })
    //
    // }else{
    //
    //   postRide(ride).then((response) => {
    //
    //     console.log(response.data)
    //
    //     navigate('/mesTrajets')
    //
    //   }).catch(error => {
    //
    //     console.error(error);
    //
    //   })
    //
    // }

  }



  // useEffect( () => {
  //
  //
  //
  //   if(userId){
  //
  //     getRide(userId).then((response) => {
  //
  //       console.log(response.data)
  //
  //       setDepart(response.data.depart)
  //
  //       setArrival(response.data.arrival)
  //
  //       setDate(response.data.date)
  //
  //     }).catch(error => {
  //
  //       console.error(error);
  //
  //     })
  //
  //   }
  //
  //
  //
  // }, [userId])





  // const handleInputChange = (e) => {

  //   const { name, value } = e.target;

  //   setFormData({

  //     ...formData,

  //     [name]: value,

  //   });

  // };



  // const handleSubmit = (e) => {

  //   e.preventDefault();

  //   const nouveauTrajet = {

  //     depart: formData.depart,

  //     arrival: formData.arrival,

  //     date: formData.date,

  //   };





  //   postRide(nouveauTrajet.date,nouveauTrajet.depart,nouveauTrajet.arrival).then((response) => {

  //     console.log(response.data)

  //     navigate('/mesTrajets')

  //   }).catch(error => {

  //     console.error(error);

  //   })



  // // Récupérer la liste actuelle des trajets depuis localStorage

  // const trajets = JSON.parse(localStorage.getItem('trajets')) || [];

  //

  //   // Ajouter le nouveau trajet à la liste

  // trajets.push(nouveauTrajet);

  //

  // // Enregistrer la liste mise à jour dans localStorage

  // localStorage.setItem('trajets', JSON.stringify(trajets));



  // Réinitialiser le formulaire

  //   setFormData({

  //   depart: '',

  //     arrival: '',

  //   date: '',

  // });



  // };



  return (

      <div className="create-trip-form">

        <h2>Publier un nouveau trajet 🚘 </h2>

        <form>

          <div className="form-group">

            <label htmlFor="depart">Départ :</label>

            <input

                type="text"

                name="depart"

                value={depart}

                onChange={(e) => setDepart(e.target.value)}

                required

            />

          </div>

          <div className="form-group">

            <label htmlFor="arrival">Arrivée :</label>

            <input

                type="text"

                name="arrival"

                value={arrival}

                onChange={(e) => setArrival(e.target.value)}

                required

            />

          </div>
          <div className="form-group">

            <label htmlFor="id">id :</label>

            <input

                type="number"

                name="userId"

                value={userId}

                onChange={(e) => setUserId(e.target.value)}

                required

            />

          </div>

          <div className="form-group">

            <label>Date :</label>

            <input

                type="date"

                name="date"

                value={date}

                onChange={(e) => setDate(e.target.value)}

                required

            />

          </div>

          <button onClick={(e) => saveOrUpdateRide(e)} type="submit">Publier</button>

        </form>

      </div>

  );

};





export default TripForm;