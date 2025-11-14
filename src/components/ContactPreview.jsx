import React from 'react';
    import { motion } from 'framer-motion';
    import SafeIcon from '../common/SafeIcon';
    import * as FiIcons from 'react-icons/fi';

    const { FiMapPin, FiPhone, FiMail, FiClock, FiNavigation } = FiIcons;

    const ContactPreview = () => {
      return (
        <section id="contact" className="py-16 bg-gradient-to-br from-secondary-50/40 via-primary-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Visit Our Clinic
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Located at Arete Hospitals in Gachibowli, Hyderabad, providing world-class cancer care
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-800 mx-auto mt-6"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-primary-200 rounded-xl flex items-center justify-center flex-shrink-0">
                        <SafeIcon icon={FiMapPin} className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Clinic Address</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Arete Hospitals<br />
                          Opposite Bio-diversity Park<br />
                          Gachibowli, Hyderabad<br />
                          Telangana - 500081
                        </p>
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center flex-shrink-0">
                        <SafeIcon icon={FiPhone} className="w-6 h-6 text-secondary-800" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                        <a href="tel:+919440233339" className="text-gray-600 block hover:text-primary-600 transition-colors">
                          +91 9440233339
                        </a>
                        <p className="text-gray-600">
                          Emergency: <a href="tel:+919440233339" className="hover:text-primary-600 transition-colors">+91 9440233339</a>
                        </p>
                      </div>
                    </div>
                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-200 rounded-xl flex items-center justify-center flex-shrink-0">
                        <SafeIcon icon={FiMail} className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <a href="mailto:dr.anveshdharanikota@gmail.com" className="text-gray-600 hover:text-primary-600 transition-colors break-all">
                          dr.anveshdharanikota@gmail.com
                        </a>
                      </div>
                    </div>
                    {/* Hours */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-secondary-100 to-primary-200 rounded-xl flex items-center justify-center flex-shrink-0">
                        <SafeIcon icon={FiClock} className="w-6 h-6 text-secondary-800" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Consultation Hours</h4>
                        <p className="text-gray-600">Mon, Wed, Thu, Fri, Sat: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600">Tuesday & Sunday: Emergency consultations only</p>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-8 bg-gradient-to-r from-primary-600 to-secondary-800 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-primary transition-all duration-300"
                  >
                    <SafeIcon icon={FiNavigation} className="w-5 h-5" />
                    <span>Get Directions</span>
                  </motion.button>
                </div>
              </motion.div>
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary-100 to-secondary-200 rounded-2xl h-96 lg:h-full min-h-[400px] overflow-hidden">
                  {/* Placeholder for map */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-200 flex items-center justify-center">
                    <div className="text-center">
                      <SafeIcon icon={FiMapPin} className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h4>
                      <p className="text-gray-600">Click to view detailed location and directions</p>
                    </div>
                  </div>
                </div>
                {/* Map overlay with clinic info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-800 rounded-lg flex items-center justify-center">
                      <SafeIcon icon={FiMapPin} className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Arete Hospitals</h5>
                      <p className="text-sm text-gray-600">Gachibowli, Hyderabad</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default ContactPreview;