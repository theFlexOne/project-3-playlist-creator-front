import React, { useEffect, useState } from "react";
import "./navTabs.css";
import NavTab from "../NavTab/NavTab";
import useBackend from "../../hooks/useBackend";

const NavTabs = ({ tabs, root, onTabChange, className = "", ...other }) => {
  return (
    tabs && (
      <div
        className={`page-nav nav-tabs tabs ${className}`}
        onChange={(e) => console.log(e.target)}
        {...other}
      >
        {tabs.map(({ label, endpoint }) => (
          <NavTab
            root={root}
            label={label}
            endpoint={endpoint}
            key={endpoint}
          />
        ))}
      </div>
    )
  );
};

export default NavTabs;
