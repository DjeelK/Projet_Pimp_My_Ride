import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import profileImage from "../../assets/Profil1.png";

const ProfilForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState(profileImage);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <div className="container">
      <h1 className="text-profil">Mon profil</h1>
      <div className="row">
        <div className="col-md-3">
          <div className="text-center">
            <img
              src={profileImageUrl}
              className="avatar"
              alt="avatar"
            />
            <h6>Importer une image de profil</h6>
            <input
              type="file"
              className="form-control"
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <div className="col-md-9">
          <form>
            <div className="form-group">
              <TextInput
                label="Prénom"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <TextInput
                label="Nom"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <TextInput
                label="Adresse mail"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <TextInput
                label="Mot de passe"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <TextInput
                label="Téléphone"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="text-right mt-2 col-2">
            <button
            type="button"
            className="btn edit-button "
            onClick={handleEditClick}
            >
            Edit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilForm;
