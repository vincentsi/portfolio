import { Section } from "./section";
import { ProjectCard, type ProjectProps } from "./ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Calculator } from "./Calculator";
import { Snake } from "./Snake";

const PROJECTS: ProjectProps[] = [
  {
    title: "Site de Tournois",
    description: "Application web complète pour la gestion de tournois. Fonctionnalités : création de tournois, inscription des équipes, suivi des matchs en temps réel, tableau des scores.",
    technologies: ["React", "Node.js", "Sequelize", "MySQL", "Express"],
    imageUrl: "/projects/SiteTournoi.png",
    githubUrl: "https://github.com/vincentsi/ProjetSiteTournoi",
    demoUrl: "https://github.com/vincentsi/ProjetSiteTournoi",
  },
  {
    title: "Portfolio",
    description: "Mon portfolio personnel créé avec Next.js et Tailwind CSS. Interface moderne et responsive avec mode sombre.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/projects/portfolio.png",
    githubUrl: "https://github.com/vincentsi/portfolio",
    demoUrl: "https://github.com/vincentsi/portfolio",
  },
];

export const Projects = () => {
  return (
    <Section id="projets">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Badge variant="outline" className="w-fit">
            projets
          </Badge>
          <h2 className="text-3xl font-bold">Mes Réalisations</h2>
          <p className="text-muted-foreground">
            Découvrez mes projets personnels et professionnels. Chaque projet est une opportunité d&apos;apprentissage et d&apos;innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Badge variant="outline" className="w-fit">
            démos interactives
          </Badge>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Snake Game</h3>
              <p className="text-muted-foreground">
                Un jeu Snake classique développé avec React et Canvas. Utilise les hooks React pour la gestion d&apos;état et propose une expérience de jeu fluide avec des contrôles au clavier.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                <Snake />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Calculatrice React</h3>
              <p className="text-muted-foreground">
                Une calculatrice interactive développée avec React et Tailwind CSS. Elle utilise les hooks React pour la gestion d&apos;état et propose une interface utilisateur moderne et responsive.
              </p>
              <div className="flex justify-center py-8 px-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <Calculator />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};