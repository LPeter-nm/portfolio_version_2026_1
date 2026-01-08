'use client';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/sections/ui/card';
import { useTranslations } from 'next-intl';

export default function Experience() {
  const t = useTranslations('experience');
  const cards = t.raw('cards');

  return (
    <div className="flex flex-col gap-6">
      {cards.map((card: any, index: number) => (
        <Card
          key={index}
          className="transition-all duration-300 hover:scale-100 hover:-translate-y-[0.5] hover:shadow-2xl active:scale-90 dark:shadow-orange-800/20 shadow-orange-300/20 mb-6">
          <CardHeader>
            <CardTitle className="text-xl">{card.title}</CardTitle>
            <CardDescription className="text-[100%]">{card.description}</CardDescription>
            <CardAction className="dark:bg-accent border-[0.1] rounded-3xl text-sm p-2 dark:text-[#b8b8b8] text-[#4b4a4a]">
              {card.action}
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-[110%]">{card.content}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">{card.footer}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
