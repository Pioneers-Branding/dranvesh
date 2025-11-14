import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import SafeIcon from '../common/SafeIcon';
    import Breadcrumbs from '../components/Breadcrumbs';
    import * as FiIcons from 'react-icons/fi';

    const { FiEye, FiActivity, FiHeart, FiClock, FiTarget, FiShield, FiTrendingUp, FiCheck, FiArrowRight, FiUser, FiCalendar, FiMinimize2, FiZap } = FiIcons;

    const VATS = () => {
      const advantages = [
        { icon: FiMinimize2, title: 'Minimally Invasive', description: 'Small incisions (5-12mm) instead of large thoracotomy, resulting in less tissue trauma and faster healing.' },
        { icon: FiEye, title: 'Enhanced Visualization', description: 'High-definition video cameras provide magnified, detailed views of thoracic structures.' },
        { icon: FiClock, title: 'Faster Recovery', description: 'Reduced hospital stay, less post-operative pain, and quicker return to normal activities.' },
        { icon: FiHeart, title: 'Better Cosmesis', description: 'Smaller scars and better aesthetic outcomes compared to open thoracic surgery.' },
      ];

      const applications = [
        {
          title: 'Lung Cancer',
          procedures: ['Lobectomy', 'Segmentectomy', 'Wedge Resection', 'Lymph Node Sampling'],
          description: 'Minimally invasive lung cancer surgery with oncologically sound resection margins.',
          icon: FiActivity
        },
        {
          title: 'Mediastinal Masses',
          procedures: ['Thymectomy', 'Mediastinal Biopsy', 'Lymph Node Dissection'],
          description: 'Safe approach to anterior and posterior mediastinal pathology.',
          icon: FiTarget
        },
        {
          title: 'Pleural Disease',
          procedures: ['Pleurodesis', 'Pleural Biopsy', 'Empyema Drainage'],
          description: 'Management of pleural effusions, pneumothorax, and inflammatory conditions.',
          icon: FiShield
        },
        {
          title: 'Esophageal Surgery',
          procedures: ['Esophagectomy', 'Anti-reflux Surgery', 'Diverticulectomy'],
          description: 'Advanced minimally invasive esophageal procedures for cancer and benign conditions.',
          icon: FiZap
        },
      ];

      const techniques = [
        { name: 'Single-Port VATS', description: 'Advanced technique using a single incision for selected procedures, further reducing invasiveness.' },
        { name: 'Robotic-Assisted VATS', description: 'Integration of robotic technology with VATS for enhanced precision and dexterity.' },
        { name: 'Subxiphoid VATS', description: 'Intercostal nerve-sparing approach through subxiphoid incision for reduced pain.' },
        { name: 'Hybrid VATS', description: 'Combination approach utilizing both thoracoscopic and limited open techniques.' },
      ];

      const outcomes = [
        { metric: 'Hospital Stay', value: '2-4 days', comparison: 'vs 7-10 days open surgery' },
        { metric: 'Post-operative Pain', value: 'Significantly Reduced', comparison: 'VAS score 3-4 vs 7-8' },
        { metric: 'Return to Work', value: '2-3 weeks', comparison: 'vs 6-8 weeks open' },
        { metric: 'Complication Rate', value: '<10%', comparison: 'Lower than open surgery' },
      ];

      return (
        <div className="min-h-screen bg-white font-inter pt-20">
          {/* Breadcrumbs */}
          <div style={{ background: 'linear-gradient(to right,#720509,#002050)' }}>
          <Breadcrumbs />
          </div>

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-primary-300 to-secondary-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
              <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-secondary-300 to-primary-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 px-4 py-2 rounded-full mb-4"
                    >
                      <span className="text-primary-700 font-semibold text-sm">MINIMALLY INVASIVE THORACIC SURGERY</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                      VATS (Thoracic)
                    </h1>
                    <h2 className="text-2xl text-platinum-700 mb-6">
                      Video-Assisted Thoracoscopic Surgery
                    </h2>
                    <p className="text-xl text-platinum-600 leading-relaxed mb-6">
                      Advanced minimally invasive thoracic surgery using video guidance for lung and chest procedures with reduced trauma and faster recovery.
                    </p>
                    <p className="text-platinum-600 leading-relaxed">
                      Dr. Dharanikota specializes in VATS procedures, offering patients the benefits of minimally invasive thoracic surgery with excellent oncological outcomes.
                    </p>
                  </div>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-white/50">
                      <div className="text-2xl font-bold gradient-text">200+</div>
                      <div className="text-sm text-platinum-600">VATS Procedures</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-white/50">
                      <div className="text-2xl font-bold gradient-text">95%</div>
                      <div className="text-sm text-platinum-600">Success Rate</div>
                    </div>
                  </div>
                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-primary-600 to-secondary-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-primary transition-all duration-300"
                    >
                      <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                      <span>Schedule Consultation</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <img
                    src="https://dranveshdharanikota.com/photos/VATS.webp"
                    alt="VATS Thoracic Surgery"
                    className="w-full rounded-3xl shadow-luxury"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary-600 to-secondary-800 rounded-2xl p-4 text-white shadow-lg">
                    <SafeIcon icon={FiEye} className="w-8 h-8 mb-2" />
                    <div className="text-center">
                      <div className="text-sm font-bold">Video</div>
                      <div className="text-xs">Assisted</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Advantages Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  Advantages of VATS
                </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  Minimally invasive approach offering superior patient outcomes and recovery
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="luxury-card"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-luxury border border-white/50 hover:shadow-primary text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <SafeIcon icon={advantage.icon} className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-platinum-900 mb-3">{advantage.title}</h3>
                      <p className="text-platinum-600 text-sm leading-relaxed">{advantage.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Applications Section */}
          <section className="py-20 bg-gradient-to-br from-platinum-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  VATS Applications
                </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  Comprehensive thoracic surgical solutions using minimally invasive techniques
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {applications.map((application, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="luxury-card"
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-luxury border border-white/50 hover:shadow-primary">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-800 rounded-xl flex items-center justify-center flex-shrink-0">
                          <SafeIcon icon={application.icon} className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-platinum-900 mb-2">{application.title}</h3>
                          <p className="text-platinum-600 text-sm">{application.description}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-platinum-700 mb-3 uppercase tracking-wide">Procedures</h4>
                        <ul className="space-y-2">
                          {application.procedures.map((procedure, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-platinum-600">
                              <SafeIcon icon={FiCheck} className="w-4 h-4 text-primary-600" />
                              <span className="text-sm">{procedure}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Advanced Techniques */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  Advanced VATS Techniques
                </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  Specialized approaches for optimal surgical outcomes
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {techniques.map((technique, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100"
                  >
                    <h3 className="text-xl font-bold text-platinum-900 mb-3">{technique.name}</h3>
                    <p className="text-platinum-600 leading-relaxed">{technique.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Outcomes Section */}
          <section className="py-20 bg-gradient-to-br from-platinum-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  Patient Outcomes
                </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  Demonstrated benefits of VATS over traditional open surgery
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {outcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-luxury border border-white/50 text-center"
                  >
                    <h3 className="text-lg font-bold text-platinum-900 mb-2">{outcome.metric}</h3>
                    <div className="text-2xl font-bold gradient-text mb-2">{outcome.value}</div>
                    <p className="text-sm text-platinum-600">{outcome.comparison}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                    VATS Expertise
                  </h2>
                  <p className="text-xl text-platinum-600 mb-6">
                    Dr. Dharanikota's extensive experience in video-assisted thoracoscopic surgery ensures optimal outcomes for thoracic procedures.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600" />
                      <span className="text-platinum-700">Advanced VATS Training and Certification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600" />
                      <span className="text-platinum-700">200+ VATS Procedures Performed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600" />
                      <span className="text-platinum-700">Single-Port and Robotic VATS Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600" />
                      <span className="text-platinum-700">International Training in Minimally Invasive Thoracic Surgery</span>
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/about"
                      className="bg-gradient-to-r from-primary-600 to-secondary-800 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-primary transition-all duration-300 inline-flex"
                    >
                      <span>View Full Profile</span>
                      <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <img
                    src="https://dranveshdharanikota.com/photos/anvesh.webp"
                    alt="Dr. Dharanikota VATS expertise"
                    className="w-full rounded-3xl shadow-luxury"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Minimally Invasive Thoracic Surgery
                </h2>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-12 leading-relaxed">
                  Experience the benefits of advanced VATS procedures with faster recovery and better outcomes. Schedule your consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg flex items-center space-x-3 hover:bg-primary-50 transition-colors shadow-lg"
                    >
                      <SafeIcon icon={FiUser} className="w-6 h-6" />
                      <span>Schedule Consultation</span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href="tel:+919440233339"
                      className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center space-x-3 hover:bg-white hover:text-primary-600 transition-colors"
                    >
                      <SafeIcon icon={FiCalendar} className="w-6 h-6" />
                      <span>Call Now</span>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      );
    };

    export default VATS;