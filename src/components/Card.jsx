import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, image }) => {
  return (
    <Link
      to={title.split(" ").join("").toLowerCase()}
      className="w-96 aspect-square object-cover relative block overflow-hidden rounded-xl  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/25"></div>
      <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
        <div className="sm:pt-18 pt-12 text-white lg:pt-24">
          <h3 className="text-3xl font-bold sm:text-5xl">{title}</h3>
          <p className="text-2xl">Try Now</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
