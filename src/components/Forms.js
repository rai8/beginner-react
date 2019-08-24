import React, { Component } from "react";

export default class Forms extends Component {
  state = {
    value: " "
  };
  handleChange = e => this.setState({ value: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.value);
  };
  render() {
    return (
      <div>
        {this.state.value}
        <form onSubmit={this.handleSubmit}>
          <label>First Name: </label>
          <input id="name" onChange={this.handleChange} type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
