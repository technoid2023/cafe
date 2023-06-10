import React from "react";
import Card from "../components/Card";
import Veg from "../assests/menu/veg/Paneer.webp";
import NonVeg from "../assests/menu/non-veg/Chicken65.webp";
import Bengali from "../assests/menu/bengali/bengali.jpeg";
import Chinese from "../assests/menu/chinese/DimSums.webp";
import Italian from "../assests/menu/italian/Bruschetta.jpg";
import Snacks from "../assests/menu/snacks/snacks.jpeg";

const menu = [
  { title: "Veg", image: Veg },
  { title: "Non-Veg", image: NonVeg },
  { title: "Bengali", image: Bengali },
  { title: "Chinese", image: Chinese },
  { title: "Italian", image: Italian },
  { title: "Snacks", image: Snacks },
];

const MenuPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold sm:text-3xl text-center">Menu</h1>
      <div className="flex justify-center flex-wrap gap-8 mt-4 p-5">
        {menu.map(({ title, image }) => (
          <Card title={title} image={image} />
        ))}
      </div>
    </>
  );
};

export default MenuPage;
