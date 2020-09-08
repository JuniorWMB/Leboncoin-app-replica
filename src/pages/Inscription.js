import React, { useState } from "react";
import axios from "axios";

function Inscription() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleInscriptionSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Les mots de passe ne sont pas identiques");
    } else {
      await axios.post("https://leboncoin-api.herokuapp.com/user/sign_up", {
        email,
        username,
        password,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleInscriptionSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" value={email} onChange={handleEmailChange} />
          <br />
          <label htmlFor="">Username</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
          <br />
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={handleNameChange} />
          <br />
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <br />
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Inscription;
