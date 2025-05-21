import  { useState, useEffect, useRef } from "react";
import Header from "./Components/Header/Header";
import "./index.css";
import "./App.css";
import MainContent from "./Components/Header/MainContent";
import Carousel from "./Components/Carousel/carousel";
import X from "./Components/X"
import CategoriesList from "./Components/Categories Content/CategoriesList";
import ProductCard from "./Components/Products/ProductCard";
import { data } from "autoprefixer";

export default function App() {
  let [sharedCounter, setSharedCounter] = useState(0);
   const [categoriesList, setCategoriesList] = useState([])
   

  // fetch categories list
    useEffect (()=> {
        fetch ("https://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data =>  setCategoriesList(data))
        .catch(error => console.error("Error fetching categories:", error));
    
    }, [])

  // fetch products of category
  useEffect(()=>{
     if (categoriesList.length ){
      categoriesList.forEach((categoryName)=>{
       fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then((response) => response.json())
        .then((data) =>
          console.log(`Products in category "${categoryName}":`, data)
        )
        .catch((error) =>
          console.error(`Error fetching products for ${categoryName}:`, error)
        );
      })
     }
    }, [categoriesList])
  

  return (
    <div>
    
      <Header
        sharedCounter={sharedCounter}
        setSharedCounter={setSharedCounter}
      ></Header>

      <div className="h-24"></div>

      <MainContent
        sharedCounter={sharedCounter}
        setSharedCounter={setSharedCounter}
      ></MainContent>

      <Carousel></Carousel>

    <div className="flex flex-col gap-4 p-3">
      <CategoriesList  categoriesList = {categoriesList}/>
      <ProductCard />
    </div>

     
    </div>
  );
}
