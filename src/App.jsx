import React from "react";
import Header from "./Components/Header";
import "./index.css";
import "./App.css";
import MainContent from "./Components/MainContent";


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
    </div>
  );
}
