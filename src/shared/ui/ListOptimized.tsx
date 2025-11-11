import { type ReactNode } from "react";

interface ListOptimizedProps {
  children: ReactNode;
  className?: string;
}

export function ListOptimized({ children, className }: ListOptimizedProps) {
  return <ul className={className}>{children}</ul>;
}
