import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiArrowRight, FiActivity, FiHeart, FiTarget, FiZap, FiUsers, FiShield} = FiIcons;

const ServicesOverview = () => {
  const services = [
    {
      image: 'https://dranveshdharanikota.com/photos/GI.webp',
      icon: FiActivity,
      title: 'GI & Gynecological Cancer Surgery',
      description: 'Advanced minimally invasive surgical techniques for gastrointestinal and gynecological cancers with precision and care.',
      features: ['Laparoscopic Surgery', 'Robotic Assistance', 'Faster Recovery'],
      link: '/services/gi-thoracic'
    },
    {
      image: 'https://dranveshdharanikota.com/photos/Oncoplastic-Breast-Surgery.webp',
      icon: FiHeart,
      title: 'Oncoplastic Breast Surgery',
      description: 'Combining cancer treatment with reconstructive techniques for optimal aesthetic and oncological outcomes.',
      features: ['Breast Conservation', 'Immediate Reconstruction', 'Aesthetic Excellence'],
      link: '/services/breast-oncoplastic'
    },
    {
      image: 'https://dranveshdharanikota.com/photos/Robotic.webp',
      icon: FiTarget,
      title: 'Robotic & Laparoscopic Oncology',
      description: 'State-of-the-art robotic surgery for precision cancer treatment with minimal invasiveness.',
      features: ['Da Vinci System', 'Precision Control', 'Minimal Scarring'],
      link: '/techniques/robotic-surgery'
    },
    {
      image: 'https://dranveshdharanikota.com/photos/CRS.webp',
      icon: FiZap,
      title: 'CRS & HIPEC Procedures',
      description: 'Cytoreductive surgery combined with heated chemotherapy for peritoneal carcinomatosis treatment.',
      features: ['Advanced Technique', 'Comprehensive Care', 'Improved Outcomes'],
      link: '/techniques/crs-hipec'
    },
    {
      image: 'https://dranveshdharanikota.com/photos/Multidisciplinary-Tumor-Boards.webp',
      icon: FiUsers,
      title: 'Multidisciplinary Tumor Boards',
      description: 'Collaborative approach with specialists to develop comprehensive, personalized treatment plans.',
      features: ['Expert Collaboration', 'Personalized Plans', 'Holistic Care'],
      link: '/about'
    },
    {
      image: 'https://dranveshdharanikota.com/photos/Complex-Cancer-Surgeries.webp',
      icon: FiShield,
      title: 'Complex Cancer Surgeries',
      description: 'Advanced surgical procedures for rare and complex cancer cases requiring specialized expertise.',
      features: ['Expert Precision', 'Advanced Techniques', 'Specialized Care'],
      link: '/services'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-secondary-50/40 via-white to-primary-50/40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary-200 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary-200 to-transparent rounded-full transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className="text-center mb-12"
        >
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{delay: 0.2}}
            className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 px-6 py-2 rounded-full mb-6"
          >
            <span className="text-primary-700 font-semibold text-sm tracking-wide">COMPREHENSIVE SERVICES</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.3}}
          >
            Advanced Cancer Care Services
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.4}}
          >
            Cutting-edge surgical oncology combining precision technology with compassionate, patient-centered care
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 40}}
              whileInView={{opacity: 1, y: 0}}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              viewport={{once: true}}
              className="luxury-card group h-full"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-white/50 hover:shadow-primary h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Icon */}
                  <div className="absolute top-6 right-6">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <SafeIcon icon={service.icon} className="w-7 h-7 text-primary-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <motion.div whileHover={{x: 5}}>
                    <Link
                      to={service.link}
                      className="flex items-center space-x-2 text-primary-600 font-semibold group-hover:text-secondary-800 transition-colors duration-300 mt-auto"
                    >
                      <span>Read More</span>
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </motion.div>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-primary-500 to-secondary-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
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
          className="text-center mt-12"
        >
          <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
            <Link
              to="/services"
              className="bg-gradient-to-r from-primary-600 to-secondary-800 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-luxury hover:shadow-primary transition-all duration-300 relative overflow-hidden group inline-flex items-center space-x-2"
            >
              <span className="relative z-10">Explore All Services</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-800 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;