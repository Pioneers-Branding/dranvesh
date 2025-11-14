import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiBookOpen, FiGlobe } = FiIcons;

const AboutPreview = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary-50/30 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Dr. Anvesh Dharanikota in professional attire"
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-secondary-800 to-secondary-900 rounded-2xl flex items-center justify-center">
              <SafeIcon icon={FiBookOpen} className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Dr. Anvesh Dharanikota
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-800 mb-6"></div>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                <strong className="text-gray-900">Gold Medalist Surgeon</strong> with over 12 years of specialized experience in surgical oncology and robotic surgery.
              </p>
              <p>
                Currently serving as <strong className="text-gray-900">Head of Department at Arete Institute of Oncology</strong>, Dr. Dharanikota brings world-class expertise gained through prestigious fellowships in South Korea and across the Asia-Pacific region.
              </p>
              <p>
                Renowned for his precision in minimally invasive cancer surgery and commitment to multidisciplinary, patient-centered care that combines cutting-edge technology with compassionate treatment.
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiGlobe} className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-gray-700 font-medium">International Fellowships</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiBookOpen} className="w-4 h-4 text-secondary-800" />
                </div>
                <span className="text-gray-700 font-medium">Published Researcher</span>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/about"
                className="bg-gradient-to-r from-primary-600 to-secondary-800 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-primary transition-all duration-300 inline-flex"
              >
                <span>Know More</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;