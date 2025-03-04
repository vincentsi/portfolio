import { type ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={clsx("px-4 py-16 md:py-24", className)}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};