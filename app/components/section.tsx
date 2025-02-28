import { ReactNode } from "react";

interface SectionProps {
  className?: string;
  children: ReactNode;
}

export const Section = ({ className = "", children }: SectionProps) => {
  return <section className={`p-4 ${className}`}>{children}</section>;
};