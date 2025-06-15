import { useState } from "react";
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
  

const categoryState = {
  categoriesList,
  setCategoriesList,
  categoryProducts,
  setCategoryProducts,
  selectedCategory,
  setSelectedCategory,
};

const cartState = { cart, setCart  };
  return (
    
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage  categoryState={categoryState} cartState={cartState} />
          }
        />
        <Route
          path="/contact-page"
          element={<ContactPage cartState={cartState} />}
        />
        <Route
          path="/about-page"
          element={<AboutPage  cartState={cartState}/>}
        />
      </Routes>
    </>
  );
}
