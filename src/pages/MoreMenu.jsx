import React from "react";
import MenuCard from "../components/MenuCard";
// import { menu } from "../lib/menu";

import Veg from "../assests/menu/veg/Paneer.webp";
import NonVeg from "../assests/menu/non-veg/Chicken65.webp";
import Bengali from "../assests/menu/bengali/bengali.jpeg";
import Chinese from "../assests/menu/chinese/DimSums.webp";
import Italian from "../assests/menu/italian/Bruschetta.jpg";
import Snacks from "../assests/menu/snacks/snacks.jpeg";

const menu = [
  { title: "Veg", image: Veg, name: "Veg", price: "2000" },
  { title: "Non-Veg", image: NonVeg, name: "Veg", price: "2000" },
  { title: "Bengali", image: Bengali, name: "Veg", price: "2000" },
  { title: "Chinese", image: Chinese, name: "Veg", price: "2000" },
  { title: "Italian", image: Italian, name: "Veg", price: "2000" },
  { title: "Snacks", image: Snacks, name: "Veg", price: "2000" },
];

const MoreMenu = () => {
  return (
    <div className="flex justify-center flex-wrap gap-8 mt-4 p-5">
      {menu.map(({ title, image, name, price }) => (
        <MenuCard title={title} image={image} name={name} price={price} />
      ))}
    </div>
  );
};

export default MoreMenu;
