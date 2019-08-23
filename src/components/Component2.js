import React, { Component } from "react";

export default class Component2 extends Component {
  constructor() {
    super();
    this.state = {
      propState: "This is a class component",
      propState2: 5
    };
  }
  /*  //this is the wrong way we're not supposed to mutate state directly
  changeState = () => {
    this.state.propState = "new state";
  }; */

  //this is the correct syntax
  changeState = () =>
    this.setState((prevState, props) => ({
      propState2: prevState.propState2 + 1
    }));
  changeState2 = () =>
    this.setState({
      propState: this.state.propState + "R"
    });

  render() {
    return (
      <div>
        <button onClick={() => this.changeState()}>Click here</button>
        <button onClick={() => this.changeState2()}>Click here</button>

        <br />
        <br />
        {this.state.propState2}
        {this.state.propState}
        <br />
      </div>
    );
  }
}
