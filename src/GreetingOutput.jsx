import React from "react";

const GreetingOutput = (props) => {
  return (
    <div>
      <h1> Hello {props.planet} from Functional Component </h1>
    </div>
  );
};

export default GreetingOutput;
