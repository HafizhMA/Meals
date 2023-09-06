import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import DetailMealsPage from "./pages/DetailMealsPage";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories/:strCategory" element={<CategoriesPage />} />
      <Route path="/detail/:idMeal" element={<DetailMealsPage />} />
      <Route path="/favorite/:idMeal" element={<FavoritePage />} />
    </Routes>
  );
}

export default App;
