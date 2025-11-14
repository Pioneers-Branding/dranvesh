import React from 'react';
    import { motion } from 'framer-motion';
    import SafeIcon from '../common/SafeIcon';
    import * as FiIcons from 'react-icons/fi';

    const { FiAward, FiCalendar, FiMapPin, FiStar, FiTrophy, FiBookOpen, FiUsers } = FiIcons;

    const Awards = () => {
      const awards = [
        {
          year: '2023',
          title: 'Best Faculty Video Award',
          organization: 'ASICON Conference',
          description: 'Recognition for excellence in surgical education at ASICON 2023.',
          location: 'Visakhapatnam, AP',
          category: 'Education Excellence',
          icon: FiTrophy,
          color: 'from-primary-500 to-secondary-600',
          bgColor: 'bg-primary-50'
        },
        {
          year: '2022',
          title: 'Best Presentation Award',
          organization: 'ACRLS Conference',
          description: 'Outstanding presentation on advanced robotic surgical techniques in Japan.',
          location: 'Nagoya, Japan',
          category: 'Research & Innovation',
          icon: FiStar,
          color: 'from-primary-500 to-secondary-600',
          bgColor: 'bg-secondary-50'
        },
        {
          year: '2020',
          title: 'Best Poster Award',
          organization: 'MIDCON IASO',
          description: 'Celebrated for impactful research presented at a national surgical oncology conference.',
          location: 'Tirupati, AP',
          category: 'Research Excellence',
          icon: FiBookOpen,
          color: 'from-primary-500 to-secondary-600',
          bgColor: 'bg-primary-50'
        },
        {
          year: '2016',
          title: 'Gold Medal',
          organization: 'Katuri Medical College',
          description: 'Awarded the Gold Medal for outstanding academic and clinical performance.',
          location: 'Guntur, AP',
          category: 'Academic Excellence',
          icon: FiAward,
          color: 'from-primary-500 to-secondary-600',
          bgColor: 'bg-secondary-50'
        },
        {
          year: '2015',
          title: 'Best Poster Award',
          organization: 'ASICON Conference',
          description: 'Recognized for an exceptional research poster at ASICON 2015.',
          location: 'Gurgaon, New Delhi',
          category: 'Research Excellence',
          icon: FiBookOpen,
          color: 'from-primary-500 to-secondary-600',
          bgColor: 'bg-primary-50'
        }
      ];

      return (
        <section id="awards" className="py-16 bg-gradient-to-br from-white via-gray-50/30 to-primary-50/20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-primary-200 to-secondary-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-secondary-200 to-primary-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 px-6 py-2 rounded-full mb-6"
              >
                <span className="text-primary-700 font-semibold text-sm tracking-wide">AWARDS & RECOGNITION</span>
              </motion.div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Excellence Recognized Globally
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                International recognition for pioneering contributions to surgical oncology, research, and medical education
              </motion.p>
            </motion.div>

            {/* Awards Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {awards.slice(0, 3).map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className="luxury-card group"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-luxury border border-white/50 hover:shadow-primary relative overflow-hidden h-full">
                    {/* Background Gradient */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${award.bgColor} rounded-full opacity-20 transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700`}></div>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-6 relative">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${award.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <SafeIcon icon={award.icon} className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className={`inline-block bg-gradient-to-r ${award.color} px-4 py-2 rounded-full mb-2`}>
                          <span className="text-white text-lg font-bold">{award.year}</span>
                        </div>
                        <div className="text-sm text-gray-500">{award.category}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
                        {award.title}
                      </h3>
                      <div className="flex flex-col space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <SafeIcon icon={FiUsers} className="w-4 h-4" />
                          <span>{award.organization}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                          <span>{award.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {award.description}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${award.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Stats - Updated with gradient background */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-800 rounded-3xl p-8 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Global Recognition Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white">5+</div>
                    <div className="text-primary-100">Prestigious Awards</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white">2</div>
                    <div className="text-primary-100">Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white">25+</div>
                    <div className="text-primary-100">Publications</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white">12+</div>
                    <div className="text-primary-100">Years Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default Awards;