import React, { useState } from 'react';
import { FaHome, FaSignInAlt, FaFlask, FaBoxOpen, FaEnvelope, FaHeartbeat, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-600 shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-white p-2 rounded-full group-hover:shadow-lg group-hover:shadow-blue-300 transition-all duration-300">
            <FaHeartbeat className="text-2xl text-blue-600" />
          </div>
          <span className="text-2xl font-bold text-white hidden sm:inline">MyCheckup</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1 text-white text-base font-medium">
            <li>
              <Link to="/" className="flex items-center px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
                <FaHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="flex items-center px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
                <FaSignInAlt className="mr-2" /> Login
              </Link>
            </li>
            <li>
              <Link to="/tests" className="flex items-center px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
                <FaFlask className="mr-2" /> Tests
              </Link>
            </li>
            <li>
              <Link to="/packages" className="flex items-center px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
                <FaBoxOpen className="mr-2" /> Packages
              </Link>
            </li>
            <li>
              <a href="mailto:info@mycheckup.co.in" className="flex items-center px-3 py-2 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 hover:scale-105">
                <FaEnvelope className="mr-2" /> Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-blue-600 to-teal-500 shadow-xl">
            <ul className="flex flex-col space-y-2 p-4 text-white">
              <li>
                <Link to="/" className="flex items-center px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all" onClick={() => setIsOpen(false)}>
                  <FaHome className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="flex items-center px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all" onClick={() => setIsOpen(false)}>
                  <FaSignInAlt className="mr-2" /> Login
                </Link>
              </li>
              <li>
                <Link to="/tests" className="flex items-center px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all" onClick={() => setIsOpen(false)}>
                  <FaFlask className="mr-2" /> Tests
                </Link>
              </li>
              <li>
                <Link to="/packages" className="flex items-center px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all" onClick={() => setIsOpen(false)}>
                  <FaBoxOpen className="mr-2" /> Packages
                </Link>
              </li>
              <li>
                <a href="mailto:info@mycheckup.co.in" className="flex items-center px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all">
                  <FaEnvelope className="mr-2" /> Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
