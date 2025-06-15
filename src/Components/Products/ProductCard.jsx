export default function ProductsContainer({ categoryProducts, cart, setCart }) {
  function handleAddToCart(item) {
    // console.log("add to cart clicked");
    // console.log(item);
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    // console.log("updatedCart:", updatedCart);
  }

  return (
    <div
      id="products-container"
      className="grid-col-1 grid gap-5 bg-white px-4 py-2 md:grid-cols-4"
    >
      {categoryProducts.map((product) => {
        return (
          <div
            key={product.id}
            id="productCard"
            className="bg-white flex gap-4 flex-col 
             rounded p-2 items-start shadow-lg break-words justify-between"
          >
            <div id="imgContainer" className="w-full rounded h-80 p-4">
              <img
                id="productImg"
                src={`${product.image}`}
                className="w-full rounded h-full object-contain"
              ></img>
            </div>
            <div id="textContainer" className="flex flex-col gap-2">
              <h1
                id="productTitle"
                className="md:text-2xl font-bold text-xl line-clamp-1"
              >
                {product.title}
              </h1>
              <p
                id="description"
                className="text-gray-600 text-sm md:text-base break-words line-clamp-3"
              >
                {product.description}
              </p>
            </div>
            <div
              id="productFooter"
              className="flex flex-col items-start justify-center w-full gap-4"
            >
              <h4
                id="price"
                className="text-orange-600 text-xl font-bold bg-white"
              >
                Price: {product.price}$
              </h4>
              <hr id="footerSeparator" className="w-full h-1 text-gray-900" />
              <button
                className="w-full h-fit bg-cyan-600 text-white rounded-xl text-center md:text-lg text-sm p-2 hover:bg-cyan-900 active:bg-cyan-900"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
