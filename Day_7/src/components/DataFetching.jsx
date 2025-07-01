import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-3 ">
          {products.map((product, idx) => (
            <div className="border-2 p-2 rounded-lg flex flex-col" key={idx}>
              <img src={product.images[0]} alt={product.title} className="w-full" />
              <h3 className="text-xl md:text-2xl lg:text-4xl p-5">
                {product.title}
              </h3>
              <p className="p-5">{product.description}</p>
              <div className="relative pl-5 pt-2">
                <p className="text-lg font-bold absolute bottom-0">${product.price}</p>
              </div>
              <div className=" p-5 flex justify-around items-center ">
                <button className="p-3 bg-yellow-500 hover:bg-yellow-600 rounded-xl text-white font-bold">Add To Cart</button>
                <button className="p-3 bg-green-500 hover:bg-green-600 rounded-xl text-white font-bold">Buy Now</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataFetching;
