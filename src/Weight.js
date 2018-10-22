import React, { Component } from "react";
import styles from "./Weight.module.css";

const CONVERSION_FACTOR = 2.205;

class Weight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      units: "kg"
    };
  }

  updateWeight = e => {
    this.setState({
      weight: e.target.value
    });
  };

  toggleUnits = e => {
    e.target.checked === true
      ? this.setState({
          weight: this.state.weight * CONVERSION_FACTOR,
          units: "lb"
        })
      : this.setState({
          weight: this.state.weight / CONVERSION_FACTOR,
          units: "kg"
        });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h3>
          Introduce your weight on Planet Earth:{" "}
          <input
            className={styles.input}
            value={this.state.weight}
            onChange={this.updateWeight}
            type="number"
          />
        </h3>
        <div>
          <input type="checkbox" onClick={this.toggleUnits} /> Weight in Pounds
        </div>
        <div>{this.props.children(this.state.weight, this.state.units)}</div>
      </div>
    );
  }
}

export default Weight;
