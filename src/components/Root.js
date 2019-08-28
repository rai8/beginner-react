import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AdddNinja";

class Root extends Component {
  state = {
    ninjas: [
      { id: 1, name: "Bridgit", age: 16, belt: "black" },
      { id: 2, name: "Joshua", age: 25, belt: "green" },
      { id: 3, name: "Trexy", age: 22, belt: "white" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <h1>
          <u>Rendering list in states</u>
        </h1>
        <Ninjas ninjas={this.state.ninjas} key={this.state.ninjas.id} />
        <AddNinja />
      </React.Fragment>
    );
  }
}
export default Root;
