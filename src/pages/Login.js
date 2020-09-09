import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  //je declare mes Changes

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitChange = async (e) => {
    e.preventDefault();
    const response = await Axios.post(
      "https://leboncoin-api.herokuapp.com/user/log_in",
      { email, password }
    );
    if (response.data.token) {
      Cookies.set("token", response.data.token);
      history.push("/");
      console.log(response);
    }
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
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password..."
          />
          <br />
        </div>
        <br />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Login;
