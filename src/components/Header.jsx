import React,{useState,useRef,useEffect} from 'react';
import {motion} from 'framer-motion';
import {Link,useLocation} from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiMenu,FiX,FiChevronDown}=FiIcons;

const Header=()=> {
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const [activeDropdown,setActiveDropdown]=useState(null);
  const location=useLocation();
  const dropdownTimeoutRef=useRef(null);

  const navItems=[
    {name: 'Home',href: '/'},
    {name: 'About',href: '/about',hasDropdown: true,subItems: [
      {name: 'About Dr. Anvesh',href: '/about'},
      {name: 'Awards & Honors',href: '/awards'}
    ]},
    {name: 'Services',href: '/services',hasDropdown: true,subItems: [
      {name: 'Breast Oncoplastic Surgery',href: '/services/breast-oncoplastic'},
      {name: 'GI & Thoracic Overview',href: '/services/gi-thoracic'},
      {name: 'Esophageal Cancer',href: '/services/esophageal-cancer'},
      {name: 'Stomach (Gastric) Cancer',href: '/services/gastric-cancer'},
      {name: 'Colorectal Cancer',href: '/services/colorectal-cancer'},
      {name: 'HPB (Liver,Pancreas,Gallbladder)',href: '/services/hpb'},
      {name: 'Lung Cancer',href: '/services/lung-cancer'},
      {name: 'Gynecologic Oncology',href: '/services/gynecologic-oncology'},
      {name: 'Head & Neck Oncology',href: '/services/head-neck-oncology'},
      {name: 'Uro-Oncology',href: '/services/uro-oncology'},
      {name: 'Musculoskeletal Oncology',href: '/services/musculoskeletal-oncology'}
    ]},
    {name: 'Key Techniques',href: '/techniques',hasDropdown: true,subItems: [
      {name: 'Robotic Surgery',href: '/techniques/robotic-surgery'},
      {name: 'CRS & HIPEC',href: '/techniques/crs-hipec'},
      {name: 'VATS (Thoracic)',href: '/techniques/vats'},
      {name: 'ICG Fluorescence',href: '/techniques/icg-fluorescence'}
    ]},
    {name: 'Resources',href: '/resources',hasDropdown: true,subItems: [
      {name: 'Research & Publications',href: '/publications'},
      {name: 'Media & Press',href: '/media'},
      {name: 'Video Library',href: '/videos'},
      {name: 'Testimonials',href: '/testimonials'},
      {name: 'Gallery',href: '/gallery'},
      {name: 'FAQs',href: '/faqs'}
    ]},
    {name: 'Contact',href: '/contact'}
  ];

  const isActive=(href)=> location.pathname===href;

  const handleDropdownEnter=(itemName)=> {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave=()=> {
    dropdownTimeoutRef.current=setTimeout(()=> {
      setActiveDropdown(null);
    },300);// 300ms delay before hiding dropdown
  };

  useEffect(()=> {
    return ()=> {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  },[]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-platinum-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{opacity: 0,x: -20}}
            animate={{opacity: 1,x: 0}}
            className="flex items-center space-x-3"
          >
            <Link to="/" className="flex items-center">
              <img 
                src="http://dranveshdharanikota.com/photos/logo-anvesh.png" 
                alt="Dr. Anvesh Dharanikota" 
                className="h-14 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback if image fails to load */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-800 rounded-xl items-center justify-center hidden">
                <span className="text-white font-bold text-lg">DA</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item)=> (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={()=> handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 font-medium ${
                        isActive(item.href)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-platinum-700 hover:text-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <SafeIcon icon={FiChevronDown} className="w-4 h-4" />
                    </Link>

                    {/* Dropdown Menu */}
                    {activeDropdown===item.name && (
                      <motion.div
                        initial={{opacity: 0,y: 10}}
                        animate={{opacity: 1,y: 0}}
                        onMouseEnter={()=> handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                        className={`absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-luxury border border-white/50 py-2 z-50 ${
                          item.name==='Services' ? 'w-72' : 'w-64'
                        }`}
                      >
                        <div className={item.name==='Services' ? 'max-h-96 overflow-y-auto' : ''}>
                          {item.subItems?.map((subItem)=> (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`block px-4 py-3 text-platinum-700 hover:text-primary-600 hover:bg-primary-50 transition-colors ${
                                isActive(subItem.href) ? 'text-primary-600 bg-primary-50' : ''
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-lg transition-colors duration-200 font-medium ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-platinum-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={()=> setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-platinum-100"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{opacity: 0,y: -20}}
            animate={{opacity: 1,y: 0}}
            className="lg:hidden py-4 border-t border-platinum-100 bg-white rounded-b-2xl shadow-lg max-h-96 overflow-y-auto"
          >
            {navItems.map((item)=> (
              <div key={item.name} className="space-y-1">
                <Link
                  to={item.href}
                  className={`block py-3 px-4 transition-colors font-medium ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-platinum-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  onClick={()=> setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && item.subItems?.map((subItem)=> (
                  <Link
                    key={subItem.name}
                    to={subItem.href}
                    className={`block py-2 px-8 text-sm transition-colors ${
                      isActive(subItem.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-platinum-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                    onClick={()=> setIsMenuOpen(false)}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;