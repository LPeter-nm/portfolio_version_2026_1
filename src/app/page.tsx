'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Abilities from '@/pages/abilities';
import About from '@/pages/about';
import Contact from '@/pages/contact';
import Experience from '@/pages/experience';
import Projects from '@/pages/projects';
import { ArrowLeft, Github, Instagram, Linkedin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const [activePage, setActivePage] = useState<number | null>(null);
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Desenvolvedor Full-Stack', 'Pedro Gabriel'];

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      } else if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  const menuItems = [
    { id: 1, label: 'Sobre', component: About },
    { id: 2, label: 'Experiência', component: Experience },
    { id: 3, label: 'Projetos', component: Projects },
    { id: 4, label: 'Habilidade', component: Abilities },
    { id: 5, label: 'Contato', component: Contact },
  ];

  const menuItemsRight = menuItems.slice(0, 3);
  const menuItemsLeft = menuItems.slice(3);

  const handleBack = () => {
    setActivePage(null);
  };

  return (
    <main
      className="flex min-h-screen items-center justify-center text-white"
      style={{
        cursor: `url('/cursor.cur'), auto`,
      }}>
      {!activePage && (
        <div className="flex items-center justify-center space-x-12 animate-in fade-in duration-500">
          <div className="flex flex-col items-center space-y-8 p-12">
            {menuItemsRight.map((item) => (
              <Button
                style={{
                  cursor: `url('/cursor.cur'), auto`,
                }}
                key={item.id}
                className="bg-[#0F0F0F] hover:bg-[#0F0F0F] text-2xl font-[--font-custom] hover:scale-105 transition-transform"
                onClick={() => setActivePage(item.id)}>
                {item.label}
              </Button>
            ))}
          </div>
          <div className="flex flex-col items-center space-y-8">
            <div className="h-12 flex items-center justify-center w-100">
              <span className="text-3xl font-bold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <Avatar className="h-72 w-72">
              <AvatarImage src="https://github.com/LPeter-nm.png" />
              <AvatarFallback>LPeter-nm</AvatarFallback>
            </Avatar>
            <div className="flex gap-5">
              <button
                style={{
                  cursor: `url('/cursor.cur'), auto`,
                }}
                className="hover:transform hover:scale-110 transition-transform"
                onClick={() => window.open('https://www.instagram.com/pedin_nm/', '_blank')}>
                <Instagram />
              </button>
              <button
                style={{
                  cursor: `url('/cursor.cur'), auto`,
                }}
                className="hover:transform hover:scale-110 transition-transform"
                onClick={() => window.open('https://github.com/LPeter-nm', '_blank')}>
                <Github />
              </button>
              <button
                style={{
                  cursor: `url('/cursor.cur'), auto`,
                }}
                className="hover:transform hover:scale-110 transition-transform"
                onClick={() =>
                  window.open('https://www.linkedin.com/in/pedro-gabriel-488a05284/', '_blank')
                }>
                <Linkedin />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-8 p-12">
            {menuItemsLeft.map((item) => (
              <Button
                style={{
                  cursor: `url('/cursor.cur'), auto`,
                }}
                key={item.id}
                className="bg-[#0F0F0F] hover:bg-[#0F0F0F] text-2xl font-[--font-custom] hover:scale-105 transition-transform"
                onClick={() => setActivePage(item.id)}>
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
      {activePage && (
        <div className="min-h-screen w-full p-8 animate-in fade-in duration-500 space-y-8">
          <div className="p-4">
            <button
              style={{
                cursor: `url('/cursor.cur'), auto`,
              }}
              onClick={handleBack}
              className="">
              <span className="flex mr-2 gap-5 items-center">
                <ArrowLeft />
                <h1 className="text-2xl font-bold">
                  {menuItems.find((item) => item.id === activePage)?.label}
                </h1>
              </span>
            </button>
          </div>

          <div className="">
            <div className="">
              {(() => {
                const item = menuItems.find((item) => item.id === activePage);
                const ContentComponent = item?.component;
                return ContentComponent ? <ContentComponent /> : null;
              })()}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
