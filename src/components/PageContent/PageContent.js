import React from "react";
import "./pageContent.css";

const PageContent = ({ children }) => {
  return (
    <section className="page-content">{children || <h1>CONTENT</h1>}</section>
  );
};

export default PageContent;
