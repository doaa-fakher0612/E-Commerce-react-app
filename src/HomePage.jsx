
import "./index.css";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./Components/Header/Header";
import useLocalStorage from "./Hooks/useLocalStorage";
import Carousel from "./Components/Carousel/carousel";
import CategoriesList from "./Components/Categories Content/CategoriesList";
import ProductCard from "./Components/Products/ProductCard";
import Footer from "./Components/Footer/Footer";


export default function HomePage() {
  let [sharedCounter, setSharedCounter] = useState(0);
  const [categoriesList, setCategoriesList] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useLocalStorage("Product", []);

  // fetch categories list
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategoriesList(data);
        setSelectedCategory(data[0]);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // fetch products of category
  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => setCategoryProducts(data))
        .catch((error) =>
          console.error(
            `Error fetching products for ${selectedCategory}:`,
            error
          )
        );
    }
  }, [selectedCategory]);

  return (
    



    <div>
      <Header
        sharedCounter={sharedCounter}
        setSharedCounter={setSharedCounter}
        cart={cart}
        setCart={setCart}
      ></Header>

      <div className="h-24"></div>

      {/* <MainContent
        sharedCounter={sharedCounter}
        setSharedCounter={setSharedCounter}
      ></MainContent> */}

      <Carousel></Carousel>

      <div className="flex flex-col gap-4 p-3">
        <CategoriesList
          categoriesList={categoriesList}
          setSelectedCategory={setSelectedCategory}
        />
        <ProductCard
          categoryProducts={categoryProducts}
          sharedCounter={sharedCounter}
          setSharedCounter={setSharedCounter}
          cart={cart}
          setCart={setCart}
        />
      </div>
      <Footer />
    </div>
  );
}
