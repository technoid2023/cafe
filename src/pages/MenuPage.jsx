import React from "react";
import Card from "../components/Card";
import Starter from "../assests/menu/starter/maxresdefault.jpg";
import Soup from "../assests/menu/soup/unnamed.jpg";
import VeggieBeverages from "../assests/menu/veggie/mango-milkshake-4-500x500.webp";
import Roll from "../assests/menu/roll/Kolkata-Style-Egg-Roll.jpg";
import Noodles from "../assests/menu/noodles/veg-noodles-vegetable-noodles-recipe.jpg";
import Gravy from "../assests/menu/gravy/chicken-gravy-recipe-indian-gravy-500x500.jpg";
import FriedRice from "../assests/menu/friedrice/5c54d05cca6ab7802eab031c_fried-rice-website-thumbnail-_ddbiaa.png";

const menu = [
  { title: "Starter", image: Starter },
  { title: "Soup", image: Soup },
  { title: "Veggie Beverages", image: VeggieBeverages },
  { title: "Roll", image: Roll },
  { title: "Noodles", image: Noodles },
  { title: "Gravy", image: Gravy },
  { title: "Fried Rice", image: FriedRice },
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
