import React from "react";

export default function Component1(props) {
  return (
    <div>
      <React.Fragment>
        This is my first functional component <p>{props.name}</p>
        <p>{props.age}</p>
      </React.Fragment>
    </div>
  );
}
