// src/components/About.jsx
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { User, Briefcase } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' }
  }
};

const cardVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.04,
    y: -8,
    transition: { type: 'spring', stiffness: 320, damping: 18 }
  }
};

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.2, rotate: 360, transition: { duration: 0.7 } }
};

export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12 relative z-10 bg-gradient-to-b from-black/40 to-transparent"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20">
          {/* Image Column */}
          <motion.div
            className="w-full lg:w-5/12 group relative"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/40 border border-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-purple-600/15 to-indigo-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>
              
              <img
                src="/profile.png"  
                alt="Sulok Pokhrel - .NET Backend Developer"
                className="w-full h-auto object-cover rounded-3xl transform group-hover:scale-110 transition-transform duration-800 ease-out"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="w-full lg:w-7/12 space-y-7 lg:space-y-9"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-lg sm:text-xl text-gray-300/90 leading-relaxed">
              I'm a passionate .NET Backend Developer dedicated to crafting scalable, high-performance server-side solutions and robust APIs. 
              With strong skills in C#, .NET Core / ASP.NET, SQL Server, Entity Framework, and Clean Architecture principles, 
              I love transforming complex business needs into clean, efficient, and maintainable code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-4">
              {/* Experience Card */}
              <motion.div
                className="group bg-gray-900/50 border border-purple-500/15 p-6 lg:p-7 rounded-2xl backdrop-blur-lg shadow-xl hover:shadow-purple-900/30 transition-shadow"
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
              >
                <motion.div variants={iconVariants} initial="rest" whileHover="hover" className="inline-block">
                  <User className="w-7 h-7 mb-4 text-purple-400 group-hover:text-pink-400 transition-colors" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                  Experience
                </h3>
                <p className="text-gray-400 text-base">
                  1+ Years
                </p>
              </motion.div>

              {/* Projects Card */}
              <motion.div
                className="group bg-gray-900/50 border border-indigo-500/15 p-6 lg:p-7 rounded-2xl backdrop-blur-lg shadow-xl hover:shadow-indigo-900/30 transition-shadow"
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
              >
                <motion.div variants={iconVariants} initial="rest" whileHover="hover" className="inline-block">
                  <Briefcase className="w-7 h-7 mb-4 text-indigo-400 group-hover:text-purple-400 transition-colors" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-indigo-300 transition-colors">
                  Projects
                </h3>
                <p className="text-gray-400 text-base">
                  4+ Projects Completed
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}