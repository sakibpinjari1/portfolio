import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const SkillCard = ({ skill, index }) => {
  const IconComponent = FaIcons[skill.icon] || SiIcons[skill.icon] || FaIcons.FaCode;

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -8 }}
    >
      <div className={`relative p-6 bg-gray-800 rounded-xl border border-gray-600 hover:border-cyan-400 transition-all duration-500 group-hover:shadow-2xl ${skill.glowColor} hover:shadow-2xl`}>
        {/* Skill Ring Animation */}
        <div className="relative mb-4">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${skill.level}, 100`}
              className="text-gray-600"
            />
            <motion.path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${skill.level}, 100`}
              className={`${skill.color} drop-shadow-lg`}
              initial={{ strokeDasharray: "0, 100" }}
              animate={{ strokeDasharray: `${skill.level}, 100` }}
              transition={{ duration: 2, delay: index * 0.1 + 0.5 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className={`text-2xl ${skill.color}`}
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <IconComponent />
            </motion.div>
          </div>
        </div>

        {/* Skill Info */}
        <div className="text-center">
          <motion.h3
            className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
          >
            {skill.name}
          </motion.h3>
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {skill.description}
          </motion.p>
        </div>

        {/* Removed hover glow effect to eliminate transparency */}
      </div>
    </motion.div>
  );
};

const SkillsGrid = ({ skills, title, delay = 0 }) => {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.h3
        className="text-2xl md:text-3xl font-semibold text-cyan-400 text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsGrid;