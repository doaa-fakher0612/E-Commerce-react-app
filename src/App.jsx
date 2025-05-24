import { useState, useEffect, useRef } from "react";
import "./index.css";
import "./App.css";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./Components/Pages/ContactPage";
import AboutPage from "./Components/Pages/Aboutpage";
import useLocalStorage from "./Hooks/useLocalStorage";
export default function App() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useLocalStorage("Product", []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              categoriesList={categoriesList}
              setCategoriesList={setCategoriesList}
              categoryProducts={categoryProducts}
              setCategoryProducts={setCategoryProducts}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="ContactPage"
          element={<ContactPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="AboutPage"
          element={<AboutPage cart={cart} setCart={setCart} />}
        />
      </Routes>
    </div>
  );
}
