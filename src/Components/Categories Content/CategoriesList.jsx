import {  useCallback } from "react";

export default function CategoriesList({
  categoriesList,

  selectedCategory,
  setSelectedCategory,
})


{
const handleCategoryClick = useCallback(
  (category) => {
    setSelectedCategory(category);
  },
  [setSelectedCategory]
);
  return (

    <div
      id="categoriesList"
      className={`grid grid-cols-2 items-center justify-between gap-4 text-center md:grid-cols-4`}
    >
      {categoriesList.map((category) => {
        const isSelected = selectedCategory === category;
        {
          console.log("selectedCategory: "+selectedCategory);
          console.log("category: "+ category)
        }
        return (
          <button
            key={category}
            className={`break-words p-3 bg-neutral-200 rounded hover:text-orange-500 transition duration-300 cursor-pointer 
              ${isSelected ? "text-orange-500" : "text-black"}`}
            onClick={() => {
              handleCategoryClick(category);
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
          </button>
        );
      })}
    </div>
  );
}
