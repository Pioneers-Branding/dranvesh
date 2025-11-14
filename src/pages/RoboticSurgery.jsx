import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import SafeIcon from '../common/SafeIcon';
    import Breadcrumbs from '../components/Breadcrumbs';
    import * as FiIcons from 'react-icons/fi';

    const { FiActivity, FiEye, FiTarget, FiClock, FiHeart, FiShield, FiTrendingUp, FiAward, FiCheck, FiArrowRight, FiUser, FiCalendar } = FiIcons;

    const RoboticSurgery = () => {
      const advantages = [
        {
          icon: FiEye,
          title: '3D High-Definition Vision',
          description: 'Enhanced visualization with 10x magnification and true depth perception for precise surgical navigation.',
        },
        {
          icon: FiTarget,
          title: 'Enhanced Precision',
          description: 'Robotic arms eliminate hand tremors and provide 7 degrees of freedom for unmatched surgical accuracy.',
        },
        {
          icon: FiActivity,
          title: 'Minimal Invasion',
          description: 'Smaller incisions result in reduced scarring, less pain, and faster recovery times for patients.',
        },
        {
          icon: FiClock,
          title: 'Faster Recovery',
          description: 'Patients typically experience shorter hospital stays and quicker return to normal activities.',
        },
      ];

      const applications = [
        {
          title: 'Prostate Cancer',
          procedures: ['Radical Prostatectomy', 'Nerve-Sparing Surgery', 'Lymph Node Dissection'],
          benefits: 'Improved continence and potency outcomes with precise nerve preservation'
        },
        {
          title: 'Gynecologic Cancers',
          procedures: ['Hysterectomy', 'Ovarian Cancer Surgery', 'Endometrial Cancer'],
          benefits: 'Reduced blood loss and faster recovery compared to open surgery'
        },
        {
          title: 'Colorectal Cancer',
          procedures: ['Low Anterior Resection', 'Right Hemicolectomy', 'Rectal Surgery'],
          benefits: 'Better preservation of bowel function and reduced complications'
        },
        {
          title: 'Upper GI Cancers',
          procedures: ['Esophagectomy', 'Gastrectomy', 'Pancreaticoduodenectomy'],
          benefits: 'Complex procedures with enhanced precision and improved outcomes'
        },
      ];

      const outcomes = [
        { metric: 'Shorter Hospital Stay', value: '2-3 days vs 5-7 days', improvement: '50% reduction' },
        { metric: 'Blood Loss', value: 'Minimal', improvement: '75% less bleeding' },
        { metric: 'Complication Rate', value: '<5%', improvement: '60% reduction' },
        { metric: 'Return to Work', value: '2-3 weeks', improvement: '40% faster' },
      ];

      const certifications = [
        'Da Vinci Console Certification - Intuitive Surgical',
        'Advanced Robotic Surgery Training - Seoul, South Korea',
        'Robotic Colorectal Surgery Fellowship',
        'Robotic Gynecologic Oncology Certification',
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
                      <span className="text-primary-700 font-semibold text-sm">DA VINCI ROBOTIC SYSTEM</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                      Robotic Surgery
                    </h1>
                    <p className="text-xl text-platinum-600 leading-relaxed mb-6">
                      Precision cancer surgery using the latest Da Vinci robotic technology for enhanced visualization, dexterity, and patient outcomes.
                    </p>
                    <p className="text-platinum-600 leading-relaxed">
                      Dr. Dharanikota is certified in advanced robotic surgical techniques, having performed over 500 robotic procedures with exceptional outcomes in cancer treatment.
                    </p>
                  </div>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-white/50">
                      <div className="text-2xl font-bold gradient-text">100+</div>
                      <div className="text-sm text-platinum-600">Robotic Procedures</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-white/50">
                      <div className="text-2xl font-bold gradient-text">98%</div>
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
                    src="https://dranveshdharanikota.com/photos/Robotic-Surgery.webp"
                    alt="Robotic Surgery System"
                    className="w-full rounded-3xl shadow-luxury"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary-600 to-secondary-800 rounded-2xl p-4 text-white shadow-lg">
                    <SafeIcon icon={FiAward} className="w-8 h-8 mb-2" />
                    <div className="text-center">
                      <div className="text-sm font-bold">Da Vinci</div>
                      <div className="text-xs">Certified</div>
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
                  Advantages of Robotic Surgery
                </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  Advanced technology delivering superior outcomes for cancer patients
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
                  Robotic Surgery Applications
                </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  Comprehensive robotic surgical solutions for various cancer types
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
                      <h3 className="text-2xl font-bold text-platinum-900 mb-4">{application.title}</h3>
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-platinum-700 mb-3 uppercase tracking-wide">Procedures</h4>
                        <ul className="space-y-2">
                          {application.procedures.map((procedure, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-platinum-600">
                              <SafeIcon icon={FiCheck} className="w-4 h-4 text-primary-600" />
                              <span>{procedure}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-4">
                        <h4 className="text-sm font-bold text-primary-700 mb-2">Key Benefits</h4>
                        <p className="text-primary-600 text-sm">{application.benefits}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Outcomes Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  Superior Patient Outcomes
                </h2>
                <p className="text-xl text-platinum-600 max-w-3xl mx-auto">
                  Proven results demonstrating the effectiveness of robotic surgery
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
                    className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border-2 border-primary-100"
                  >
                    <h3 className="text-lg font-bold text-platinum-900 mb-2">{outcome.metric}</h3>
                    <div className="text-3xl font-bold gradient-text mb-2">{outcome.value}</div>
                    <p className="text-sm text-primary-600 font-medium">{outcome.improvement}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="py-20 bg-gradient-to-br from-platinum-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                    Expert Robotic Surgeon
                  </h2>
                  <p className="text-xl text-platinum-600 mb-6">
                    Dr. Dharanikota's expertise in robotic surgery is backed by extensive training and international certifications.
                  </p>
                  <div className="space-y-4 mb-8">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600" />
                        <span className="text-platinum-700">{cert}</span>
                      </div>
                    ))}
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
                    alt="Dr. Dharanikota performing robotic surgery"
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
                  Experience the Future of Cancer Surgery
                </h2>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-12 leading-relaxed">
                  Discover how robotic surgery can provide you with the most advanced, precise, and minimally invasive cancer treatment available.
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

    export default RoboticSurgery;