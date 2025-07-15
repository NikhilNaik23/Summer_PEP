import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";

const Home = () => {
  return (
    <section className="px-15 py-5 bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              images={[
                {
                  img: "https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/7/14/21bea754-ee8e-425f-af12-c085de24dfae1752487923334-Desktop--1920x504-.jpg",
                  route: "/shop/women",
                },
                {
                  img2: "https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/7/14/08509a33-db79-4285-852d-068aab293ffb1752487923361-Desktop--1920x504--1.jpg",
                  route: "/shop/men",
                },
              ]}
            />
          }
        />
        <Route
          path="/shop/men"
          element={
            <Main
              images={[
                {
                  img: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/10/8Q06Bjd8_8f2963cf846b442cbd713a06ec78db7c.jpg",
                  route: "/shop/men",
                },
              ]}
            />
          }
        />
      </Routes>
    </section>
  );
};

export default Home;
