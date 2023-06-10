import React from "react";
import { Link } from "react-router-dom";

const BookingCard = ({ name, route, image }) => {
  return (
    <Link
      to={route}
      className="group relative block h-64 sm:h-80 lg:h-96 w-96 aspect-square"
    >
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="object-cover text-white relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
      >
        <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <h2 className="mt-4 text-xl font-medium sm:text-2xl">{name}</h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">{name}</h3>

          <p className="mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            praesentium voluptatem omnis atque culpa repellendus.
          </p>

          <p className="mt-8 font-bold">Read more</p>
        </div>
      </div>
    </Link>
  );
};

export default BookingCard;
