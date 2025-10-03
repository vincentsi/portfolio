"use client";

import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";
import { FadeIn } from "./animations/fade-in";
import { ProjectCard, type ProjectProps } from "./project-card";
import { Section } from "./section";

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
    title: "Site de Tournois",
    description:
      "Application web complète pour la gestion de tournois. Fonctionnalités : création de tournois, inscription des équipes, suivi des matchs en temps réel, tableau des scores.",
    technologies: ["React", "Node.js", "Sequelize", "MySQL", "Express"],
    imageUrl: "/projects/SiteTournoi.png",
    githubUrl: "https://github.com/vincentsi/ProjetSiteTournoi",
    demoUrl: "https://projet-site-tournoi.vercel.app/",
  },
  {
    title: "SimplementShop",
    description:
      "Site e-commerce complet avec gestion de panier, système de paiement et interface d'administration. Expérience d'achat moderne et intuitive.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    imageUrl: "/projects/simplementshop.png",
    demoUrl: "https://simplement-shop.vercel.app/shop",
  },
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
    imageUrl: "/projects/power-post-note.png",
    demoUrl: "https://power-post-note.vercel.app/",
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
              projets
            </Badge>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mes Réalisations
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="text-muted-foreground">
              Découvrez mes projets personnels et professionnels. Chaque projet
              est une opportunité d&apos;apprentissage et d&apos;innovation.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {PROJECTS.map((project) => (
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
