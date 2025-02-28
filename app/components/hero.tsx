import { ComponentProps, ComponentPropsWithoutRef } from "react";
import { Section } from "./section";
import classNames from "classnames";
import clsx from "clsx";
import { LinkedinIcon } from "./icons/LinkedinIcon";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={clsx(
        "bg-accent/30 font-mono border border-accent p-1 text-primary rounded-sm ",
        className
      )}
      {...props}
    ></span>
  );
};

export const Hero = () => {
  return (
    <Section classname="flex max-md:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Vincent Simonpieri{" "}
        </h2>
        <h3 className="text-3xl font-caption">C MOI </h3>
        <p className="text-base">
          i love creating content on{" "}
          <Code className="inline-flex items-center gap-1">
            <LinkedinIcon size={16} className="inline" />
            linkedin
          </Code>
          , living in {" "}
          <a href="https://github.com/vincentsi" >
          <Code className="inline-flex items-center gap-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/110px-Flag_of_France.svg.png" style={{width:16,height:"auto"}} alt="france image drapeau"/>
            france
          </Code>
          </a>
        </p>
      </div>
      <div className="flex-1">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E35AQF20okmFQPYiQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1654921462945?e=1736985600&v=beta&t=Po-jJY2uJDdYFIOCoDTviUyx6vxDwCP62EB73dllcQw"
          className="w-gull h-auto max-w-xs"
          alt="vincent picture"
        />
      </div>
    </Section>
  );
};
