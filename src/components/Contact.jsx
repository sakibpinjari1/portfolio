import React, { useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const ref = useRef(null);
  useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-4" />
                <span className="text-gray-300">sakibshaikh.jsx@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-400 mr-4" />
                <span className="text-gray-300">+91 8378836896</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-400 mr-4" />
                <span className="text-gray-300">India</span>
              </div>
            </div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gray-800 rounded-lg p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                  errors.name ? 'focus:ring-red-500 border-red-500' : 'focus:ring-blue-500'
                }`}
                required
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-red-400 text-sm" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                  errors.email ? 'focus:ring-red-500 border-red-500' : 'focus:ring-blue-500'
                }`}
                required
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-red-400 text-sm" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors resize-none ${
                  errors.message ? 'focus:ring-red-500 border-red-500' : 'focus:ring-blue-500'
                }`}
                required
                aria-describedby={errors.message ? "message-error" : undefined}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-red-400 text-sm" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg ${
                isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl'
              } text-white`}
              aria-describedby={submitStatus ? "submit-status" : undefined}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus && (
              <p
                id="submit-status"
                className={`mt-3 text-center text-sm ${
                  submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
                role="status"
                aria-live="polite"
              >
                {submitStatus === 'success'
                  ? 'Message sent successfully!'
                  : 'Failed to send message. Please try again.'}
              </p>
            )}
          </motion.form>
        </div>

        {/* Social Links */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Connect With Me</h3>
          <div className="flex justify-center space-x-6">
            {[
              { icon: FaGithub, href: 'https://github.com/sakibpinjari', color: 'hover:text-gray-300' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sakib-pinjari-a72536272', color: 'hover:text-blue-400' },
              { icon: FaTwitter, href: 'https://twitter.com', color: 'hover:text-blue-300' },
              { icon: FaInstagram, href: 'https://instagram.com', color: 'hover:text-pink-400' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transition-colors duration-300 text-3xl`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;