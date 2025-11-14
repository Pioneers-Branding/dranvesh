import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import SafeIcon from '../common/SafeIcon';
    import Breadcrumbs from '../components/Breadcrumbs';
    import * as FiIcons from 'react-icons/fi';

    const { FiTarget, FiEye, FiZap, FiActivity, FiHeart, FiShield, FiTrendingUp, FiCheck, FiArrowRight, FiUser, FiCalendar, FiStar, FiNavigation } = FiIcons;

    const ICGFluorescence = () => {
      const applications = [
        {
          title: 'Sentinel Lymph Node Mapping',
          description: 'Real-time identification of sentinel lymph nodes for accurate staging in breast, gynecologic, and other cancers.',
          procedures: ['Breast Cancer Staging', 'Gynecologic Cancer Evaluation', 'Melanoma Assessment', 'Gastrointestinal Cancer Staging'],
          benefits: 'Precise lymph node identification with minimal false negative rates',
          icon: FiTarget
        },
        {
          title: 'Anastomotic Assessment',
          description: 'Evaluation of blood supply to anastomotic sites to ensure adequate perfusion and reduce leak rates.',
          procedures: ['Colorectal Anastomosis', 'Esophageal Anastomosis', 'Small Bowel Anastomosis'],
          benefits: 'Reduced anastomotic leak rates and improved surgical outcomes',
          icon: FiActivity
        },
        {
          title: 'Tumor Localization',
          description: 'Enhanced visualization of tumor margins and residual disease for complete surgical resection.',
          procedures: ['Liver Metastases', 'Lung Nodules', 'Peritoneal Implants'],
          benefits: 'Improved complete resection rates and reduced positive margins',
          icon: FiEye
        },
        {
          title: 'Perfusion Assessment',
          description: 'Real-time evaluation of tissue perfusion for viability assessment during complex reconstructions.',
          procedures: ['Flap Viability', 'Bowel Perfusion', 'Organ Transplant Assessment'],
          benefits: 'Enhanced surgical decision-making and reduced complications',
          icon: FiHeart
        },
      ];

      const advantages = [
        { icon: FiZap, title: 'Real-Time Imaging', description: 'Instantaneous visualization during surgery allows for immediate decision-making and surgical adjustments.' },
        { icon: FiTarget, title: 'Enhanced Precision', description: 'Accurate identification of anatomical structures and pathological tissues with high sensitivity.' },
        { icon: FiShield, title: 'Safety Profile', description: 'ICG is FDA-approved with excellent safety profile and minimal allergic reactions.' },
        { icon: FiTrendingUp, title: 'Improved Outcomes', description: 'Better surgical outcomes with reduced complications and improved oncological results.' },
      ];

      const technical_aspects = [
        { aspect: 'Wavelength', details: 'Near-infrared light (700-900nm) for optimal tissue penetration' },
        { aspect: 'Dosage', details: '0.25-0.5 mg/kg body weight, administered intravenously' },
        { aspect: 'Timing', details: 'Visualization within minutes to hours depending on application' },
        { aspect: 'Equipment', details: 'Specialized near-infrared imaging systems integrated with surgical platforms' },
      ];

      const clinical_benefits = [
        { metric: 'Sensitivity', value: '>95%', description: 'For sentinel lymph node detection' },
        { metric: 'Specificity', value: '>90%', description: 'Accurate tissue identification' },
        { metric: 'Complication Reduction', value: '30-50%', description: 'Decreased anastomotic leaks' },
        { metric: 'Positive Margin Rate', value: 'Reduced by 25%', description: 'Improved complete resection' },
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
                      <span className="text-secondary-700 font-semibold text-sm">FLUORESCENCE-GUIDED SURGERY</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                      ICG Fluorescence
                    </h1>
                    <h2 className="text-2xl text-platinum-700 mb-6">
                      Indocyanine Green Guided Surgery
                    </h2>
                    <p className="text-xl text-platinum-600 leading-relaxed mb-6">
                      Advanced imaging technique using fluorescent dye for real-time visualization of blood flow, lymphatics, and tumor margins during surgery.
                    </p>
                    <p className="text-platinum-600 leading-relaxed">
                      Dr. Dharanikota utilizes ICG fluorescence technology to enhance surgical precision, improve patient safety, and optimize oncological outcomes.
                    </p>
                  </div>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-white/50">
                      <div className="text-2xl font-bold gradient-text">150+</div>
                      <div className="text-sm text-platinum-600">ICG-Guided Procedures</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-white/50">
                      <div className="text-2xl font-bold gradient-text">98%</div>
                      <div className="text-sm text-platinum-600">Detection Accuracy</div>
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
                    src="https://dranveshdharanikota.com/photos/ICG-Fluorescence.webp"
                    alt="ICG Fluorescence Surgery"
                    className="w-full rounded-3xl shadow-luxury"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-secondary-800 to-primary-600 rounded-2xl p-4 text-white shadow-lg">
                    <SafeIcon icon={FiTarget} className="w-8 h-8 mb-2" />
                    <div className="text-center">
                      <div className="text-sm font-bold">Precision</div>
                      <div className="text-xs">Guided</div>
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
                  Advantages of ICG Fluorescence
                </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  Revolutionary imaging technology enhancing surgical precision and patient outcomes
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
                  Clinical Applications
                </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  Diverse applications of ICG fluorescence in oncological surgery
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
                        <div className="w-12 h-12 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <SafeIcon icon={application.icon} className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-platinum-900 mb-2">{application.title}</h3>
                          <p className="text-platinum-600 text-sm">{application.description}</p>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-platinum-700 mb-3 uppercase tracking-wide">Procedures</h4>
                        <ul className="space-y-2">
                          {application.procedures.map((procedure, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-platinum-600">
                              <SafeIcon icon={FiCheck} className="w-4 h-4 text-secondary-600" />
                              <span className="text-sm">{procedure}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-xl p-4">
                        <h4 className="text-sm font-bold text-secondary-700 mb-2">Key Benefits</h4>
                        <p className="text-secondary-600 text-sm">{application.benefits}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Aspects */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  Technical Specifications
                </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  Understanding the science behind ICG fluorescence imaging
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technical_aspects.map((aspect, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-6 border border-secondary-100"
                  >
                    <h3 className="text-lg font-bold text-platinum-900 mb-3">{aspect.aspect}</h3>
                    <p className="text-platinum-600 text-sm leading-relaxed">{aspect.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Clinical Benefits */}
          <section className="py-20 bg-gradient-to-br from-platinum-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  Clinical Benefits
                </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  Proven improvements in surgical outcomes and patient care
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {clinical_benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-luxury border border-white/50 text-center"
                  >
                    <h3 className="text-lg font-bold text-platinum-900 mb-2">{benefit.metric}</h3>
                    <div className="text-3xl font-bold gradient-text mb-2">{benefit.value}</div>
                    <p className="text-sm text-platinum-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Innovation Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                    Surgical Innovation
                  </h2>
                  <p className="text-xl text-platinum-600 mb-6">
                    ICG fluorescence represents the cutting edge of surgical imaging technology, providing surgeons with unprecedented visualization capabilities.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiStar} className="w-5 h-5 text-secondary-600" />
                      <span className="text-platinum-700">FDA-approved and internationally recognized</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiNavigation} className="w-5 h-5 text-secondary-600" />
                      <span className="text-platinum-700">Real-time surgical navigation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiShield} className="w-5 h-5 text-secondary-600" />
                      <span className="text-platinum-700">Enhanced patient safety</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-secondary-600" />
                      <span className="text-platinum-700">Improved oncological outcomes</span>
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/about"
                      className="bg-gradient-to-r from-secondary-800 to-primary-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-primary transition-all duration-300 inline-flex"
                    >
                      <span>View Expertise</span>
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
                    alt="Dr. Dharanikota using ICG fluorescence"
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Advanced Surgical Imaging Technology
                </h2>
                <p className="text-xl text-secondary-100 max-w-3xl mx-auto mb-12 leading-relaxed">
                  Experience the precision and safety of ICG fluorescence-guided surgery. Consult with Dr. Dharanikota to learn more.
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

    export default ICGFluorescence;