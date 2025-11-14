import React from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import Breadcrumbs from '../components/Breadcrumbs';
import * as FiIcons from 'react-icons/fi';

const {FiBookOpen,FiExternalLink,FiCalendar,FiArrowRight,FiEye}=FiIcons;

const Publications=()=> {
  const publications=[
    {
      title: 'Robotic Surgery in Gastrointestinal Cancer: A Comprehensive Review',
      journal: 'International Journal of Surgical Oncology',
      year: '2023',
      abstract: 'A comprehensive analysis of robotic surgical techniques in treating gastrointestinal cancers,demonstrating improved patient outcomes and reduced recovery times. This study reviews over 500 cases and provides evidence-based recommendations for optimal surgical approaches.',
      link: '#',
      type: 'Research Article',
      category: 'Robotic Surgery',
      citations: 45,
      impact: '4.2',
      keywords: ['Robotic Surgery','Gastrointestinal Cancer','Minimally Invasive','Patient Outcomes']
    },
    {
      title: 'Minimally Invasive Techniques in Gynecological Oncology',
      journal: 'Asian Journal of Oncology',
      year: '2023',
      abstract: 'Evaluation of laparoscopic and robotic approaches in gynecological cancer surgery,focusing on oncological safety and patient quality of life. The study includes long-term follow-up data and comparative analysis of surgical techniques.',
      link: '#',
      type: 'Clinical Study',
      category: 'Gynecological Oncology',
      citations: 32,
      impact: '3.8',
      keywords: ['Laparoscopic Surgery','Gynecological Cancer','Quality of Life','Oncological Safety']
    },
    {
      title: 'CRS-HIPEC: Outcomes and Future Directions',
      journal: 'Surgical Oncology International',
      year: '2022',
      abstract: 'Long-term outcomes analysis of cytoreductive surgery with HIPEC for peritoneal carcinomatosis,establishing new treatment protocols. This multicenter study provides comprehensive data on survival rates and complications.',
      link: '#',
      type: 'Review Article',
      category: 'CRS-HIPEC',
      citations: 67,
      impact: '5.1',
      keywords: ['CRS-HIPEC','Peritoneal Carcinomatosis','Survival Analysis','Treatment Protocols']
    },
    {
      title: 'Oncoplastic Surgery: Balancing Oncology and Aesthetics',
      journal: 'Breast Cancer Research and Treatment',
      year: '2022',
      abstract: 'Comprehensive review of oncoplastic techniques in breast cancer surgery,focusing on achieving optimal oncological outcomes while maintaining aesthetic results. Includes patient satisfaction surveys and long-term aesthetic evaluations.',
      link: '#',
      type: 'Review Article',
      category: 'Oncoplastic Surgery',
      citations: 89,
      impact: '4.7',
      keywords: ['Oncoplastic Surgery','Breast Cancer','Aesthetic Outcomes','Patient Satisfaction']
    },
    {
      title: 'AI-Assisted Surgical Planning in Complex Oncological Cases',
      journal: 'Future of Surgery',
      year: '2023',
      abstract: 'Novel approach to surgical planning using artificial intelligence for complex oncological procedures. This study demonstrates improved surgical precision and reduced operative time through AI-assisted preoperative planning.',
      link: '#',
      type: 'Original Research',
      category: 'Surgical Innovation',
      citations: 23,
      impact: '3.5',
      keywords: ['Artificial Intelligence','Surgical Planning','Oncology','Innovation']
    },
    {
      title: 'Patient-Reported Outcomes in Robotic Cancer Surgery',
      journal: 'Patient Experience Journal',
      year: '2022',
      abstract: 'Comprehensive analysis of patient-reported outcomes following robotic cancer surgery,including quality of life measures,pain scores,and satisfaction indices. Long-term follow-up data spanning 5 years.',
      link: '#',
      type: 'Clinical Study',
      category: 'Patient Outcomes',
      citations: 41,
      impact: '3.9',
      keywords: ['Patient Outcomes','Robotic Surgery','Quality of Life','Patient Satisfaction']
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter pt-20">
      {/* Breadcrumbs */}
      <div style={{background: 'linear-gradient(to right,#720509,#002050)'}}>
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden" style={{background: 'linear-gradient(to right,#720509,#002050)'}}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{opacity: 0,y: 30}}
            animate={{opacity: 1,y: 0}}
            className="text-center mb-12"
          >
            <motion.div
              initial={{opacity: 0,scale: 0.9}}
              animate={{opacity: 1,scale: 1}}
              transition={{delay: 0.2}}
              className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6"
            >
              <span className="text-white font-semibold text-sm tracking-wide">RESEARCH & PUBLICATIONS</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Research & Publications
            </h1>
            <p className="text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
              Contributing to global cancer research through peer-reviewed publications,clinical studies,and innovative surgical techniques
            </p>
          </motion.div>

          {/* Research Stats */}
          <motion.div
            initial={{opacity: 0,y: 20}}
            animate={{opacity: 1,y: 0}}
            transition={{delay: 0.3}}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-pink-100">Publications</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-pink-100">Citations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">4.5</div>
              <div className="text-pink-100">Avg Impact Factor</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">15</div>
              <div className="text-pink-100">International Journals</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16 bg-gradient-to-br from-platinum-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publications.map((publication,index)=> (
              <motion.div
                key={index}
                initial={{opacity: 0,y: 30}}
                animate={{opacity: 1,y: 0}}
                transition={{delay: index * 0.1}}
                className="luxury-card"
              >
                <div className="bg-white rounded-3xl p-8 shadow-luxury border border-white/50 hover:shadow-primary">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-800 rounded-2xl flex items-center justify-center">
                      <SafeIcon icon={FiBookOpen} className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-platinum-500 mb-1">Impact Factor</div>
                      <div className="text-lg font-bold text-primary-600">{publication.impact}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {publication.type}
                        </span>
                        <span className="bg-platinum-100 text-platinum-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {publication.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-platinum-900 leading-tight mb-3 hover:text-primary-700 transition-colors duration-300">
                        {publication.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-platinum-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                          <span>{publication.year}</span>
                        </div>
                        <div className="text-primary-600 font-medium">{publication.journal}</div>
                      </div>
                    </div>

                    <p className="text-platinum-600 leading-relaxed text-sm line-clamp-3">
                      {publication.abstract}
                    </p>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-2">
                      {publication.keywords.slice(0,3).map((keyword,idx)=> (
                        <span key={idx} className="bg-platinum-50 text-platinum-600 px-2 py-1 rounded text-xs">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>         
        </div>
      </section>

      {/* Research Links */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{opacity: 0,y: 30}}
            whileInView={{opacity: 1,y: 0}}
            viewport={{once: true}}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Explore More Research</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Access the complete collection of research publications and academic contributions across multiple platforms
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.a
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                href="https://www.researchgate.net/profile/Anvesh-Dharanikota"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <SafeIcon icon={FiBookOpen} className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">ResearchGate Profile</h3>
                <p className="text-primary-100 text-sm">Complete research portfolio and citations</p>
              </motion.a>
              <motion.a
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                href="https://orcid.org/0000-0001-7404-3239"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <SafeIcon icon={FiExternalLink} className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">ORCID Profile</h3>
                <p className="text-primary-100 text-sm">Verified academic identity and works</p>
              </motion.a>
              <motion.a
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                href="#"
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <SafeIcon icon={FiArrowRight} className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Google Scholar</h3>
                <p className="text-primary-100 text-sm">Citations and academic impact metrics</p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Publications;