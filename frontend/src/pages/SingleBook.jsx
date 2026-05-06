import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import { FaShoppingCart, FaBookOpen } from "react-icons/fa";

const SingleBook = () => {
  const bookData = useLoaderData();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { bookTitle, authorName, imgUrl, category, bookDescription, bookPDFURL } = bookData;

  // Use a fallback premium price since it's not currently in the DB schema
  const price = "$29.99";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8 mt-16 transition-colors duration-300 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-xl bg-opacity-80 dark:bg-opacity-80 border border-white/20">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Column: Image with Floating Effect */}
            <div className="lg:w-1/2 p-10 lg:p-16 flex justify-center items-center bg-gradient-to-tr from-indigo-50/50 to-blue-50/50 dark:from-gray-800/50 dark:to-gray-700/50 relative overflow-hidden">
              {/* Decorative background blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl"></div>
              
              <div className="relative group z-10">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
                <img 
                  src={imgUrl} 
                  alt={bookTitle} 
                  className="relative rounded-xl shadow-2xl transform transition duration-500 group-hover:scale-105 group-hover:-translate-y-3 object-cover max-h-[550px] w-auto border-4 border-white/10"
                />
              </div>
            </div>

            {/* Right Column: Product Details */}
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-white dark:bg-gray-800">
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-wider uppercase mb-6 self-start">
                {category || "Category"}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 leading-tight mb-4">
                {bookTitle}
              </h1>
              
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 font-medium flex items-center gap-2">
                Written by <span className="text-gray-900 dark:text-white font-bold border-b-2 border-indigo-500">{authorName}</span>
              </p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">{price}</span>
              </div>
              
              <div className="w-full h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent dark:from-gray-700 dark:via-gray-600 mb-8"></div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Synopsis</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-10 leading-relaxed text-lg font-light">
                {bookDescription}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mt-auto">
                <button 
                  onClick={() => addToCart(bookData)}
                  className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <FaShoppingCart size={22} />
                  <span>Add to Cart</span>
                </button>
                
                <button 
                  onClick={() => {
                    addToCart(bookData);
                    navigate('/cart');
                  }}
                  className="flex-1 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/30 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                >
                  <span>Buy Now</span>
                </button>
                
                {bookPDFURL && (
                  <a 
                    href={bookPDFURL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-200 dark:border-indigo-700/50 font-bold py-4 px-8 rounded-2xl hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900"
                  >
                    <FaBookOpen size={22} />
                    <span>Read Excerpt</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
