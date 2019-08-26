import React, { Component } from "react";
import Conditional2 from "./Conditional2";

export default class Conditional1 extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }
  render() {
    return (
      <div>
        <Conditional2 isLoading={this.state.isLoading} />
      </div>
    );
  }
}
