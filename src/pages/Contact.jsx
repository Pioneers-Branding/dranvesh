import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import SafeIcon from '../common/SafeIcon';
    import Breadcrumbs from '../components/Breadcrumbs';
    import * as FiIcons from 'react-icons/fi';

    const { FiMapPin, FiPhone, FiMail, FiClock, FiCalendar, FiUser, FiMessageCircle, FiSend } = FiIcons;

    const Contact = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        appointmentDate: '',
        appointmentTime: '',
        consultationType: '',
        message: ''
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
      };

      const contactInfo = [
        { icon: FiMapPin, title: 'Clinic Address', details: ['Arete Hospitals', 'Opposite Bio-diversity Park', 'Gachibowli, Hyderabad', 'Telangana - 500081'], color: 'from-primary-600 to-secondary-800' },
        { icon: FiPhone, title: 'Phone Numbers', details: ['+91 9440233339', 'Emergency: +91 9440233339'], color: 'from-secondary-800 to-primary-600' },
        { icon: FiMail, title: 'Email Address', details: ['dr.anveshdharanikota@gmail.com'], color: 'from-primary-600 to-secondary-800' },
        { icon: FiClock, title: 'Consultation Hours', details: ['Mon, Wed, Thu, Fri, Sat: 9:00 AM - 5:00 PM', 'Tuesday & Sunday: Emergency Only'], color: 'from-secondary-800 to-primary-600' }
      ];

      const timeSlots = [
        '9:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '2:00 PM',
        '3:00 PM',
        '4:00 PM',
        '5:00 PM'
      ];

      return (
        <div className="min-h-screen bg-white font-inter pt-20">
          {/* Breadcrumbs with updated colors */}
          <div style={{ background: 'linear-gradient(to right,#720509,#002050)' }}>
            <Breadcrumbs />
          </div>

          {/* Hero Section with updated colors */}
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white"> Contact & Book Appointment </h1>
                <p className="text-xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
                  Schedule your consultation with Dr. Anvesh Dharanikota for expert cancer care and surgical oncology treatment
                </p>
              </motion.div>
              {/* Contact Information Cards - Updated with same height */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="luxury-card h-full"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-luxury border border-white/50 hover:shadow-primary text-center h-full flex flex-col">
                      <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <SafeIcon icon={info.icon} className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-platinum-900 mb-3">{info.title}</h3>
                      <div className="space-y-1 flex-grow flex flex-col justify-center">
                        {info.details.map((detail, idx) => {
                          if (info.title === 'Phone Numbers') {
                            const isEmergency = detail.startsWith('Emergency:');
                            const number = isEmergency ? detail.split(': ')[1] : detail;
                            return (
                              <p key={idx} className="text-sm text-platinum-600">
                                {isEmergency && 'Emergency: '}
                                <a href={`tel:${number.replace(/\s/g, '')}`} className="hover:text-primary-600 transition-colors">
                                  {number}
                                </a>
                              </p>
                            );
                          }
                          if (info.title === 'Email Address') {
                            return (
                              <a key={idx} href={`mailto:${detail}`} className="text-sm text-platinum-600 hover:text-primary-600 transition-colors break-all">
                                {detail}
                              </a>
                            );
                          }
                          return (
                            <p key={idx} className="text-sm text-platinum-600">{detail}</p>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Appointment Booking & Map Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Appointment Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 shadow-luxury border border-white/50">
                    <h2 className="text-2xl font-bold text-platinum-900 mb-6">Book Your Appointment</h2>
                    <form accept-charset='UTF-8' action='https://app.formester.com/forms/uCYTAeCWv/submissions' method='POST' className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-platinum-700 mb-2"> Full Name * </label>
                          <div className="relative">
                            <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-platinum-400 w-5 h-5" />
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-platinum-200 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent" placeholder="Enter your full name" required />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-platinum-700 mb-2"> Phone Number * </label>
                          <div className="relative">
                            <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-platinum-400 w-5 h-5" />
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-platinum-200 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent" placeholder="+91 XXXXX XXXXX" required />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-platinum-700 mb-2"> Email Address </label>
                        <div className="relative">
                          <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-platinum-400 w-5 h-5" />
                          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-platinum-200 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent" placeholder="your.email@example.com" />
                        </div>
                      </div>
                      {/* Appointment Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-platinum-700 mb-2"> Preferred Date  </label>
                          <div className="relative">
                            <SafeIcon icon={FiCalendar} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-platinum-400 w-5 h-5" />
                            <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-platinum-200 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent"  />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-platinum-700 mb-2"> Preferred Time  </label>
                          <select name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} className="w-full px-4 py-3 border border-platinum-200 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent" >
                            <option value="">Select time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                     
                      <div>
                        <label className="block text-sm font-semibold text-platinum-700 mb-2"> Message / Medical History </label>
                        <div className="relative">
                          <SafeIcon icon={FiMessageCircle} className="absolute left-3 top-3 text-platinum-400 w-5 h-5" />
                          <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full pl-10 pr-4 py-3 border border-platinum-200 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent" placeholder="Please describe your symptoms or medical history..." ></textarea>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary-600 to-secondary-800 text-white py-4 rounded-xl font-semibold text-lg shadow-luxury hover:shadow-primary transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <SafeIcon icon={FiSend} className="w-5 h-5" />
                        <span>Book Appointment</span>
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
                {/* Map & Additional Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {/* Map */}
                  <div className="bg-gradient-to-br from-platinum-100 to-platinum-200 rounded-3xl h-80 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center">
                      <SafeIcon icon={FiMapPin} className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-platinum-900 mb-2">Interactive Map</h3>
                      <p className="text-platinum-600">Click to view detailed location and directions</p>
                    </div>
                    {/* Map overlay with clinic info */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-800 rounded-lg flex items-center justify-center">
                          <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-platinum-900">Arete Hospitals</h4>
                          <p className="text-sm text-platinum-600">Gachibowli, Hyderabad</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Emergency Contact */}
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 border-2 border-primary-200">
                    <h3 className="text-xl font-bold text-primary-900 mb-4">Emergency Contact</h3>
                    <p className="text-primary-700 mb-4">
                      For urgent medical situations or emergency consultations, please call our 24/7 emergency line:
                    </p>
                    <a href="tel:+919440233339" className="flex items-center space-x-3 text-primary-900 font-bold text-lg hover:text-primary-700 transition-colors">
                      <SafeIcon icon={FiPhone} className="w-6 h-6" />
                      <span>+91 9440233339</span>
                    </a>
                  </div>
                  {/* Additional Information */}
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
                    <h3 className="text-xl font-bold text-platinum-900 mb-4">Important Information</h3>
                    <ul className="space-y-3 text-platinum-600">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Please arrive 15 minutes before your appointment time</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Bring all relevant medical records and test results</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cancellations must be made 24 hours in advance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Insurance cards and ID required for all appointments</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      );
    };

    export default Contact;