import React from 'react'
export default function TstCounter(){
const [counter, setCounter] = React.useState(0);

const handleAdd= ()=> {
setCounter(counter+1)
}
const handleDecrement = ()=>{
  setCounter(counter-1)
}

  return (



<div
style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "300%",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "-15%",
}}
>
Counter App
<div
    style={{
        fontSize: "120%",
        
        position: "relative",
        top: "10vh",
    }}
>
    {counter}
</div>
<div className="buttons">
    <button
        style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginRight: "5px",
            backgroundColor: "green",
            borderRadius: "8%",
            color: "white",
        }}
        onClick={handleAdd}
    >
        Increment
    </button>
    <button
        style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "red",
            borderRadius: "8%",
            color: "white",
        }}
        onClick={handleDecrement}
    >
        Decrement
    </button>
</div>
</div>

)
}