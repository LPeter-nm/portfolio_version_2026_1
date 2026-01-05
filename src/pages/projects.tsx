import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Projects() {
  const projectsCards = [
    {
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      action: 'Detalhes do Projeto 1',
      content: 'Conteúdo do Projeto 1',
      mainImage: '/path/to/image1.jpg',
      imagesDetail: ['/path/to/detail1a.jpg', '/path/to/detail1b.jpg'],
      technologies: ['tech1', 'tech2'],
      link: '#',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2',
      action: 'Detalhes do Projeto 2',
      image: '/path/to/image2.jpg',
      content: 'Conteúdo do Projeto 2',
      technologies: ['tech3', 'tech4'],
      link: '#',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do Projeto 3',
      action: 'Detalhes do Projeto 3',
      image: '/path/to/image3.jpg',
      content: 'Conteúdo do Projeto 3',
      technologies: ['tech5', 'tech6'],
      link: '#',
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsCards.map((project, index) => (
        <Card
          key={index}
          className="transition-all duration-300 hover:scale-100 hover:-translate-y-[0.5] hover:shadow-2xl active:scale-90 dark:shadow-orange-800/20 shadow-orange-300/20 mb-6">
          <CardHeader>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="text-[100%]">{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={project.mainImage}
              alt={project.title}
            />
            <span className="text-sm text-muted-foreground">
              Tecnologias: {project.technologies.join(', ')}
            </span>
          </CardContent>
          <CardFooter className="flex items-center justify-center w-full">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  style={{
                    cursor: `url('/cursor.cur'), auto`,
                  }}
                  className="w-full hover:transform hover:scale-105 transition-transform p-2 bg-accent rounded-3xl text-sm">
                  Ver Detalhes
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold mb-2">Sobre o Projeto</h3>
                    <p className="text-muted-foreground">{project.content}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Tecnologias Utilizadas</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {project.technologies.map((tech, techIndex) => (
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
                    Ver no GitHub
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
