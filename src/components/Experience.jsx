import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      type: 'work',
    },
    {
      year: '2022 - 2023',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained multiple client projects, focusing on performance optimization and user experience improvements.',
      type: 'work',
    },
    {
      year: '2021 - 2022',
      title: 'Frontend Developer',
      company: 'Creative Web Studio',
      description: 'Specialized in creating responsive, interactive user interfaces using modern JavaScript frameworks and design systems.',
      type: 'work',
    },
    {
      year: '2020 - 2021',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      description: 'Graduated with honors, focusing on software engineering and web development. Completed capstone project on AI-powered web applications.',
      type: 'education',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <span className="text-blue-400 font-medium text-sm mt-2 md:mt-0">{exp.year}</span>
                  </div>
                  <p className="text-purple-300 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  <div className="mt-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      exp.type === 'work'
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'bg-green-500/20 text-green-300 border border-green-500/30'
                    }`}>
                      {exp.type === 'work' ? 'Work Experience' : 'Education'}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;