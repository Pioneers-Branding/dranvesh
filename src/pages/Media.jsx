import React,{useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import Breadcrumbs from '../components/Breadcrumbs';
import * as FiIcons from 'react-icons/fi';

const {FiVideo,FiPlay,FiExternalLink,FiCalendar,FiEye,FiShare2,FiX,FiMic,FiCamera,FiUsers}=FiIcons;

const Media=()=> {
  const [selectedVideo,setSelectedVideo]=useState(null);

  const youtubeVideos=[
    {
      id: 'y40uIAvMTQg',
      title: 'Advanced Robotic Surgery Techniques in Oncology',
      description: 'Dr. Anvesh Dharanikota demonstrates advanced robotic surgical techniques for cancer treatment,showcasing precision and minimal invasive approaches.',
      thumbnail: `https://img.youtube.com/vi/y40uIAvMTQg/maxresdefault.jpg`,
      url: 'https://youtu.be/y40uIAvMTQg?si=8BUGlj6jf5lqps4L',
      embedUrl: 'https://www.youtube.com/embed/y40uIAvMTQg',
      duration: '15:32',
      views: '25.4K',
      publishedDate: '2024-01-15'
    },
    {
      id: 'thPQzJ22h9Q',
      title: 'Oncoplastic Breast Surgery: Combining Oncology with Aesthetics',
      description: 'Comprehensive overview of oncoplastic breast surgery techniques,focusing on achieving optimal oncological outcomes while preserving aesthetic results.',
      thumbnail: `https://img.youtube.com/vi/thPQzJ22h9Q/maxresdefault.jpg`,
      url: 'https://youtu.be/thPQzJ22h9Q?si=sSuXVqR5Qq5g6wPO',
      embedUrl: 'https://www.youtube.com/embed/thPQzJ22h9Q',
      duration: '18:45',
      views: '32.1K',
      publishedDate: '2024-02-08'
    },
    {
      id: '15hNmkBJsBM',
      title: 'CRS-HIPEC: Revolutionary Treatment for Peritoneal Carcinomatosis',
      description: 'In-depth explanation of Cytoreductive Surgery with Heated Intraperitoneal Chemotherapy (CRS-HIPEC) for treating peritoneal surface malignancies.',
      thumbnail: `https://img.youtube.com/vi/15hNmkBJsBM/maxresdefault.jpg`,
      url: 'https://youtu.be/15hNmkBJsBM?si=tPHh-aVLkyOY4G6n',
      embedUrl: 'https://www.youtube.com/embed/15hNmkBJsBM',
      duration: '22:18',
      views: '41.7K',
      publishedDate: '2024-03-12'
    }
  ];

  const handleVideoClick=(video)=> {
    setSelectedVideo(video);
  };

  const closeModal=()=> {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-white font-inter pt-20">
      {/* Breadcrumbs with updated colors */}
      <div style={{background: 'linear-gradient(to right,#720509,#002050)'}}>
        <Breadcrumbs />
      </div>

      {/* Hero Section with updated colors */}
      <section className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(to right,#720509,#002050)'}}>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{opacity: 0,y: 30}}
            animate={{opacity: 1,y: 0}}
            className="text-center mb-16"
          >
            <motion.div
              initial={{opacity: 0,scale: 0.9}}
              animate={{opacity: 1,scale: 1}}
              transition={{delay: 0.2}}
              className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6"
            >
              <span className="text-white font-semibold text-sm tracking-wide">NEWS & MEDIA</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Educational Video Content
            </h1>
            <p className="text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
              Watch Dr. Anvesh Dharanikota explain advanced surgical techniques and treatment approaches through educational video presentations
            </p>
          </motion.div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-16 bg-gradient-to-br from-platinum-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0,y: 20}}
            whileInView={{opacity: 1,y: 0}}
            viewport={{once: true}}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold gradient-text mb-4 text-center">Featured Medical Education Videos</h2>
            <p className="text-platinum-600 text-center max-w-3xl mx-auto">
              Comprehensive surgical demonstrations and educational content showcasing advanced oncological procedures and techniques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeVideos.map((video,index)=> (
              <motion.div
                key={video.id}
                initial={{opacity: 0,y: 30}}
                whileInView={{opacity: 1,y: 0}}
                transition={{delay: index * 0.1}}
                viewport={{once: true}}
                className="luxury-card group cursor-pointer"
                onClick={()=> handleVideoClick(video)}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-white/50 hover:shadow-medical">
                  {/* Video Thumbnail */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-platinum-100 to-platinum-200">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e)=> {
                        e.target.src='https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                      }}
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <SafeIcon icon={FiPlay} className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                      {video.duration}
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Educational
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-platinum-900 mb-3 group-hover:text-medical-700 transition-colors duration-300 leading-tight">
                      {video.title}
                    </h3>
                    <p className="text-sm text-platinum-600 leading-relaxed mb-4 line-clamp-3">
                      {video.description}
                    </p>

                    {/* Video Stats */}
                    <div className="flex items-center justify-between text-xs text-platinum-500 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiEye} className="w-3 h-3" />
                          <span>{video.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiCalendar} className="w-3 h-3" />
                          <span>{new Date(video.publishedDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        onClick={(e)=> {
                          e.stopPropagation();
                          navigator.share ? navigator.share({
                            url: video.url,
                            title: video.title
                          }) : navigator.clipboard.writeText(video.url);
                        }}
                        className="p-1 text-platinum-400 hover:text-medical-600 transition-colors"
                      >
                        <SafeIcon icon={FiShare2} className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Watch Button */}
                    <motion.div
                      whileHover={{scale: 1.02}}
                      whileTap={{scale: 0.98}}
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-xl font-medium text-sm hover:shadow-lg transition-all duration-300"
                    >
                      <SafeIcon icon={FiPlay} className="w-4 h-4" />
                      <span>Watch Video</span>
                    </motion.div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{scale: 0.8,opacity: 0}}
              animate={{scale: 1,opacity: 1}}
              exit={{scale: 0.8,opacity: 0}}
              className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]"
              onClick={(e)=> e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>

              {/* Video Embed */}
              <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
                <iframe
                  src={`${selectedVideo.embedUrl}?autoplay=1`}
                  title={selectedVideo.title}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Educational Content
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-platinum-500">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiEye} className="w-4 h-4" />
                      <span>{selectedVideo.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                      <span>{new Date(selectedVideo.publishedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-platinum-900 mb-3">
                  {selectedVideo.title}
                </h3>
                <p className="text-platinum-600 leading-relaxed">
                  {selectedVideo.description}
                </p>

                {/* External Link */}
                <div className="mt-6">
                  <motion.a
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    href={selectedVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-medical-600 to-surgical-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <SafeIcon icon={FiExternalLink} className="w-5 h-5" />
                    <span>Open on YouTube</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Media Contact Section */}
      <section className="py-20 bg-gradient-to-r from-medical-600 to-surgical-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{opacity: 0,y: 30}}
            whileInView={{opacity: 1,y: 0}}
            viewport={{once: true}}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Media Inquiries</h2>
            <p className="text-xl text-medical-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              For interviews,press releases,or media collaborations,please contact our media relations team
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <SafeIcon icon={FiMic} className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Interview Requests</h3>
                <p className="text-medical-100 text-sm">Schedule expert interviews and discussions</p>
              </motion.div>
              <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <SafeIcon icon={FiCamera} className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Media Assets</h3>
                <p className="text-medical-100 text-sm">High-resolution photos and video content</p>
              </motion.div>
              <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <SafeIcon icon={FiUsers} className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Press Conferences</h3>
                <p className="text-medical-100 text-sm">Major announcements and media events</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Media;