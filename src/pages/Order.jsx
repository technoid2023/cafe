import React from "react";
import BookingCard from "../components/BookingCard";
import Swiggy from "../assests/order/download.png";
import Zomato from "../assests/order/zomato.png";
import Whatsapp from "../assests/order/whatsapp.webp";

const booking = [
  {
    name: "Order from Swiggy",
    image: Swiggy,
    link: "https://www.swiggy.com/menu/55398?source=sharing",
  },
  {
    name: "Order from Zomato",
    image: Zomato,
    link: "https://www.zomato.com/kolkata/veggie-corner-liluah-howrah",
  },
  {
    name: "Order from Whatsapp",
    image: Whatsapp,
    link: "/order/whatsapp",
  },
];

const Bookings = () => {
  return (
    <>
      <h1 className="text-2xl font-bold sm:text-3xl text-center">Order</h1>
      <div className="flex justify-center items-center flex-wrap gap-8 mt-4 p-20">
        {booking.map(({ name, link, image }) => (
          <BookingCard name={name} image={image} link={link} />
        ))}
      </div>
    </>
  );
};

export default Bookings;
