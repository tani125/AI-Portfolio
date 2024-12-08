import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

export function NavItem({ href, icon: Icon, label, isActive }: NavItemProps) {
  return (
    <motion.a
      href={href}
      className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
        isActive 
          ? 'text-indigo-500' 
          : 'text-gray-400 hover:text-indigo-400'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs font-medium">{label}</span>
    </motion.a>
  );
}