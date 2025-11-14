import React from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import SafeIcon from '../common/SafeIcon';
    import * as FiIcons from 'react-icons/fi';

    const { FiHome, FiChevronRight } = FiIcons;

    const Breadcrumbs = ({ customItems = null }) => {
      const location = useLocation();
      // Define route mappings for better breadcrumb names
      const routeNames = {
        '': 'Home',
        'about': 'About Dr. Anvesh',
        'awards': 'Awards & Honors',
        'contact': 'Contact',
        'publications': 'Research & Publications',
        'media': 'News & Media',
        'testimonials': 'Testimonials',
        'gallery': 'Gallery',
        'videos': 'Video Library',
        'faqs': 'FAQs',
        'services': 'Services',
        'techniques': 'Key Techniques',
        'resources': 'Resources',
        // Services sub-routes
        'breast-oncoplastic': 'Breast Oncoplastic Surgery',
        'gi-thoracic': 'GI & Thoracic Overview',
        'esophageal-cancer': 'Esophageal Cancer',
        'gastric-cancer': 'Stomach (Gastric) Cancer',
        'colorectal-cancer': 'Colorectal Cancer',
        'hpb': 'HPB (Liver, Pancreas, Gallbladder)',
        'lung-cancer': 'Lung Cancer',
        'gynecologic-oncology': 'Gynecologic Oncology',
        'head-neck-oncology': 'Head & Neck Oncology',
        'uro-oncology': 'Uro-Oncology',
        'musculoskeletal-oncology': 'Musculoskeletal Oncology',
        // Techniques sub-routes
        'robotic-surgery': 'Robotic Surgery',
        'crs-hipec': 'CRS & HIPEC',
        'vats': 'VATS (Thoracic)',
        'icg-fluorescence': 'ICG Fluorescence',
      };

      // Use custom items if provided, otherwise generate from current path
      let breadcrumbItems = [];
      if (customItems) {
        breadcrumbItems = customItems;
      } else {
        const pathnames = location.pathname.split('/').filter((x) => x);
        breadcrumbItems = [{ name: 'Home', href: '/' }];
        let currentPath = '';
        pathnames.forEach((pathname, index) => {
          currentPath += `/${pathname}`;
          const isLast = index === pathnames.length - 1;
          breadcrumbItems.push({
            name: routeNames[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1),
            href: isLast ? null : currentPath,
          });
        });
      }

      if (breadcrumbItems.length <= 1) return null;

      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-white/20">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <SafeIcon icon={FiChevronRight} className="w-4 h-4 mx-2 text-pink-300" />
                  )}
                  {item.href ? (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        to={item.href}
                        className="flex items-center transition-colors duration-200 text-pink-100 hover:text-white"
                      >
                        {index === 0 && (
                          <SafeIcon icon={FiHome} className="w-4 h-4 mr-1" />
                        )}
                        {item.name}
                      </Link>
                    </motion.div>
                  ) : (
                    <span className="font-medium text-white"> {item.name} </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      );
    };

    export default Breadcrumbs;