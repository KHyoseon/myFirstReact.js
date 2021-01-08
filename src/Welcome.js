import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Welcome = (props) => {
  const [state, setState] = useState();
  const handleInput = (e) => {
    setState(e.target.value);
  };
  return (
    <>
      <div>
        {" "}
        <br /> {props.name} <br /> {props.details}{" "}
      </div>
      <Input handlechange={handleInput} />
      <Button> Submit </Button>
      <br />
      A. {state}
    </>
  );
};

export default Welcome;
