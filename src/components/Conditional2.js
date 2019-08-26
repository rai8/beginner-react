import React from "react";

export default function Conditional2(props) {
  if (props.isLoading === true) {
    return (
      <div>
        <h1>Loading .... kinldy wait</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Loading is done, this was some reeally cool stuff </h1>
    </div>
  );
}
