/** @format */

import React, { useState } from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { UserLogin } from "../../redux/extraReducer";
import { Link } from "react-router-dom";
function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UserLogin({userName: userName, email: email, password: password }));
  };
  return (
    <div>
      <div class="auth">
        <form class="form-1" onSubmit={handleSubmit}>
          <h1>Dropbox & Login</h1>
          <label htmlFor="text">User Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">User Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span style={{ color: "#000" }}>
            You do not have an account?{" "}
            <Link to="/register">
              <b>Sign up</b>
            </Link>
          </span>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
