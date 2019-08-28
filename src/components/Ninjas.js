import React, { Component } from "react";

class Ninjas extends Component {
  render() {
    const { ninjas, deleteNinja } = this.props; //object destructuring
    const ninjaList = ninjas.map(ninja => {
      return (
        <div key={ninja.id}>
          <p>Name: {ninja.name} </p>
          <p>Age: {ninja.age}</p>
          <p>Belt: {ninja.belt}</p>
          <button
            onClick={() => {
              deleteNinja(ninja.id);
            }}
          >
            DEl NINJA
          </button>
        </div>
      );
    });
    return <React.Fragment>{ninjaList}</React.Fragment>;
  }
}

export default Ninjas;
