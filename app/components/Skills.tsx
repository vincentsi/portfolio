import { Section } from "./section";
import { Badge } from "@/components/ui/badge";
import { ReactLogo } from "./icons/reactLogo";
import { Code } from "./code";
import { TailwindLogo } from "./icons/tailwindLogo";
import { NodeLogo } from "./icons/nodeLogo";
export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>skills</Badge>
      <h2 className="pb-2 text-3xl front semibold tacking-tight first:mt-0">
        I love working on. . .
      </h2>
      <div className="flex max-md:flex-col gap-4">
      <div className="flex flex-col gap-2 flex-1">
          <NodeLogo
            size={60}
          ></NodeLogo>
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            Node.js
          </h3>
          <p className="text-sm text-muted-foreground">
            Main framework. Développement backend avancé avec <Code>Node.js</Code>, création d&apos;APIs et architecture serveur
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <ReactLogo
            size={60}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          ></ReactLogo>
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            React 
          </h3>
          <p className="text-sm text-muted-foreground">
            Spécialisé en développement Frontend avec <Code>react</Code>
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailwindLogo
            size={60}
          ></TailwindLogo>
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            Tailwind CSS
          </h3>
          <p className="text-sm text-muted-foreground">
            Expert en <Code>Tailwind CSS</Code> pour créer des interfaces modernes et responsive
          </p>
        </div>

      </div>
    </Section>
  );
};
