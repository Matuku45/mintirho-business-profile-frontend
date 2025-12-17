import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logo} alt="Mintirho Logo" className="h-12 w-auto" />
          <span className="text-2xl font-bold">MINTIRHO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/company-profile">Company Profile</Link>
          <Link to="/products-services">Products & Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/management">Management</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/equipment">Equipment</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
{/* Mobile Navigation */}
<div
  className={`
    md:hidden
    overflow-hidden
    transition-all
    duration-500
    ease-in-out
    ${menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
  `}
>
  <nav className="bg-blue-800/95 backdrop-blur-md px-6 py-6 space-y-4">

    {[
      { name: "Company Profile", path: "/company-profile" },
      { name: "Products & Services", path: "/products-services" },
      { name: "Projects", path: "/projects" },
      { name: "Management", path: "/management" },
      { name: "Gallery", path: "/gallery" },
      { name: "Equipment", path: "/equipment" },
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" },
    ].map((item) => (
      <Link
        key={item.name}
        to={item.path}
        onClick={() => setMenuOpen(false)}
        className="
          block
          text-center
          text-lg
          font-semibold
          py-3
          rounded-xl
          bg-white/10
          hover:bg-yellow-400/90
          hover:text-blue-900
          transition
          duration-300
        "
      >
        {item.name}
      </Link>
    ))}

  </nav>
</div>

    </header>
  );
};

export default Header;
