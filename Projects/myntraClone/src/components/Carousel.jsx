import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-6 py-10 bg-white">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="bg-gray-100 rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow h-full">
              <img
                src={product.image}
                alt={product.title}
                className="h-32 object-contain mb-4"
              />
              <h2 className="text-sm font-semibold text-gray-700 text-center line-clamp-2">
                {product.title}
              </h2>
              <p className="mt-2 text-green-600 font-bold">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
