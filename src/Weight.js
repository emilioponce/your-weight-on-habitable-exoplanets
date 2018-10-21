import React, { Component } from "react";
import styles from "./Weight.module.css";

class Weight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0
    };
  }

  updateWeight = e => {
    this.setState({
      weight: e.target.value
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h3>
          Introduce your weight on Planet Earth (Kg):{" "}
          <input
            className={styles.input}
            value={this.state.weight}
            onChange={this.updateWeight}
            type="number"
          />
        </h3>
        <div>{this.props.children(this.state.weight)}</div>
      </div>
    );
  }
}

export default Weight;
