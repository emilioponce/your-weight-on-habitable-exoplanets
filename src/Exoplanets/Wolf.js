import React from "react";
import styles from "./Wolf.module.css";

const earthG = 9.81;
const wolfG = 15.69;
const imageUrl = "https://www.solarsystemquick.com/universe/hd-85512-b.jpg";

const Wolf = ({ weight, units }) => (
  <div className={styles.wrapper}>
    <img className={styles.image} alt="Wolf 1061c" src={imageUrl} />
    <div>Wolf 1061c</div>
    <div className={styles.weight}>
      {((weight * wolfG) / earthG).toFixed(2)} {units}
    </div>
  </div>
);

export default Wolf;
