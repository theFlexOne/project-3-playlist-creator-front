import React from "react";
import StyledButton from "../StyledButton/StyledButton";
import "./pageInput.css";

const PageInput = ({ children, submit, heading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="page-input">
      {children || '** insert "page input" here **'}
    </section>
  );
};

export default PageInput;
