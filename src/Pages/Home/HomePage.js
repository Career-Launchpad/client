import React from "react";
import logo from "./logo.svg";

import styles from "./HomePage.module.css";

const HomePage = () => (
  <div className={styles.home}>
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className={styles.title}>Welcome to React</h1>
    </header>
    <p className={styles.intro}>
      To get started, edit <code>src/pages/Home/HomePage.js</code> and save to
      reload.
    </p>
  </div>
);

export default HomePage;
