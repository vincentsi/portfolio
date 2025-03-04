'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GitHubIcon } from "./icons/GitHubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const targetPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-bold hover:text-blue-500 transition-colors"
          >
            Vincent Simonpieri
          </Link>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={scrollToSection('competences')}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              Compétences
            </button>
            <button 
              onClick={scrollToSection('projets')}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              Projets
            </button>
            <button 
              onClick={scrollToSection('contact')}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              Contact
            </button>
            <div className="flex items-center gap-4 ml-4 border-l pl-4 border-gray-200 dark:border-gray-700">
              <a
                href="https://github.com/vincentsi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <GitHubIcon size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/vincent-simonpieri-alternance-/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
