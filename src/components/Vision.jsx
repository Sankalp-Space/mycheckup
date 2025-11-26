
import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaHeartbeat, FaHome } from 'react-icons/fa';

const Vision = () => {
  const cardVariants = {
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full mb-6 shadow-lg">
            <FaEye className="text-4xl text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">Our Vision</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Transforming healthcare through accessible, reliable diagnostics for every Indian home</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:border-blue-300 transition-all"
          >
            <div className="bg-gradient-to-br from-red-100 to-pink-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FaHeartbeat className="text-3xl text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Transform Healthcare</h3>
            <p className="text-gray-600 leading-relaxed">
              Making reliable, affordable diagnostics accessible to every home through advanced technology and compassionate service.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center border border-green-100 hover:border-green-300 transition-all"
          >
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FaHome className="text-3xl text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">At-Home Convenience</h3>
            <p className="text-gray-600 leading-relaxed">
              Redefining lab experience with convenience, transparency, and trust for India's most dependable diagnostic partner.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:border-blue-300 transition-all"
          >
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FaEye className="text-3xl text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Healthier Nation</h3>
            <p className="text-gray-600 leading-relaxed">
              Inspiring proactive health monitoring where quality healthcare begins with a simple, seamless checkup at your doorstep.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
