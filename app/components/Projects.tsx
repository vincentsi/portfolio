import { Section } from "./section";
import { ProjectCard, type ProjectProps } from "./ProjectCard";
import { Badge } from "@/components/ui/badge";

const PROJECTS: ProjectProps[] = [
  {
    title: "Site de Tournois",
    description: "Application web complète pour la gestion de tournois. Fonctionnalités : création de tournois, inscription des équipes, suivi des matchs en temps réel, tableau des scores.",
    technologies: ["React", "Node.js", "Sequelize", "MySQL", "Express"],
    imageUrl: "/projects/tournoi-app.png",
    githubUrl: "https://github.com/vincentsi/tournoi-app",
    demoUrl: "https://tournoi-app.vercel.app",
  },
  {
    title: "Portfolio",
    description: "Mon portfolio personnel créé avec Next.js et Tailwind CSS. Interface moderne et responsive avec mode sombre.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/projects/portfolio.png",
    githubUrl: "https://github.com/vincentsi/portfolio",
    demoUrl: "https://vincent-simonpieri.fr",
  },
  {
    title: "API REST Java",
    description: "API REST développée avec Spring Boot pour la gestion de stocks. Documentation Swagger et tests unitaires.",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    imageUrl: "/projects/java-api.png",
    githubUrl: "https://github.com/vincentsi/java-api",
    demoUrl: "https://api-java.vincent-simonpieri.fr/swagger-ui.html",
  },
];

export const Projects = () => {
  return (
    <Section>
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
    </Section>
  );
}; 