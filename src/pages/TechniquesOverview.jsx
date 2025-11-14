import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import SafeIcon from '../common/SafeIcon';
    import Breadcrumbs from '../components/Breadcrumbs';
    import * as FiIcons from 'react-icons/fi';

    const { FiActivity, FiTarget, FiShield, FiEye, FiHeart, FiArrowRight, FiAward, FiTrendingUp, FiUsers, FiClock } = FiIcons;

    const TechniquesOverview = () => {
      const techniques = [
        {
          title: 'Robotic Surgery',
          subtitle: 'Da Vinci Robotic System',
          description: 'Precision cancer surgery using advanced robotic technology for minimal invasive procedures with enhanced dexterity and visualization.',
          icon: FiActivity,
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          link: '/techniques/robotic-surgery',
          benefits: ['Enhanced Precision', '3D Visualization', 'Minimal Scarring', 'Faster Recovery'],
          applications: ['Prostate Cancer', 'Gynecologic Cancers', 'Colorectal Cancer', 'Upper GI Cancers'],
          color: 'from-primary-600 to-secondary-800'
        },
        {
          title: 'CRS & HIPEC',
          subtitle: 'Cytoreductive Surgery + Heated Chemotherapy',
          description: 'Complex procedure combining surgical removal of visible tumors with heated intraperitoneal chemotherapy for peritoneal carcinomatosis.',
          icon: FiShield,
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          link: '/techniques/crs-hipec',
          benefits: ['Complete Cytoreduction', 'Targeted Therapy', 'Improved Survival', 'Comprehensive Care'],
          applications: ['Peritoneal Carcinomatosis', 'Ovarian Cancer', 'Colorectal Cancer', 'Appendiceal Cancer'],
          color: 'from-secondary-800 to-primary-600'
        },
        {
          title: 'VATS (Thoracic)',
          subtitle: 'Video-Assisted Thoracoscopic Surgery',
          description: 'Minimally invasive thoracic surgery using video guidance for lung and chest procedures with reduced trauma and faster recovery.',
          icon: FiEye,
          image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          link: '/techniques/vats',
          benefits: ['Minimal Invasion', 'Reduced Pain', 'Shorter Hospital Stay', 'Better Cosmesis'],
          applications: ['Lung Cancer', 'Mediastinal Masses', 'Pleural Disease', 'Chest Wall Tumors'],
          color: 'from-primary-600 to-secondary-800'
        },
        {
          title: 'ICG Fluorescence',
          subtitle: 'Indocyanine Green Guided Surgery',
          description: 'Advanced imaging technique using fluorescent dye for real-time visualization of blood flow, lymphatics, and tumor margins.',
          icon: FiTarget,
          image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          link: '/techniques/icg-fluorescence',
          benefits: ['Real-time Imaging', 'Precise Navigation', 'Safety Enhancement', 'Better Outcomes'],
          applications: ['Sentinel Node Biopsy', 'Anastomotic Assessment', 'Tumor Localization', 'Perfusion Assessment'],
          color: 'from-secondary-800 to-primary-600'
        },
        {
          title: 'Oncoplastic Surgery',
          subtitle: 'Oncology + Plastic Surgery',
          description: 'Combining cancer treatment with reconstructive techniques to achieve optimal oncological outcomes while preserving aesthetics.',
          icon: FiHeart,
          image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          link: '/services/breast-oncoplastic',
          benefits: ['Aesthetic Preservation', 'Complete Resection', 'Immediate Reconstruction', 'Patient Satisfaction'],
          applications: ['Breast Cancer', 'Soft Tissue Sarcomas', 'Head & Neck Cancer', 'Skin Cancer'],
          color: 'from-primary-600 to-secondary-800'
        }
      ];

      return (
        <div className="min-h-screen bg-white font-inter pt-20">
          {/* Breadcrumbs */}
          <div style={{ background: 'linear-gradient(to right, #720509, #002050)' }}>
            <Breadcrumbs />
          </div>

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-primary-300 to-secondary-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
              <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-secondary-300 to-primary-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 px-6 py-2 rounded-full mb-6"
                >
                  <span className="text-primary-700 font-semibold text-sm tracking-wide">ADVANCED SURGICAL TECHNIQUES</span>
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text"> Key Surgical Techniques </h1>
                <p className="text-xl text-platinum-600 max-w-4xl mx-auto leading-relaxed"> State-of-the-art surgical innovations combining precision technology with expert technique for optimal cancer treatment outcomes </p>
              </motion.div>
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
              >
                <div className="bg-white rounded-2xl p-6 shadow-luxury border border-white/50 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">5</div>
                  <div className="text-platinum-600">Advanced Techniques</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-luxury border border-white/50 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
                  <div className="text-platinum-600">Procedures Performed</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-luxury border border-white/50 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-platinum-600">Success Rate</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-luxury border border-white/50 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">12+</div>
                  <div className="text-platinum-600">Years Experience</div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Techniques Grid */}
          <section className="py-16 bg-gradient-to-br from-platinum-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {techniques.map((technique, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="luxury-card"
                  >
                    <div className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-white/50 hover:shadow-primary">
                      {/* Image Header */}
                      <div className="relative h-64 overflow-hidden">
                        <img src={technique.image} alt={technique.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        {/* Icon */}
                        <div className="absolute top-6 right-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${technique.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                            <SafeIcon icon={technique.icon} className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        {/* Title Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h3 className="text-2xl font-bold mb-1">{technique.title}</h3>
                          <p className="text-primary-200 text-sm">{technique.subtitle}</p>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="p-8">
                        <p className="text-platinum-600 leading-relaxed mb-6">
                          {technique.description}
                        </p>
                        {/* Benefits & Applications */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-sm font-bold text-platinum-900 mb-3 uppercase tracking-wide">Key Benefits</h4>
                            <ul className="space-y-2">
                              {technique.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center space-x-2 text-sm text-platinum-600">
                                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-platinum-900 mb-3 uppercase tracking-wide">Applications</h4>
                            <ul className="space-y-2">
                              {technique.applications.map((application, idx) => (
                                <li key={idx} className="flex items-center space-x-2 text-sm text-platinum-600">
                                  <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full flex-shrink-0"></div>
                                  <span>{application}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {/* Learn More Button */}
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Link
                            to={technique.link}
                            className={`w-full bg-gradient-to-r ${technique.color} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300`}
                          >
                            <span>Learn More</span>
                            <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Excellence Metrics */}
          <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Excellence in Surgical Innovation</h2>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-12 leading-relaxed"> Combining cutting-edge technology with surgical expertise to deliver exceptional patient outcomes </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <SafeIcon icon={FiAward} className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">International Recognition</h3>
                    <p className="text-primary-100 text-sm">Awards for surgical excellence</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <SafeIcon icon={FiTrendingUp} className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Superior Outcomes</h3>
                    <p className="text-primary-100 text-sm">Proven surgical results</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <SafeIcon icon={FiUsers} className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Patient-Centered Care</h3>
                    <p className="text-primary-100 text-sm">Comprehensive treatment approach</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <SafeIcon icon={FiClock} className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Faster Recovery</h3>
                    <p className="text-primary-100 text-sm">Minimally invasive techniques</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      );
    };

    export default TechniquesOverview;