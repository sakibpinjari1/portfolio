import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'I build modern web experiences.';
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Initialize particles
    const particleCount = Math.min(80, Math.floor(rect.width / 20) + 30);
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: 1.5 + Math.random() * 2,
        opacity: 0.4 + Math.random() * 0.6,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle
        ctx.save();
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        // Pulsing opacity
        const pulseOpacity = particle.opacity * (0.6 + 0.4 * Math.sin(timestamp * 0.002 + particle.pulsePhase));
        ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity})`;

        // Add glow effect
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#ffffff';
        ctx.fill();
        ctx.restore();
      });

      // Draw connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

          if (distance < 100) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            const opacity = (1 - distance / 100) * 0.2;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      const newRect = canvas.getBoundingClientRect();
      canvas.width = newRect.width;
      canvas.height = newRect.height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const resumePath = '/sakib shaikh resume.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Sakib_Shaikh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Solid Black Background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Particle Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Subtle Content Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[80vh] py-8 sm:py-12 lg:py-0">

          {/* Left Content Section */}
          <motion.div
            className="text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-sm font-medium">Hello, I'm</span>
            </motion.div>

            {/* Name - Responsive sizing for all screens */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Sakib Shaikh
              </span>
            </motion.h1>

            {/* Role */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-6 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
              <span>Full Stack Developer</span>
              <div className="w-6 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-sm sm:text-base md:text-lg text-gray-300 h-6 flex items-center justify-center lg:justify-start font-light">
                <span>{displayText}</span>
                <span className="animate-pulse text-blue-400 ml-1">|</span>
              </div>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
                Passionate about creating beautiful, functional digital experiences with modern web technologies.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Action Section */}
          <motion.div
            className="flex flex-col justify-center items-center lg:items-end space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main CTA Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0">
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-600 hover:border-blue-400 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:bg-blue-400/10 text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>

              <motion.button
                onClick={downloadResume}
                className="border-2 border-gray-600 hover:border-green-400 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:bg-green-400/10 text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <FaDownload className="text-sm" />
                  View Resume
                </span>
              </motion.button>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-end gap-4 sm:gap-6 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="https://github.com/sakibpinjari"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center border border-gray-700/50 hover:border-gray-600 transition-all duration-300">
                  <FaGithub size={20} />
                </div>
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">GitHub</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/sakib-pinjari-a72536272"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center border border-gray-700/50 hover:border-blue-400 transition-all duration-300">
                  <FaLinkedin size={20} />
                </div>
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">LinkedIn</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <span className="text-gray-400 text-xs sm:text-sm font-light">Scroll to explore</span>
          <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors duration-300">
            <FaArrowDown className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm" />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;