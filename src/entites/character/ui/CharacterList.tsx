import { List } from "@/shared/ui/List";
import { type Character } from "../model";
import { type ComponentProps, type ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

type Props = {
  characters: Character[];
  renderCharacter: (character: Character) => ReactNode;
} & ComponentProps<"ul">;

export const CharacterList = ({
  characters,
  renderCharacter,
  className,
  ...props
}: Props) => {
  return (
    <List
      data={characters}
      renderData={(characters) => renderCharacter(characters)}
      className={cn("grid grid-cols-1 md:grid-cols-4 gap-4 mt-4", className)}
      {...props}
    />
  );
};
