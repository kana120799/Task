import React, { useState } from "react";
import styles from "./CSS/Login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  var loginuser = {
    name: "",
    email: "",
    phone: "",
  };

  let [loginstate, setLoginstate] = useState(loginuser);
  // Set Value of user :-
  const onValueChange = (e) => {
    setLoginstate({ ...loginstate, [e.target.name]: e.target.value });
  };
  // Submit User Details :-
  const submitUser = async (e) => {
    try {
      var data, response, exists;
      e.preventDefault();
      await axios.post("/user", loginstate).then((res) => {
        // If user already exist in database then we try to fetch previous message with time
        if (res.data.id == 8) {
          response = null;
          exists = res.data.userData;
        }

        // if user not exist in database, then we enroll that user with token.
        else if (res.data.id == 1) {
          localStorage.setItem("jwt Token", res.data);
          response = null;
          exists = null;
        }

        // If Admin Exist and try to fetch All User message.
        else {
          response = res.data.allUsers;
        }
      });
      data = { loginstate: loginstate, response: response, exists: exists };
      // Navigate to Home Page
      navigate("/home", { state: data });
    } catch (e) {
      console.log("Error");
    }
  };

  return (
    <>
      <div className={styles.loginFlex}>
        <div className={styles.registerBox}>
          <form>
            <div className={styles.container}>
              <h1
                style={{
                  margin: "0px 0px 5px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Login
              </h1>

              <label htmlFor="name">
                <b>Full Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                name="name"
                id="name"
                onChange={(e) => {
                  onValueChange(e);
                }}
              />

              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                id="email"
                onChange={(e) => {
                  onValueChange(e);
                }}
              />

              <label htmlFor="phone">
                <b> Mobile Number</b>
              </label>
              <input
                type="tel"
                placeholder="Mobile"
                id="phone"
                name="phone"
                onChange={(e) => {
                  onValueChange(e);
                }}
              />
              <hr />

              <button
                type="submit"
                className={styles.registerbtn}
                onClick={submitUser}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
