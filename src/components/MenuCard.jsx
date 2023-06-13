import React, { useState } from "react";
import MenuModal from "./MenuModal";

const MenuCard = ({ title, image, name, price }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="group relative block overflow-hidden w-96 rounded-sm">
        <img
          onClick={() => setOpen(!open)}
          src={image}
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 cursor-pointer"
        />
        <div className="relative border border-gray-400 p-6 bg-[#fbffdc]">
          <h3 className="mt-4 text-3xl font-medium text-gray-900">{name}</h3>
          <p className="mt-1.5 text-lg text-gray-700">{price}</p>
        </div>
      </div>
      <MenuModal
        open={open}
        setOpen={setOpen}
        title={title}
        image={image}
        name={name}
        price={price}
      />
    </>
  );
};

export default MenuCard;
