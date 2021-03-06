import React, { useState } from "react";
import Axios from "axios";
import Cookies from "js-cookie";

import { useHistory } from "react-router-dom";

function Inscription() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  //je declare mes Changes

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmitChange = async (e) => {
    e.preventDefault();
    const response = await Axios.post(
      "https://leboncoin-api.herokuapp.com/user/sign_up",
      { email, username, password }
    );
    if (response.data) {
      Cookies.set("token", response.data.token);
      history.push("/");
    }
    if (password !== confirmPassword) {
      setErrorMessage("mot de passe pas identique");
    }
    console.log(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmitChange}>
        <h1>Sign Up</h1>
        <br />
        <div>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email..."
          />
          <br />
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username..."
          />
          <br />

          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password..."
          />
          <br />

          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm Password..."
          />
          <p>{errorMessage}</p>
        </div>
        <br />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Inscription;
