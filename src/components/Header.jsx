import React from 'react';
import { FaHome, FaSignInAlt, FaFlask, FaBoxOpen, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
        <div className="text-2xl font-bold text-blue-700">My Checkup</div>
        <nav>
          <ul className="flex space-x-8 text-gray-700 text-lg">
            <li>
              <Link to="/" className="flex items-center hover:text-blue-600 transition-colors duration-300">
                <FaHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="flex items-center hover:text-blue-600 transition-colors duration-300">
                <FaSignInAlt className="mr-2" /> Login/Signup
              </Link>
            </li>
            <li>
              <Link to="/tests" className="flex items-center hover:text-blue-600 transition-colors duration-300">
                <FaFlask className="mr-2" /> Tests
              </Link>
            </li>
            <li>
              <Link to="/packages" className="flex items-center hover:text-blue-600 transition-colors duration-300">
                <FaBoxOpen className="mr-2" /> Curated Packages
              </Link>
            </li>
            <li>
              <a href="mailto:info@mycheckup.co.in" className="flex items-center hover:text-blue-600 transition-colors duration-300">
                <FaEnvelope className="mr-2" /> Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
