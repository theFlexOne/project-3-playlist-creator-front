import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MyMusic from "../pages/myMusic/MyMusic";
const AppRoutes = ({ tabs }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/my_music" />} />
      <Route path="/my_music/*" element={<MyMusic tabs={tabs} />} />
    </Routes>
  );
};

export default AppRoutes;
