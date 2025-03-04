import { ReactNode } from "react";

interface SectionProps {
  className?: string;
  children: ReactNode;
}

export const Section = ({ className = "", children }: SectionProps) => {
  return (
    <section className="w-full flex justify-center">
      <div className={`max-w-7xl w-full p-4 ${className}`}>{children}</div>
    </section>
  );
};