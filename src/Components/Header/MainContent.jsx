import React from "react";

export default function MainContent({sharedCounter ,setSharedCounter}){
   
    const handleAdd =()=> {
        setSharedCounter(sharedCounter + 1)
      }
  
// return  
return(
    <button onClick={handleAdd} className="bg-blue-300 p-2 rounded">Click Me to increase cart counter</button>
)

}