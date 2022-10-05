import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./CSS/Home.module.css";
function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className={styles.homeflex}>
        <div className={styles.subflex}>
          <p className={styles.welcome}>Welcome to Food's</p>
          <p className={styles.kitchen}>Kitchen</p>
        </div>
        <Link to="/menu">
          <button className={styles.but}>
            <h4>GO TO MENU</h4>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
