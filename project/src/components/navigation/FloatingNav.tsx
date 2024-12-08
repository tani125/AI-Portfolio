import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Code2, Mail } from 'lucide-react';
import { NavItem } from './NavItem';

const navItems = [
  { href: '#home', icon: Home, label: 'Home' },
  { href: '#projects', icon: Briefcase, label: 'Projects' },
  { href: '#skills', icon: Code2, label: 'Skills' },
  { href: '#contact', icon: Mail, label: 'Contact' }
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-4 bg-white/80 backdrop-blur-lg rounded-full shadow-lg z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            {...item}
            isActive={activeSection === item.href.slice(1)}
          />
        ))}
      </div>
    </motion.nav>
  );
}