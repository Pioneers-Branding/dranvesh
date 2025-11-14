import React,{useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import Breadcrumbs from '../components/Breadcrumbs';
import * as FiIcons from 'react-icons/fi';

const {FiVideo,FiPlay,FiExternalLink,FiCalendar,FiEye,FiShare2,FiX,FiMic,FiCamera,FiUsers}=FiIcons;

const VideoLibrary=()=> {
  const [selectedVideo,setSelectedVideo]=useState(null);

  const youtubeVideos=[
    {
      id: 'RENydaOa0zA',
      title: 'Advanced Laparoscopic Techniques in Oncology',
      description: 'Dr. Anvesh Dharanikota demonstrates advanced laparoscopic surgical techniques for cancer treatment,showcasing precision and minimal invasive approaches in oncological procedures.',
      thumbnail: `https://img.youtube.com/vi/RENydaOa0zA/maxresdefault.jpg`,
      url: 'https://youtu.be/RENydaOa0zA?si=MJNLIHpSrWO8IwlO',
      embedUrl: 'https://www.youtube.com/embed/RENydaOa0zA',
      duration: '18:42',
      views: '28.5K',
      publishedDate: '2024-01-20'
    },
    {
      id: '6x0g_wtxQWs',
      title: 'Robotic Surgery: Future of Cancer Treatment',
      description: 'Comprehensive overview of robotic surgical systems in cancer care,focusing on precision,reduced invasiveness,and improved patient outcomes through advanced technology.',
      thumbnail: `https://img.youtube.com/vi/6x0g_wtxQWs/maxresdefault.jpg`,
      url: 'https://youtu.be/6x0g_wtxQWs?si=k4MS6SF9Bo6rNuwf',
      embedUrl: 'https://www.youtube.com/embed/6x0g_wtxQWs',
      duration: '22:15',
      views: '35.2K',
      publishedDate: '2024-02-15'
    },
    {
      id: '1nJLdFjpKWI',
      title: 'Minimally Invasive Breast Cancer Surgery',
      description: 'Expert techniques in minimally invasive breast cancer surgery,combining oncological excellence with aesthetic preservation for optimal patient outcomes.',
      thumbnail: `https://img.youtube.com/vi/1nJLdFjpKWI/maxresdefault.jpg`,
      url: 'https://youtu.be/1nJLdFjpKWI?si=EcNgR3BcfqYtLwRo',
      embedUrl: 'https://www.youtube.com/embed/1nJLdFjpKWI',
      duration: '16:30',
      views: '42.1K',
      publishedDate: '2024-03-10'
    },
    {
      id: 'agGGJ7TVFdY',
      title: 'CRS-HIPEC: Revolutionary Cancer Treatment',
      description: 'In-depth explanation of Cytoreductive Surgery with Heated Intraperitoneal Chemotherapy for treating peritoneal surface malignancies and advanced cancer cases.',
      thumbnail: `https://img.youtube.com/vi/agGGJ7TVFdY/maxresdefault.jpg`,
      url: 'https://youtu.be/agGGJ7TVFdY?si=EkX2jbS08a19doQz',
      embedUrl: 'https://www.youtube.com/embed/agGGJ7TVFdY',
      duration: '25:18',
      views: '38.7K',
      publishedDate: '2024-03-25'
    },
    {
      id: 'u9jqpT9gSlE',
      title: 'Gastrointestinal Cancer Surgery Innovations',
      description: 'Latest innovations in gastrointestinal cancer surgery,including advanced surgical techniques and technology for improved patient care and outcomes.',
      thumbnail: `https://img.youtube.com/vi/u9jqpT9gSlE/maxresdefault.jpg`,
      url: 'https://youtu.be/u9jqpT9gSlE?si=ij74BbX3Mt1ab8ez',
      embedUrl: 'https://www.youtube.com/embed/u9jqpT9gSlE',
      duration: '20:45',
      views: '31.4K',
      publishedDate: '2024-04-08'
    },
    {
      id: 'IHbHL8tJ6GE',
      title: 'Oncoplastic Surgery: Art Meets Science',
      description: 'Exploring the intersection of oncology and plastic surgery in breast cancer treatment,achieving optimal cancer control with aesthetic preservation.',
      thumbnail: `https://img.youtube.com/vi/IHbHL8tJ6GE/maxresdefault.jpg`,
      url: 'https://youtu.be/IHbHL8tJ6GE?si=F3cefXQ094eeAM63',
      embedUrl: 'https://www.youtube.com/embed/IHbHL8tJ6GE',
      duration: '19:12',
      views: '26.8K',
      publishedDate: '2024-04-22'
    },
    {
      id: 'NFnnmnAx3b8',
      title: 'Multidisciplinary Cancer Care Approach',
      description: 'Understanding the importance of multidisciplinary teams in cancer treatment,showcasing collaborative care for optimal patient outcomes.',
      thumbnail: `https://img.youtube.com/vi/NFnnmnAx3b8/maxresdefault.jpg`,
      url: 'https://youtu.be/NFnnmnAx3b8?si=EOJVjk6jk7dQPTTP',
      embedUrl: 'https://www.youtube.com/embed/NFnnmnAx3b8',
      duration: '17:55',
      views: '33.6K',
      publishedDate: '2024-05-05'
    },
    {
      id: 'Bok5jifgmIM',
      title: 'Precision Medicine in Surgical Oncology',
      description: 'How precision medicine is revolutionizing surgical oncology,with personalized treatment approaches based on genetic and molecular profiling.',
      thumbnail: `https://img.youtube.com/vi/Bok5jifgmIM/maxresdefault.jpg`,
      url: 'https://youtu.be/Bok5jifgmIM?si=htFCAlI7czD32VPV',
      embedUrl: 'https://www.youtube.com/embed/Bok5jifgmIM',
      duration: '23:30',
      views: '29.3K',
      publishedDate: '2024-05-20'
    },
    {
      id: '5K4AQ0tfA_A',
      title: 'Advanced Thoracic Surgery Techniques',
      description: 'State-of-the-art thoracic surgical techniques for lung cancer and chest malignancies,including VATS and robotic approaches.',
      thumbnail: `https://img.youtube.com/vi/5K4AQ0tfA_A/maxresdefault.jpg`,
      url: 'https://youtu.be/5K4AQ0tfA_A?si=tX6wA3OYCgTHnF7E',
      embedUrl: 'https://www.youtube.com/embed/5K4AQ0tfA_A',
      duration: '21:08',
      views: '37.2K',
      publishedDate: '2024-06-02'
    },
    {
      id: 'Yzl-u2rp5cE',
      title: 'Patient Safety in Complex Cancer Surgery',
      description: 'Comprehensive overview of patient safety protocols and risk management in complex oncological surgical procedures.',
      thumbnail: `https://img.youtube.com/vi/Yzl-u2rp5cE/maxresdefault.jpg`,
      url: 'https://youtu.be/Yzl-u2rp5cE?si=rqDyDdCt2GR9-org',
      embedUrl: 'https://www.youtube.com/embed/Yzl-u2rp5cE',
      duration: '18:25',
      views: '24.9K',
      publishedDate: '2024-06-15'
    },
    {
      id: 'hj0QRKVWXPw',
      title: 'Future Trends in Surgical Oncology',
      description: 'Exploring emerging trends and future directions in surgical oncology,including AI integration,new technologies,and treatment innovations.',
      thumbnail: `https://img.youtube.com/vi/hj0QRKVWXPw/maxresdefault.jpg`,
      url: 'https://youtu.be/hj0QRKVWXPw?si=nA0mqsAcJaRd5Tgi',
      embedUrl: 'https://www.youtube.com/embed/hj0QRKVWXPw',
      duration: '26:42',
      views: '41.8K',
      publishedDate: '2024-07-01'
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
      {/* Breadcrumbs */}
      <div style={{background: 'linear-gradient(to right,#720509,#002050)'}}>
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(to right,#720509,#002050)'}}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
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
              <span className="text-white font-semibold text-sm tracking-wide">VIDEO LIBRARY</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Educational Video Content
            </h1>
            <p className="text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive surgical education and medical training videos showcasing advanced oncological procedures and techniques
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{opacity: 0,y: 20}}
            animate={{opacity: 1,y: 0}}
            transition={{delay: 0.3}}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">11</div>
              <div className="text-pink-100">Educational Videos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">350K+</div>
              <div className="text-pink-100">Total Views</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">20h+</div>
              <div className="text-pink-100">Content Hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-pink-100">Surgical Topics</div>
            </div>
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
                <div className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-white/50 hover:shadow-primary">
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
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <SafeIcon icon={FiPlay} className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                      {video.duration}
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Educational
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-platinum-900 mb-3 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
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
                        className="p-1 text-platinum-400 hover:text-primary-600 transition-colors"
                      >
                        <SafeIcon icon={FiShare2} className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Watch Button */}
                    <motion.div
                      whileHover={{scale: 1.02}}
                      whileTap={{scale: 0.98}}
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 rounded-xl font-medium text-sm hover:shadow-lg transition-all duration-300"
                    >
                      <SafeIcon icon={FiPlay} className="w-4 h-4" />
                      <span>Watch Video</span>
                    </motion.div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
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
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
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

      {/* Educational Resources Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{opacity: 0,y: 30}}
            whileInView={{opacity: 1,y: 0}}
            viewport={{once: true}}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Educational Resources</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Access comprehensive educational materials and training resources for medical professionals and students
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <SafeIcon icon={FiVideo} className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Surgical Techniques</h3>
                <p className="text-primary-100 text-sm">Advanced surgical procedure demonstrations</p>
              </motion.div>
              <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <SafeIcon icon={FiCamera} className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Case Studies</h3>
                <p className="text-primary-100 text-sm">Real patient cases and treatment approaches</p>
              </motion.div>
              <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <SafeIcon icon={FiUsers} className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Medical Education</h3>
                <p className="text-primary-100 text-sm">Training materials for medical students</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VideoLibrary;