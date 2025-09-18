"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ColorSchemeToggle } from "./color-scheme-toggle";
import { GitHubIcon } from "./icons/GitHubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { ModeIndicator } from "./mode-indicator";
import { useTheme } from "./theme-provider";
import { ThemeSelector } from "./theme-selector";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const {} = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      if (showThemeSelector) {
        setShowThemeSelector(false);
      }
    };

    if (showThemeSelector) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showThemeSelector]);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
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
              onClick={scrollToSection("competences")}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              Compétences
            </button>
            <button
              onClick={scrollToSection("projets")}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              Projets
            </button>
            <button
              onClick={scrollToSection("contact")}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => setShowThemeSelector(!showThemeSelector)}
              className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"
            >
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <ModeIndicator />
              Thème
            </button>
            <ColorSchemeToggle />
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

        {showThemeSelector && (
          <div className="absolute top-full left-0 right-0 bg-background border-t border-border p-6 shadow-lg z-50">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Choisir un thème</h3>
              <button
                onClick={() => setShowThemeSelector(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>
            </div>
            <ThemeSelector onThemeChange={() => setShowThemeSelector(false)} />
          </div>
        )}
      </div>
    </motion.header>
  );
};
