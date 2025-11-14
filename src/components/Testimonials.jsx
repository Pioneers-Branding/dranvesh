import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import SafeIcon from '../common/SafeIcon';
    import Breadcrumbs from '../components/Breadcrumbs';
    import * as FiIcons from 'react-icons/fi';
    import * as FcIcons from 'react-icons/fc';

    const { FiChevronLeft, FiChevronRight, FiStar, FiPlay } = FiIcons;
    const { FcGoogle } = FcIcons;

    const Testimonials = ({ showBreadcrumbs = false }) => {
      // Video testimonials data
      const videoTestimonials = [
        {
          id: '4sv_Y7YMCrk',
          title: 'Patient from Somalia Shares His Experience',
          thumbnail: `https://i.ytimg.com/vi/4sv_Y7YMCrk/hqdefault.jpg`,
        },
        {
          id: 'hOVGD2YuHbQ',
          title: 'Heartfelt Patient Testimonial for Dr. Anvesh',
          thumbnail: `https://i.ytimg.com/vi/hOVGD2YuHbQ/hqdefault.jpg`,
        },
        {
          id: 'd7trey7Ss6E',
          title: 'Patient from Tanzania Expresses Gratitude',
          thumbnail: `https://i.ytimg.com/vi/d7trey7Ss6E/hqdefault.jpg`,
        },
        {
          id: 'WVBjW02KdKA',
          title: 'A Successful Cancer Surgery Story',
          thumbnail: `https://i.ytimg.com/vi/WVBjW02KdKA/hqdefault.jpg`,
        },
      ];

      // State for video player
      const [selectedVideo, setSelectedVideo] = useState(videoTestimonials[0]);

      // State for written testimonials
      const [currentIndex, setCurrentIndex] = useState(0);
      const testimonials = [
        {
          name: 'A S',
          location: 'Hyderabad',
          quote: 'I recently underwent laparoscopic surgery under the care of Dr. Anvesh, and I’m extremely grateful for his excellent treatment. He explained everything clearly, made me feel comfortable, and handled the surgery with great skill. The recovery was smooth, and he was always available to answer my doubts with patience. Dr. Anvesh is truly a dedicated, kind, and professional doctor.',
          rating: 5,
          procedure: 'Laparoscopic Surgery'
        },
        {
          name: 'Abdi Aziz Selad',
          location: 'Somalia',
          quote: 'Dr. Anvesh is one of the most compassionate and patient doctors I have ever met. He ensures the patient and their family feel safe, heard, and supported. His calm demeanor and deep knowledge gave us hope during a very difficult time. We are truly grateful for his kindness, professionalism, and dedication.',
          rating: 5,
          procedure: 'Surgical Oncology'
        },
        {
          name: 'Mamta Rajan',
          location: 'Hyderabad',
          quote: 'All doctors treat but a good doctor heals you from within and Dr Anvesh Dharanikota is one of such rare doctors. Whenever I met him for consultation there was an assurance that I was in complete safe hands. I had hit the rock bottom after the diagnosis, but Dr Anvesh made this difficult journey much smoother.',
          rating: 5,
          procedure: 'Breast Cancer Surgery'
        },
        {
          name: 'Sindhura Thallapaka',
          location: 'Hyderabad',
          quote: 'Dr. Anvesh is an incredibly amicable and empathetic professional. He performed my lumpectomy with utmost care and ensured that I was well-informed. His ability to listen to our concerns and address them with such clarity and compassion was truly reassuring. I am deeply grateful for his dedication and support.',
          rating: 5,
          procedure: 'Lumpectomy'
        },
        {
          name: 'Adnan Yousuf',
          location: 'Hyderabad',
          quote: 'I want to express my heartfelt gratitude for your exceptional care and expertise during my mother\'s cancer treatment. Your skill, compassion, and dedication have been a source of comfort and strength. Thank you for giving us hope and fighting alongside us. You\'re not just an outstanding surgeon, but also a true guardian of health.',
          rating: 5,
          procedure: 'Cancer Treatment'
        },
      ];

      const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      };

      const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      };

      const VideoTestimonials = () => (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="inline-block px-6 py-2 rounded-full mb-6 bg-gradient-to-r from-secondary-100 to-primary-100">
                <span className="font-semibold text-sm tracking-wide text-secondary-700">VIDEO TESTIMONIALS</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Hear From Our Patients</h2>
              <p className="text-xl max-w-3xl mx-auto text-gray-600">Watch heartfelt stories from patients who have experienced our care firsthand.</p>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-800 mx-auto mt-6"></div>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8 shadow-2xl rounded-2xl overflow-hidden"
                style={{ paddingBottom: '56.25%', height: 0 }}
              >
                <iframe
                  key={selectedVideo.id}
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=0&rel=0`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {videoTestimonials.map((video, index) => (
                  <motion.div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={`relative cursor-pointer rounded-lg overflow-hidden border-4 transition-all duration-300 ${selectedVideo.id === video.id ? 'border-primary-600 shadow-lg' : 'border-transparent'}`}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img src={video.thumbnail} alt={video.title} className="w-full h-auto aspect-video object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <SafeIcon icon={FiPlay} className="w-8 h-8 text-white opacity-80" />
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-lg font-semibold mt-6 text-gray-800">{selectedVideo.title}</p>
            </div>
          </div>
        </section>
      );

      const CarouselContent = () => (
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 shadow-xl border border-primary-100"
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-primary-200 flex items-center justify-center bg-white">
                  <SafeIcon icon={FcGoogle} className="w-12 h-12" />
                </div>
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-primary-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                  <div className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-medium">
                    {testimonials[currentIndex].procedure}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button onClick={prevTestimonial} className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors">
            <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-gray-600" />
          </button>
          <button onClick={nextTestimonial} className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors">
            <SafeIcon icon={FiChevronRight} className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>
      );

      if (showBreadcrumbs) {
        return (
          <div className="min-h-screen bg-white font-inter pt-20">
            <section className="pb-16 relative" style={{ background: 'linear-gradient(to right, #720509, #002050)' }}>
              <Breadcrumbs />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                    <span className="font-semibold text-sm tracking-wide text-white">PATIENT TESTIMONIALS</span>
                  </motion.div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white"> Patient Testimonials </h1>
                  <p className="text-xl max-w-3xl mx-auto text-pink-100 leading-relaxed"> Real stories from patients who experienced exceptional care and successful outcomes </p>
                </motion.div>
              </div>
            </section>
            
            <VideoTestimonials />

            <section className="py-16 bg-gradient-to-br from-primary-50/50 via-secondary-50/30 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="inline-block px-6 py-2 rounded-full mb-6 bg-gradient-to-r from-primary-100 to-secondary-100">
                            <span className="font-semibold text-sm tracking-wide text-primary-700">WRITTEN TESTIMONIALS</span>
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Patients Say</h2>
                        <p className="text-xl max-w-3xl mx-auto text-gray-600">Heartfelt reviews from patients who have trusted us with their care.</p>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-800 mx-auto mt-6"></div>
                    </motion.div>
                    <CarouselContent />
                </div>
            </section>
          </div>
        );
      }

      // Embedded version
      return (
        <>
          <VideoTestimonials />
          <section className="py-16 relative bg-gradient-to-br from-primary-50/50 via-secondary-50/30 to-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="inline-block px-6 py-2 rounded-full mb-6 bg-gradient-to-r from-primary-100 to-secondary-100">
                          <span className="font-semibold text-sm tracking-wide text-primary-700">WRITTEN TESTIMONIALS</span>
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"> What Our Patients Say </h2>
                      <p className="text-xl max-w-3xl mx-auto text-gray-600"> Heartfelt reviews from patients who have trusted us with their care. </p>
                      <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-800 mx-auto mt-6"></div>
                  </motion.div>
                  <CarouselContent />
              </div>
          </section>
        </>
      );
    };

    export default Testimonials;