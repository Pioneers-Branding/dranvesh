import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiAward, FiTarget, FiHeart, FiShield, FiGlobe, FiUsers, FiTrendingUp, FiClock, FiBookOpen, FiStar, FiCheck} = FiIcons;

const WhyChooseDoctor = () => {
  const keyHighlights = [
    {
      icon: FiAward,
      title: 'Gold Medalist Excellence',
      description: 'MS General Surgery Gold Medal with highest academic distinction and surgical expertise.',
      stats: '2016 Gold Medal'
    },
    {
      icon: FiGlobe,
      title: 'International Fellowship',
      description: 'Advanced training in South Korea at Yonsei Cancer Center, Severance Hospital.',
      stats: 'Seoul, South Korea'
    },
    {
      icon: FiTarget,
      title: 'Robotic Surgery Expert',
      description: 'Da Vinci console certified with expertise in minimally invasive procedures.',
      stats: '500+ Procedures'
    },
    {
      icon: FiHeart,
      title: 'Oncoplastic Breast Surgery',
      description: 'Combining cancer treatment with aesthetic reconstruction for optimal outcomes.',
      stats: '300+ Cases'
    },
    {
      icon: FiShield,
      title: 'CRS & HIPEC Specialist',
      description: 'Complex cytoreductive surgery with heated chemotherapy for peritoneal malignancies.',
      stats: '100+ Cases'
    },
    {
      icon: FiUsers,
      title: 'Multidisciplinary Care',
      description: 'Tumor board leadership and collaborative treatment planning with specialists.',
      stats: 'Team Leader'
    },
    {
      icon: FiTrendingUp,
      title: 'Research Excellence',
      description: 'Published researcher with 50+ citations and H-index of 4 in surgical oncology.',
      stats: '25+ Publications'
    },
    {
      icon: FiClock,
      title: '12+ Years Experience',
      description: 'Specialized experience in surgical oncology and minimally invasive procedures.',
      stats: '1200+ Surgeries'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-primary-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary-300 to-secondary-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-secondary-300 to-primary-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
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
            <span className="text-primary-700 font-semibold text-sm tracking-wide">WHY CHOOSE DR. DHARANIKOTA</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.3}}
          >
            Excellence in Surgical Oncology
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.4}}
          >
            Combining academic excellence, international training, and cutting-edge technology to deliver exceptional cancer care
          </motion.p>
        </motion.div>

        {/* New Design Layout - Doctor Image Center with Content Around */}
        <div className="relative">
          {/* Central Doctor Image */}
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="http://dranveshdharanikota.com/photos/why-choose.webp"
                  alt="Dr. Anvesh Dharanikota"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Achievement Badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-3 text-white shadow-xl">
                <SafeIcon icon={FiAward} className="w-6 h-6 mb-1" />
                <div className="text-center">
                  <div className="text-sm font-bold">Gold</div>
                  <div className="text-xs">Medal</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-2xl p-3 text-white shadow-xl">
                <SafeIcon icon={FiClock} className="w-6 h-6 mb-1" />
                <div className="text-center">
                  <div className="text-sm font-bold">12+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>

              {/* Animated rings around the image */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-200 animate-ping opacity-20"></div>
              <div className="absolute inset-0 rounded-full border-2 border-secondary-200 animate-ping opacity-20" style={{animationDelay: '1s'}}></div>
            </div>
          </motion.div>

          {/* Key Points Grid - 4 columns layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: index * 0.1}}
                viewport={{once: true}}
                className="luxury-card group text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-luxury border border-white/50 hover:shadow-primary h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-800 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                    <SafeIcon icon={highlight.icon} className="w-8 h-8 text-white" />
                  </div>

                  <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3">
                    {highlight.stats}
                  </span>

                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 mb-3">
                    {highlight.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.8}}
            className="text-center mt-12"
          >
            <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-luxury hover:shadow-primary transition-all duration-300 relative overflow-hidden group inline-flex items-center space-x-2"
              >
                <span className="relative z-10">Schedule Your Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDoctor;