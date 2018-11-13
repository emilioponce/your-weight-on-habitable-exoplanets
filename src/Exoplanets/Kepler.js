import React from "react";
import styles from "./Kepler.module.css";

const earthG = 9.81;
const keplerG = 12.75;
const imageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/PlanetaSH%283%29.jpg/300px-PlanetaSH%283%29.jpg";

const Kepler = ({ weight, units }) => (
  <div className={styles.wrapper}>
    <img className={styles.image} alt="Kepler-442b" src={imageUrl} />
    <div>Kepler-442b</div>
    <div className={styles.weight}>
      {((weight * keplerG) / earthG).toFixed(2)} {units}
    </div>
  </div>
);

export default Kepler;
