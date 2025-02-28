import * as React from "react";

// Ajoute la fonction cn ici
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow p-6",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };