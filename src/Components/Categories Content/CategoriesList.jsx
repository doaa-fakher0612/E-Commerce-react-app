import React, { useState, useEffect, useRef } from "react";

export default function CategoriesList(){

    

    const [ categoriesList, setCategoriesList] = React.useState([])

    console.log(categoriesList)
    useEffect (()=> {
        fetch ("https://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data =>  setCategoriesList(data))
        .catch(error => console.error("Error fetching categories:", error));
    
    }, [])

    return (
        <div id ="categoriesList" className = {` bg-green-400 grid grid-cols-2 items-center justify-between gap-4 text-center md:grid-cols-4`}>
            {
                categoriesList.map((category)=>{
                    {console.log(category)}
                    return(
                        <div className="break-words p-3 bg-neutral-200 rounded hover:text-orange-200 transition duration-300 cursor-pointer">
                            {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
                            {console.log("div rendered")}
                        </div>
                    )
                })
            }
        </div>

      
    )
}