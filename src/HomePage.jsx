
import "./index.css";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./Components/Header/Header";
import useLocalStorage from "./Hooks/useLocalStorage";
import Carousel from "./Components/Carousel/Carousel";
import CategoriesList from "./Components/Categories Content/CategoriesList";
import ProductCard from "./Components/Products/ProductCard";
import Footer from "./Components/Footer/Footer";


export default function HomePage(props) {
 

  // fetch categories list
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        props.setCategoriesList(data);
       props.setSelectedCategory(data[0]);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // fetch products of category
  useEffect(() => {
    if (props.selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${props.selectedCategory}`)
        .then((response) => response.json())
        .then((data) => props.setCategoryProducts(data))
        .catch((error) =>
          console.error(
            `Error fetching products for ${props.selectedCategory}:`,
            error
          )
        );
    }
  }, [props.selectedCategory]);

  return (
    <div>
      <Header
        cart={props.cart}
        setCart={props.setCart}
      ></Header>

      <div className="h-24"></div>


      <Carousel></Carousel>

      <div className="flex flex-col gap-4 p-3">
        <CategoriesList
          categoriesList={props.categoriesList}
          setSelectedCategory={props.setSelectedCategory}
        />
        <ProductCard
          categoryProducts={props.categoryProducts}
          cart={props.cart}
          setCart={props.setCart}
        />
      </div>
      <Footer />
    </div>
  );
}
