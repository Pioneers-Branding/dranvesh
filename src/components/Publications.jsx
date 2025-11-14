import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiBookOpen, FiExternalLink, FiCalendar, FiArrowRight} = FiIcons;

const Publications = () => {
  const publications = [
    {
      title: 'Robotic Surgery in Gastrointestinal Cancer: A Comprehensive Review',
      journal: 'International Journal of Surgical Oncology',
      year: '2023',
      abstract: 'A comprehensive analysis of robotic surgical techniques in treating gastrointestinal cancers, demonstrating improved patient outcomes and reduced recovery times.',
      link: 'https://www.researchgate.net/profile/Anvesh-Dharanikota',
      type: 'Research Article'
    },
    {
      title: 'Minimally Invasive Techniques in Gynecological Oncology',
      journal: 'Asian Journal of Oncology',
      year: '2023',
      abstract: 'Evaluation of laparoscopic and robotic approaches in gynecological cancer surgery, focusing on oncological safety and patient quality of life.',
      link: 'https://www.researchgate.net/profile/Anvesh-Dharanikota',
      type: 'Clinical Study'
    },
    {
      title: 'CRS-HIPEC: Outcomes and Future Directions',
      journal: 'Surgical Oncology International',
      year: '2022',
      abstract: 'Long-term outcomes analysis of cytoreductive surgery with HIPEC for peritoneal carcinomatosis, establishing new treatment protocols.',
      link: 'https://www.researchgate.net/profile/Anvesh-Dharanikota',
      type: 'Review Article'
    }
  ];

  return (
    <section id="publications" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contributing to Global Cancer Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Published research advancing the field of surgical oncology and improving patient care worldwide
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-800 mx-auto mt-6"></div>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay: index * 0.1}}
              viewport={{once: true}}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-200 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-primary-200 group-hover:to-secondary-300 transition-colors">
                  <SafeIcon icon={FiBookOpen} className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                  <span>{publication.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <div className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {publication.type}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {publication.title}
                  </h3>
                  <p className="text-primary-600 font-medium text-sm mb-3">{publication.journal}</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {publication.abstract}
                </p>

                {/* Link */}
                <div className="pt-4">
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-secondary-800 font-medium text-sm group-hover:underline"
                  >
                    <span>Read Publication</span>
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Links */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Explore More Research</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access the complete collection of research publications and academic contributions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                href="https://www.researchgate.net/profile/Anvesh-Dharanikota"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-600 to-secondary-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-primary transition-all duration-300"
              >
                <span>ResearchGate Profile</span>
                <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                href="https://orcid.org/0000-0001-7404-3239"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:border-primary-600 hover:text-primary-600 transition-colors"
              >
                <span>ORCID Profile</span>
                <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className="text-center mt-12"
        >
          <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
            <Link
              to="/publications"
              className="bg-gradient-to-r from-primary-600 to-secondary-800 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 mx-auto hover:shadow-primary transition-all duration-300 inline-flex"
            >
              <span>View All Publications</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;