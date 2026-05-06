import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { HiOutlineLogout, HiArrowLeft } from "react-icons/hi";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logout successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Logout failed: " + error.message);
      });
  };

  const handleCancel = () => {
    navigate(-1); // go back to the previous page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 transition-colors duration-300">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-[2rem] shadow-2xl overflow-hidden backdrop-blur-xl bg-opacity-80 dark:bg-opacity-80 border border-white/40 dark:border-gray-700/50 p-8 md:p-12 text-center transform transition-all">
        
        {/* Icon Container */}
        <div className="mx-auto w-24 h-24 bg-red-50 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-8 shadow-inner ring-4 ring-red-50 dark:ring-gray-800">
          <HiOutlineLogout className="w-10 h-10 text-red-500 dark:text-red-400 ml-1" />
        </div>
        
        {/* Text */}
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-4">
          Leaving so soon?
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg font-medium leading-relaxed">
          Are you sure you want to log out? You can always log back in later.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleCancel}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-gray-700 dark:text-gray-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
          >
            <HiArrowLeft className="w-5 h-5" />
            Cancel
          </button>
          
          <button
            onClick={handleLogout}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-red-500/40 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
          >
            Yes, Log Out
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Logout;
