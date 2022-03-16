import React from "react";
import "./styledTextField.css";

const StyledTextField = ({ type = "text", ...other }) => {
  const validTypes = [
    "email",
    "number",
    "password",
    "search",
    "tel",
    "text",
    "url",
  ];
  if (validTypes.indexOf(type) === -1) {
    return new Error(
      `Invalid type. Valid types includes: ${validTypes.join(", ")}`
    );
  }

  return (
    <input
      className={`styled-text-field ${type}-input`}
      type={type}
      {...other}
    />
  );
};

export default StyledTextField;
