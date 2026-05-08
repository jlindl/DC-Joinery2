import { ReactNode } from "react";

type Level = 1 | 2 | 3;

export function DisplayHeading({
  level = 2,
  children,
  className = "",
}: {
  level?: Level;
  children: ReactNode;
  className?: string;
}) {
  const Tag = (`h${level}` as unknown) as "h1" | "h2" | "h3";
  const sizeClass =
    level === 1 ? "display-h1" : level === 2 ? "display-h2" : "display-h3";
  return <Tag className={`${sizeClass} ${className}`.trim()}>{children}</Tag>;
}
