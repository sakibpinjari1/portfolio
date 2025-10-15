import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const SkillCard = ({ skill, index }) => {
  const IconComponent = FaIcons[skill.icon] || SiIcons[skill.icon] || FaIcons.FaCode;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 50);
    return () => clearTimeout(timer);
  }, [index]);

  if (!isVisible) {
    return <div className="bg-gray-800 rounded-xl p-6 border border-gray-600 h-32 animate-pulse" />;
  }

  return (
    <motion.div
      className="group relative h-24 sm:h-28 md:h-32"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeOut"
      }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <div className={`relative p-3 sm:p-4 bg-gray-800 rounded-lg sm:rounded-xl border border-gray-600 hover:border-cyan-400 transition-all duration-300 ${skill.glowColor} hover:shadow-lg`}>
        {/* Simplified Progress Ring */}
        <div className="relative mb-3">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${skill.level}, 100`}
              className="text-gray-700"
            />
            <circle
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              stroke={skill.color.includes('blue') ? '#3b82f6' :
                     skill.color.includes('green') ? '#10b981' :
                     skill.color.includes('purple') ? '#8b5cf6' :
                     skill.color.includes('yellow') ? '#f59e0b' :
                     skill.color.includes('cyan') ? '#06b6d4' :
                     skill.color.includes('red') ? '#ef4444' : '#6b7280'}
              strokeWidth="2"
              strokeDasharray={`${skill.level}, 100`}
              className="drop-shadow-sm"
              strokeLinecap="round"
              transform="rotate(-90 18 18)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-sm sm:text-base lg:text-lg ${skill.color}`}>
              <IconComponent />
            </div>
          </div>
        </div>

        {/* Skill Info - Simplified */}
        <div className="text-center">
          <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
            {skill.name}
          </h3>
          <p className="text-gray-400 text-xs leading-tight">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsGrid = ({ skills, title, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 100);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) {
    return (
      <div className="mb-16">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-cyan-400 text-center mb-4 sm:mb-6 lg:mb-8 h-6 sm:h-7 lg:h-8 bg-gray-800/50 rounded animate-pulse" />
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {Array.from({ length: skills.length }).map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-600 h-24 sm:h-28 md:h-32 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
    >
      <motion.h3
        className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 text-center mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay * 0.1 + 0.1 }}
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsGrid;