import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import SafeIcon from '../common/SafeIcon';
    import * as FiIcons from 'react-icons/fi';

    const { FiPhone, FiMail, FiMapPin, FiLinkedin, FiExternalLink, FiBookOpen, FiClock } = FiIcons;

    const Footer = () => {
      const quickLinks = [
        { name: 'About Dr. Dharanikota', href: '/about' },
        { name: 'Awards & Recognition', href: '/awards' },
        { name: 'Research & Publications', href: '/publications' },
        { name: 'Patient Testimonials', href: '/testimonials' },
        { name: 'Contact & Location', href: '/contact' },
      ];

      const servicesLinks = [
        { name: 'Breast Oncoplastic Surgery', href: '/services/breast-oncoplastic' },
        { name: 'GI & Thoracic Oncology', href: '/services/gi-thoracic' },
        { name: 'Gynecologic Oncology', href: '/services/gynecologic-oncology' },
        { name: 'Robotic Surgery', href: '/techniques/robotic-surgery' },
        { name: 'CRS & HIPEC', href: '/techniques/crs-hipec' },
      ];

      const resourcesLinks = [
        { name: 'Gallery', href: '/gallery' },
        { name: 'Video Library', href: '/videos' },
        { name: 'Media & Press', href: '/media' },
        { name: 'FAQs', href: '/faqs' },
      ];

      const socialLinks = [
        { name: 'LinkedIn', icon: FiLinkedin, href: 'https://in.linkedin.com/in/dranveshdharanikotacancerspecialist' },
        { name: 'ResearchGate', icon: FiExternalLink, href: 'https://www.researchgate.net/profile/Anvesh-Dharanikota' },
        { name: 'ORCID', icon: FiBookOpen, href: 'https://orcid.org/0000-0001-7404-3239' },
      ];

      return (
        <footer className="bg-platinum-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand & Description */}
              <div className="lg:col-span-1 space-y-6">
                <Link to="/" className="flex items-center space-x-3">
                  <img src="https://dranveshdharanikota.com/photos/logo-anvesh.jpg" alt="Dr. Anvesh Dharanikota" className="h-16 w-auto" />
                </Link>
                <p className="text-platinum-300 leading-relaxed">
                  Providing world-class cancer surgery with precision, compassion, and cutting-edge robotic technology. Over 12 years of expertise in minimally invasive oncological procedures.
                </p>
                {/* Contact Info */}
                <div className="space-y-3">
                  <a href="tel:+919440233339" className="flex items-center space-x-3 text-platinum-300 hover:text-primary-400 transition-colors duration-200">
                    <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-400" />
                    <span>+91 9440233339</span>
                  </a>
                  <a href="mailto:dr.anveshdharanikota@gmail.com" className="flex items-center space-x-3 text-platinum-300 hover:text-primary-400 transition-colors duration-200">
                    <SafeIcon icon={FiMail} className="w-5 h-5 text-primary-400" />
                    <span className="break-all">dr.anveshdharanikota@gmail.com</span>
                  </a>
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                    <span className="text-platinum-300">Arete Hospitals, opposite Bio-diversity Park, Gachibowli, Hyderabad, Telangana - 500081</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiClock} className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                    <div className="text-platinum-300">
                      <div>Mon, Wed, Thu, Fri, Sat: 9AM - 5PM</div>
                      <div>Tue & Sun: Emergencies only</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href} className="text-platinum-300 hover:text-primary-400 transition-colors duration-200">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Services */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold">Services & Techniques</h4>
                <ul className="space-y-3">
                  {servicesLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href} className="text-platinum-300 hover:text-primary-400 transition-colors duration-200">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Resources & Professional Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold">Resources</h4>
                {/* Resources Links */}
                <ul className="space-y-3">
                  {resourcesLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href} className="text-platinum-300 hover:text-primary-400 transition-colors duration-200">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* Social Links */}
                <div className="pt-4">
                  <h5 className="text-md font-semibold mb-3">Professional Profiles</h5>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-platinum-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        <SafeIcon icon={social.icon} className="w-5 h-5" />
                        <span>{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="block w-full bg-gradient-to-r from-primary-600 to-secondary-800 text-white py-3 px-4 rounded-lg font-semibold text-center hover:shadow-primary transition-all duration-300"
                  >
                    Book Consultation
                  </Link>
                </motion.div>
              </div>
            </div>
            {/* Bottom Bar */}
            <div className="border-t border-platinum-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-platinum-400 text-sm">
                  © 2024 Dr. Anvesh Dharanikota. All rights reserved.
                </p>
                <div className="flex items-center space-x-6 text-sm text-platinum-400">
                  <Link to="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
                  <Link to="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
                  <Link to="/disclaimer" className="hover:text-primary-400 transition-colors">Medical Disclaimer</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;