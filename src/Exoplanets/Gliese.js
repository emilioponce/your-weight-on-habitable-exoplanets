import React from "react";
import styles from "./Gliese.module.css";

const earthG = 9.81;
const glieseG = 12.94;

const Gliese = ({ weight }) => (
  <div className={styles.wrapper}>
    <img
      className={styles.image}
      alt="Gliese 667 Cc"
      src="https://www.solarsystemquick.com/universe/gliese-667cc.jpg"
    />
    <div>Gliese 667 Cc</div>
    <div className={styles.weight}>
      {((weight * glieseG) / earthG).toFixed(2)} Kg
    </div>
  </div>
);

export default Gliese;
