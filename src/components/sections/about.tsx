'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  const birthDate = new Date(2005, 1, 25); // 25 de fevereiro de 2005
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age -= 1;
  }

  return (
    <div className="flex flex-col gap-4 align-middle">
      <span className="text-lg">{t('greeting', { age })}</span>
      <span className="text-lg">{t('journey')}</span>
      <span className="text-lg">{t('objective')}</span>
    </div>
  );
}
