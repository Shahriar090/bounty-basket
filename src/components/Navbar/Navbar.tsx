"use client";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaRegHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { useState } from "react";
import { navItems } from "./navItems";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <header className="header-container fixed top-0 left-0 right-0 z-50">
        {/* header top section  */}
        <div className="header-top-section hidden lg:w-full max-w-screen-2xl mx-auto bg-[#F3FAF5] h-12 lg:flex justify-between items-center px-36  border-b">
          <div>
            <ul className="flex items-center space-x-5 font-medium text-gray-700">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="contact flex items-center space-x-5">
            <div className="phone flex items-center space-x-2 font-medium text-gray-700">
              <p>
                <FaPhoneVolume className="text-[#27AE60] text-xl" />
              </p>
              <p>+88 01849-682517</p>
            </div>
            <div className="email flex items-center space-x-2 font-medium text-gray-700">
              <p>
                <MdMarkEmailUnread className="text-[#27AE60] text-xl" />
              </p>
              <p>bountybasket@gmail.com</p>
            </div>
          </div>
        </div>

        {/* header middle section */}
        <div className="header-middle-section hidden bg-white w-full max-w-screen-2xl mx-auto px-36 h-16 lg:flex justify-between items-center">
          <div className="logo">
            <h1 className="font-semibold text-black text-2xl md:text-3xl">
              Bounty <span className="text-[#27AE60]">Basket</span>
            </h1>
          </div>
          <div className="search">
            <form className="flex">
              <input
                type="text"
                placeholder="Search Product..."
                className="px-5 py-2 border"
              />
              <input
                type="text"
                placeholder="All Categories"
                className="px-5 py-2 border"
              />
              <input
                type="submit"
                className="px-3 py-2 border bg-[#27AE60] text-white"
              />
            </form>
          </div>
          <div className="user-interactions flex items-center space-x-5 text-xl text-[#27AE60]">
            <FaRegHeart />
            <FaShoppingBag />
            <FaUser />
          </div>
        </div>

        {/* main navigation bar */}
        <nav className="w-full max-w-screen-2xl mx-auto h-20 bg-green-600 hidden lg:flex items-center justify-between px-36">
          <div className="dropdown">
            <select name="category" id="all-categories" className="p-2 border">
              <option value="">Select By Categories</option>
              <option value="salt-water-fish">Salt Water Fish</option>
              <option value="fresh-water-fish">Fresh Water Fish</option>
              <option value="deep-sea-fish">Deep Sea Fish</option>
              <option value="brackish-water-fish">Brackish Water Fish</option>
              <option value="cold-water-fish">Cold Water Fish</option>
            </select>
          </div>
          <div className="nav-items flex space-x-5">
            {navItems.map((item, index) => (
              <li key={index} className="text-white text-lg ">
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </div>
          <div className="login-button">
            <button className="px-8 py-2 bg-[#FFBB38] text-black border-0 rounded-sm font-medium">
              Login
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
