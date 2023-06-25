import React from "react";
import Resturant from "../assests/bg-hero.jpg";
import { Link } from "react-router-dom";
import PopUp from "../components/PopUp";

const cards = [
  {
    title: "Master Chefs",
    def: "A Master Chef is a professional cook who has reached the highest level of culinary skill and expertise.",
  },
  {
    title: "Quality Food",
    def: "Quality food is not just about taste, but also about nutritional value, safety, and sustainability.",
  },
  {
    title: "Online Order",
    def: "Online ordering refers to the process of placing an order for goods or services using the mobile device.",
  },
  {
    title: "24/7 Service",
    def: "24/7 service refers to a business or organization that operates around the clock, 24 hours a day, 7 days a week.",
  },
];

const HomePage = () => {
  return (
    <>
      <PopUp />
      <div
        className="h-[600px] object-cover bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${Resturant})`,
        }}
      >
        <div class="w-full h-full flex justify-center items-center backdrop-brightness-50">
          <div className="w-[596px] flex justify-center items-center">
            <span class="text-white text-4xl w-1/2 text-center">
              Enjoy Your Meal !
            </span>
            <Link
              className="group relative inline-block focus:outline-none focus:ring"
              to="/order"
            >
              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

              <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                Order Online !
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 p-10">
        {cards.map(({ title, def }) => (
          <div className="relative block rounded-sm border-t-4 border-yellow-600 p-4 shadow-xl sm:p-6 lg:p-8 w-60 aspect-square">
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 className="text-3xl font-bold sm:text-4xl">{title}</h3>
            </div>
            <p className="mt-4 font-medium text-gray-500">{def}</p>
          </div>
        ))}
      </div>

      <section className="bg-gray-50">
        <div className="mx-auto px-4 py-10 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Don't waste your time !
              <strong className="font-extrabold text-yellow-300  sm:block">
                Order now.
              </strong>
            </h1>
            <p className="mt-4 sm:text-xl/relaxed">
              Order from Swiggy Or Zomato
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/order"
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              >
                Order from Swiggy
              </Link>
              <Link
                to="/order"
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              >
                Order from Zomato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
