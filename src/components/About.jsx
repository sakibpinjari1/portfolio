import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGraduationCap, FaCode, FaBicycle, FaFutbol, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10"
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
            <div className="relative">
              <motion.div
                className="w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-3xl bg-gray-900 flex flex-col items-center justify-center p-8">
                  {/* Profile Avatar */}
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg">
                    SS
                  </div>

                  {/* Status Badge */}
                  <div className="bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                    <span className="text-green-400 text-sm font-medium">Available for Projects</span>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 w-full mb-6">
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <div className="text-lg font-bold text-blue-400">AIML</div>
                      <div className="text-xs text-gray-400">Student</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <div className="text-lg font-bold text-purple-400">Web Dev</div>
                      <div className="text-xs text-gray-400">Focus</div>
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <FaBicycle className="text-orange-400" />
                    </div>
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <FaFutbol className="text-purple-400" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <FaCode className="text-white text-lg" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;