import { Section } from "./section";
import { ProjectCard, type ProjectProps } from "./ProjectCard";
import { Badge } from "@/components/ui/badge";

const PROJECTS: ProjectProps[] = [
  {
    title: "Portfolio",
    description: "Mon portfolio personnel créé avec Next.js et Tailwind CSS. Interface moderne et responsive avec mode sombre.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/projects/portfolio.png",
    githubUrl: "https://github.com/vincentsi/portfolio",
  },
  // Exemple de projet Python
  {
    title: "Analyseur de données",
    description: "Script Python pour l'analyse de données météorologiques avec visualisation. Génération de graphiques et rapports PDF.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    imageUrl: "/projects/python-analyzer.png",
    githubUrl: "https://github.com/vincentsi/data-analyzer",
  },
  // Exemple de projet Java
  {
    title: "API REST Java",
    description: "API REST développée avec Spring Boot pour la gestion de stocks. Documentation Swagger et tests unitaires.",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    imageUrl: "/projects/java-api.png",
    githubUrl: "https://github.com/vincentsi/java-api",
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