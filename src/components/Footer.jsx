import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-100 text-center py-6 mt-12">
      <p className="text-gray-700">
        Contact us at - <a href="mailto:info@mycheckup.co.in" className="text-blue-600 hover:underline">info@mycheckup.co.in</a>
      </p>
      <p className="text-gray-500 mt-3">&copy; {new Date().getFullYear()} My Checkup. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
