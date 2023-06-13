import React from "react";

const PartyBookingPage = () => {
  return (
    <div>
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-300 rounded-lg">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Party Booking</h1>

          <p className="mt-4 text-gray-500">Book for Party</p>
        </div>

        <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="fullname" className="sr-only">
              Full Name
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Full Name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="tel" className="sr-only">
              Mobile
            </label>

            <div className="relative">
              <input
                type="tel"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
          <div>
            <label htmlFor="tel" className="sr-only">
              Date Of Booking
            </label>

            <div className="relative">
              <input
                type="date"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Date Of Booking"
              />
            </div>
          </div>
          <div>
            <label htmlFor="tel" className="sr-only">
              Time Of Booking
            </label>

            <div className="relative">
              <input
                type="time"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Time Of Booking"
              />
            </div>
          </div>
          <div>
            <label htmlFor="tel" className="sr-only">
              Number of Members
            </label>

            <div className="relative">
              <input
                type="number"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Number of Members"
              />
            </div>
          </div>
          <div>
            <label htmlFor="tel" className="sr-only">
              Total Tables
            </label>

            <div className="relative">
              <input
                type="number"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Total Tables"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>

            <div className="relative">
              <textarea
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Write a message"
              />
            </div>
          </div>

          <fieldset className="grid grid-cols-3 gap-4">
            <div>
              <input
                type="radio"
                name="DeliveryOption"
                value="Roof"
                id="Roof"
                className="peer hidden"
              />

              <label
                htmlFor="Roof"
                className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
              >
                <p className="text-gray-700">Roof</p>
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="DeliveryOption"
                value="Room"
                id="Room"
                className="peer hidden"
              />

              <label
                htmlFor="Room"
                className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
              >
                <p className="text-gray-700">Room</p>
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="DeliveryOption"
                value="Table"
                id="Table"
                className="peer hidden"
              />

              <label
                htmlFor="Table"
                className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
              >
                <p className="text-gray-700">Table</p>
              </label>
            </div>
          </fieldset>
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
  );
};

export default PartyBookingPage;
