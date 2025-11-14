import React from 'react';
    import { motion } from 'framer-motion';
    import SafeIcon from '../common/SafeIcon';
    import Breadcrumbs from '../components/Breadcrumbs';
    import * as FiIcons from 'react-icons/fi';

    const { FiAward, FiCalendar, FiMapPin, FiStar, FiTrophy, FiBookOpen } = FiIcons;

    const Awards = () => {
      const awards = [
        {
          year: '2023',
          title: 'Dr. C Palanivelu Best Faculty Video Award',
          organization: 'Association of Surgeons of India Conference (ASICON 2023)',
          description: 'Recognized for an outstanding educational video at the prestigious ASICON 2023 conference in Visakhapatnam.',
          location: 'Visakhapatnam, AP',
          category: 'Education Excellence',
          icon: FiTrophy,
          color: 'from-primary-600 to-secondary-800',
          bgColor: 'bg-primary-50'
        },
        {
          year: '2022',
          title: 'Best Presentation Award',
          organization: 'Asia-Pacific Congress of Robotic & Laparoscopic Surgeons (ACRLS 2022)',
          description: 'Awarded for a top-tier presentation on advanced surgical techniques at an international congress in Japan.',
          location: 'Nagoya, Japan',
          category: 'Research & Innovation',
          icon: FiStar,
          color: 'from-secondary-800 to-primary-600',
          bgColor: 'bg-secondary-50'
        },
        {
          year: '2020',
          title: 'Best Poster Award',
          organization: 'Midterm Conference of Indian Association of Surgical Oncology (MIDCON IASO 2020)',
          description: 'Celebrated for impactful research presented in a poster at a national surgical oncology conference.',
          location: 'Tirupati, AP',
          category: 'Research Excellence',
          icon: FiBookOpen,
          color: 'from-primary-600 to-secondary-800',
          bgColor: 'bg-primary-50'
        },
        {
          year: '2016',
          title: 'Gold Medal',
          organization: 'Katuri Medical College & Hospital',
          description: 'Awarded the Gold Medal for outstanding academic and clinical performance in General Surgery.',
          location: 'Guntur, AP',
          category: 'Academic Excellence',
          icon: FiAward,
          color: 'from-secondary-800 to-primary-600',
          bgColor: 'bg-secondary-50'
        },
        {
          year: '2015',
          title: 'Best Poster Award',
          organization: 'Association of Surgeons of India Conference (ASICON 2015)',
          description: 'Recognized for an exceptional research poster at one of India\'s largest surgical conferences.',
          location: 'Gurgaon, New Delhi',
          category: 'Research Excellence',
          icon: FiBookOpen,
          color: 'from-primary-600 to-secondary-800',
          bgColor: 'bg-primary-50'
        }
      ];

      return (
        <div className="min-h-screen bg-white font-inter pt-20">
          {/* Breadcrumbs - Updated to use specific colors */}
          <div style={{ background: 'linear-gradient(to right,#720509,#002050)' }}>
            <Breadcrumbs />
          </div>

          {/* Hero Section - Updated to use the same specific colors */}
          <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(to right,#720509,#002050)' }}>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
              <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6"
                >
                  <span className="text-white font-semibold text-sm tracking-wide">AWARDS & RECOGNITION</span>
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Awards & Honors
                </h1>
                <p className="text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
                  International recognition for pioneering contributions to surgical oncology, research, and medical education
                </p>
              </motion.div>
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">5+</div>
                  <div className="text-pink-100">Prestigious Awards</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">2</div>
                  <div className="text-pink-100">Countries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">25+</div>
                  <div className="text-pink-100">Publications</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">12+</div>
                  <div className="text-pink-100">Years Excellence</div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Awards Grid - Keep original styling */}
          <section className="py-12 bg-gradient-to-br from-platinum-50 via-white to-primary-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="luxury-card"
                  >
                    <div className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-white/50 hover:shadow-primary">
                      {/* Content */}
                      <div className="p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${award.color} flex items-center justify-center shadow-lg`}>
                            <SafeIcon icon={award.icon} className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-right">
                            {/* Category Badge */}
                            <span className={`bg-gradient-to-r ${award.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-2 inline-block`}>
                              {award.category}
                            </span>
                            {/* Year Badge */}
                            <div className="bg-white/90 backdrop-blur-sm text-platinum-900 px-4 py-2 rounded-full text-lg font-bold">
                              {award.year}
                            </div>
                          </div>
                        </div>
                        {/* Title & Organization */}
                        <h3 className="text-2xl font-bold text-platinum-900 mb-3 hover:text-primary-700 transition-colors duration-300">
                          {award.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-platinum-600 mb-4">
                          <div className="flex items-center space-x-1">
                            <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                            <span>{award.organization}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                            <span>{award.location}</span>
                          </div>
                        </div>
                        <p className="text-platinum-600 leading-relaxed">
                          {award.description}
                        </p>
                        {/* Bottom Accent */}
                        <div className={`mt-6 h-1 bg-gradient-to-r ${award.color} rounded-full`}></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Recognition Summary - Keep original styling */}
          <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Global Recognition</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div>
                    <div className="text-4xl font-bold mb-2">International</div>
                    <div className="text-primary-100">Awards across 2 countries</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">Excellence</div>
                    <div className="text-primary-100">In surgical innovation</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">Leadership</div>
                    <div className="text-primary-100">In medical education</div>
                  </div>
                </div>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                  These recognitions reflect our commitment to advancing surgical oncology, improving patient outcomes, and contributing to global medical knowledge through research and innovation.
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      );
    };

    export default Awards;