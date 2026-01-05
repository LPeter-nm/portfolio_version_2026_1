import { CheckCircle } from 'lucide-react';
import React from 'react';

export default function Abilities() {
  const hardSkillsBack = [
    'React',
    'Node.js',
    'TypeScript',
    'Express',
    'PostgreSQL',
    'NestJS',
    'AdonisJS',
    'JWT',
    'Swagger',
    'Prisma ORM',
  ];

  const hardSkillsFront = [
    'HTML',
    'CSS',
    'JavaScript',
    'Tailwind CSS',
    'Next.js',
    'React Native',
    'WordPress',
  ];

  const hardSkillsOters = [
    'Git',
    'GitHub',
    'Docker',
    'SQL',
    'RESTful APIs',
    'GraphQL',
    'Figma',
    'VS Code',
    'Trello',
    'Insomnia',
    'Cloudinary',
    'Vercel',
    'Google Cloud',
  ];

  const softSkills = [
    'Trabalho em equipe',
    'Comunicação',
    'Resolução de problemas',
    'Adaptabilidade',
    'Pensamento crítico',
    'Gestão de tempo',
  ];

  return (
    <div className="space-y-12">
      {/* Hard Skills */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Hard Skills</h2>
        <h3 className="font-semibold p-4 pt-0">Frontend</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {hardSkillsFront.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 border rounded-lg transition-all duration-300 hover:scale-100 hover:-translate-y-[0.5] hover:shadow-2xl active:scale-90 dark:shadow-orange-800/20 shadow-orange-300/20 mb-6">
              <CheckCircle className="w-12 h-12" />
              <span className="text-sm">{skill}</span>
            </div>
          ))}
        </div>
        <h3 className="font-semibold p-4">Backend</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {hardSkillsBack.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 border rounded-lg transition-all duration-300 hover:scale-100 hover:-translate-y-[0.5] hover:shadow-2xl active:scale-90 dark:shadow-orange-800/20 shadow-orange-300/20 mb-6">
              <CheckCircle className="w-12 h-12" />
              <span className="text-sm">{skill}</span>
            </div>
          ))}
        </div>
        <h3 className="font-semibold p-4">Outras Ferramentas</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {hardSkillsOters.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 border rounded-lg transition-all duration-300 hover:scale-100 hover:-translate-y-[0.5] hover:shadow-2xl active:scale-90 dark:shadow-orange-800/20 shadow-orange-300/20 mb-6">
              <CheckCircle className="w-12 h-12" />
              <span className="text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Soft Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 border rounded-lg transition-all duration-300 hover:scale-100 hover:-translate-y-[0.5] hover:shadow-2xl active:scale-90 dark:shadow-orange-800/20 shadow-orange-300/20 mb-6">
              <CheckCircle className="w-8 h-8" />
              <span className="text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
