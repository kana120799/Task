import React, { useState } from "react";
import styles from "./CSS/LoginSign.module.css";
function LoginSign(props) {
  let [switchAccount, setAccount] = useState(true);
  const changeAccount = (e) => {
    e.preventDefault();
    props.account1(false);
    return props.account11();
  };
  function cancelCall() {
    props.account1(false);
  }
  return (
    <>
      {switchAccount ? (
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
              Login Form
            </h2>
            <form>
              <div className={styles.container}>
                <label htmlFor="username">
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Email"
                  required
                />

                <label htmlFor="password">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  requirednewAccount
                />

                <button type="submit">Login</button>
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
                    <a
                      href="#"
                      onClick={() => {
                        setAccount(false);
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      Create new account
                    </a>
                  </h4>
                </span>
              </div>
            </form>
          </div>
        </div>
      ) : (
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
                  Register
                </h1>
                <label htmlFor="email">
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  id="username"
                  required
                />

                <label htmlFor="email">
                  <b>Full Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  name="name"
                  id="name"
                  required
                />

                <label htmlFor="psw">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  required
                />

                <label htmlFor="psw-repeat">
                  <b> Password</b>
                </label>
                <input
                  type="password"
                  placeholder=" Password"
                  name="password"
                  id="password"
                  required
                />
                <hr />

                <button type="submit" className={styles.registerbtn}>
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
