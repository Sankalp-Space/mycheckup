import React from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaUserNurse, FaChartLine, FaCheckCircle, FaTools, FaClock, FaMicroscope } from 'react-icons/fa';

const TheMyCheckupEdge = () => {
  const features = [
    {
      icon: FaUserNurse,
      title: 'Expert Phlebotomists',
      desc: 'Safe and comfortable home sample collection by our trained professionals.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-100 to-blue-50'
    },
    {
      icon: FaChartLine,
      title: 'Accurate Results',
      desc: 'Advanced laboratory technology ensuring precise and reliable diagnostic results.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-100 to-green-50'
    },
    {
      icon: FaCheckCircle,
      title: 'Patient-Centric',
      desc: 'Seamless, trustworthy experience designed with your well-being at the center.',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-100 to-purple-50'
    },
    {
      icon: FaTools,
      title: 'Curated Packages',
      desc: 'Carefully selected test packages with affordable pricing for comprehensive health checks.',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-100 to-orange-50'
    },
    {
      icon: FaClock,
      title: 'Timely Reports',
      desc: 'Fast digital reports delivered promptly for quick health insights.',
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-100 to-red-50'
    },
    {
      icon: FaMicroscope,
      title: 'Precision & Speed',
      desc: 'Prioritizing accuracy, speed, and transparency in every diagnostic service.',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-100 to-teal-50'
    }
  ];

  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 relative overflow-visible">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pb-6"
        >
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-400 p-4 rounded-full mb-6">
            <FaFlask className="text-4xl text-white" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4 leading-[1.15]">The MyCheckup Edge</h2>
          <p className="text-cyan-200 text-lg max-w-2xl mx-auto">Why thousands trust us for their diagnostic needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                  <IconComponent className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TheMyCheckupEdge;
