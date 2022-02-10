import React from "react";

const GreetingInput = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter planet name"
        onChange={(event) => props.renderInput(event.target.value)}
      />
    </div>
  );
};

export default GreetingInput;
