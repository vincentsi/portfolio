import { Section } from "./section";
// import classNames from "classnames";

import { LinkedinIcon } from "./icons/LinkedinIcon";
import { Code } from "./code";
import Image from "next/image";


export const Hero = () => {
  return (
    <Section>
      <div className="flex max-md:flex-col items-center justify-between gap-8">
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2 className="font-caption font-bold text-5xl text-primary">
            Vincent Simonpieri
          </h2>
          <h3 className="text-3xl font-caption">Développeur Full Stack</h3>
          <p className="text-base">
            Je suis passionné par l&apos;informatique et le développement web. Retrouvez-moi sur{" "}
            <a href="https://www.linkedin.com/in/vincent-simonpieri-alternance-/" target="_blank" rel="noopener noreferrer">
              <Code className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                <LinkedinIcon size={16} className="inline" />
                LinkedIn
              </Code>
            </a>
            . Basé en{" "}
           
              <Code className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/110px-Flag_of_France.svg.png"
                  alt="france image drapeau"
                  width={16}
                  height={12}
                  className="inline"
                />
                France
              </Code>
           
          </p>
        </div>
        <div className="flex justify-start w-full max-w-xs">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4E35AQF20okmFQPYiQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1654921462945?e=1741320000&v=beta&t=MxUBs20g10bYfBzVNDL4jdtNlUh2HMUyH_2pdLkr50Q"
            alt="vincent picture"
            width={800}
            height={800}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </Section>
  );
};
