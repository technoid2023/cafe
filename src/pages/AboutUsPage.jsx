import React from "react";
import Team from "../components/Team";

const AboutUsPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold sm:text-3xl text-center">About Us</h1>

      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 p-3">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              THE STORY
            </h2>
            <p className="text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            alt="Student"
            src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-28 w-full object-cover sm:h-4/6"
          />
        </div>
      </section>

      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 p-3">
      <div className="flex justify-center items-center">
          <img
            alt="Student"
            src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-28 w-full object-cover sm:h-4/6"
          />
        </div>
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              OUR MISSION (WORLD PROBLEM)
            </h2>
            <p className="text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
          </div>
        </div>
      </section>

      <Team />
    </>
  );
};

export default AboutUsPage;
