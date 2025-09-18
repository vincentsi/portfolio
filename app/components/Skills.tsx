"use client";

import { Section } from "./section";
import { Badge } from "@/components/ui/badge";
import { ReactLogo } from "./icons/reactLogo";
import { Code } from "./code";
import { TailwindLogo } from "./icons/tailwindLogo";
import { NodeLogo } from "./icons/nodeLogo";
import { PhpLogo } from "./icons/PhpLogo";
import { CppLogo } from "./icons/CppLogo";
import { NextLogo } from "./icons/NextLogo";
import { FadeIn } from "./animations/fade-in";
import { StaggerChildren, StaggerItem } from "./animations/stagger-children";
import { HoverScale } from "./animations/hover-scale";

export const Skills = () => {
  return (
    <Section id="competences" className="flex flex-col items-start gap-4">
      <FadeIn direction="up">
        <Badge variant={"outline"}>skills</Badge>
      </FadeIn>
      <FadeIn direction="up" delay={0.2}>
        <h2 className="pb-2 text-4xl font-bold tracking-tight first:mt-0 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Technologies maîtrisées
        </h2>
      </FadeIn>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StaggerItem>
          <HoverScale scale={1.02}>
            <div className="group flex flex-col gap-4 p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <NodeLogo
                  size={60}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-2xl font-semibold tracking-tight">
                  Node.js
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Main framework. Développement backend avancé avec{" "}
                <Code>Node.js</Code>, création d&apos;APIs et architecture
                serveur
              </p>
            </div>
          </HoverScale>
        </StaggerItem>

        <div className="group flex flex-col gap-4 p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center gap-4">
            <ReactLogo
              size={60}
              className="animate-spin group-hover:scale-110 transition-transform duration-300"
              style={{ animationDuration: "10s" }}
            />
            <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Développement Frontend avec <Code>React</Code>
          </p>
        </div>

        <div className="group flex flex-col gap-4 p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center gap-4">
            <NextLogo
              size={60}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold tracking-tight">Next.js</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Framework React pour des applications web performantes avec{" "}
            <Code>Next.js</Code>. Portfolio et PowerPost développés avec ce
            framework
          </p>
        </div>

        <div className="group flex flex-col gap-4 p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center gap-4">
            <PhpLogo
              size={60}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold tracking-tight">PHP</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Développement backend avec <Code>PHP</Code>, création de sites web
            dynamiques
          </p>
        </div>

        <div className="group flex flex-col gap-4 p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center gap-4">
            <CppLogo
              size={60}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold tracking-tight">C++</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Programmation système et applications performantes en{" "}
            <Code>C++</Code>. J&apos;ai appris la programmation orientée objet
            avec ce langage
          </p>
        </div>

        <div className="group flex flex-col gap-4 p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center gap-4">
            <TailwindLogo
              size={60}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold tracking-tight">
              Tailwind CSS
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Connaissance en <Code>Tailwind CSS</Code> pour créer des interfaces
            modernes et responsive
          </p>
        </div>
      </StaggerChildren>
    </Section>
  );
};
