import React, { Component } from "react";

export default class Practice1 extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        loggedIn: !prevState.loggedIn
      };
    });
  }
  render() {
    let buttonText = this.state.loggedIn ? "LOG OUT" : "LOG IN";
    let displayText = this.state.loggedIn ? "Logged in" : "Logged out";
    return (
      <div>
        <h1>Hell world</h1>
        <p>
          <button onClick={this.handleClick}>{buttonText}</button>{" "}
        </p>
        <p>{displayText}</p>
      </div>
    );
  }
}
