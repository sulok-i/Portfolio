// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.4 } }
};

const item = {
  hidden: { y: 70, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

const glow = {
  animate: {
    textShadow: [
      '0 0 20px rgba(139,92,246,0.5)',
      '0 0 45px rgba(139,92,246,0.8)',
      '0 0 20px rgba(139,92,246,0.5)'
    ],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
  }
};

const underline = {
  hidden: { width: 0 },
  visible: { width: '12rem', transition: { duration: 1.6, ease: 'easeOut' } }
};

const iconMotion = {
  rest: { scale: 1 },
  hover: { scale: 1.25, rotate: 10, transition: { type: 'spring', stiffness: 400, damping: 12 } }
};

const rocketMotion = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const fullText = '.NET Backend Developer';

  useEffect(() => {
    const handleTyping = () => {
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 75 : 150);
    return () => clearTimeout(timer);
  }, [text, isDeleting, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-24">
      <motion.div
        className="text-center max-w-4xl mx-auto relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter"
          variants={glow}
          animate="animate"
        >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
  Sulok Pokhrel
</span>
        </motion.h1>

        <motion.h2
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white/90 h-16"
          variants={item}
        >
          {text}
          <span className="animate-pulse ml-1 text-purple-400">|</span>
        </motion.h2>

        <motion.div
          className="mt-4 h-1 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-full shadow-lg shadow-purple-600/40"
          variants={underline}
        />

        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed"
          variants={item}
        >
          Building scalable, high-performance .NET backend systems and APIs with clean architecture and a strong focus on solving real business problems.
        </motion.p>

        <motion.div className="mt-10 flex justify-center gap-6 sm:gap-8" variants={item}>
          <motion.a href="https://github.com/sulok-i" whileHover="hover" initial="rest" variants={iconMotion} className="group p-4 bg-gray-900/50 rounded-full border border-purple-500/30 hover:border-purple-400/70 hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] transition-all">
            <Github className="w-8 h-8 text-gray-300 group-hover:text-purple-400 transition-colors" />
          </motion.a>

          <motion.a href="https://www.linkedin.com/in/sulok-pokhrel/" whileHover="hover" initial="rest" variants={iconMotion} className="group p-4 bg-gray-900/50 rounded-full border border-blue-500/30 hover:border-blue-400/70 hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all">
            <Linkedin className="w-8 h-8 text-gray-300 group-hover:text-blue-400 transition-colors" />
          </motion.a>

          <motion.a href="https://x.com/Sulok14" whileHover="hover" initial="rest" variants={iconMotion} className="group p-4 bg-gray-900/50 rounded-full border border-white/30 hover:border-white/60 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all">
            <Twitter className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
          </motion.a>

          <motion.a href="mailto:sulok.pokharel123@gmail.com" whileHover="hover" initial="rest" variants={iconMotion} className="group p-4 bg-gray-900/50 rounded-full border border-emerald-500/30 hover:border-emerald-400/70 hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all">
            <Mail className="w-8 h-8 text-gray-300 group-hover:text-emerald-400 transition-colors" />
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-12"
          variants={rocketMotion}
          animate="animate"
        >
          <Rocket className="w-12 h-12 mx-auto text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}