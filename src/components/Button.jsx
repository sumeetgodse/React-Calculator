import React from "react";
import "./Button.css";

const isOperator = val => {
    if(isNaN(val))
        if(val==="=")
            return "equalto";
        else if(val==="+"||val==="*"||val==="/"||val==="-")
            return "operator";
};


export const Button = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children)
    }`}
    onClick={()=>props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

export default Button;