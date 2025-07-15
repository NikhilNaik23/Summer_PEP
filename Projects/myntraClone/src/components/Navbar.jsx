import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
const Navbar = () => {
  const categories = [
    { route: "/shop/men", name: "MEN" },
    { route: "/shop/women", name: "WOMEN" },
    { route: "/shop/kids", name: "KIDS" },
    { route: "/shop/home-living", name: "HOME" },
    { route: "/personal-care", name: "BEAUTY" },
    { route: "/shop/fwd-women", name: "GENZ" },
    { route: "/studio/home", name: "STUDIO" },
  ];
  return (
    <nav className="flex justify-evenly items-center pt-5 pb-5 border-b-2 border-white shadow-md shadow-gray-200">
      <div>
        <Link to={"/"}>
          <img src="logo.png" alt="logo" width={53} />
        </Link>
      </div>
      <div>
        <ul className="flex gap-8 font-bold text-black text-xs ">
          {categories.map((category, idx) => (
            <Link
              to={category.route}
              key={idx}
              className={`${category.name === "STUDIO" ? "relative" : ""}`}
            >
              {category.name}
              {category.name === "STUDIO" ? (
                <li className="absolute text-[10px] top-0 right-[-25px] text-[#ff3f6c] font-bold">
                  NEW
                </li>
              ) : (
                ""
              )}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex bg-gray-100 px-5 py-2 rounded items-center justify-center gap-5 focus-within:bg-white focus-within:border-1 focus-within:border-gray-200">
        <FiSearch className="text-gray-400 h-5 " />
        <input
          type="text"
          className="w-[25vw] outline-none"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="flex gap-5 items-center justify-center ">
        <div className="flex flex-col items-center font-semibold h-[40px]">
          <MdPersonOutline className="text-black text-lg" />
          <span className="text-[12px]">Profile</span>
        </div>
        <div className="flex flex-col items-center font-semibold h-[40px]">
          <CiHeart className="text-black text-lg" />
          <span className="text-[12px]">Wishlist</span>
        </div>
        <div className="flex flex-col items-center font-semibold h-[40px]">
          <BsBag className="text-black text-lg" />
          <span className="text-[12px]">Bag</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
