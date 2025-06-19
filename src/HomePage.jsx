import "./index.css";
import "./App.css";
import { useEffect } from "react";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/Carousel";
import CategoriesList from "./Components/Categories Content/CategoriesList";
import ProductCard from "./Components/Products/ProductCard";
import Footer from "./Components/Footer/Footer";

export default function HomePage({ categoryState, cartState }) {
  const {
    categoriesList,
    setCategoriesList,
    selectedCategory,
    setSelectedCategory,
    categoryProducts,
    setCategoryProducts,
  } = categoryState;
  const { cart, setCart } = cartState;

  
  // fetch categories list from api
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategoriesList(data);
        setSelectedCategory(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      })
   
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
      <Header cart={cart} setCart={setCart}></Header>

      <div className="h-24"></div>

      <Carousel />

      <div className="flex flex-col gap-4 p-3">
        <CategoriesList
          categoriesList={categoriesList}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
       
        />
        <ProductCard
          categoryProducts={categoryProducts}
          cart={cart}
          setCart={setCart}
        />
      </div>
      <Footer />
    </div>
  );
}
