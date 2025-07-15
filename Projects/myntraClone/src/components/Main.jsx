import React from "react";
import { useNavigate } from "react-router-dom";
import SimpleSlider from "./Carousel";
import ProductGrids from "./ProductsGrid";

const Main = ({ images }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <img
        src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/7/10/f8933bc1-126a-42a4-8deb-bffa95ba8bba1752150181703-FLAT-300-Off-on-1st-Purchase-Strip-----2--1-.jpg"
        alt="banner"
      />

      <div className={`flex ${images.length === 1 ? "flex-col" : ""}`}>
        {images.map((item, index) => (
          <img
            key={index}
            src={item.img || item.img2}
            onClick={() => navigate(item.route)}
            alt={`promo-${index}`}
            className={images.length === 1 ? "w-full" : "w-1/2 cursor-pointer"}
          />
        ))}
      </div>
      <div>
        <img
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/7/14/12c021dd-b2c3-447f-9072-72b83ed0a4801752479039028-Frame-1430103987.jpg"
          alt=""
        />
      </div>
      <SimpleSlider />
      <div>
        <img
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/9/weeDQWl8_801da60d90104b9daa9ab57493ab9cb4.jpg"
          alt=""
        />
      </div>
      <SimpleSlider />
      <div>
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/9/KOauov3N_0594c6ba07834c1b8ca455e012ff9bcf.jpg" alt="" />
      </div>
      <ProductGrids/>
    </div>
  );
};

export default Main;
