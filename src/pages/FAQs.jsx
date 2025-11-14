import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import SafeIcon from '../common/SafeIcon';
    import Breadcrumbs from '../components/Breadcrumbs';
    import * as FiIcons from 'react-icons/fi';

    const { FiPlus, FiMinus, FiSearch, FiHelpCircle, FiUser, FiActivity, FiCalendar, FiShield } = FiIcons;

    const FAQs = () => {
      const [openFAQ, setOpenFAQ] = useState(null);
      const [searchTerm, setSearchTerm] = useState('');
      const [selectedCategory, setSelectedCategory] = useState('All');
      const faqData = [
        { id: 1, category: 'Diagnosis & Staging', question: 'What kind of cancer do I have, and what stage is it?', answer: 'Your cancer\'s type and stage are determined by biopsy and scans. This helps us create a treatment plan based on how early or advanced your cancer is. Understanding the stage is key to predicting treatment response and outcomes.' },
        { id: 2, category: 'Diagnosis & Staging', question: 'How do I know if my cancer has spread to other organs?', answer: 'We use imaging tests like CT scans, MRIs, and sometimes PET scans to check for spread (metastasis). If cancer has spread to other organs or lymph nodes, it can change the treatment approach. Early detection of spread makes a big difference.' },
        { id: 3, category: 'Surgery Options', question: 'Why do I need surgery for my cancer?', answer: 'Surgery is often needed to remove the tumor and affected tissues, which can be vital for curing or controlling the disease. In some cases, surgery also relieves symptoms. The need for surgery depends on your cancer\'s type, location, and stage.' },
        { id: 4, category: 'Surgery Options', question: 'What are my options for surgery?', answer: 'Depending on your cancer, you may have options such as open, laparoscopic, or robotic surgery. We discuss each method, its benefits, risks, and best suitability for you. Our goal is to offer the best outcome with the least invasiveness.' },
        { id: 5, category: 'Robotic Surgery', question: 'Is robotic surgery better than traditional methods?', answer: 'Robotic surgery offers more precision, smaller incisions, and quicker recovery. Not all cases are suitable, but for many cancers, robotic methods have shown superior results in terms of pain and hospital stay. I\'ll recommend what\'s best for you.' },
        { id: 6, category: 'Experience & Expertise', question: 'How experienced are you with robotic and minimally invasive cancer surgeries?', answer: 'I have over 12 years of experience, with extensive training in robotic, laparoscopic, and oncoplastic surgery. I regularly perform these surgeries and keep updated with the latest advances to ensure the best patient outcomes.' },
        { id: 7, category: 'Robotic Surgery', question: 'What cancers are suitable for robotic surgery?', answer: 'Robotic surgery is used for prostate, colorectal, uterine, stomach, esophageal, and kidney cancers, among others. The suitability depends on your individual case and tumor complexity. I\'ll assess and explain if you\'re a candidate.' },
        { id: 8, category: 'Robotic Surgery', question: 'Is robotic surgery safe for cancer?', answer: 'Yes, for eligible patients, it is safe and often results in less blood loss, faster recovery, and lower complications. The robotic system enhances the surgeon\'s precision while minimizing hand tremors and fatigue during complex procedures.' },
        { id: 9, category: 'Risks & Safety', question: 'What are the risks involved in cancer surgery?', answer: 'Risks include bleeding, infection, injury to nearby organs, and reaction to anesthesia. Major complications are rare, especially with experienced surgeons and in good facilities. We take all precautions to minimize any risks during your surgery.' },
        { id: 10, category: 'Recovery Process', question: 'What is the recovery process like?', answer: 'You\'ll initially stay in the hospital for monitoring, usually for a few days, depending on your surgery type. Most patients start walking soon and gradually resume normal activities within weeks, especially with minimally invasive procedures.' },
        { id: 11, category: 'Treatment Plan', question: 'Will I need other treatments besides surgery?', answer: 'Depending on the tumor type and pathology, you might need chemotherapy, radiation, or targeted therapy after surgery. Sometimes, treatments are given before (neoadjuvant) to shrink tumors and improve results. We discuss this in detail beforehand.' },
        { id: 12, category: 'Recovery Process', question: 'How painful will the surgery and recovery be?', answer: 'Modern pain management and minimally invasive techniques minimize post-surgical pain. Most patients need only mild painkillers and describe discomfort as manageable. Severe pain is uncommon, and we address it promptly.' },
        { id: 13, category: 'Recovery Process', question: 'Will there be visible scars?', answer: 'Minimally invasive and robotic surgeries use small incisions, so scars are minimal and fade with time. Open surgeries may have bigger scars, but we plan incisions carefully to balance access and appearance wherever possible.' },
        { id: 14, category: 'Recovery Process', question: 'What dietary restrictions are there after surgery?', answer: 'Initially, you may need soft or liquid foods, depending on the surgery site. Gradually, you\'ll return to a normal diet as your body tolerates. Specific advice is given post-operatively and based on how you\'re healing.' },
        { id: 15, category: 'Recovery Process', question: 'How soon can I get back to my normal routine?', answer: 'Many patients resume light activities in 1-2 weeks and normal routines (including work) in 3-6 weeks. Recovery time can vary based on the surgery and individual health.' },
        { id: 16, category: 'Hospital Stay', question: 'Will I need to stay in the hospital? For how long?', answer: 'Most minimally invasive surgeries require 2-4 days of hospital stay, sometimes shorter. Open surgeries may require a bit longer. The exact duration depends on your recovery rate and surgery type.' },
        { id: 17, category: 'Specialized Procedures', question: 'What is oncoplastic breast surgery?', answer: 'Oncoplastic surgery combines cancer removal with plastic surgery techniques to preserve or improve the breast\'s appearance. It offers both cancer control and better cosmetic outcomes for qualifying patients.' },
        { id: 18, category: 'Surgery Details', question: 'Will lymph nodes be removed? Is it necessary?', answer: 'Lymph node removal is important for many cancers to check if the disease has spread. This helps guide further treatment and predict outcomes. We use sentinel node biopsy or full dissection as needed by your situation.' },
        { id: 19, category: 'Surgery Details', question: 'How do you ensure you remove all the cancer?', answer: 'All removed tissues are analyzed by a pathologist for "clear margins"—no cancer at the edges—which reduces the risk of recurrence. Imaging and intra-operative checks also help us verify complete removal.' },
        { id: 20, category: 'Prognosis', question: 'What\'s the risk that cancer will come back after surgery?', answer: 'The risk depends on your cancer\'s stage, type, and how much could be removed. Close follow-up and, when needed, further therapy can detect and address any recurrence early.' },
        { id: 21, category: 'Insurance & Costs', question: 'Will my insurance cover these surgeries, including robotic ones?', answer: 'Most major insurers cover cancer surgery, but specific coverage for robotic or advanced techniques can vary. My office will help you confirm your eligibility and financial options before scheduling.' },
        { id: 22, category: 'Surgery Details', question: 'How long will the surgery itself take?', answer: 'Cancer surgeries typically last between 1-6 hours, depending on the complexity and location. I\'ll give you a more precise expectation once the surgical plan is set.' },
        { id: 23, category: 'Recovery Process', question: 'When can I drive or travel after surgery?', answer: 'You can usually drive within 1-2 weeks, once you\'re off strong pain medications and feel physically able. Avoid heavy travel immediately post-surgery; we\'ll discuss safe timelines for you.' },
        { id: 24, category: 'Post-Surgery Care', question: 'What are the warning signs I should look out for after surgery?', answer: 'Watch for fever, severe pain, redness or swelling at incision sites, difficulty breathing, or abnormal bleeding. Contact my team immediately if you notice any of these symptoms.' },
        { id: 25, category: 'Special Cases', question: 'Can elderly or medically complex patients safely undergo robotic or major cancer surgery?', answer: 'Yes, with proper pre-operative assessment and precautions, elderly and high-risk patients can have safe outcomes. The minimally invasive approach is often better tolerated.' },
        { id: 26, category: 'Surgery Details', question: 'Will I need a blood transfusion?', answer: 'Blood loss is typically low, especially in robotic surgeries, making transfusions rare. If there\'s any anticipated risk, we discuss it and plan for safety.' },
        { id: 27, category: 'Risks & Safety', question: 'How do you minimize complications and infection risk?', answer: 'We follow strict protocols for sterilization, surgical technique, and post-operative care. Early mobilization and rapid recovery protocols also reduce complications.' },
        { id: 28, category: 'Recovery Process', question: 'Will I need help at home after surgery?', answer: 'A few days of support are often helpful, especially for daily chores or child care. For major surgeries, arrange help for at least the first week post-discharge.' },
        { id: 29, category: 'Follow-up Care', question: 'How is my follow-up plan scheduled?', answer: 'You\'ll have follow-ups at regular intervals—typically within a week after discharge, then monthly or quarterly as needed. Follow-up helps spot complications or tumor recurrence early.' },
        { id: 30, category: 'Second Opinion', question: 'Can I seek a second opinion?', answer: 'Yes, you are always encouraged to seek second opinions before making major treatment decisions. We provide reports and recommendations to other experts on request.' },
        { id: 31, category: 'Treatment Plan', question: 'How do you decide on the best treatment plan?', answer: 'We use guidelines, patient preferences, and a team approach with other specialists like radiologists and medical oncologists. Every plan is personalized for your best outcome.' },
        { id: 32, category: 'Surgery Day', question: 'Can my family accompany me on the day of surgery?', answer: 'Yes, a family member can stay with you for comfort and support until your surgery. Policies vary, but we try to accommodate your needs as much as possible.' },
        { id: 33, category: 'Success Metrics', question: 'How is the success of robotic cancer surgery measured?', answer: 'Success is measured by complete tumor removal, fewer complications, faster return to normal activities, and lower recurrence rates. We track all of these for every patient.' },
        { id: 34, category: 'Emotional Support', question: 'How do I prepare myself emotionally for cancer surgery?', answer: 'Talking to your care team, family, and support groups can help. Information and counseling are available to address your fears and questions.' },
        { id: 35, category: 'Robotic Surgery', question: 'Are all types of tumors suitable for robotic surgery?', answer: 'Not all tumors are best approached robotically. Factors like size, location, and invasion into nearby organs guide the choice of surgical method.' },
        { id: 36, category: 'Medical Advances', question: 'What advancements are there in surgical oncology?', answer: 'Recent advances include robotics, image-guided surgery, and personalized cancer care based on genetic profiling—these improve safety and outcomes.' },
        { id: 37, category: 'Availability', question: 'Is robotic surgery available at all hospitals?', answer: 'Robotic surgery is offered at select centers with the necessary technology and expertise. I perform these procedures at fully equipped, accredited hospitals.' },
        { id: 38, category: 'Timing', question: 'How soon after diagnosis should I have surgery?', answer: 'Earlier is usually better, but we schedule after all pre-operative assessments. Urgency depends on the cancer type and how quickly it is progressing.' },
        { id: 39, category: 'Quality of Life', question: 'How will surgery affect my quality of life?', answer: 'Most patients regain their pre-surgery quality of life, if not better, once recovered. We support you with rehabilitation, counseling, and lifestyle advice.' },
        { id: 40, category: 'Recovery Tips', question: 'How can I improve my recovery after cancer surgery?', answer: 'Follow instructions, stay active as advised, eat a balanced diet, and attend all appointments. Emotional support and positive thinking also aid healing.' }
      ];
      
      const categories = [
        'All', 'Diagnosis & Staging', 'Surgery Options', 'Robotic Surgery', 'Recovery Process', 'Risks & Safety', 'Treatment Plan', 'Surgery Details', 'Post-Surgery Care', 'Follow-up Care'
      ];
      
      const categoryIcons = {
        'All': FiHelpCircle, 'Diagnosis & Staging': FiSearch, 'Surgery Options': FiActivity, 'Robotic Surgery': FiActivity, 'Recovery Process': FiUser, 'Risks & Safety': FiShield, 'Treatment Plan': FiCalendar, 'Surgery Details': FiActivity, 'Post-Surgery Care': FiUser, 'Follow-up Care': FiCalendar
      };

      // Filter FAQs based on search term and category
      const filteredFAQs = faqData.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });

      const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
      };

      return (
        <div className="min-h-screen bg-white font-inter pt-20">
          {/* Breadcrumbs */}
          <div style={{ background: 'linear-gradient(to right,#720509,#002050)' }}>
            <Breadcrumbs />
          </div>

          {/* Hero Section */}
          <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(to right,#720509,#002050)' }}>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
              <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6"
                >
                  <span className="text-white font-semibold text-sm tracking-wide">FREQUENTLY ASKED QUESTIONS</span>
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white"> Your Questions Answered </h1>
                <p className="text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
                  Dr. Anvesh Dharanikota addresses the most common questions about cancer surgery, robotic procedures, and patient care
                </p>
              </motion.div>
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl mx-auto mb-12"
              >
                <div className="relative">
                  <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-platinum-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search your question..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-platinum-200 rounded-2xl focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white shadow-lg"
                  />
                </div>
              </motion.div>
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">40+</div>
                  <div className="text-pink-100">Common Questions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">10</div>
                  <div className="text-pink-100">Categories</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">12+</div>
                  <div className="text-pink-100">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-pink-100">Support Available</div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="py-16 bg-gradient-to-br from-platinum-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Category Sidebar */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="lg:col-span-1"
                >
                  <div className="bg-white rounded-3xl p-6 shadow-luxury border border-white/50 sticky top-24">
                    <h3 className="text-xl font-bold text-platinum-900 mb-6">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => {
                        const Icon = categoryIcons[category];
                        const count = category === 'All' ? faqData.length : faqData.filter(faq => faq.category === category).length;
                        return (
                          <motion.button
                            key={category}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${selectedCategory === category ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white' : 'text-platinum-700 hover:bg-primary-50'}`}
                          >
                            <div className="flex items-center space-x-3">
                              <SafeIcon icon={Icon} className="w-5 h-5" />
                              <span className="font-medium text-sm">{category}</span>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${selectedCategory === category ? 'bg-white/20' : 'bg-platinum-100 text-platinum-600'}`}>
                              {count}
                            </span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>

                {/* FAQ List */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="lg:col-span-3"
                >
                  <div className="space-y-4">
                    {filteredFAQs.length > 0 ? (
                      filteredFAQs.map((faq, index) => (
                        <motion.div
                          key={faq.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-white rounded-2xl shadow-lg border border-white/50 overflow-hidden"
                        >
                          <motion.button
                            onClick={() => toggleFAQ(faq.id)}
                            className="w-full p-6 text-left hover:bg-primary-50 transition-colors duration-200"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <span className="bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                                    {faq.category}
                                  </span>
                                </div>
                                <h3 className="text-lg font-semibold text-platinum-900 leading-tight">
                                  {faq.question}
                                </h3>
                              </div>
                              <div className="ml-4">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${openFAQ === faq.id ? 'bg-primary-600 text-white' : 'bg-platinum-100 text-platinum-600'}`}>
                                  <SafeIcon icon={openFAQ === faq.id ? FiMinus : FiPlus} className="w-4 h-4" />
                                </div>
                              </div>
                            </div>
                          </motion.button>
                          <AnimatePresence>
                            {openFAQ === faq.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-platinum-100"
                              >
                                <div className="p-6 pt-4">
                                  <p className="text-platinum-600 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                      >
                        <SafeIcon icon={FiSearch} className="w-16 h-16 text-platinum-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-platinum-600 mb-2">No questions found</h3>
                        <p className="text-platinum-500">Try adjusting your search terms or category selection.</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Still Have Questions?</h2>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-12 leading-relaxed">
                  If you couldn't find the answer to your question, don't hesitate to reach out to our team for personalized assistance
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:+919440233339"
                    className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg flex items-center space-x-3 hover:bg-primary-50 transition-colors shadow-lg"
                  >
                    <SafeIcon icon={FiUser} className="w-6 h-6" />
                    <span>Call Dr. Dharanikota</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:dr.anveshdharanikota@gmail.com"
                    className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center space-x-3 hover:bg-white hover:text-primary-600 transition-colors"
                  >
                    <SafeIcon icon={FiHelpCircle} className="w-6 h-6" />
                    <span>Email Your Question</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      );
    };

    export default FAQs;