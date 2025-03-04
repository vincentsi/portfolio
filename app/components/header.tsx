import clsx from "clsx";
import { GitHubIcon } from "./icons/GitHubIcon";
import { Section } from "./section";
import { buttonVariants } from "./uibutton"; 
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">
          Vincent
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
            <a 
              href="https://github.com/vincentsi" 
              className={clsx(buttonVariants({ variant: "outline" }), "size-6p-0")} 
            >
              <GitHubIcon size={30} className="text-foreground" />
            </a>

            <a 
              href="https://www.linkedin.com/in/vincent-simonpieri-alternance-/" 
              className={clsx(buttonVariants({ variant: "outline" }), "size-6p-0")} 
            >
              <LinkedinIcon size={30} className="text-foreground" />
            </a>

            <a 
              href="https://github.com/vincentsi" 
              className={clsx(buttonVariants({ variant: "outline" }), "size-6p-0")} 
            >
              <GitHubIcon size={30} className="text-foreground" />
            </a>

        </ul>
      </Section>
    </header>
  );
};
