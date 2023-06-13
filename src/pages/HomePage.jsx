import React from "react";
import Resturant from "../assests/bg-hero.jpg";
import { Link } from "react-router-dom";

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
      <div
        className="h-[600px] object-cover bg-cover bg-center"
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
              to="/menu"
            >
              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

              <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                Check Menus !
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
    </>
  );
};

export default HomePage;
