'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <div className="flex flex-col gap-4 align-middle">
      <span className="text-lg">{t('greeting')}</span>
      <span className="text-lg">{t('journey')}</span>
      <span className="text-lg">{t('objective')}</span>
    </div>
  );
}
