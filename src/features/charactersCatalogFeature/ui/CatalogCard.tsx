import { CharacterCard } from "@/entites/character/ui/CharacterCard";
import { type Character } from "@/entites/character/model";
import { useDI } from "../di";
import { useUnit } from "effector-react";

export function CatalogCard({ character }: { character: Character }) {
  const {
    charactersService: { characterToggled },
  } = useDI();

  const handleToggleCharacter = useUnit(characterToggled);

  return (
    <CharacterCard
      character={character}
      onToggleFavorite={handleToggleCharacter}
    />
  );
}
