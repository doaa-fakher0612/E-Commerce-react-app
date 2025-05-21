

export default function CategoriesList(props){

    return (
        <div id ="categoriesList" className = {` grid grid-cols-2 items-center justify-between gap-4 text-center md:grid-cols-4`}>
            {
                props.categoriesList.map((category)=>{
                   
                    return(
                        <div className="break-words p-3 bg-neutral-200 rounded hover:text-orange-500 transition duration-300 cursor-pointer">
                            {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
                       
                        </div>
                    )
                })
            }
        </div>

      
    )
}