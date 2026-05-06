import React from "react";
import BannerCards from "./BannerCards";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center transition-colors duration-300 min-h-screen">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-16 py-32 md:py-48">
        {/* Left Side */}
        <div className="md:w-3/5 space-y-10 h-full">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 text-sm font-bold tracking-widest uppercase rounded-full">
              Your Ultimate Literary Haven
            </span>
            <h2 className="text-6xl md:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Discover Stories That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Resonate
              </span>
            </h2>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
            Whether you're looking for timeless classics, modern masterpieces, or your next academic companion, our curated collection is built for the curious mind.
          </p>

          <div className="relative max-w-lg group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative flex items-center bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-xl border border-gray-100 dark:border-gray-700">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search for your next book..."
                className="flex-grow py-4 px-6 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/30">
                Search
              </button>
            </div>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <p className="text-3xl font-black text-gray-900 dark:text-white">12k+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold">Books</p>
            </div>
            <div className="w-px h-10 bg-gray-200 dark:bg-gray-700"></div>
            <div>
              <p className="text-3xl font-black text-gray-900 dark:text-white">5k+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold">Reviews</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-2/5 flex justify-center items-center scale-110">
          <BannerCards />
        </div>
      </div>
    </div>
  );
};

export default Banner;
