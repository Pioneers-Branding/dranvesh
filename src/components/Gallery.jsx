import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import SafeIcon from '../common/SafeIcon';
    import Breadcrumbs from '../components/Breadcrumbs';
    import * as FiIcons from 'react-icons/fi';
    const { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } = FiIcons;

    const Gallery = ({ showBreadcrumbs = false }) => {
      const [selectedImage, setSelectedImage] = useState(null);
      const [currentIndex, setCurrentIndex] = useState(0);

      const galleryImages = [
        { src: 'https://dranveshdharanikota.com/photos/gallery/image-1.webp' },
        { src: 'https://dranveshdharanikota.com/photos/gallery/image-2.webp' },
        { src: 'https://dranveshdharanikota.com/photos/gallery/image-3.webp' },
        { src: 'https://dranveshdharanikota.com/photos/gallery/image-4.webp' },
        { src: 'https://dranveshdharanikota.com/photos/gallery/image-5.webp' },
        { src: 'https://dranveshdharanikota.com/photos/gallery/image-6.webp' },
        { src: 'https://dranveshdharanikota.com/photos/gallery/image-7.webp' },
        { src: 'https://dranveshdharanikota.com/photos/gallery/image-8.webp' },
        { src: 'https://dranveshdharanikota.com/photos/gallery/image-9.webp' },
        { src: 'https://dranveshdharanikota.com/photos/gallery/image-10.webp' },
        { src: 'https://dranveshdharanikota.com/photos/gallery/image-11.webp' },
        { src: 'https://dranveshdharanikota.com/photos/gallery/image-12.webp' },
        { src: 'https://dranveshdharanikota.com/photos/gallery/image-13.webp' },
        { src: 'https://dranveshdharanikota.com/photos/gallery/image-14.webp' },
      ];

      const openModal = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
      };

      const closeModal = () => {
        setSelectedImage(null);
      };

      const nextImage = () => {
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(galleryImages[nextIndex]);
      };

      const prevImage = () => {
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(galleryImages[prevIndex]);
      };

      const ModalComponent = (
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={closeModal} className="absolute -top-4 -right-4 md:top-4 md:right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors z-20">
                  <SafeIcon icon={FiX} className="w-7 h-7" />
                </button>
                <button onClick={prevImage} className="absolute left-0 md:-left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors z-20">
                  <SafeIcon icon={FiChevronLeft} className="w-8 h-8" />
                </button>
                <button onClick={nextImage} className="absolute right-0 md:-right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors z-20">
                  <SafeIcon icon={FiChevronRight} className="w-8 h-8" />
                </button>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage.src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    src={selectedImage.src}
                    alt={`Gallery view ${currentIndex + 1}`}
                    className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  />
                </AnimatePresence>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      );

      if (showBreadcrumbs) {
        return (
          <div className="min-h-screen bg-white font-inter pt-20">
            <section className="pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #720509, #002050)' }}>
              <Breadcrumbs />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="inline-block px-6 py-2 rounded-full mb-6 bg-white/20 backdrop-blur-sm">
                    <span className="font-semibold text-sm tracking-wide text-white">GALLERY</span>
                  </motion.div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white"> Facility and Practice Gallery </h1>
                  <p className="text-xl max-w-4xl mx-auto leading-relaxed text-pink-100"> A visual tour of our advanced facilities, surgical procedures, and patient care environments. </p>
                </motion.div>
              </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {galleryImages.map((image, index) => (
                    <motion.div key={index} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="luxury-card group cursor-pointer" onClick={() => openModal(image, index)}>
                      <div className="relative bg-white rounded-2xl overflow-hidden shadow-luxury border border-white/50 hover:shadow-primary">
                        <div className="relative h-64 overflow-hidden">
                          <img src={image.src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <SafeIcon icon={FiMaximize2} className="w-10 h-10 text-white" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
            {ModalComponent}
          </div>
        );
      }

      // Embedded version for homepage
      return (
        <section className="py-16 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl animate-float bg-gradient-to-br from-primary-300 to-secondary-400"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl animate-float bg-gradient-to-br from-secondary-300 to-primary-400" style={{ animationDelay: '3s' }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="inline-block px-6 py-2 rounded-full mb-6 bg-gradient-to-r from-primary-100 to-secondary-100">
                <span className="font-semibold text-sm tracking-wide text-primary-700">GALLERY</span>
              </motion.div>
              <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}> Facility and Practice Gallery </motion.h2>
              <motion.p className="text-xl max-w-4xl mx-auto leading-relaxed text-gray-600" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}> A visual tour of our advanced facilities, surgical procedures, and patient care environments. </motion.p>
            </motion.div>
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div key={index} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="luxury-card group cursor-pointer" onClick={() => openModal(image, index)}>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-luxury border border-white/50 hover:shadow-primary">
                    <div className="relative h-64 overflow-hidden">
                      <img src={image.src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <SafeIcon icon={FiMaximize2} className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {ModalComponent}
        </section>
      );
    };

    export default Gallery;