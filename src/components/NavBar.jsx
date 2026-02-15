import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-gray-950/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="/" 
            className="text-3xl font-black tracking-tight group"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              SULOK
            </span>
            <div className="h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-500 mt-1"></div>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Hire Me Button - Updated with cyan to purple gradient */}
          <a
            href="#contact"
            className={`
              px-6 py-2.5 rounded-full font-semibold text-white
              bg-gradient-to-r from-cyan-500 to-purple-600
              hover:from-cyan-400 hover:to-purple-500
              active:scale-95
              transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-500/30
            `}
          >
            Hire Me
          </a>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;