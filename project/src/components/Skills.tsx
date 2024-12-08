import React from 'react';
import { Code2, Database, Layout, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux']
  },
  {
    title: 'Backend Development',
    icon: Database,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL']
  },
  {
    title: 'Tools & Technologies',
    icon: Settings,
    skills: ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, icon: Icon, skills }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-gray-600">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}