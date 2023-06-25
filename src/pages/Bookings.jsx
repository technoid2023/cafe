import React from "react";
import Table from "../assests/booking/table-dining-sets.webp";
import { Link } from "react-router-dom";
const Booking = () => {
  return (
    <>
      <Link to="/booking/table-booking">
        <h1 className="text-2xl font-bold sm:text-3xl text-center">Booking</h1>
        <div className="flex justify-center items-center flex-wrap gap-8 mt-4 p-20">
          <div className="group relative block h-64 sm:h-80 lg:h-96 w-96 aspect-square text-black">
            <span className="absolute inset-0 border-2 border-dashed border-black rounded-full"></span>
            <div className="rounded-lg object-cover bg-no-repeat h-full text-black relative flex transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <img src={Table} alt="" className="h-full object-cover" />
            </div>
            <h2 className="text-2xl text-center">Book Table</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Booking;
