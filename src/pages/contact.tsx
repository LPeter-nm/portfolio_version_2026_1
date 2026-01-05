'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <div className="flex flex-col min-h-screen p-6 text-lg">
      {t('intro')}
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>{t('email')}:</strong>{' '}
          <a
            href="mailto:pg.nasmatos@outlook.com"
            className="text-blue-600 hover:underline">
            pg.nasmatos@outlook.com
          </a>
        </li>
        <li>
          <strong>{t('linkedin')}:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/pedro-gabriel-488a05284/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline">
            https://www.linkedin.com/in/pedro-gabriel-488a05284/
          </a>
        </li>
        <li>
          <strong>{t('whatsapp')}:</strong>{' '}
          <a
            href="https://wa.me/5586988242498"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline">
            +55 (86) 98824-2498
          </a>
        </li>
      </ul>
    </div>
  );
}
