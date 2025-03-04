import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

export type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
};

export const ProjectCard = (props: ProjectProps) => {
  return (
    <Card className="overflow-hidden group">
      {props.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={props.imageUrl}
            alt={props.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{props.title}</h3>
          {props.githubUrl && (
            <Link href={props.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-primary transition-colors" />
            </Link>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-2">{props.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {props.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        {props.demoUrl && (
          <Link
            href={props.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-primary hover:underline"
          >
            Voir la démo →
          </Link>
        )}
      </div>
    </Card>
  );
}; 