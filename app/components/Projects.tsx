"use client";

import { Section } from "./section";
import { ProjectCard, type ProjectProps } from "./project-card";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FadeIn } from "./animations/fade-in";
import { AnimatedButton } from "./animations/animated-button";

const Calculator = dynamic(
  () => import("./Calculator").then((mod) => ({ default: mod.Calculator })),
  {
    loading: () => (
      <div className="flex justify-center items-center h-32">Chargement...</div>
    ),
  }
);

const Snake = dynamic(
  () => import("./Snake").then((mod) => ({ default: mod.Snake })),
  {
    loading: () => (
      <div className="flex justify-center items-center h-32">Chargement...</div>
    ),
  }
);

const PROJECTS: ProjectProps[] = [
  {
    title: "PowerPost & PowerNote",
    description:
      "Écosystème complet pour créer et organiser du contenu avec l'IA. PowerNote capture les idées, PowerPost les transforme en posts engageants. Workflow intégré pour maximiser la productivité.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "IA",
      "Vercel",
    ],
    imageUrl: "/projects/portfolio.png",
    githubUrl: "https://github.com/vincentsi/power-post-note",
    demoUrl: "https://power-post-note.vercel.app/",
  },
  {
    title: "Site de Tournois",
    description:
      "Application web complète pour la gestion de tournois. Fonctionnalités : création de tournois, inscription des équipes, suivi des matchs en temps réel, tableau des scores.",
    technologies: ["React", "Node.js", "Sequelize", "MySQL", "Express"],
    imageUrl: "/projects/SiteTournoi.png",
    githubUrl: "https://github.com/vincentsi/ProjetSiteTournoi",
    demoUrl: "https://github.com/vincentsi/ProjetSiteTournoi",
  },
  {
    title: "Portfolio",
    description:
      "Mon portfolio personnel créé avec Next.js et Tailwind CSS. Interface moderne et responsive avec mode sombre.",
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
          <FadeIn direction="up">
            <Badge variant="outline" className="w-fit">
              projet vedette
            </Badge>
          </FadeIn>
          <div className="relative p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl"></div>
            <div className="relative flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  PowerPost & PowerNote
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Mon projet le plus récent : un écosystème complet pour créer
                  et organiser du contenu avec l&apos;IA. PowerNote capture les
                  idées, PowerPost les transforme en posts engageants.
                </p>
                <div className="flex justify-center mb-6">
                  <a
                    href="https://power-post-note.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <Image
                      src="/projects/power-post-note.png"
                      alt="PowerPost & PowerNote"
                      width={400}
                      height={300}
                      className="w-full max-w-md h-auto object-contain rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl"
                    />
                  </a>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Prisma
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    IA
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Vercel
                  </span>
                </div>
                <div className="flex gap-4">
                  <AnimatedButton
                    onClick={() =>
                      window.open(
                        "https://power-post-note.vercel.app/",
                        "_blank"
                      )
                    }
                    variant="primary"
                    size="md"
                  >
                    Voir le projet
                  </AnimatedButton>
                  <AnimatedButton
                    onClick={() =>
                      window.open(
                        "https://github.com/vincentsi/power-post-note",
                        "_blank"
                      )
                    }
                    variant="outline"
                    size="md"
                  >
                    Code source
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>

          <FadeIn direction="up" delay={0.2}>
            <Badge variant="outline" className="w-fit">
              autres projets
            </Badge>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mes Autres Réalisations
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.6}>
            <p className="text-muted-foreground">
              Découvrez mes autres projets personnels et professionnels. Chaque
              projet est une opportunité d&apos;apprentissage et
              d&apos;innovation.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {PROJECTS.filter(
              (project) => project.title !== "PowerPost & PowerNote"
            ).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <FadeIn direction="up">
            <Badge variant="outline" className="w-fit">
              démos interactives
            </Badge>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Snake Game</h3>
              <p className="text-muted-foreground">
                Un jeu Snake classique développé avec React et Canvas. Utilise
                les hooks React pour la gestion d&apos;état et propose une
                expérience de jeu fluide avec des contrôles au clavier.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                <Snake />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Calculatrice React</h3>
              <p className="text-muted-foreground">
                Une calculatrice interactive développée avec React et Tailwind
                CSS. Elle utilise les hooks React pour la gestion d&apos;état et
                propose une interface utilisateur moderne et responsive.
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
