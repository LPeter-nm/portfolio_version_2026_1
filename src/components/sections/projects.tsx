'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/sections/ui/card';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/sections/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/sections/ui/carousel';
import { useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('projects');
  const projectsCards = t.raw('cards');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsCards.map((project: any, index: number) => {
        const hasMainImage = project.mainImage && project.mainImage !== '#';
        const hasDetailImages = project.imagesDetail && project.imagesDetail.length > 0;

        return (
          <Card
            key={index}
            className="transition-all duration-300 hover:scale-95 hover:-translate-y-[0.5] hover:shadow-2xl active:scale-95 dark:shadow-orange-800/20 shadow-orange-300/20 mb-6"
            style={{
              cursor: `url('/cursor.cur'), auto`,
            }}>
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-[100%]">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {hasMainImage ? (
                <img
                  src={project.mainImage}
                  alt={project.title}
                />
              ) : (
                <div className="w-full h-48 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                  Sem imagem principal
                </div>
              )}
              <span className="text-sm text-muted-foreground">
                {t('technologies')}: {project.technologies.join(', ')}
              </span>
            </CardContent>
            <CardFooter className="flex items-end justify-center w-full h-full">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    style={{
                      cursor: `url('/cursor.cur'), auto`,
                    }}
                    className="w-full hover:transform hover:scale-105 transition-transform p-2 bg-accent rounded-3xl text-sm">
                    {t('viewDetails')}
                  </button>
                </DialogTrigger>
                <DialogContent
                  className="max-w-3xl"
                  style={{
                    cursor: `url('/cursor.cur'), auto`,
                  }}>
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    {hasDetailImages ? (
                      <Carousel className="w-full">
                        <CarouselContent>
                          {project.imagesDetail.map((image: string, imgIndex: number) => (
                            <CarouselItem key={imgIndex}>
                              <img
                                src={image}
                                alt={`${project.title} - ${imgIndex + 1}`}
                                className="w-full rounded-md"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    ) : (
                      <div className="w-full h-64 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                        Sem imagens
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold mb-2">{t('aboutProject')}</h3>
                      <p className="text-muted-foreground">{project.content}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{t('technologiesUsed')}</h3>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {project.technologies.map((tech: string, techIndex: number) => (
                          <li key={techIndex}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <DialogFooter>
                    <button
                      onClick={() => window.open(project.link, '_blank')}
                      className="w-full bg-accent rounded-3xl p-2 text-sm hover:transform hover:scale-105 transition-transform"
                      style={{
                        cursor: `url('/cursor.cur'), auto`,
                      }}>
                      {t('viewGithub')}
                    </button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
