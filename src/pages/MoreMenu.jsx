import React from "react";
// import MenuCard from "../components/MenuCard";
import { Link, useLocation } from "react-router-dom";
// import { menu } from "../lib/menu";
import starter from "../assests/menu/starter/st.jpeg";
import soup from "../assests/menu/soup/s.jpeg";
import veggiebeverages from "../assests/menu/veggie/v.jpeg";
import roll from "../assests/menu/roll/roll.jpeg";
import noodles from "../assests/menu/noodles/n.jpeg";
import gravy from "../assests/menu/gravy/g.jpeg";
import friedrice from "../assests/menu/friedrice/f.jpeg";

// import Veg from "../assests/menu/veg/Paneer.webp";
// import NonVeg from "../assests/menu/non-veg/Chicken65.webp";
// import Bengali from "../assests/menu/bengali/bengali.jpeg";
// import Chinese from "../assests/menu/chinese/DimSums.webp";
// import Italian from "../assests/menu/italian/Bruschetta.jpg";
// import Snacks from "../assests/menu/snacks/snacks.jpeg";

// const menu = [
//   { title: "Veg", image: Veg, name: "Veg", price: "2000" },
//   { title: "Non-Veg", image: NonVeg, name: "Veg", price: "2000" },
//   { title: "Bengali", image: Bengali, name: "Veg", price: "2000" },
//   { title: "Chinese", image: Chinese, name: "Veg", price: "2000" },
//   { title: "Italian", image: Italian, name: "Veg", price: "2000" },
//   { title: "Snacks", image: Snacks, name: "Veg", price: "2000" },
// ];

const MoreMenu = () => {
  const location = useLocation();
  console.log(location.pathname);
  const st = location.pathname;
  const substringToRemove = "/menu/";
  const newString = st.replace(substringToRemove, "");
  return (
    <div className="flex flex-col items-center justify-center flex-wrap gap-8 mt-4 p-5">
      {/* {menu.map(({ title, image, name, price }) => (
        <MenuCard title={title} image={image} name={name} price={price} />
      ))} */}
      <img
        src={
          (newString === "starter" && starter) ||
          (newString === "soup" && soup) ||
          (newString === "veggiebeverages" && veggiebeverages) ||
          (newString === "roll" && roll) ||
          (newString === "noodles" && noodles) ||
          (newString === "gravy" && gravy) ||
          (newString === "friedrice" && friedrice)
        }
        alt=""
      />
      <Link
        className="group relative inline-block focus:outline-none focus:ring"
        to="/order"
      >
        <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

        <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
          Order Now
        </span>
      </Link>
    </div>
  );
};

export default MoreMenu;
