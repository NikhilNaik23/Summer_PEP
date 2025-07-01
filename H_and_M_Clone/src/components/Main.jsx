import React from "react";
import { useLocation } from "react-router-dom";
const Main = () => {
  const location = useLocation();
  const images = [
    "https://image.hm.com/assets/hm/cd/e5/cde58322c39ccf772f38e62e0d69b65012bbbdc9.jpg?imwidth=1536",
    "https://image.hm.com/assets/hm/cd/e5/cde58322c39ccf772f38e62e0d69b65012bbbdc9.jpg?imwidth=1536",
    "https://image.hm.com/assets/hm/cd/e5/cde58322c39ccf772f38e62e0d69b65012bbbdc9.jpg?imwidth=1536",
    "https://image.hm.com/assets/hm/cd/e5/cde58322c39ccf772f38e62e0d69b65012bbbdc9.jpg?imwidth=1536",
    "https://image.hm.com/assets/hm/cd/e5/cde58322c39ccf772f38e62e0d69b65012bbbdc9.jpg?imwidth=1536",
    "https://image.hm.com/assets/hm/cd/e5/cde58322c39ccf772f38e62e0d69b65012bbbdc9.jpg?imwidth=1536",
    "https://image.hm.com/assets/hm/cd/e5/cde58322c39ccf772f38e62e0d69b65012bbbdc9.jpg?imwidth=1536",
    "https://image.hm.com/assets/hm/cd/e5/cde58322c39ccf772f38e62e0d69b65012bbbdc9.jpg?imwidth=1536",
    "https://image.hm.com/assets/hm/cd/e5/cde58322c39ccf772f38e62e0d69b65012bbbdc9.jpg?imwidth=1536",
    "https://image.hm.com/assets/hm/cd/e5/cde58322c39ccf772f38e62e0d69b65012bbbdc9.jpg?imwidth=1536",
    "https://image.hm.com/assets/hm/cd/e5/cde58322c39ccf772f38e62e0d69b65012bbbdc9.jpg?imwidth=1536",
    "https://image.hm.com/assets/hm/cd/e5/cde58322c39ccf772f38e62e0d69b65012bbbdc9.jpg?imwidth=1536",
  ];
  const upperImages = [
    {
      img: "https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Bedding_CE_wk23-28-2x3_1.jpg?imwidth=1536",
      name: "BEDDING",
    },
    {
      img: "https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Tableware_CE_wk23-28-2x3_3.jpg?imwidth=264 264w, https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Tableware_CE_wk23-28-2x3_3.jpg?imwidth=396 396w, https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Tableware_CE_wk23-28-2x3_3.jpg?imwidth=564 564w, https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Tableware_CE_wk23-28-2x3_3.jpg?imwidth=657 657w, https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Tableware_CE_wk23-28-2x3_3.jpg?imwidth=768 768w, https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Tableware_CE_wk23-28-2x3_3.jpg?imwidth=820 820w, https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Tableware_CE_wk23-28-2x3_3.jpg?imwidth=1260 1260w, https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Tableware_CE_wk23-28-2x3_3.jpg?imwidth=1536 1536w",
      name: "TABLEWARE",
    },
  ];
  const lowerImages = [
    {
      img: "https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Towels_CE_wk23-28-2x3_5.jpg?imwidth=264 264w, https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Towels_CE_wk23-28-2x3_5.jpg?imwidth=396 396w, https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Towels_CE_wk23-28-2x3_5.jpg?imwidth=564 564w, https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Towels_CE_wk23-28-2x3_5.jpg?imwidth=657 657w, https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Towels_CE_wk23-28-2x3_5.jpg?imwidth=768 768w, https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Towels_CE_wk23-28-2x3_5.jpg?imwidth=820 820w, https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Towels_CE_wk23-28-2x3_5.jpg?imwidth=1260 1260w, https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Towels_CE_wk23-28-2x3_5.jpg?imwidth=1536 1536w",
      name: "TOWELS",
    },
    {
      img: "https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Decorations_CE_wk23-28-2x3_4.jpg?imwidth=1536",
      name: "DECORATIONS",
    },
  ];
  return (
    <div className="">
      {/* two horizontal images */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <img
            className="max-h-[50vh] min-w-full md:max-h-[75vh] md:min-w-full object-cover"
            src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-26/7002D-V26-4x5.jpg?imwidth=4800"
          ></img>
          <div className="flex justify-between pl-5 pr-5">
            <p className="uppercase">New In: TableWare</p>
            <p className="uppercase underline">Shop now</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="min-h-[50vh] min-w-full md:min-h-[80vh] md:min-w-full object-cover"
            src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-26/7002B-V26-16x9.jpg?imwidth=4800"
          ></img>
          <div className="absolute top-0 flex flex-col justify-center gap-y-10  items-center w-full h-full">
            <p className="uppercase font-extrabold text-white text-center text-4xl md:text-6xl">
              Vacation Ready
            </p>
            <span className="uppercase underline bg-white text-black">
              Shop now
            </span>
          </div>
        </div>
      </div>
      {/* products in grid */}
      <div className="mt-20 flex flex-col ">
        <div className="flex justify-between p-5">
          <p className="uppercase">New in</p>
          <p className="uppercase underline">View All</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6">
          {images.map((image, idx) => (
            <div key={idx}>
              <img src={image} />
            </div>
          ))}
        </div>
      </div>
      {/* 4 Images */}
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl justify-center items-center">
          {upperImages.map((image, idx) => (
            <div key={idx} className="">
              <div className="flex flex-col pb-10">
                <img
                  src={image.img}
                  className="md:h-screen object-cover"
                  alt={image.name}
                />
                <p className="hover:underline md:text-2xl">{image.name}</p>
                <p className="uppercase md:text-xl">Explore</p>
              </div>
            </div>
          ))}
          {lowerImages.map((image, idx) => (
            <div key={idx} className="">
              <div className="flex flex-col pb-10">
                <img
                  src={image.img}
                  className="h-screen object-cover"
                  alt={image.name}
                />
                <p className="hover:underline md:text-2xl">{image.name}</p>
                <p className="uppercase md:text-xl">Explore</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="m-5">
        <h2 className="uppercase text-2xl">Home décor</h2>
        <br />
        <p className="text-xl">
          Level up your interior aesthetics with our home décor range. Whether
          you've moved into a new home, or you want to breathe new life into
          your existing living space, our collection has every room in the house
          covered. Our furniture edit offers stunning side tables and comfy
          lounge chairs, plus there’s an array of chic lighting to create a
          calming ambience. Looking for those finishing touches? Check out our
          beautiful bed linen, and top it off by scrolling for decorative
          cushions and cushion covers, or create textured layers with blankets
          and throws. When it comes to decorations, add scented candles to your
          bathroom, give your favorite plants a place to call home in our chic
          plant pots, or experiment with wall hangings and elegant glassware.
          Whether your preferred style is minimalistic or bold, we've got
          something to suit every taste in our home décor range.
        </p>
        <p className="pt-20 m-10 ">HM.com/<span className="font-extrabold text-xl">{location.pathname === "/" ? "Home" : location.pathname}</span></p>
      </div>
    </div>
  );
};

export default Main;
