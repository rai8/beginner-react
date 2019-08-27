import React from "react";

export default function Conditional2(props) {
  return (
    <div>
      <h1>NAVBAR .....can be inserted here</h1>
      {props.isLoading /* === true ? */ ? (
        <h1>Loading in progress.... kindly wait</h1>
      ) : (
        <h1>Loading finished, that was some really cool stuff</h1>
      )}
    </div>
  );
}

/*if (props.isLoading === true) {
    return (
      <div>
        <h1>Loading .... kindly wait</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Loading is done, this was some reeally cool stuff </h1>
    </div>
  ); */
