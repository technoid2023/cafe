import React from "react";
import BookingCard from "../components/BookingCard";
import Table from "../assests/booking/table-dining-sets.webp";
import Party from "../assests/booking/party.jpeg";

const booking = [
  {
    name: "Table Booking",
    route: "table-booking",
    image: Table,
  },
  {
    name: "Party Booking ",
    route: "party-booking",
    image: Party,
  },
];

const Bookings = () => {
  return (
    <>
      <h1 className="text-2xl font-bold sm:text-3xl text-center">Booking</h1>
      <div className="flex justify-center items-center flex-wrap gap-8 mt-4 p-8">
        {booking.map(({ name, route, image }) => (
          <BookingCard name={name} route={route} image={image} />
        ))}
      </div>
    </>
  );
};

export default Bookings;
