import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMessageCircle, FiX } = FiIcons;

const FloatingWhatsApp = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Dr. Dharanikota, I would like to schedule a consultation for cancer treatment. Please let me know your availability."
    );
    const phoneNumber = "919440233339"; // Updated phone number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl p-6 mb-4 max-w-sm border border-primary-100"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-800 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Dr. Dharanikota</h4>
                  <p className="text-sm text-gray-600">Surgical Oncologist</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <SafeIcon icon={FiX} className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-700 mb-4 text-sm">
              Hi! I'm available to answer your questions about cancer treatment and surgical procedures. How can I help you today?
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-800 text-white py-3 rounded-lg font-semibold hover:shadow-primary transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiMessageCircle} className="w-5 h-5" />
              <span>Start Conversation</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-800 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-primary transition-all duration-300 relative"
      >
        <SafeIcon icon={isExpanded ? FiX : FiMessageCircle} className="w-8 h-8" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-primary-600 animate-ping opacity-20"></div>
        
        {/* Notification badge */}
        {!isExpanded && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-secondary-800 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingWhatsApp;