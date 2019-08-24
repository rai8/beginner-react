import React, { Component } from "react";

class Component3 extends Component {
  render() {
    return (
      <div>
        <u> React ternanry statements</u>
        {false ? (
          <div>Condition one is true</div>
        ) : (
          <div>Condition two is false</div>
        )}
      </div>
    );
  }
}

export default Component3;
