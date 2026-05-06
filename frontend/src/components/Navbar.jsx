import React, { useState, useEffect } from "react";
import { useContext } from "react"; 
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { HiSun, HiMoon } from "react-icons/hi";
import { CartContext } from "../context/CartProvider";
import { ThemeContext } from "../context/ThemeProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { user } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-50">
      <nav
        className={`flex items-center justify-between py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300 dark:bg-gray-800 shadow-lg" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>
        </div>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex space-x-12">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                className="block text-base text-black dark:text-white uppercase cursor-pointer hover:text-blue-700 dark:hover:text-blue-400"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu Toggle Button */}
        <div className="flex items-center gap-6">
          <button 
            onClick={toggleTheme}
            className="text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-yellow-400 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
          </button>
          
          <Link to="/cart" className="relative flex items-center text-black dark:text-white hover:text-blue-700 dark:hover:text-blue-400">
            <FaShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-md">
                {cartItems.length}
              </span>
            )}
          </Link>
          {user ? (
            <span className="hidden md:block text-black dark:text-white font-medium">{user.name || user.email}</span>
          ) : (
            <Link to="/login" className="hidden md:block text-blue-700 dark:text-blue-400 font-medium hover:text-blue-900 dark:hover:text-blue-300">
              Log In
            </Link>
          )}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none flex items-center gap-2"
          >
            {isMenuOpen ? (
              <FaXmark className="h-5 w-5 text-black" />
            ) : (
              <FaBarsStaggered className="h-5 w-5 text-black" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Items */}
      <div
        className={`absolute top-16 left-0 w-full z-50 space-y-4 px-4 py-7 bg-blue-700 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            className="text-white block text-base uppercase cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            {link}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
