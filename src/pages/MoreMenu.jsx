import React from "react";
// import MenuCard from "../components/MenuCard";
import { useLocation } from "react-router-dom";
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
    <div className="flex justify-center flex-wrap gap-8 mt-4 p-5">
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
    </div>
  );
};

export default MoreMenu;
