import React from 'react';
import { FaEnvelope, FaPhone, FaHeartbeat, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white pt-16 pb-8 mt-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-cyan-400 p-2 rounded-full">
                <FaHeartbeat className="text-xl text-blue-900" />
              </div>
              <span className="text-2xl font-bold">MyCheckup</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in diagnostic healthcare. Bringing advanced medical testing to your doorstep.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="/tests" className="hover:text-cyan-400 transition-colors">Tests</a></li>
              <li><a href="/packages" className="hover:text-cyan-400 transition-colors">Packages</a></li>
              <li><a href="/login" className="hover:text-cyan-400 transition-colors">Login</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:info@mycheckup.co.in" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                <FaEnvelope className="text-lg" />
                <span className="text-sm">info@mycheckup.co.in</span>
              </a>
              <a href="tel:+911234567890" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                <FaPhone className="text-lg" />
                <span className="text-sm">+91 12345 67890</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm text-center md:text-left mb-6 md:mb-0">
            <p>&copy; {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">MyCheckup</span>. All rights reserved.</p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
