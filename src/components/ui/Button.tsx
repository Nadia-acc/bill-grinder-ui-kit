import { cn } from "@/lib/utils";
import React from "react";

type Variant = "primary" | "secondary" | "destructive";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  size = "md",
  ...props
}) => {
  return (
    <button
      className={cn(
        "rounded font-medium transition focus:outline-none focus:ring-2",
        variant === "primary" && "bg-primary text-white hover:bg-blue-700",
        variant === "secondary" && "bg-secondary text-primary hover:bg-blue-100",
        variant === "destructive" && "bg-destructive text-white hover:bg-red-700",
        size === "sm" && "px-3 py-1 text-sm",
        size === "md" && "px-4 py-2 text-base",
        size === "lg" && "px-5 py-3 text-lg",
        className
      )}
      {...props}
    />
  );
};
