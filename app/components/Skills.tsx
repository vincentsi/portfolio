import { Section } from "./section";
import { Badge } from "@/components/ui/badge";
import { ReactLogo } from "./icons/reactLogo";
import { Code } from "./code";
import { TailwindLogo } from "./icons/tailwindLogo";
import { NodeLogo } from "./icons/nodeLogo";
import { PhpLogo } from "./icons/PhpLogo";
import { CppLogo } from "./icons/CppLogo";
import { NextLogo } from "./icons/NextLogo";

export const Skills = () => {
  return (
    <Section id="competences" className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>skills</Badge>
      <h2 className="pb-2 text-3xl front semibold tacking-tight first:mt-0">
        Technologies maîtrisées
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2">
          <NodeLogo size={60} />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            Node.js
          </h3>
          <p className="text-sm text-muted-foreground">
            Main framework. Développement backend avancé avec <Code>Node.js</Code>, création d&apos;APIs et architecture serveur
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <ReactLogo
            size={60}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            React
          </h3>
          <p className="text-sm text-muted-foreground">
            Développement Frontend avec <Code>React</Code>
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <NextLogo size={60} />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            Next.js
          </h3>
          <p className="text-sm text-muted-foreground">
            Framework React pour des applications web performantes avec <Code>Next.js</Code> porfolio effuectué avec ce framework
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <PhpLogo size={60} />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            PHP
          </h3>
          <p className="text-sm text-muted-foreground">
            Développement backend avec <Code>PHP</Code>, création de sites web dynamiques
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <CppLogo size={60} />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            C++
          </h3>
          <p className="text-sm text-muted-foreground">
            Programmation système et applications performantes en <Code>C++</Code> j&apos;ai appris la programmation orientée objet avec ce langage
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <TailwindLogo size={60} />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            Tailwind CSS
          </h3>
          <p className="text-sm text-muted-foreground">
            Connaissance en <Code>Tailwind CSS</Code> pour créer des interfaces modernes et responsive
          </p>
        </div>
      </div>
    </Section>
  );
};
