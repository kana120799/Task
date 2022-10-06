import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CSS/LoginSign.module.css";
function LoginSign(props) {
  let [switchAccount, setAccount] = useState(false);
  const changeAccount = (e) => {
    e.preventDefault();
    props.account1(false);
    return props.account11();
  };
  function cancelCall() {
    props.account1(false);
  }
  //                          USer DATA
  var loginuser = {
    email: "",
    password: "",
  };
  var signuser = {
    name: "",
    email: "",
    password: "",
  };

  let [loginstate, setLoginstate] = useState(loginuser);
  let [signstate, setSignstate] = useState(signuser);
  const onValueChange = (e) => {
    setSignstate({ ...signstate, [e.target.name]: e.target.value });
    console.log(signstate);
  };
  const onValueTake = (e) => {
    setLoginstate({ ...loginstate, [e.target.name]: e.target.value });
  };
  // Navigate
  const navigate = useNavigate();
  return (
    <>
      {switchAccount ? (
        ////////////////////                                      Login          /////////////////////////

        <div className={styles.loginFlex}>
          <div className={styles.loginBox}>
            <h2
              style={{
                margin: "15px 0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Login
            </h2>
            <form>
              <div className={styles.container}>
                <label htmlFor="username">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  name="email"
                  id="username"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    onValueTake(e);
                  }}
                />

                <label htmlFor="password">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    onValueTake(e);
                  }}
                  requirednewAccount
                />

                <button
                  type="submit"
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  Login
                </button>
              </div>

              <div className={styles.container1}>
                <button
                  type="button"
                  className={styles.cancelbtn}
                  onClick={() => cancelCall()}
                >
                  Cancel
                </button>
                <span className={styles.newAccount}>
                  <h4>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Create new account
                    </a>
                  </h4>
                </span>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ////////////////////                                      Registration          /////////////////////////
        <div className={styles.loginFlex}>
          <div className={styles.registerBox}>
            <form onSubmit={changeAccount}>
              <div className={styles.container}>
                <h1
                  style={{
                    margin: "0px 0px 5px 0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Sign Up
                </h1>

                <label htmlFor="email">
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

                <label htmlFor="psw">
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

                <label htmlFor="psw-repeat">
                  <b> Password</b>
                </label>
                <input
                  type="password"
                  placeholder=" Password"
                  name="password"
                  id="password"
                  onChange={(e) => {
                    onValueChange(e);
                  }}
                />
                <hr />

                <button
                  type="submit"
                  className={styles.registerbtn}
                  onClick={() => {
                    setAccount(true);
                  }}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginSign;
