import { cn } from "@/shared/lib/utils";
import { ListOptimized } from "@/shared/ui/ListOptimized";
import type { ReactNode } from "react";

export function CharacterListOptimized({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ListOptimized
      className={cn("grid grid-cols-1 md:grid-cols-4 gap-4 mt-4", className)}
    >
      {children}
    </ListOptimized>
  );
}
