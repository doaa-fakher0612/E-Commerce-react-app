import { useState, useRef } from "react";

export default function CategoriesList(props) {
  <style></style>;

 const [selected, setSelected] = useState(null);

  return (
    <div
      id="categoriesList"
      className={`grid grid-cols-2 items-center justify-between gap-4 text-center md:grid-cols-4`}
    >
      {props.categoriesList.map((category) => {
          const isSelected = selected === category;
        return (
          <button
            key={category}
            className= {`break-words p-3 bg-neutral-200 rounded hover:text-orange-500 transition duration-300 cursor-pointer ${isSelected ? "text-orange-500" :"text-black"} `}
           
            onClick={() => {
                 setSelected(category);
                props.setSelectedCategory(category)
                }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
          </button>
        );
      })}
    </div>
  );
}
