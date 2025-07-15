import React, { useEffect, useState } from "react";

export default function ProductGrids() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=18")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="px-6 py-10 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-24 object-contain mb-3"
            />
            <h2 className="text-xs font-semibold text-center line-clamp-2">
              {product.title}
            </h2>
            <p className="text-green-600 font-bold mt-2">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
