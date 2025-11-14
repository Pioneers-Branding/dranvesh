import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiCalendar, FiPhone, FiMessageCircle} = FiIcons;

const CTASection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Dr. Dharanikota, I would like to schedule a consultation for cancer treatment. Please let me know your availability."
    );
    const phoneNumber = "919440233339";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Consult with Dr. Dharanikota?
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Take the first step towards expert cancer care. Schedule your consultation today and experience compassionate, world-class surgical oncology treatment.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg flex items-center space-x-3 hover:bg-primary-50 transition-colors shadow-lg"
              >
                <SafeIcon icon={FiCalendar} className="w-6 h-6" />
                <span>Book Appointment</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
              <a
                href="tel:+919440233339"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center space-x-3 hover:bg-white hover:text-primary-600 transition-colors"
              >
                <SafeIcon icon={FiPhone} className="w-6 h-6" />
                <span>Call Now</span>
              </a>
            </motion.div>

            <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
              <button
                onClick={handleWhatsAppClick}
                className="bg-secondary-800 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center space-x-3 hover:bg-secondary-900 transition-colors shadow-lg"
              >
                <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                <span>WhatsApp</span>
              </button>
            </motion.div>
          </div>

          <div className="mt-12 text-primary-100">
            <p className="text-lg font-medium mb-2">Available for consultations</p>
            <p>Mon, Wed, Thu, Fri, Sat: 9:00 AM - 5:00 PM</p>
            <p>Tuesday & Sunday: Emergency consultations only</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;