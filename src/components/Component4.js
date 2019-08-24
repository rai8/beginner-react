import React, { Component } from "react";

class Component4 extends Component {
  Array1 = [
    { id: 1, text: "text 1  ", number: 1 },
    { id: 2, text: "text 2  ", number: 2 },
    { id: 3, text: "text 3  ", number: 3 },
    { id: 4, text: "text 4  ", number: 4 },
    { id: 5, text: "text 5  ", number: 5 }
  ];

  renderListItem = props => (
    <div>
      {props.item.text}
      <p>{props.item.number}</p>
    </div>
  );
  render() {
    return (
      <div>
        {this.Array1.map(item => (
          <this.renderListItem key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default Component4;
