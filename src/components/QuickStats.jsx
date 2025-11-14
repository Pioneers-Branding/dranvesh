import React from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiActivity, FiAward, FiTarget, FiHeart} = FiIcons;

const QuickStats = () => {
  const stats = [
    {
      icon: FiActivity,
      number: '1200+',
      label: 'Successful Surgeries',
      description: 'Complex oncological procedures',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600'
    },
    {
      icon: FiAward,
      number: '15+',
      label: 'International Awards',
      description: 'Global recognition & honors',
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-50',
      iconColor: 'text-secondary-600'
    },
    {
      icon: FiTarget,
      number: '98.5%',
      label: 'Success Rate',
      description: 'Robotic & laparoscopic procedures',
      color: 'from-primary-500 to-secondary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600'
    },
    {
      icon: FiHeart,
      number: '12+',
      label: 'Years Experience',
      description: 'Surgical oncology expertise',
      color: 'from-secondary-500 to-primary-600',
      bgColor: 'bg-secondary-50',
      iconColor: 'text-secondary-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{delay: 0.2}}
          >
            Excellence in Numbers
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.4}}
          >
            Transforming lives through precision surgery and compassionate care
          </motion.p>
        </motion.div>

        {/* Stats Grid - 4 items in one row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 40, scale: 0.9}}
              whileInView={{opacity: 1, y: 0, scale: 1}}
              transition={{delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100}}
              viewport={{once: true}}
              className="luxury-card group"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-luxury border border-white/50 hover:shadow-primary overflow-hidden">
                {/* Shine Effect */}
                <div className="absolute inset-0 shine-effect"></div>
                
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bgColor} rounded-full opacity-10 transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${stat.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative`}>
                    <SafeIcon icon={stat.icon} className={`w-10 h-10 ${stat.iconColor}`} />
                    {/* Pulse rings */}
                    <div className={`absolute inset-0 rounded-2xl ${stat.bgColor} opacity-20 pulse-ring`}></div>
                    <div className={`absolute inset-0 rounded-2xl ${stat.bgColor} opacity-10 pulse-ring`} style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <motion.h3
                    className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300"
                    whileInView={{scale: [0.8, 1.1, 1]}}
                    transition={{duration: 0.5, delay: index * 0.1 + 0.3}}
                    viewport={{once: true}}
                  >
                    {stat.number}
                  </motion.h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                    {stat.label}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: 0.8}}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of patients who have experienced exceptional care
          </p>
          <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-luxury hover:shadow-primary transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Schedule Your Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickStats;