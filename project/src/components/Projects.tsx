import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
    tags: ['TypeScript', 'React', 'Firebase', 'Material-UI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information with interactive maps',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=600',
    tags: ['React', 'OpenWeather API', 'Leaflet', 'ChartJS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image, tags, githubUrl, liveUrl, index }) {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 text-sm text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={githubUrl}
            className="flex items-center gap-2 text-gray-400 hover:text-indigo-400"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          <a
            href={liveUrl}
            className="flex items-center gap-2 text-gray-400 hover:text-indigo-400"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}