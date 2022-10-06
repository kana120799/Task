import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./CSS/Home.module.css";
function Home() {
  var data = {
    value: true,
  };
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>

      <div className={styles.homeflex}>
        <div className={styles.subflex}>
          <p className={styles.welcome}>Welcome to Food's</p>
          <p className={styles.kitchen}>Kitchen</p>
        </div>

        {/* Button to navigate on Menu Page. */}
        <button
          className={styles.but}
          onClick={() => {
            navigate("/menu", { state: data });
          }}
        >
          <h4>GO TO MENU</h4>
        </button>
      </div>
    </>
  );
}

export default Home;
