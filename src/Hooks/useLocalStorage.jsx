import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
 const [value, setValue]= useState(()=>{
     const storedValue = localStorage.getItem(key)
   if (!storedValue){
    return initialValue
   }
   

    if (Array.isArray(JSON.parse(storedValue))){
        return JSON.parse(storedValue)
    }else{
        return initialValue
    }
 }
 )

 useEffect(()=>{
localStorage.setItem(key,(JSON.stringify(value)))
 }, [key,value])

 return[value,setValue]
}

