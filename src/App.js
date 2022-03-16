import { useEffect, useState } from "react";
import "./App.css";
import useBackend from "./hooks/useBackend";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import { Navigate, Route, Routes } from "react-router-dom";
import MyMusic from "./pages/myMusic/MyMusic";

function App() {
  const [tabs, setTabs] = useState(null);

  const backend = useBackend();

  useEffect(() => {
    backend
      .fetchAvailableModels()
      .then((models) => setTabs(models))
      .catch((err) => console.warn(err.message));
  }, []);

  return (
    <div className="app">
      <Header />
      <AppRoutes tabs={tabs} />
    </div>
  );
}

export default App;
