"use client";

import { Section } from "./section";
// import classNames from "classnames";

import Image from "next/image";
import { FadeIn } from "./animations/fade-in";
import { HoverScale } from "./animations/hover-scale";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Hero = () => {
  return (
    <Section>
      <div className="flex max-md:flex-col items-center justify-between gap-8">
        <div className="flex flex-col gap-6 max-w-2xl">
          <FadeIn direction="up" delay={0.2}>
            <div className="space-y-2">
              <h2 className="font-caption font-bold text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Vincent Simonpieri
              </h2>
              <h3 className="text-3xl font-caption text-muted-foreground">
                Développeur Full Stack
              </h3>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">
                  Disponible pour de nouvelles opportunités
                </span>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="text-lg leading-relaxed">
              Passionné par l&apos;informatique et le développement web, je me
              suis formé en autonomie et à travers un parcours complet : un BTS
              Système Numérique option Informatique et Réseaux, suivi d&apos;un
              titre professionnel (niveau 5) de Concepteur Développeur
              d&apos;Applications. Mon apprentissage se poursuit en continu,
              notamment via des plateformes comme Dyma et Udemy. J&apos;effectue
              également des{" "}
              <a
                href="#projets"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                projets
              </a>{" "}
              pour explorer de nouvelles technologies. Retrouvez-moi sur{" "}
              <a
                href="https://www.linkedin.com/in/vincent-simonpieri-alternance-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium inline-flex items-center gap-1"
              >
                <LinkedinIcon size={16} className="inline" />
                LinkedIn
              </a>
              . Basé en{" "}
              <span className="inline-flex items-center gap-1">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/110px-Flag_of_France.svg.png"
                  alt="Drapeau français"
                  width={16}
                  height={12}
                  className="inline"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                France
              </span>
              .
            </p>
          </FadeIn>
        </div>
        <FadeIn direction="left" delay={0.6}>
          <div className="flex justify-center w-full max-w-sm">
            <HoverScale scale={1.02}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
                <Image
                  src="/projects/vincent.jpg"
                  alt="Photo de Vincent Simonpieri"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-2xl border-4 border-background"
                  priority
                />
              </div>
            </HoverScale>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
