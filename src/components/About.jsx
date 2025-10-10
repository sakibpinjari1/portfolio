import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'm a passionate full-stack developer with expertise in modern web technologies.
              I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
              When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.6
                  }
                }
              }}
            >
              <motion.div
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:bg-gray-700 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-2xl font-bold text-blue-400 mb-2">3+</h3>
                <p className="text-gray-300 text-sm">Years Experience</p>
              </motion.div>
              <motion.div
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:bg-gray-700 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-2">50+</h3>
                <p className="text-gray-300 text-sm">Projects Completed</p>
              </motion.div>
              <motion.div
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:bg-gray-700 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-2xl font-bold text-green-400 mb-2">15+</h3>
                <p className="text-gray-300 text-sm">Technologies</p>
              </motion.div>
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
                className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-6xl font-bold text-white">
                  YN
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <span className="text-white text-2xl">⚡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;