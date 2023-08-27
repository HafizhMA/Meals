import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories/:strCategory" element={<CategoriesPage />} />
    </Routes>
  );
}

export default App;
