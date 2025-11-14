import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import SafeIcon from '../common/SafeIcon';
    import Breadcrumbs from '../components/Breadcrumbs';
    import * as FiIcons from 'react-icons/fi';

    const { FiShield, FiTarget, FiActivity, FiTrendingUp, FiClock, FiHeart, FiCheck, FiArrowRight, FiUser, FiCalendar, FiThermometer, FiZap } = FiIcons;

    const CRSHipec = () => {
      const procedure_steps = [
        { step: 1, title: 'Pre-operative Assessment', description: 'Comprehensive evaluation including imaging studies, laboratory tests, and multidisciplinary team consultation to determine candidacy.', icon: FiUser },
        { step: 2, title: 'Cytoreductive Surgery', description: 'Surgical removal of all visible tumor deposits from the peritoneal cavity, achieving complete or optimal cytoreduction.', icon: FiTarget },
        { step: 3, title: 'HIPEC Administration', description: 'Heated chemotherapy perfusion at 42-43°C for 60-90 minutes to eliminate microscopic cancer cells.', icon: FiThermometer },
        { step: 4, title: 'Recovery & Monitoring', description: 'Intensive post-operative care with careful monitoring and comprehensive recovery support.', icon: FiHeart },
      ];

      const indications = [
        { condition: 'Peritoneal Carcinomatosis', origin: 'Colorectal Cancer', description: 'Advanced colorectal cancer with peritoneal spread, offering hope for improved survival outcomes.' },
        { condition: 'Ovarian Cancer', origin: 'Primary or Recurrent', description: 'Advanced ovarian cancer with peritoneal involvement, particularly in recurrent disease settings.' },
        { condition: 'Appendiceal Cancer', origin: 'Pseudomyxoma Peritonei', description: 'Rare appendiceal cancers causing mucin accumulation in the peritoneal cavity.' },
        { condition: 'Gastric Cancer', origin: 'Peritoneal Metastases', description: 'Advanced gastric cancer with peritoneal dissemination in selected patients.' },
      ];

      const outcomes = [
        { metric: 'Complete Cytoreduction Rate', value: '85-90%', description: 'Achieving optimal tumor removal' },
        { metric: '5-Year Survival', value: '45-60%', description: 'Significant improvement vs. systemic therapy alone' },
        { metric: 'Morbidity Rate', value: '<20%', description: 'Low complication rate in experienced centers' },
        { metric: 'Quality of Life', value: 'Improved', description: 'Better symptom control and function' },
      ];

      const advantages = [
        { icon: FiTarget, title: 'Direct Drug Delivery', description: 'Chemotherapy is delivered directly to the peritoneal cavity, achieving higher local concentrations.' },
        { icon: FiThermometer, title: 'Hyperthermia Effect', description: 'Heat enhances drug penetration and cytotoxicity while being selectively toxic to cancer cells.' },
        { icon: FiShield, title: 'Reduced Systemic Toxicity', description: 'Limited systemic absorption reduces side effects compared to intravenous chemotherapy.' },
        { icon: FiZap, title: 'Synergistic Effect', description: 'Combination of surgery and heated chemotherapy provides superior outcomes.' },
      ];

      return (
        <div className="min-h-screen bg-white font-inter pt-20">
          {/* Breadcrumbs */}
          <div style={{ background: 'linear-gradient(to right,#720509,#002050)' }}>
          <Breadcrumbs />
          </div>

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-secondary-300 to-primary-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
              <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-primary-300 to-secondary-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
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
                      className="inline-block bg-gradient-to-r from-secondary-100 to-primary-100 px-4 py-2 rounded-full mb-4"
                    >
                      <span className="text-secondary-700 font-semibold text-sm">ADVANCED CANCER TREATMENT</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text"> CRS & HIPEC </h1>
                    <h2 className="text-2xl text-platinum-700 mb-6"> Cytoreductive Surgery + Heated Intraperitoneal Chemotherapy </h2>
                    <p className="text-xl text-platinum-600 leading-relaxed mb-6">
                      A revolutionary treatment combining surgical removal of visible tumors with heated chemotherapy for peritoneal carcinomatosis.
                    </p>
                    <p className="text-platinum-600 leading-relaxed">
                      Dr. Dharanikota has extensive experience in CRS-HIPEC procedures, having completed advanced training and performed over 100 cases with excellent outcomes.
                    </p>
                  </div>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-white/50">
                      <div className="text-2xl font-bold gradient-text">100+</div>
                      <div className="text-sm text-platinum-600">CRS-HIPEC Cases</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-white/50">
                      <div className="text-2xl font-bold gradient-text">90%</div>
                      <div className="text-sm text-platinum-600">Complete Cytoreduction</div>
                    </div>
                  </div>
                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-secondary-800 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-primary transition-all duration-300"
                    >
                      <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                      <span>Schedule Consultation</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="border-2 border-secondary-600 text-secondary-600 px-6 py-3 rounded-lg font-semibold hover:bg-secondary-600 hover:text-white transition-all duration-300"
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
                    src="https://dranveshdharanikota.com/photos/CRS-HIPEC.webp"
                    alt="CRS-HIPEC Procedure"
                    className="w-full rounded-3xl shadow-luxury"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-secondary-800 to-primary-600 rounded-2xl p-4 text-white shadow-lg">
                    <SafeIcon icon={FiShield} className="w-8 h-8 mb-2" />
                    <div className="text-center">
                      <div className="text-sm font-bold">Advanced</div>
                      <div className="text-xs">Treatment</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Procedure Steps */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text"> CRS-HIPEC Procedure Steps </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  A comprehensive two-phase treatment approach combining surgery with heated chemotherapy
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {procedure_steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="luxury-card relative"
                  >
                    <div className="bg-white rounded-3xl p-6 shadow-luxury border border-white/50 hover:shadow-primary text-center">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-8 bg-gradient-to-r from-secondary-800 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step.step}
                        </div>
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-4">
                        <SafeIcon icon={step.icon} className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-platinum-900 mb-3">{step.title}</h3>
                      <p className="text-platinum-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Indications Section */}
          <section className="py-20 bg-gradient-to-br from-platinum-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text"> Treatment Indications </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  CRS-HIPEC is indicated for specific types of peritoneal surface malignancies
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {indications.map((indication, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="luxury-card"
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-luxury border border-white/50 hover:shadow-primary">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <SafeIcon icon={FiTarget} className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-platinum-900 mb-1">{indication.condition}</h3>
                          <p className="text-sm font-medium text-secondary-600">{indication.origin}</p>
                        </div>
                      </div>
                      <p className="text-platinum-600 leading-relaxed">{indication.description}</p>
                    </div>
                  </motion.div>
                ))}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text"> Advantages of CRS-HIPEC </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  Unique benefits of combining surgical cytoreduction with heated chemotherapy
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
                      <div className="w-16 h-16 bg-gradient-to-r from-secondary-800 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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

          {/* Outcomes Section */}
          <section className="py-20 bg-gradient-to-br from-platinum-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text"> Treatment Outcomes </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  Evidence-based results demonstrating the effectiveness of CRS-HIPEC
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
                    className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-6 border-2 border-secondary-100"
                  >
                    <h3 className="text-lg font-bold text-platinum-900 mb-2">{outcome.metric}</h3>
                    <div className="text-3xl font-bold gradient-text mb-2">{outcome.value}</div>
                    <p className="text-sm text-secondary-600 font-medium">{outcome.description}</p>
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text"> CRS-HIPEC Expertise </h2>
                  <p className="text-xl text-platinum-600 mb-6">
                    Dr. Dharanikota's specialized training and experience in CRS-HIPEC procedures ensures optimal patient outcomes.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-secondary-600" />
                      <span className="text-platinum-700">Advanced CRS-HIPEC Fellowship Training</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-secondary-600" />
                      <span className="text-platinum-700">Over 100 CRS-HIPEC Procedures Performed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-secondary-600" />
                      <span className="text-platinum-700">Multidisciplinary Team Approach</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-secondary-600" />
                      <span className="text-platinum-700">International Training and Certification</span>
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/about"
                      className="bg-gradient-to-r from-secondary-800 to-primary-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-primary transition-all duration-300 inline-flex"
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
                    alt="Dr. Dharanikota CRS-HIPEC expertise"
                    className="w-full rounded-3xl shadow-luxury"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-secondary-800 to-primary-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8"> Advanced Treatment for Complex Cases </h2>
                <p className="text-xl text-secondary-100 max-w-3xl mx-auto mb-12 leading-relaxed">
                  Discover if CRS-HIPEC is the right treatment option for your condition. Schedule a consultation to discuss your case.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="bg-white text-secondary-600 px-8 py-4 rounded-2xl font-bold text-lg flex items-center space-x-3 hover:bg-secondary-50 transition-colors shadow-lg"
                    >
                      <SafeIcon icon={FiUser} className="w-6 h-6" />
                      <span>Schedule Consultation</span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href="tel:+919440233339"
                      className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center space-x-3 hover:bg-white hover:text-secondary-600 transition-colors"
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

    export default CRSHipec;