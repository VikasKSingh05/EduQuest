import { Button } from "pixel-retroui";
import React from "react";

function RetroButton({ text, ...props }) {
  return (
    <Button
      bg="#fefcd0"
      textColor="black"
      borderColor="black"
      shadow="#c381b5"
      {...props} 
    >
      <p style={{fontFamily:'heading'}}>{text}</p>
    </Button>
  );
}

export default RetroButton;
