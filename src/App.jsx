import { useState, useEffect, useRef } from "react";
import "./index.css";
import "./App.css";
import HomePage from "./HomePage";
import { Routes, Route } from 'react-router-dom';
import ContactPage from "./Components/Pages/ContactPage";
import AboutPage from "./Components/Pages/Aboutpage";
export default function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path= "ContactPage" element={<ContactPage/>} />
        <Route path="AboutPage" element={<AboutPage/>}/>
      </Routes>

   
    </div>
  );
}
