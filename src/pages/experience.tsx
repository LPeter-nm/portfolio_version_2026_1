import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Experience() {
  const cards = [
    {
      title: 'Desenvolvedor Full Stack Júnior',
      description: 'Developer Community',
      action: 'jul 2023 - Presente',
      content:
        'Comunidade de desenvolvedores não remunerada que realiza o desenvolvimento de projetos reais com ferramentas mais modernas do mercado. Contribuo para o desenvolvimento de plataformas web e APIs RESTful, participando ativamente em todas as fases do ciclo de desenvolvimento de software, desde a concepção até a implementação e manutenção.',
      footer: 'Tecnologias: React, Node.js, Express, PostgreSQL, Docker, NestJS',
    },
    {
      title: 'Desenvolvedor Web Júnior',
      description: 'Agência de Tecnologia, Ciência e Inovação (ATI)',
      action: 'jul 2025 - ago 2025',
      content:
        'Órgão responsável por modernizar a gestão pública e impulsionar a transformação digital no município, sendo a desenvolvedora do aplicativo Conecta Timon, que integra mais de 200 serviços municipais para o cidadão. Atuei na equipe de desenvolvimento web, contribuindo para o desenvolvimento do portal SEI (Sistema Eletrônico de Informações) com as ferramentas WordPress e Elementor.',
      footer: 'Tecnologias: WordPress e Elementor',
    },
    {
      title: 'Monitor de Evento de Gestão e Negócios',
      description: 'Instituto Federal do Maranhão (IFMA) - Campus Timon',
      action: 'jun 2023 - jun 2023',
      content:
        'Atuei como monitor no I Colóquio de Gestão e Negócios no IFMA, auxiliando na organização, coordenação e suporte durante as atividades. Minhas responsabilidades incluíam ajudar na logística dos eventos, garantir o bom andamento das sessões e oferecer suporte aos participantes e palestrantes.',
      footer: 'Habilidades Desenvolvidas: Organização de Eventos, Comunicação, Trabalho em Equipe',
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {cards.map((card, index) => (
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
