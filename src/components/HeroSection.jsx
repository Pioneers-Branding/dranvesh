import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import SafeIcon from '../common/SafeIcon';
    import * as FiIcons from 'react-icons/fi';

    const { FiAward, FiGlobe, FiBookOpen, FiUsers, FiTarget, FiHeart, FiExternalLink, FiCalendar, FiPhone, FiMessageCircle } = FiIcons;

    const HeroSection = () => {
      const handleWhatsAppClick = () => {
        const message = encodeURIComponent("Hello Dr. Dharanikota, I would like to schedule a consultation for cancer treatment. Please let me know your availability.");
        const phoneNumber = "919440233339";
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      };

      return (
        <section className="pt-20 py-5 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-primary-200 to-secondary-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-secondary-200 to-primary-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
                  >
                    Dr. Anvesh Dharanikota
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-600 leading-relaxed mb-4"
                  >
                    MBBS, MS (Gold Medalist), MCh (Surgical Oncology)
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-700 mb-6"
                  >
                    Senior Consultant Surgical Oncologist & Head of Department<br />
                    Laparoscopic & Robotic Surgeon
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 leading-relaxed"
                  >
                    Well accomplished Surgical Oncologist with 12+ years of surgical experience in minimally invasive and robotic-assisted oncological surgeries. Recognized as a skillful surgeon specializing in complex gastrointestinal surgeries and breast oncoplastic surgeries.
                  </motion.p>
                </div>
                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to="/contact"
                    className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-secondary-800 text-white px-6 py-3 rounded-lg hover:shadow-primary transition-all duration-300 font-semibold"
                  >
                    <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </Link>
                  <a
                    href="tel:+919440233339"
                    className="flex items-center space-x-2 border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 font-semibold"
                  >
                    <SafeIcon icon={FiPhone} className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold"
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </button>
                </motion.div>
                {/* Professional Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-3 pt-4 border-t border-gray-200"
                >
                  <a
                    href="https://in.linkedin.com/in/dranveshdharanikotacancerspecialist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors text-sm"
                  >
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://orcid.org/0000-0001-7404-3239"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-secondary-600 hover:text-secondary-700 transition-colors text-sm"
                  >
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                    <span>ORCID</span>
                  </a>
                  <a
                    href="https://www.researchgate.net/profile/Anvesh-Dharanikota"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors text-sm"
                  >
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                    <span>ResearchGate</span>
                  </a>
                </motion.div>
              </motion.div>
              {/* Doctor Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="https://dranveshdharanikota.com/photos/anvesh.webp"
                  alt="Dr. Anvesh Dharanikota"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-luxury"
                />
                {/* Floating Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-200 rounded-full opacity-30 animate-float"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-secondary-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default HeroSection;