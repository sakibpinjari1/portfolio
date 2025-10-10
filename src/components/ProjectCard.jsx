import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="group relative w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden">
           <img
             src={project.image}
             alt={project.title}
             loading="lazy"
             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
           />
         </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt size={18} />
              </motion.a>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium border border-gray-700 cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: '#374151' }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;