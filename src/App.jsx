import React from "react";
import Header from "./Components/Header/Header";
import "./index.css";
import "./App.css";
import MainContent from "./Components/Header/MainContent";
import Carousel from "./Components/Carousel/carousel";
import X from "./Components/X"
import CategoriesList from "./Components/Categories Content/CategoriesList";

export default function App() {
  let [sharedCounter, setSharedCounter] = React.useState(0);
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

      <CategoriesList />

     
    </div>
  );
}
