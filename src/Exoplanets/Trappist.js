import React from "react";
import styles from "./Trappist.module.css";

const earthG = 9.81;
const trappistG = 9.12;
const imageUrl =
  "https://img.europapress.es/fotoweb/fotonoticia_20180504103701_640.jpg";

const Trappist = ({ weight, units }) => (
  <div className={styles.wrapper}>
    <img className={styles.image} alt="Trappist-1 e" src={imageUrl} />
    <div>Trappist-1 e</div>
    <div className={styles.weight}>
      {((weight * trappistG) / earthG).toFixed(2)} {units}
    </div>
  </div>
);

export default Trappist;
