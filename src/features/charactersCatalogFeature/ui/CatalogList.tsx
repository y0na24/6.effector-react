import { CharacterListOptimized } from "@/entites/character/ui/CharacterListOptimized";
import { useDI } from "../di";

import { useList, useUnit } from "effector-react";
import { CharacterCard } from "@/entites/character/ui/CharacterCard";

export function CatalogList() {
  const {
    charactersService: { $characters, characterToggled },
  } = useDI();

  const handleToggleCharacter = useUnit(characterToggled);

  const list = useList($characters, {
    fn: (character) => (
      <CharacterCard
        character={character}
        onToggleFavorite={handleToggleCharacter}
      />
    ),
    placeholder: (
      <div className="text-sm text-muted-foreground mt-4">
        Таких персонажей нет
      </div>
    ),
  });

  return <CharacterListOptimized>{list}</CharacterListOptimized>;
}
