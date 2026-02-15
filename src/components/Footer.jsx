// src/components/Footer.jsx
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'; // or use react-icons/fa if you prefer

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const iconHover = {
    rest: { scale: 1 },
    hover: { scale: 1.2, rotate: 8, transition: { type: 'spring', stiffness: 400 } },
  };

  return (
    <footer className="py-12 px-6 border-t border-gray-800/50 bg-gradient-to-t from-black to-transparent relative z-10">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand & Socials */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Sulok Pokhrel
            </h3>
            <div className="flex justify-center md:justify-start gap-6">
              <motion.a
                href="https://github.com/sulok-i" 
                target="_blank"
                rel="noopener noreferrer"
                variants={iconHover}
                initial="rest"
                whileHover="hover"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/sulok-pokhrel/"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconHover}
                initial="rest"
                whileHover="hover"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="https://x.com/Sulok14" 
                target="_blank"
                rel="noopener noreferrer"
                variants={iconHover}
                initial="rest"
                whileHover="hover"
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="mailto:sulok.pokharel123@gmail.com" 
                variants={iconHover}
                initial="rest"
                whileHover="hover"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links  */}
          <motion.div variants={item} className="space-y-3">
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item} className="space-y-3">
            <h4 className="text-lg font-semibold text-white mb-3">Get in Touch</h4>
            <p className="text-gray-400">
              <a
                href="mailto:sulok.pokharel123@gmail.com"
                className="hover:text-emerald-400 transition"
              >
                sulok.pokharel123@gmail.com
              </a>
            </p>
            <p className="text-gray-500 text-sm">Biratnagar, Nepal</p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={item}
          className="mt-10 pt-8 border-t border-gray-800/50 text-center text-gray-500 text-sm"
        >
          © {currentYear} Sulok Pokhrel. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;