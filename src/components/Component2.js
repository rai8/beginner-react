import React, { Component } from "react";

export default class Component2 extends Component {
  constructor() {
    super();
    this.state = {
      propState: "This is a class component"
    };
  }
  /*  //this is the wrong way we're not supposed to mutate state directly
  changeState = () => {
    this.state.propState = "new state";
  }; */

  //this is the correct syntax
  changeState = () => {
    this.setState({ propState: "This is a changed state using setState" });
  };
  render() {
    return (
      <div>
        <button onClick={() => this.changeState()}>Click here</button>
        {this.state.propState}
      </div>
    );
  }
}
