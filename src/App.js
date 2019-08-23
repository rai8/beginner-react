import React, { Component } from "react";
import "./App.css";
import Component1 from "./components/Component1";
export default class App extends Component {
  //name = "Rhytonne";
  render() {
    const style = {
      border: "solid",
      textAlign: "center",
      boxShadow: "2px 2px"
    };
    return (
      <div>
        <div style={style}>Style</div>
        <button id="hover">Click me</button>
        <Component1 name="rhytonne" age="25" />
      </div>
    );
  }
}
/* const AppINstance = new App(); //initalizing a new instance for app
console.log(AppINstance.name); //this will work since name is a property
 */
