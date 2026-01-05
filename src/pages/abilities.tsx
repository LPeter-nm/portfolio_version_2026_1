'use client';

import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function Abilities() {
  const t = useTranslations('abilities');

  const hardSkillsBack = t.raw('hardSkillsBack');
  const hardSkillsFront = t.raw('hardSkillsFront');
  const hardSkillsOthers = t.raw('hardSkillsOthers');
  const softSkills = t.raw('softSkillsList');

  return (
    <div className="space-y-12">
      {/* Hard Skills */}
      <div>
        <h2 className="text-2xl font-bold mb-6">{t('hardSkills')}</h2>
        <h3 className="font-semibold p-4 pt-0">{t('frontend')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {hardSkillsFront.map((skill: string, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 border rounded-lg transition-all duration-300 hover:scale-100 hover:-translate-y-[0.5] hover:shadow-2xl active:scale-90 dark:shadow-orange-800/20 shadow-orange-300/20 mb-6">
              <CheckCircle className="w-12 h-12" />
              <span className="text-sm">{skill}</span>
            </div>
          ))}
        </div>
        <h3 className="font-semibold p-4">{t('backend')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {hardSkillsBack.map((skill: string, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 border rounded-lg transition-all duration-300 hover:scale-100 hover:-translate-y-[0.5] hover:shadow-2xl active:scale-90 dark:shadow-orange-800/20 shadow-orange-300/20 mb-6">
              <CheckCircle className="w-12 h-12" />
              <span className="text-sm">{skill}</span>
            </div>
          ))}
        </div>
        <h3 className="font-semibold p-4">{t('otherTools')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {hardSkillsOthers.map((skill: string, index: number) => (
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
        <h2 className="text-2xl font-bold mb-6">{t('softSkills')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {softSkills.map((skill: string, index: number) => (
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
