import React from "react";
import { Link } from "react-router-dom";

const BookingCard = ({ name, link, image }) => {
  return (
    <Link to={link}>
      <div className="group relative block h-64 sm:h-80 lg:h-96 w-96 aspect-square text-black">
        <span className="absolute inset-0 border-2 border-dashed border-black rounded-full"></span>
        <div className="rounded-lg object-cover bg-no-repeat h-full text-black relative flex transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <img src={image} alt="" className="h-full object-cover" />
          <div className="p-4  absolute top-0"></div>
        </div>
        <h2 className="text-2xl text-center">{name}</h2>
      </div>
    </Link>
  );
};

export default BookingCard;
