import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    name: yup.string().required("Full Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .matches(/\S+@\S+\.\S+/, "Email is not valid"),
    tel: yup.string().required("Mobile Number is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

const ContactUsPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ name, email, password, message }) => {
    console.log(name, email, password, message);
  };
  return (
    <>
      <h1 className="text-2xl font-bold sm:text-3xl text-center">Contact Us</h1>
      <div className="flex flex-col gap-10 justify-center items-center lg:flex-row lg:justify-around py-5">
        <div className="w-full lg:w-6/12 overflow-hidden flex flex-col items-center justify-center">
          <h1 className="text-lg font-bold text-center">
            Phone Number- 9876543211
          </h1>
          <h1 className="text-lg font-bold text-center">
            Email- example@domain.com
          </h1>

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.6193195499686!2d88.41285357497229!3d22.443349679583992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0272166e4cb263%3A0x27f12170efd9ddee!2sFuture%20Institute%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1686409941816!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 10 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-300 rounded-lg">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Message Us</h1>

            <p className="mt-4 text-gray-500">
              Contact with us and write a message you want to send us !
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          >
            <div>
              <label htmlFor="fullname" className="sr-only">
                Full Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Full Name"
                  {...register("name")}
                />
                <p className="text-red-500 font-semibold">
                  {errors.name?.message}
                </p>
              </div>
            </div>
            <div>
              <label htmlFor="tel" className="sr-only">
                Mobile
              </label>

              <div className="relative">
                <input
                  id="tel"
                  type="tel"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Mobile Number"
                  {...register("tel")}
                />
                <p className="text-red-500 font-semibold">
                  {errors.tel?.message}
                </p>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  {...register("email")}
                />
                <p className="text-red-500 font-semibold">
                  {errors.email?.message}
                </p>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>

              <div className="relative">
                <textarea
                  id="message"
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Write a message"
                  {...register("message")}
                />
                <p className="text-red-500 font-semibold">
                  {errors.message?.message}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
