import React from "react";
import "./styledButton.css";

const StyledButton = ({ children, type = "button", ...other }) => {
  return (
    <button type={type} className="styled-button" {...other}>
      {children}
    </button>
  );
};

export default StyledButton;
