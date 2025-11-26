import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaStar } from 'react-icons/fa';

const LegacyOfExcellence = () => {
  const awards = [
    {
      icon: FaAward,
      title: 'Asia Excellence Awards 2025',
      desc: 'Recognized for outstanding performance and innovation in healthcare diagnostics across Asia.',
      color: 'from-yellow-500 to-amber-600'
    },
    {
      icon: FaTrophy,
      title: 'Top Healthcare Awards 2025',
      desc: 'Honored as a leader in healthcare innovation and patient-centric diagnostic services.',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20 relative overflow-visible">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-10">⭐</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10">🏆</div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pb-6"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-full mb-6">
            <FaTrophy className="text-4xl text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4 leading-[1.15]">Legacy of Excellence</h2>
          <p className="text-gray-600 text-lg">Recognized and honored for our commitment to diagnostic excellence</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-yellow-200 relative overflow-visible group"
              >
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-yellow-100 rounded-full opacity-0 group-hover:opacity-50 transition-all"></div>
                
                <div className={`bg-gradient-to-r ${award.color} p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 relative z-10`}>
                  <IconComponent className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{award.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {award.desc}
                </p>
                <div className="mt-6 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LegacyOfExcellence;
