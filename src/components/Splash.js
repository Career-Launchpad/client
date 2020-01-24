import React from "react";

import icon from "../static/icon.png";
import styles from "./Splash.module.css";

const Splash = () => (
  <div className={styles.container}>
    <img src={icon} alt="icon" className={styles.icon} />
  </div>
);

export default Splash;
