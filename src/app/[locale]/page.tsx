'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Abilities from '@/components/sections/abilities';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import { ArrowLeft, Github, Linkedin, Moon, Sun, Languages, FileText } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activePage, setActivePage] = useState<number | null>(null);
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { setTheme } = useTheme();
  const t = useTranslations('home');
  const tTheme = useTranslations('theme');
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || 'pt';

  const texts = [t('role'), t('name')];

  useEffect(() => {
    const savedPageId = sessionStorage.getItem('activePageId');
    if (savedPageId) {
      setActivePage(Number(savedPageId));
      sessionStorage.removeItem('activePageId');
    }
  }, []);

  useEffect(() => {
    if (activePage !== null) {
      sessionStorage.setItem('currentPageId', String(activePage));
    } else {
      sessionStorage.removeItem('currentPageId');
    }
  }, [activePage]);

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
  }, [displayText, isDeleting, textIndex, texts]);

  const changeLocale = (newLocale: string) => {
    const currentPageId = sessionStorage.getItem('currentPageId');
    if (currentPageId) {
      sessionStorage.setItem('activePageId', currentPageId);
    }

    router.push(`/${newLocale}`);
  };

  const menuItems = [
    { id: 1, label: t('about'), component: About },
    { id: 2, label: t('experience'), component: Experience },
    { id: 3, label: t('projects'), component: Projects },
    { id: 4, label: t('abilities'), component: Abilities },
    { id: 5, label: t('contact'), component: Contact },
  ];

  const menuItemsRight = menuItems.slice(0, 3);
  const menuItemsLeft = menuItems.slice(3);

  const handleBack = () => {
    setActivePage(null);
  };

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-background transition-colors"
      style={{
        cursor: `url('/cursor.cur'), auto`,
      }}>
      <div className="fixed top-14 right-16 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>{tTheme('light')}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>{tTheme('dark')}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              {tTheme('system')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="fixed top-14 right-32 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon">
              <Languages className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Change language</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => changeLocale('pt')}
              disabled={locale === 'pt'}>
              🇧🇷 Português
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => changeLocale('en')}
              disabled={locale === 'en'}>
              🇺🇸 English
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => changeLocale('es')}
              disabled={locale === 'es'}>
              🇪🇸 Español
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {!activePage && (
        <>
          <div className="fixed top-8 left-8 w-20 h-20 pointer-events-none z-50">
            <div
              className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-amber-400 via-yellow-500 to-amber-600"
              style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
            />
            <div
              className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-amber-400 via-yellow-500 to-amber-600"
              style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 95%, 0 100%)' }}
            />
          </div>

          <div className="fixed top-8 right-8 w-20 h-20 pointer-events-none z-50">
            <div
              className="absolute top-0 right-0 w-full h-1 bg-linear-to-b from-amber-600 via-yellow-500 to-amber-400"
              style={{ clipPath: 'polygon(5% 100%, 0 0, 100% 0, 95% 100%)' }}
            />
            <div
              className="absolute top-0 right-0 w-1 h-full bg-linear-to-b from-amber-400 via-yellow-500 to-amber-600"
              style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 100%, 0 95%)' }}
            />
          </div>

          <div className="fixed bottom-8 left-8 w-20 h-20 pointer-events-none z-50">
            <div
              className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-amber-400 via-yellow-500 to-amber-600"
              style={{ clipPath: 'polygon(5% 0, 0 100%, 100% 100%, 95% 0)' }}
            />
            <div
              className="absolute bottom-0 left-0 w-1 h-full bg-linear-to-b from-amber-600 via-yellow-500 to-amber-400"
              style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 95%, 0 100%)' }}
            />
          </div>

          <div className="fixed bottom-8 right-8 w-20 h-20 pointer-events-none z-50">
            <div
              className="absolute bottom-0 right-0 w-full h-1 bg-linear-to-r from-amber-600 via-yellow-500 to-amber-400"
              style={{ clipPath: 'polygon(0 100%, 5% 0, 95% 0, 100% 100%)' }}
            />
            <div
              className="absolute bottom-0 right-0 w-1 h-full bg-linear-to-b from-amber-600 via-yellow-500 to-amber-400"
              style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 100%, 0 95%)' }}
            />
          </div>
          <div className="flex items-center justify-center space-x-12 animate-in fade-in duration-500 ">
            <div className="flex flex-col items-center space-y-8 p-12">
              {menuItemsRight.map((item) => (
                <Button
                  style={{
                    cursor: `url('/cursor.cur'), auto`,
                  }}
                  key={item.id}
                  className="bg-white text-black dark:bg-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#1a1a1a] text-2xl font-[--font-custom] hover:scale-105 transition-transform"
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
              </Avatar>
              <TooltipProvider>
                <div className="flex gap-5">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        style={{
                          cursor: `url('/cursor.cur'), auto`,
                        }}
                        className="hover:transform hover:scale-110 transition-transform"
                        onClick={() => window.open('https://github.com/LPeter-nm', '_blank')}>
                        <Github />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        style={{
                          cursor: `url('/cursor.cur')`,
                        }}
                        className="hover:transform hover:scale-110 transition-transform"
                        onClick={() => {
                          window.open('/curriculoPedroGabriel.pdf', '_blank');
                        }}>
                        <FileText />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{t('resume')}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>

            <div className="flex flex-col items-center space-y-8 p-12">
              {menuItemsLeft.map((item) => (
                <Button
                  style={{
                    cursor: `url('/cursor.cur'), auto`,
                  }}
                  key={item.id}
                  className="bg-white text-black dark:bg-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#1a1a1a] text-2xl font-[--font-custom] hover:scale-105 transition-transform"
                  onClick={() => setActivePage(item.id)}>
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </>
      )}
      {activePage && (
        <div className="min-h-screen w-full px-24 py-18 animate-in fade-in duration-500 space-y-8">
          <div className="max-w-7xl mx-auto">
            <button
              style={{
                cursor: `url('/cursor.cur'), auto`,
              }}
              onClick={handleBack}>
              <span className="flex mr-2 gap-5 items-center">
                <ArrowLeft />
                <h1 className="text-4xl font-bold">
                  {menuItems.find((item) => item.id === activePage)?.label}
                </h1>
              </span>
            </button>
          </div>

          <hr />

          <div className="max-w-7xl mx-auto">
            {(() => {
              const item = menuItems.find((item) => item.id === activePage);
              const ContentComponent = item?.component;
              return ContentComponent ? <ContentComponent /> : null;
            })()}
          </div>
        </div>
      )}
    </main>
  );
}
