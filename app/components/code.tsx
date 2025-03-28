import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
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