'use client';

import { Linkedin, Mail, Instagram, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <div className="flex flex-col text-lg">
      {t('intro')}
      <div className="flex flex-col mt-4 space-y-3">
        <div className="flex items-center gap-2">
          <Mail className="inline-block mr-2 mb-1" />
          <a
            href="mailto:pg.nasmatos@outlook.com"
            className="text-blue-600 hover:underline">
            pg.nasmatos@outlook.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Linkedin className="inline-block mr-2 mb-1" />
          <a
            href="https://www.linkedin.com/in/pedro-gabriel-488a05284/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline">
            https://www.linkedin.com/in/pedro-gabriel-488a05284/
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="inline-block mr-2 mb-1" />
          <a
            href="https://wa.me/5586988242498"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline">
            +55 (86) 98824-2498
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Instagram className="inline-block mr-2 mb-1" />
          <a
            href="https://www.instagram.com/pedin_nm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline">
            @pedin_nm
          </a>
        </div>
      </div>
    </div>
  );
}
