import React, { useState } from "react";

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
  const handleInscriptionSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleInscriptionSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" onChange={handleEmailChange} />
          <br />
          <label htmlFor="">Username</label>
          <input type="text" onChange={handleUsernameChange} />
          <br />
          <label htmlFor="">Name</label>
          <input type="text" onChange={handleUsernameChange} />
          <br />
          <label htmlFor="">Password</label>
          <input type="password" onChange={handlePasswordChange} />
          <br />
          <label htmlFor="">Confirm Password</label>
          <input type="password" onChange={handleConfirmPasswordChange} />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Inscription;
