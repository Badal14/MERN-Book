import React, { useState, useEffect } from "react";
import { useContext } from "react"; 
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { user } = useContext(AuthContext);

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
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300 shadow-lg" : ""
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
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu Toggle Button */}
        <div>
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none flex items-center gap-2"
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
