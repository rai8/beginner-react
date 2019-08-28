import React, { Component } from "react";

class Ninjas extends Component {
  render() {
    const { ninjas } = this.props; //object destructuring
    const ninjaList = ninjas.map(ninja => {
      return (
        <div key={ninja.id}>
          <p>Name: {ninja.name} </p>
          <p>Age: {ninja.age}</p>
          <p>Belt: {ninja.belt}</p>
        </div>
      );
    });
    return <React.Fragment>{ninjaList}</React.Fragment>;
  }
}

export default Ninjas;
