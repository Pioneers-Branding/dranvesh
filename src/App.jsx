import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Header from './components/Header';
    import Footer from './components/Footer';
    import FloatingWhatsApp from './components/FloatingWhatsApp';
    import Homepage from './pages/Homepage';
    import About from './pages/About';
    import Contact from './pages/Contact';
    import Awards from './pages/Awards';
    import Publications from './pages/Publications';
    import Media from './pages/Media';
    import VideoLibrary from './pages/VideoLibrary';
    import FAQs from './pages/FAQs';
    import Services from './pages/Services';
    import Gallery from './components/Gallery';
    import Testimonials from './components/Testimonials';
    import ThankYou from './pages/ThankYou';

    // Import technique pages
    import TechniquesOverview from './pages/TechniquesOverview';
    import RoboticSurgery from './pages/RoboticSurgery';
    import CRSHipec from './pages/CRSHipec';
    import VATS from './pages/VATS';
    import ICGFluorescence from './pages/ICGFluorescence';
    import './App.css';

    function App() {
      return (
        <Router>
          <div className="app-container">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/media" element={<Media />} />
                <Route path="/videos" element={<VideoLibrary />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/gallery" element={<Gallery showBreadcrumbs={true} />} />
                <Route path="/testimonials" element={<Testimonials showBreadcrumbs={true} />} />
                <Route path="/thank-you" element={<ThankYou />} />

                {/* Services Routes */}
                <Route path="/services" element={<Services />} />
                <Route path="/services/breast-oncoplastic" element={<BreastOncoplasticPage />} />
                <Route path="/services/gi-thoracic" element={<GIThoracicPage />} />
                <Route path="/services/esophageal-cancer" element={<EsophagealCancerPage />} />
                <Route path="/services/gastric-cancer" element={<GastricCancerPage />} />
                <Route path="/services/colorectal-cancer" element={<ColorectalCancerPage />} />
                <Route path="/services/hpb" element={<HPBPage />} />
                <Route path="/services/lung-cancer" element={<LungCancerPage />} />
                <Route path="/services/gynecologic-oncology" element={<GynecologicOncologyPage />} />
                <Route path="/services/head-neck-oncology" element={<HeadNeckOncologyPage />} />
                <Route path="/services/uro-oncology" element={<UroOncologyPage />} />
                <Route path="/services/musculoskeletal-oncology" element={<MusculoskeletalOncologyPage />} />

                {/* Key Techniques Routes */}
                <Route path="/techniques" element={<TechniquesOverview />} />
                <Route path="/techniques/robotic-surgery" element={<RoboticSurgery />} />
                <Route path="/techniques/crs-hipec" element={<CRSHipec />} />
                <Route path="/techniques/vats" element={<VATS />} />
                <Route path="/techniques/icg-fluorescence" element={<ICGFluorescence />} />

                {/* Resources Routes */}
                <Route path="/resources" element={<ResourcesOverviewPage />} />
              </Routes>
            </main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </Router>
      );
    }

    // Services Pages (placeholders for now)
    const BreastOncoplasticPage = () => (
      <div className="min-h-screen bg-white font-inter pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Breast Oncoplastic Surgery</h1>
            <p className="text-xl text-platinum-600">Combining cancer treatment with aesthetic reconstruction for optimal outcomes</p>
          </div>
        </section>
      </div>
    );
    const GIThoracicPage = () => (
      <div className="min-h-screen bg-white font-inter pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">GI & Thoracic Oncology</h1>
            <p className="text-xl text-platinum-600">Comprehensive treatment for digestive system and chest cancers</p>
          </div>
        </section>
      </div>
    );
    const EsophagealCancerPage = () => (
      <div className="min-h-screen bg-white font-inter pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Esophageal Cancer</h1>
            <p className="text-xl text-platinum-600">Advanced surgical treatment for esophageal cancer</p>
          </div>
        </section>
      </div>
    );
    const GastricCancerPage = () => (
      <div className="min-h-screen bg-white font-inter pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Stomach (Gastric) Cancer</h1>
            <p className="text-xl text-platinum-600">Comprehensive gastric cancer treatment with minimally invasive techniques</p>
          </div>
        </section>
      </div>
    );
    const ColorectalCancerPage = () => (
      <div className="min-h-screen bg-white font-inter pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Colorectal Cancer</h1>
            <p className="text-xl text-platinum-600">Expert treatment for colon and rectal cancers</p>
          </div>
        </section>
      </div>
    );
    const HPBPage = () => (
      <div className="min-h-screen bg-white font-inter pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">HPB (Liver, Pancreas, Gallbladder)</h1>
            <p className="text-xl text-platinum-600">Specialized hepatobiliary and pancreatic cancer surgery</p>
          </div>
        </section>
      </div>
    );
    const LungCancerPage = () => (
      <div className="min-h-screen bg-white font-inter pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Lung Cancer</h1>
            <p className="text-xl text-platinum-600">Advanced thoracic surgical techniques for lung cancer treatment</p>
          </div>
        </section>
      </div>
    );
    const GynecologicOncologyPage = () => (
      <div className="min-h-screen bg-white font-inter pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Gynecologic Oncology</h1>
            <p className="text-xl text-platinum-600">Comprehensive women's cancer care with minimally invasive approaches</p>
          </div>
        </section>
      </div>
    );
    const HeadNeckOncologyPage = () => (
      <div className="min-h-screen bg-white font-inter pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Head & Neck Oncology</h1>
            <p className="text-xl text-platinum-600">Expert treatment for head and neck cancers</p>
          </div>
        </section>
      </div>
    );
    const UroOncologyPage = () => (
      <div className="min-h-screen bg-white font-inter pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Uro-Oncology</h1>
            <p className="text-xl text-platinum-600">Advanced urological cancer treatment and surgery</p>
          </div>
        </section>
      </div>
    );
    const MusculoskeletalOncologyPage = () => (
      <div className="min-h-screen bg-white font-inter pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Musculoskeletal Oncology</h1>
            <p className="text-xl text-platinum-600">Specialized bone and soft tissue cancer treatment</p>
          </div>
        </section>
      </div>
    );

    // Resources Overview Page
    const ResourcesOverviewPage = () => (
      <div className="min-h-screen bg-white font-inter pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Resources</h1>
            <p className="text-xl text-platinum-600">Educational materials and patient resources</p>
          </div>
        </section>
      </div>
    );

    export default App;