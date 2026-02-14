import React from "react";
import { Github, Linkedin, Mail, XIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 border-t border-starWhite/10 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-nebulaPink to-cosmicBlue text-transparent bg-clip-text mb-4">
              Sulok Pokhrel
            </h3>
            <p className="text-starWhite/70 mb-4">
              .NET Backend Developer specializing in C#, ASP.NET, Web API, SQL Server, and
              clean architecture
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/sulok-i"
                target="_blank"
                rel="noopener noreferrer"
                className="text-starWhite/70 hover:text-nebulaPink transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sulok-pokhrel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-starWhite/70 hover:text-cosmicBlue transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Sulok14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-starWhite/70 hover:text-violet-500 transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:sulok.pokharel123@gmail.com"
                className="text-starWhite/70 hover:text-emerald-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-starWhite mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold text-starWhite mb-4">Get in Touch</h3>
            <p className="text-starWhite/70 mb-2">
              Email:{' '}
              <a 
                href="mailto:sulok.pokharel123@gmail.com"
                className="hover:text-nebulaPink transition-colors"
              >
                sulok.pokharel123@gmail.com
              </a>
            </p>
            <p className="text-starWhite/70">
              Based in Biratnagar, Nepal
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-starWhite/10 pt-8 text-center">
          <p className="text-starWhite/50">
            &copy; {currentYear} Sulok Pokhrel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;