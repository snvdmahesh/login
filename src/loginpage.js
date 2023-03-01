import React from "react";
import "./Loginpage.css";
import { FaCamera } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function loginpage() {
  return (
    <div className="container">
      <div className="container1">
        <div className="cameraImage">
          <h1>
            <FaCamera />
          </h1>
        </div>
        <form className="login-form">
          <div className='icon-container'>
            <span className='icon'>
              <FaUserCircle />
            </span>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Email Id"
              className='input1'
            />
          </div>
          <div className='icon-container'>
            <span className='icon'>
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
          </div>
          
            <button className="login-button" type="submit">
              Log In
            </button>
            <h7 className=''>ForgotPassword?</h7>
          <div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default loginpage;
