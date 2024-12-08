import React from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-gray-800">Portfolio</a>
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>
        
        <div className="flex items-center gap-4">
          <SocialLinks />
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
      <a href="#projects" className="text-gray-600 hover:text-gray-900 transition">Projects</a>
      <a href="#skills" className="text-gray-600 hover:text-gray-900 transition">Skills</a>
      <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
    </>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a href="https://github.com" className="text-gray-600 hover:text-gray-900 transition">
        <Github className="w-5 h-5" />
      </a>
      <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 transition">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900 transition">
        <Mail className="w-5 h-5" />
      </a>
    </div>
  );
}