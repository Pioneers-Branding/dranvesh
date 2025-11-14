import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import SafeIcon from '../common/SafeIcon';
    import * as FiIcons from 'react-icons/fi';

    const { FiCheckCircle, FiHome, FiPhone } = FiIcons;

    const ThankYou = () => {
      return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center pt-20 px-4 font-inter">
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="max-w-2xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-luxury text-center border border-white/50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 150 }}
              className="w-24 h-24 bg-gradient-to-r from-primary-600 to-secondary-800 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <SafeIcon icon={FiCheckCircle} className="w-12 h-12 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            >
              Thank You!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-platinum-600 mb-8"
            >
              Your appointment request has been submitted successfully. Our team will review your information and contact you within the next 24-48 hours to confirm your consultation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-platinum-50 to-white rounded-2xl p-6 border border-platinum-100 mb-8 text-left"
            >
              <h3 className="font-semibold text-platinum-800 mb-4 text-center">What to Expect Next</h3>
              <ul className="space-y-2 text-sm text-platinum-600">
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-primary-600 mt-1">1.</span>
                  <span>You will receive a confirmation call or email from our team to finalize your appointment details.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-primary-600 mt-1">2.</span>
                  <span>Please have your medical records and any relevant test results ready for the consultation.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-primary-600 mt-1">3.</span>
                  <span>For urgent matters, please contact us directly via phone for immediate assistance.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-secondary-800 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-primary transition-all duration-300"
                >
                  <SafeIcon icon={FiHome} className="w-5 h-5" />
                  <span>Return to Homepage</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:+919440233339"
                  className="w-full sm:w-auto border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5" />
                  <span>Call for Urgency</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      );
    };

    export default ThankYou;