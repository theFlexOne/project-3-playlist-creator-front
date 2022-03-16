import "./records.css";

import React from "react";

const List = ({ className, model }) => {
  return (
    <ul className={"records " + className}>
      {model.map((row) => (
        <li className="record" key={row.id}>
          {row.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
