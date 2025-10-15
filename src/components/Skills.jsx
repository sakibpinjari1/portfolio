import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCode, FaDatabase, FaLanguage } from 'react-icons/fa';
import { frontendSkills, backendSkills, languagesSkills } from '../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const currentSkills = activeCategory === 'frontend' ? frontendSkills : activeCategory === 'backend' ? backendSkills : languagesSkills;
  const currentIcon = activeCategory === 'frontend' ? FaCode : activeCategory === 'backend' ? FaDatabase : FaLanguage;

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: FaCode, color: 'blue' },
    { id: 'backend', name: 'Backend', icon: FaDatabase, color: 'green' },
    { id: 'languages', name: 'Languages', icon: FaLanguage, color: 'purple' }
  ];

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
      style={{ y }}
    >
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Elegant Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Expertise</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              What I Bring to the Stack
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A carefully curated collection of technologies and tools that shape modern digital experiences
          </motion.p>
        </motion.div>

        {/* Elegant Category Selector */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12 lg:mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex bg-gray-900/50 p-1 sm:p-2 rounded-xl sm:rounded-2xl backdrop-blur-sm overflow-x-auto max-w-full">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base whitespace-nowrap ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isActive && (
                    <motion.div
                      className={`absolute inset-0 rounded-xl ${
                        category.id === 'frontend' ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20' :
                        category.id === 'backend' ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20' :
                        'bg-gradient-to-r from-purple-500/20 to-pink-500/20'
                      }`}
                      layoutId="activeCategory"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <IconComponent className={`text-lg ${isActive ? (
                    category.id === 'frontend' ? 'text-blue-400' :
                    category.id === 'backend' ? 'text-green-400' :
                    'text-purple-400'
                  ) : ''}`} />
                  <span className="relative z-10">{category.name}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Display - Flow Layout */}
        <motion.div
          className="relative"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <motion.div
              className={`absolute top-0 left-0 w-full h-px ${
                activeCategory === 'frontend' ? 'bg-gradient-to-r from-transparent via-blue-400 to-transparent' :
                activeCategory === 'backend' ? 'bg-gradient-to-r from-transparent via-green-400 to-transparent' :
                'bg-gradient-to-r from-transparent via-purple-400 to-transparent'
              }`}
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Skills Flow */}
          <div className="relative z-10">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-2 sm:px-0">
              {currentSkills.map((skill, index) => (
                <motion.div
                  key={`${activeCategory}-${skill.name}`}
                  className="group relative"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  {/* Skill Item - Flow Design */}
                  <div className={`relative px-3 sm:px-4 lg:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 group-hover:shadow-lg ${
                    activeCategory === 'frontend' ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:shadow-blue-500/20' :
                    activeCategory === 'backend' ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 group-hover:shadow-green-500/20' :
                    'bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:shadow-purple-500/20'
                  }`}>

                    {/* Skill Level Indicator */}
                    <div className="absolute -top-1 -right-1">
                      <div className={`w-3 h-3 rounded-full ${
                        skill.level >= 90 ? 'bg-green-400' :
                        skill.level >= 80 ? 'bg-blue-400' :
                        skill.level >= 70 ? 'bg-yellow-400' : 'bg-gray-400'
                      } opacity-60`} />
                    </div>

                    {/* Skill Name */}
                    <div className="text-center">
                      <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-1 group-hover:text-blue-300 transition-colors">
                        {skill.name}
                      </h3>
                      <div className={`w-full h-0.5 bg-gradient-to-r ${
                        activeCategory === 'frontend' ? 'from-blue-400 to-cyan-400' :
                        activeCategory === 'backend' ? 'from-green-400 to-emerald-400' :
                        'from-purple-400 to-pink-400'
                      } scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                    </div>
                  </div>

                  {/* Connecting Flow Line */}
                  {index < currentSkills.length - 1 && (
                    <motion.div
                      className="absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-gray-600 to-transparent opacity-30"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Wave Pattern Accent */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <motion.div
              className={`h-0.5 bg-gradient-to-r ${
                activeCategory === 'frontend' ? 'from-blue-400 via-cyan-400 to-transparent' :
                activeCategory === 'backend' ? 'from-green-400 via-emerald-400 to-transparent' :
                'from-purple-400 via-pink-400 to-transparent'
              }`}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;