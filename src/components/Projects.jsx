import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaPlay, FaPause, FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaPalette, FaServer } from 'react-icons/fa';
import { projects, categories } from '../data/projects';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const ref = useRef(null);

  useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, currentProject]);

  // Filter projects by category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const currentProjectData = filteredProjects[currentProject % filteredProjects.length];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web Apps': return <FaCode className="text-blue-400" />;
      case 'Mobile': return <FaMobile className="text-green-400" />;
      case 'UI/UX': return <FaPalette className="text-purple-400" />;
      case 'Tools': return <FaServer className="text-orange-400" />;
      default: return <FaCode className="text-gray-400" />;
    }
  };

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10"
      style={{ marginBottom: '100px' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing modern web technologies and creative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentProject(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white border border-blue-500'
                  : 'bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category !== 'All' && getCategoryIcon(category)}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Project Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 border border-gray-700 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {/* Project Image */}
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-800">
                    <img
                      src={currentProjectData.image}
                      alt={currentProjectData.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Overlay with category */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-gray-900 px-3 py-1 rounded-full border border-gray-700">
                    {getCategoryIcon(currentProjectData.category)}
                    <span className="text-white text-sm font-medium">{currentProjectData.category}</span>
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <motion.h3
                      className="text-3xl md:text-4xl font-bold text-white mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {currentProjectData.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {currentProjectData.description}
                    </motion.p>
                  </div>

                  {/* Tech Stack */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {currentProjectData.tech.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.a
                      href={currentProjectData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      Code
                    </motion.a>
                    <motion.a
                      href={currentProjectData.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">

            {/* Left Arrow */}
            <motion.button
              onClick={prevProject}
              className="p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              disabled={filteredProjects.length <= 1}
            >
              <FaArrowLeft className="text-gray-400 hover:text-white" />
            </motion.button>

            {/* Project Indicators and Auto-play */}
            <div className="flex items-center gap-4">
              {/* Dots Navigation */}
              <div className="flex gap-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProject % filteredProjects.length
                        ? 'bg-blue-400 scale-125'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play Toggle */}
              <motion.button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isAutoPlay
                    ? 'bg-green-500 text-white border border-green-500'
                    : 'bg-gray-700 text-gray-400 border border-gray-600'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isAutoPlay ? <FaPause size={14} /> : <FaPlay size={14} />}
              </motion.button>
            </div>

            {/* Right Arrow */}
            <motion.button
              onClick={nextProject}
              className="p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              disabled={filteredProjects.length <= 1}
            >
              <FaArrowRight className="text-gray-400 hover:text-white" />
            </motion.button>
          </div>

          {/* Project Counter */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-gray-500 text-sm">
              Project {currentProject % filteredProjects.length + 1} of {filteredProjects.length} • {currentProjectData.category}
            </p>
          </motion.div>
        </div>

        {/* Project Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Total Projects', value: projects.length, icon: FaCode },
            { label: 'Technologies', value: '15+', icon: FaServer },
            { label: 'Categories', value: categories.length - 1, icon: FaPalette },
            { label: 'Live Demos', value: projects.length, icon: FaExternalLinkAlt },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className="text-3xl text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;