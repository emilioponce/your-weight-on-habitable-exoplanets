import React from "react";
import styles from "./Gliese.module.css";

const earthG = 9.81;
const glieseG = 12.94;
const imageUrl = "https://www.solarsystemquick.com/universe/gliese-667cc.jpg";

const Gliese = ({ weight, units }) => (
  <div className={styles.wrapper}>
    <img className={styles.image} alt="Gliese 667 Cc" src={imageUrl} />
    <div>Gliese 667 Cc</div>
    <div className={styles.weight}>
      {((weight * glieseG) / earthG).toFixed(2)} {units}
    </div>
  </div>
);

export default Gliese;
