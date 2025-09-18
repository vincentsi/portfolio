import { Section } from "./section";
import { ThemePreview } from "./theme-preview";

export const Footer = () => {
  return (
    <footer className="bg-card">
      <Section className="py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            2025 vincent simonpieri
          </p>
          <ThemePreview />
        </div>
      </Section>
    </footer>
  );
};
