import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { frontendSkills, backendSkills, languagesSkills } from '../data/skills';
import SkillsGrid from './SkillsGrid';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const currentSkills = activeCategory === 'frontend' ? frontendSkills : activeCategory === 'backend' ? backendSkills : languagesSkills;
  const currentTitle = activeCategory === 'frontend' ? 'Frontend Development' : activeCategory === 'backend' ? 'Backend Development' : 'Programming Languages';

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10 overflow-hidden"
      style={{ y }}
    >

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        {/* Toggle Buttons */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          role="tablist"
          aria-label="Skills categories"
        >
          <div className="bg-gray-800 rounded-full p-1 border border-gray-700">
            <motion.button
              onClick={() => setActiveCategory('frontend')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                activeCategory === 'frontend'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="tab"
              aria-selected={activeCategory === 'frontend'}
              aria-controls="frontend-skills"
              id="frontend-tab"
            >
              Frontend
            </motion.button>
            <motion.button
              onClick={() => setActiveCategory('backend')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                activeCategory === 'backend'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="tab"
              aria-selected={activeCategory === 'backend'}
              aria-controls="backend-skills"
              id="backend-tab"
            >
              Backend
            </motion.button>
            <motion.button
              onClick={() => setActiveCategory('languages')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                activeCategory === 'languages'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="tab"
              aria-selected={activeCategory === 'languages'}
              aria-controls="languages-skills"
              id="languages-tab"
            >
              Languages
            </motion.button>
          </div>
        </motion.div>

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: activeCategory === 'frontend' ? -50 : activeCategory === 'backend' ? 50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeCategory === 'frontend' ? 50 : activeCategory === 'backend' ? -50 : -50 }}
            transition={{ duration: 0.5 }}
            role="tabpanel"
            id={activeCategory === 'frontend' ? 'frontend-skills' : activeCategory === 'backend' ? 'backend-skills' : 'languages-skills'}
            aria-labelledby={activeCategory === 'frontend' ? 'frontend-tab' : activeCategory === 'backend' ? 'backend-tab' : 'languages-tab'}
          >
            <SkillsGrid skills={currentSkills} title={currentTitle} />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Skills;