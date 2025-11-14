import React from 'react';
    import { motion } from 'framer-motion';
    import SafeIcon from '../common/SafeIcon';
    import Breadcrumbs from '../components/Breadcrumbs';
    import * as FiIcons from 'react-icons/fi';

    const { FiAward, FiGlobe, FiBookOpen, FiUsers, FiTarget, FiHeart, FiShield, FiTrendingUp, FiCalendar, FiMapPin, FiExternalLink } = FiIcons;

    const About = () => {
      const qualifications = [
        { degree: 'MBBS', institution: 'Guntur Medical College', year: '2012', location: 'Guntur, AP' },
        { degree: 'MS - General Surgery (Gold Medal)', institution: 'Katuri Medical College & Hospital', year: '2016', location: 'Guntur, AP' },
        { degree: 'MCh - Surgical Oncology', institution: 'Kidwai Memorial Institute of Oncology', year: '2019', location: 'Bengaluru, KA' },
        { degree: 'Fellowship in Colorectal Surgical Oncology', institution: 'Yonsei Cancer Center, Severance Hospital', year: '2025', location: 'Seoul, South Korea' }
      ];

      const certifications = [
        'Fellowship in Advanced Laparoscopic Surgery (Oncology) – IAGES (2021)',
        'Fellow of The Association of Surgeons of India (FAIS) – ASI (2023)',
        'Da Vinci Robotic Surgery Console Certification (2024)',
        'Fellowship in Minimal Access Surgery – AMASI (2024)',
        'Fellowship in Robotic Surgery – IAGES (2024)'
      ];

      const expertise = [
        { icon: FiTarget, title: 'Minimally Invasive & Robotic Surgery', description: 'Advanced robotic and laparoscopic techniques for GI & Gynecological malignancies using Da Vinci system', color: 'from-primary-500 to-secondary-600' },
        { icon: FiHeart, title: 'Oncoplastic Breast Surgery', description: 'Specialized breast cancer treatment combining oncological excellence with aesthetic preservation', color: 'from-primary-500 to-secondary-600' },
        { icon: FiShield, title: 'CRS & HIPEC Procedures', description: 'Complex cytoreductive surgery with heated chemotherapy for peritoneal surface malignancies', color: 'from-primary-500 to-secondary-600' },
        { icon: FiUsers, title: 'Multidisciplinary Care Coordination', description: 'Tumor boards leadership and collaborative approach with specialists for comprehensive treatment', color: 'from-primary-500 to-secondary-600' }
      ];

      const workExperience = [
        { position: 'Senior Consultant Surgical Oncologist & Head of Department', institution: 'Arete Institute of Oncology, Arete Hospitals', period: 'August 2024 – Present', location: 'Hyderabad, TG' },
        { position: 'Consultant Surgical Oncologist, Laparoscopic & Robotic Surgeon', institution: 'Medicover Cancer Institute, Medicover Hospitals', period: 'November 2023 – August 2024', location: 'Hyderabad, TG' },
        { position: 'Consultant Surgical Oncologist', institution: 'Basavatarakam Indo-American Cancer Hospital & Research Institute', period: 'June 2022 – November 2023', location: 'Hyderabad, TG' },
        { position: 'Chief Consultant Surgical Oncologist', institution: 'Dharani Multispecialty Hospital', period: 'August 2021 – May 2022', location: 'Miryalguda, TG' }
      ];

      const awards = [
        { year: '2023', title: 'Dr. C Palanivelu Best Faculty Video Award', organization: 'Association of Surgeons of India Conference', location: 'Visakhapatnam, AP' },
        { year: '2022', title: 'Best Presentation Award', organization: 'Asia-Pacific Congress of Robotic & Laparoscopic Surgeons', location: 'Nagoya, Japan' },
        { year: '2020', title: 'Best Poster Award', organization: 'Midterm Conference of Indian Association of Surgical Oncology', location: 'Tirupati, AP' },
        { year: '2016', title: 'Gold Medal', organization: 'Katuri Medical College & Hospital', location: 'Guntur, AP' },
        { year: '2015', title: 'Best Poster Award', organization: 'Association of Surgeons of India Conference', location: 'Gurgaon, New Delhi' }
      ];

      const professionalAffiliations = [
        'The Association of Surgeons of India (ASI)',
        'Indian Association of Surgical Oncology (IASO)',
        'The Association of Breast Surgeons of India (ABSI)',
        'Association of Minimal Access Surgeons of India (AMASI)',
        'The Indian Association of Gastrointestinal Endosurgeons (IAGES)',
        'The American Society of Breast Surgeons (ASBrS)',
        'American Society of Clinical Oncology (ASCO)',
        'European Society for Medical Oncology (ESMO)'
      ];

      return (
        <div className="min-h-screen bg-white font-inter pt-20">
          {/* Breadcrumbs with updated colors */}
          <div style={{ background: 'linear-gradient(to right,#720509,#002050)' }}>
            <Breadcrumbs />
          </div>

          {/* Hero Section with updated colors */}
          <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(to right,#720509,#002050)' }}>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
              <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
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
                  className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6"
                >
                  <span className="text-white font-semibold text-sm tracking-wide">ABOUT DR. ANVESH</span>
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  About Dr. Anvesh Dharanikota
                </h1>
                <p className="text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
                  Senior Consultant Surgical Oncologist & Head of Department
                  Laparoscopic & Robotic Surgeon
                  <br />
                  Well accomplished Surgical Oncologist with 12+ years of surgical experience in minimally invasive and robotic-assisted oncological surgeries. Recognized as a skillful surgeon specializing in complex gastrointestinal surgeries and breast oncoplastic surgeries.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Key Areas of Expertise */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Key Areas of Expertise</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Specialized skills and advanced techniques in surgical oncology and cancer care
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {expertise.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="luxury-card"
                  >
                    <div className="bg-white rounded-3xl p-8 shadow-luxury border border-white/50 hover:shadow-primary">
                      <div className={`w-20 h-20 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mb-6`}>
                        <SafeIcon icon={area.icon} className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{area.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Academic Qualifications */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Academic Excellence</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Distinguished academic achievements and continuous pursuit of surgical excellence
                </p>
              </motion.div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {qualifications.map((qual, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="luxury-card"
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-luxury border border-white/50 hover:shadow-primary">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <SafeIcon icon={FiAward} className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{qual.degree}</h3>
                          <p className="text-gray-600 mb-2">{qual.institution}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                              <span>{qual.year}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                              <span>{qual.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Additional Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Additional Certifications</h3>
                <div className="bg-white rounded-3xl p-8 shadow-luxury border border-white/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Professional Experience</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Leadership roles and clinical expertise across premier healthcare institutions
                </p>
              </motion.div>
              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="luxury-card"
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-luxury border border-white/50 hover:shadow-primary">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{job.position}</h3>
                          <p className="text-lg text-primary-600 mb-2">{job.institution}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                              <span>{job.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Awards & Honors */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Honors & Awards</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Recognition for excellence in surgical oncology and medical education
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="luxury-card"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-luxury border border-white/50 hover:shadow-primary text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <SafeIcon icon={FiAward} className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                        {award.year}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{award.organization}</p>
                      <p className="text-xs text-gray-500">{award.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Professional Affiliations */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Professional Affiliations</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Active memberships in leading medical and surgical organizations
                </p>
              </motion.div>
              <div className="bg-white rounded-3xl p-8 shadow-luxury border border-white/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {professionalAffiliations.map((affiliation, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{affiliation}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Medical Philosophy */}
          <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Medical Philosophy</h2>
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-luxury border border-white/50">
                  <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8">
                    "Dedicated to evidence-based practice, translational research, and improving outcomes for cancer patients through precision surgical intervention. Every patient deserves not just the most advanced medical treatment, but also compassionate care that honors their dignity and hope."
                  </blockquote>
                  <div className="text-lg font-semibold text-primary-600">- Dr. Anvesh Dharanikota</div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      );
    };

    export default About;