import React from "react";
import logo from "./logo.svg";

import Nav from "../../Nav/Nav";
import styles from "./SchoolPage.module.css";

const School = () => (
  <Nav>
    <div className={styles.home}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1 className={styles.title}>School</h1>
      </header>
      <p className={styles.intro}>
        To get started, edit <code>src/pages/School/SchoolPage.js</code> and
        save to reload.
      </p>
    </div>
  </Nav>
);

export default School;
