import React from "react";
import FavBookImg from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-24 flex flex-col md:flex-row justify-between items-center gap-16">
      <div className="md:w-1/2 relative group">
        <div className="absolute -inset-4 bg-blue-600/10 dark:bg-blue-400/5 rounded-[2rem] blur-2xl group-hover:bg-blue-600/20 transition duration-500"></div>
        <img src={FavBookImg} alt="Favorite Book" className="relative rounded-[2rem] shadow-2xl md:w-10/12 transform group-hover:scale-[1.02] transition duration-500" />
      </div>
      
      <div className="md:w-1/2 space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl leading-tight font-black text-gray-900 dark:text-white">
            Find Your Favorite <br />
            <span className="text-blue-600 dark:text-blue-400 underline decoration-blue-600/30 underline-offset-8">Book Here!</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
            Our curated library features the world's most influential literature. From hard-to-find classics to the latest bestsellers, your next great read is waiting right here.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-3xl font-black text-gray-900 dark:text-white">800+</h3>
                <p className="text-xs uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400">Listings</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-3xl font-black text-gray-900 dark:text-white">550+</h3>
                <p className="text-xs uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400">Users</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-3xl font-black text-gray-900 dark:text-white">1200+</h3>
                <p className="text-xs uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400">Downloads</p>
            </div>
        </div>

        <Link to="/shop" className="inline-block mt-8">
          <button className="bg-gray-900 dark:bg-blue-600 px-10 py-4 text-white font-bold rounded-2xl hover:bg-blue-700 dark:hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/10">
            Explore Collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavBook;
