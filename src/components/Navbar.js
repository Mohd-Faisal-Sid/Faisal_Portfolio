import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-16 bg-zinc-900 text-white fixed top-0 left-0 z-10">
      <div className="flex justify-between items-center h-full max-w-6xl mx-auto px-4">
        <div className="text-2xl font-bold"><span style={{ fontStyle: 'italic', color: 'Red' }}>M</span>ohammad <span style={{ fontStyle: 'italic', color: 'Red' }}>F</span>aisal</div>
        {/* Navbar Links */}
        <ul className={`md:flex ${nav ? 'flex' : 'hidden'} transition-all duration-300`}>
          <li className="p-4 cursor-pointer">
            <Link to="home" smooth={true} duration={500} onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="p-4 cursor-pointer">
            <Link to="about" smooth={true} duration={500} onClick={handleNav}>
              About
            </Link>
          </li>
          <li className="p-4 cursor-pointer">
            <Link to="experienceSection" smooth={true} duration={500} onClick={handleNav}>
              Work Experience
            </Link>
          </li>
          <li className="p-4 cursor-pointer">
            <Link to="projects" smooth={true} duration={500} onClick={handleNav}>
              Projects
            </Link>
          </li>
          <li className="p-4 cursor-pointer">
            <Link to="contact" smooth={true} duration={500} onClick={handleNav}>
              Contact
            </Link>
          </li>
        </ul>
        {/* Hire Me Button */}
        <div className="hidden md:block">
          <a href="#contact">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
              Hire Me
            </button>
          </a>
        </div>
        {/* Mobile Menu Toggle */}
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
