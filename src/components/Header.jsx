import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image.png";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo / Brand */}
        <Link to="/" className="flex items-center space-x-3 group relative">
          
          {/* Gradient Glow Behind Logo */}
          <div className="
            absolute 
            inset-0 
            rounded-full 
            blur-xl 
            bg-gradient-to-r 
            from-yellow-400 
            to-blue-500 
            opacity-40 
            group-hover:opacity-70 
            transition 
            duration-700
          "></div>

          {/* Floating Logo */}
          <img 
            src={Logo}
            alt="Mintirho Logo"
            className="
              relative 
              h-12 
              w-auto 
              object-contain 
              animate-float 
              group-hover:scale-110 
              transition-transform 
              duration-500 
              ease-out
            "
          />

          <span className="text-2xl font-bold tracking-wide">
            MINTIRHO
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/company-profile" className="hover:text-yellow-400 transition duration-300">Company Profile</Link>
          <Link to="/products-services" className="hover:text-yellow-400 transition duration-300">Products and services</Link>
          <Link to="/projects" className="hover:text-yellow-400 transition duration-300">Projects</Link>
          <Link to="/management" className="hover:text-yellow-400 transition duration-300">Management</Link>
          <Link to="/gallery" className="hover:text-yellow-400 transition duration-300">Gallery</Link>
          <Link to="/equipment" className="hover:text-yellow-400 transition duration-300">Equipment</Link>
          <Link to="/about" className="hover:text-yellow-400 transition duration-300">About Us</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-300">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
