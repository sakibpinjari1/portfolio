import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaGraduationCap, FaCode, FaBicycle, FaFutbol, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Eye tracking animation based on scroll
  const eyeY = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
      style={{ y }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            {/* Personal Story */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-blue-400 text-xl" />
                <span className="text-gray-300 text-lg">4th Year Student</span>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Currently pursuing Artificial Intelligence and Machine Learning, I discovered my passion for web development through hands-on projects and continuous learning.
              </p>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaCode className="text-green-400 text-xl" />
                <span className="text-gray-300 text-lg">Web Development Focus</span>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I'm always excited to work on web development projects, from simple websites to complex applications. Currently building personal projects to sharpen my skills and explore new technologies.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <FaBicycle className="text-orange-400 text-lg" />
                  <span className="text-gray-300 text-sm">Cycling</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaFutbol className="text-purple-400 text-lg" />
                  <span className="text-gray-300 text-sm">Football</span>
                </div>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, I stay active with cycling and football. These activities help me maintain balance and bring fresh perspectives to problem-solving.
              </p>
            </motion.div>
            {/* Career Goals & Achievements */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <FaRocket className="text-blue-400 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Building Something Impactful</h3>
                  <p className="text-gray-300 leading-relaxed">
                    My goal is to create technology that makes a real difference. I'm particularly interested in web applications that solve everyday problems and improve user experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <FaLightbulb className="text-yellow-400 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Continuous Learning</h3>
                  <p className="text-gray-300 leading-relaxed">
                    As a student, I believe in constantly adapting to new technologies and challenges. This mindset helps me stay current and approach problems from different angles.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-80">
              {/* Subtle Profile Card */}
              <motion.div
                ref={cardRef}
                className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Clean Header */}
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 text-center border-b border-gray-700/30">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-xl font-bold text-white mx-auto mb-3 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    SS
                  </motion.div>
                  <h3 className="text-white text-lg font-bold">Sakib Shaikh</h3>
                  <p className="text-blue-300 text-sm">Full Stack Developer</p>
                </div>

                {/* Essential Info */}
                <div className="p-6 space-y-4">
                  {/* Status */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs font-medium">Available for Projects</span>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                      <div className="text-blue-400 font-bold text-sm">4th Year</div>
                      <div className="text-gray-400 text-xs">AIML Student</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                      <div className="text-green-400 font-bold text-sm">Web Dev</div>
                      <div className="text-gray-400 text-xs">Focus Area</div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 pt-2 border-t border-gray-700/30">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <FaEnvelope className="text-blue-400 text-sm" />
                      <span className="text-xs">sakibshaikh.jsx@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <FaMapMarkerAlt className="text-green-400 text-sm" />
                      <span className="text-xs">India</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 pt-3 border-t border-gray-700/30">
                    <motion.a
                      href="https://github.com/sakibpinjari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-gray-700/30 hover:border-gray-600"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={14} />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/sakib-pinjari-a72536272"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300 border border-gray-700/30 hover:border-blue-400"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin size={14} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Eye Tracking Animation */}
              <motion.div
                className="absolute -top-4 -right-4 flex gap-2"
                style={{ y: eyeY }}
              >
                {/* Left Eye */}
                <motion.div
                  className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center border border-gray-600"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Right Eye */}
                <motion.div
                  className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center border border-gray-600"
                  animate={{ scale: [1.1, 1, 1.1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-purple-400 rounded-full"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;