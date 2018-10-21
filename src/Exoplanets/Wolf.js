import React from "react";
import styles from "./Wolf.module.css";

const earthG = 9.81;
const wolfG = 15.69;

const Wolf = ({ weight }) => (
  <div className={styles.wrapper}>
    <img
      className={styles.image}
      alt="Wolf 1061c"
      src="https://www.solarsystemquick.com/universe/hd-85512-b.jpg"
    />
    <div>Wolf 1061c</div>
    <div className={styles.weight}>
      {((weight * wolfG) / earthG).toFixed(2)} Kg
    </div>
  </div>
);

export default Wolf;
