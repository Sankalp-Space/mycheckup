import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaFlask, FaTrophy, FaShieldAlt } from 'react-icons/fa';

const KnowMyCheckup = () => {
  const features = [
    { icon: FaFlask, title: 'Advanced Technology', desc: 'Cutting-edge lab equipment' },
    { icon: FaTrophy, title: 'Quality Assured', desc: 'Strict quality standards' },
    { icon: FaCheckCircle, title: 'Accurate Results', desc: 'Timely trustworthy reports' },
    { icon: FaShieldAlt, title: 'Secure Service', desc: 'Your privacy protected' }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">Know MyCheckup</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
      <p>
              <span className="font-semibold text-blue-600">MyCheckup</span> is built on a simple promise—bringing accurate, reliable, and affordable diagnostic testing straight to your doorstep. We combine advanced laboratory technology with seamless home sample collection to make preventive healthcare effortless and accessible.
            </p>
            <p>
              At <span className="font-semibold text-blue-600">MyCheckup</span>, every test is processed with strict quality standards, ensuring timely and trustworthy reports you can depend on.
            </p>
            <p>
              Driven by a mission to empower every individual with clear health insights, we aim to redefine diagnostics with transparency, precision, and care. <span className="font-semibold text-blue-600">MyCheckup</span> is more than a lab service—it's your partner in proactive, everyday wellness.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-xl text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KnowMyCheckup;
