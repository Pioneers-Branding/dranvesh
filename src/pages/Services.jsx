import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import Breadcrumbs from '../components/Breadcrumbs';
import * as FiIcons from 'react-icons/fi';

const { FiActivity, FiHeart, FiTarget, FiUsers, FiShield, FiEye, FiArrowRight, FiStar } = FiIcons;

const Services = () => {
  const services = [
    { title: 'Breast Oncoplastic Surgery', description: 'Advanced breast cancer treatment combining oncological excellence with aesthetic preservation through innovative surgical techniques.', icon: FiHeart, image: 'https://dranveshdharanikota.com/photos/Breast-Oncoplastic-Surgery.webp', link: '/services/breast-oncoplastic', features: ['Breast Conservation', 'Immediate Reconstruction', 'Aesthetic Excellence', 'Oncological Safety'], color: 'from-primary-600 to-secondary-800', category: 'Specialized Surgery' },
    { title: 'GI & Thoracic Oncology Overview', description: 'Comprehensive treatment for gastrointestinal and thoracic cancers using advanced minimally invasive and robotic techniques.', icon: FiActivity, image: 'https://dranveshdharanikota.com/photos/GI.webp', link: '/services/gi-thoracic', features: ['Laparoscopic Surgery', 'Robotic Assistance', 'Faster Recovery', 'Precision Treatment'], color: 'from-secondary-800 to-primary-600', category: 'Cancer Surgery' },
    { title: 'Esophageal Cancer', description: 'Expert surgical treatment for esophageal cancer using minimally invasive techniques and comprehensive multidisciplinary care.', icon: FiTarget, image: 'https://dranveshdharanikota.com/photos/Esophageal-Cancer.webp', link: '/services/esophageal-cancer', features: ['Advanced Esophagectomy', 'VATS Approach', 'Comprehensive Care', 'Better Outcomes'], color: 'from-primary-600 to-secondary-800', category: 'GI Cancer' },
    { title: 'Stomach (Gastric) Cancer', description: 'Specialized gastric cancer surgery with minimally invasive approaches for optimal patient outcomes and recovery.', icon: FiShield, image: 'https://dranveshdharanikota.com/photos/Stomach.webp', link: '/services/gastric-cancer', features: ['Laparoscopic Gastrectomy', 'Lymph Node Dissection', 'Minimal Invasion', 'Enhanced Recovery'], color: 'from-secondary-800 to-primary-600', category: 'GI Cancer' },
    { title: 'Colorectal Cancer', description: 'Advanced surgical treatment for colon and rectal cancers using robotic and laparoscopic techniques.', icon: FiUsers, image: 'https://dranveshdharanikota.com/photos/Colorectal-Cancer.webp', link: '/services/colorectal-cancer', features: ['Robotic Surgery', 'TME Technique', 'Sphincter Preservation', 'Quick Recovery'], color: 'from-primary-600 to-secondary-800', category: 'GI Cancer' },
    { title: 'HPB (Liver, Pancreas, Gallbladder)', description: 'Complex hepatobiliary and pancreatic cancer surgery with advanced surgical techniques and comprehensive care.', icon: FiEye, image: 'https://dranveshdharanikota.com/photos/HPB.webp', link: '/services/hpb', features: ['Pancreaticoduodenectomy', 'Liver Resection', 'Bile Duct Surgery', 'Complex Procedures'], color: 'from-secondary-800 to-primary-600', category: 'Complex Surgery' },
    { title: 'Lung Cancer', description: 'Advanced thoracic surgical techniques including VATS and robotic approaches for lung cancer treatment.', icon: FiActivity, image: 'https://dranveshdharanikota.com/photos/Lung-Cancer.webp', link: '/services/lung-cancer', features: ['VATS Surgery', 'Robotic Lobectomy', 'Minimal Invasion', 'Faster Recovery'], color: 'from-primary-600 to-secondary-800', category: 'Thoracic Surgery' },
    { title: 'Gynecologic Oncology', description: 'Comprehensive women\'s cancer care with minimally invasive surgical approaches and multidisciplinary treatment.', icon: FiHeart, image: 'https://dranveshdharanikota.com/photos/Gynecologic-Oncology.webp', link: '/services/gynecologic-oncology', features: ['Robotic Surgery', 'Laparoscopic Approach', 'Fertility Preservation', 'Comprehensive Care'], color: 'from-secondary-800 to-primary-600', category: 'Women\'s Health' },
    { title: 'Head & Neck Oncology', description: 'Expert treatment for head and neck cancers with advanced surgical techniques and reconstructive options.', icon: FiTarget, image: 'https://dranveshdharanikota.com/photos/Head.webp', link: '/services/head-neck-oncology', features: ['Microvascular Surgery', 'Reconstructive Options', 'Functional Preservation', 'Aesthetic Outcomes'], color: 'from-primary-600 to-secondary-800', category: 'Specialized Surgery' },
    { title: 'Uro-Oncology', description: 'Advanced urological cancer treatment including robotic prostatectomy and kidney surgery.', icon: FiShield, image: 'https://dranveshdharanikota.com/photos/Uro-Oncology.webp', link: '/services/uro-oncology', features: ['Robotic Prostatectomy', 'Kidney Surgery', 'Bladder Cancer', 'Minimally Invasive'], color: 'from-secondary-800 to-primary-600', category: 'Urological Surgery' },
    { title: 'Musculoskeletal Oncology', description: 'Specialized treatment for bone and soft tissue cancers with limb-sparing surgical techniques.', icon: FiUsers, image: 'https://dranveshdharanikota.com/photos/Musculoskeletal-Oncology.webp', link: '/services/musculoskeletal-oncology', features: ['Limb Sparing Surgery', 'Soft Tissue Sarcoma', 'Bone Cancer Treatment', 'Functional Preservation'], color: 'from-primary-600 to-secondary-800', category: 'Orthopedic Oncology' }
  ];

  const categories = [
    'All Services',
    'Cancer Surgery',
    'GI Cancer',
    'Specialized Surgery',
    'Complex Surgery',
    'Thoracic Surgery',
    'Women\'s Health',
    'Urological Surgery',
    'Orthopedic Oncology'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Services');
  const filteredServices = selectedCategory === 'All Services' ? services : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white font-inter pt-20">
      <div style={{ background: 'linear-gradient(to right,#720509,#002050)' }}>
        <Breadcrumbs />
      </div>

      <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #720509, #002050)' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-white font-semibold text-sm tracking-wide">COMPREHENSIVE CANCER CARE</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white"> Our Medical Services </h1>
            <p className="text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed"> Advanced surgical oncology services combining cutting-edge technology with compassionate,patient-centered care </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">11</div>
              <div className="text-pink-100">Specialized Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">1200+</div>
              <div className="text-pink-100">Successful Surgeries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-pink-100">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">12+</div>
              <div className="text-pink-100">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-platinum-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === category ? 'bg-gradient-to-r from-primary-600 to-secondary-800 text-white shadow-lg' : 'bg-platinum-100 text-platinum-700 hover:bg-primary-50 hover:text-primary-700'}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-platinum-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="luxury-card group h-full"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-white/50 hover:shadow-primary h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-6 right-6">
                      <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <SafeIcon icon={service.icon} className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-sm text-platinum-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-platinum-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-platinum-600 leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <SafeIcon icon={FiStar} className="w-4 h-4 text-primary-500" />
                          <span className="text-sm text-platinum-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to={service.link}
                        className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 mt-auto`}
                      >
                        <span>Learn More</span>
                        <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </motion.div>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8"> Ready to Get Started? </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Schedule a consultation to discuss your treatment options and develop a personalized care plan
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg flex items-center space-x-3 hover:bg-primary-50 transition-colors shadow-lg"
                >
                  <SafeIcon icon={FiUsers} className="w-6 h-6" />
                  <span>Schedule Consultation</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:+919440233339"
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center space-x-3 hover:bg-white hover:text-primary-600 transition-colors"
                >
                  <SafeIcon icon={FiActivity} className="w-6 h-6" />
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

export default Services;