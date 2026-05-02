import React from "react";
import BannerCards from "./BannerCards";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40 ">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-6xl font-bold leading-snug text-black">
            Buy and Sell Your Books{" "}
            <span className="text-blue-700">For the Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quae
            consectetur ea expedita aut facilis, atque esse commodi dicta fuga,
            aspernatur quod vero necessitatibus adipisci ipsam! Dolor excepturi
            qui aut.
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for books"
              className="py-2 px-2 rounded-s-sm outline-none border border-gray-300"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-side">
          <BannerCards />
        </div>
      </div>
    </div>
  );
};

export default Banner;
