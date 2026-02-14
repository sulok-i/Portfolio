import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const skills = [
  {
    name: 'C#',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    color: 'text-[#68217A]',
  },
  {
    name: '.NET Core',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
    color: 'text-[#512BD4]',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: 'text-[#336791]',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: 'text-[#4479A1]',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'text-[#61DAFB]', 
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: 'text-[#F7DF1E]',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: 'text-[#F05032]', 
  },
  {
    name: 'Azure',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    color: 'text-[#0078D4]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { type: 'spring', stiffness: 300, damping: 12 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5 sm:px-8 lg:px-12 relative z-10">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 lg:gap-12">
          {skills.map((skill) => {
            return (
              <motion.div
                key={skill.name}
                className="group bg-gray-900/60 border border-purple-500/20 p-6 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-purple-900/40 transition-shadow duration-500 text-center"
                variants={cardVariants}
                whileHover="hover"
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-16 h-16 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <p className={`text-lg font-semibold ${skill.color} group-hover:text-white transition-colors`}>
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}