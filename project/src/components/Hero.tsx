import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Scene } from './3d/Scene';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 pt-16">
      <Scene />
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Hi, I'm <span className="text-indigo-400">John Doe</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            A passionate full-stack developer crafting beautiful and functional web experiences
          </p>
          <div className="flex gap-4">
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 border border-gray-500 text-white rounded-lg hover:border-indigo-400 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=600"
            alt="Coding workspace"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}