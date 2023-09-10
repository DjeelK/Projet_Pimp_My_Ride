import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import profileImage from "../../assets/Profil1.png";

const ProfilForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState(profileImage);

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
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <h1 className="text-primary">Mon profil</h1>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <div className="text-center">
            <img
              src={profileImageUrl}
              className="avatar img-circle img-thumbnail"
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
        <div className="col-md-9 personal-info">
          <form className="form-horizontal">
            <div className="form-group">
              <TextInput
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="col-md-6" 
              />
              <TextInput
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="col-md-6" 
              />
            </div>

            <button
              type="button"
              className="edit-button"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilForm;
