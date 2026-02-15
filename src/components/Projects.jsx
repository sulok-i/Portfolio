import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

const projects = [
  {
    id: 1,
    title: 'NepalWrites',
    description: 'A modern blog platform showcasing Nepali literature, writers, and stories with clean UI and responsive design.',
    image: 'src/assets/p1.jpeg',
    tags: ['Razor Pages', 'Entity Framework', 'MVC', 'SQL Server' ],
    githubUrl: 'https://github.com/sulok-i/NepalWrites',
  },
  {
    id: 2,
    title: 'AssetTrack',
    description: 'Tangible Fixed Asset Tracking System for businesses to manage, track and report fixed assets efficiently.',
    image: 'src/assets/p2.jpeg',
    tags: ['.NET Web API', 'SQL Server', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/sulok-i/Tangible_FATS',
  },
  {
    id: 3,
    title: 'SD Mart (UnifiedApp)',
    description: 'E-Commerce platform for medical suppliers and food delivery with unified mobile application backend and Swagger API documentation.',
    image: 'src/assets/p3.jpeg',
    tags: ['.NET Web API', 'Clean Architecture', 'PostgreSQL', 'Mobile Backend'],
    githubUrl: 'https://github.com/sulok-i/SD-Mart-UnifiedApp',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const cardHover = {
  rest: { scale: 1, y: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' },
  hover: {
    scale: 1.03,
    y: -8,
    boxShadow: '0 20px 50px rgba(139,92,246,0.3)',
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

const ImageModal = ({ src, onClose }) => (
  <motion.div
    className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.button
      onClick={onClose}
      className="absolute top-6 right-6 text-white/80 hover:text-white transition z-50"
      whileHover={{ scale: 1.2, rotate: 90 }}
    >
      <CgClose size={40} />
    </motion.button>

    <motion.img
      src={src}
      alt="Project screenshot"
      className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border border-purple-500/30 object-contain"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.7, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      onClick={(e) => e.stopPropagation()}
    />
  </motion.div>
);

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <motion.section
        id="projects"
        className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12 relative z-10 overflow-hidden bg-transparent"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Subtle gradient orbs - matching other sections */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Things I've Built
            </h2>
            <div className="w-20 sm:w-24 h-1 mx-auto mt-5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
              A handpicked showcase of my recent work — modern frontends to powerful backend systems.
            </p>
          </motion.div>

          {/* Projects */}
          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={project.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                  variants={itemVariants}
                >
                  {/* Image */}
                  <motion.div
                    className={`relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer border border-cyan-400/20 bg-gray-900/60 backdrop-blur-md ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                    onClick={() => setSelectedImage(project.image)}
                    whileHover="hover"
                    initial="rest"
                    variants={cardHover}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="text-white text-base sm:text-lg font-medium px-6 py-3 bg-black/50 rounded-lg backdrop-blur-md border border-cyan-400/30">
                        Tap to enlarge
                      </span>
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full text-sm font-medium text-cyan-300 border border-cyan-400/30">
                      Featured Project
                    </span>

                    <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                      {project.title}
                    </h3>

                    <div className="bg-gray-900/70 border border-cyan-400/20 p-6 lg:p-8 rounded-xl backdrop-blur-md shadow-lg">
                      <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 bg-gray-900/70 text-gray-300 text-sm rounded-full border border-cyan-400/20 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6 pt-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-lg"
                        >
                          <FaGithub className="text-xl" />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />}
      </AnimatePresence>
    </>
  );
};

export default Projects;