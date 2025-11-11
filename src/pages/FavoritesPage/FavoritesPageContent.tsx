import { CharacterCard } from "@/entites/character/ui/CharacterCard";
import { Button } from "@/shared/ui/button";
import { useService } from "@/app/locator/ServiceProvider";
import { useList, useUnit } from "effector-react";
import { CharacterListOptimized } from "@/entites/character/ui/CharacterListOptimized";

export function FavoritesPageContent() {
  const { $favoriteCharacters, charactersCleared, characterToggled } =
    useService("CHARACTERS_SERVICE");

  const [favorites, handleClearCharacters, handleToggleCharacter] = useUnit([
    $favoriteCharacters,
    charactersCleared,
    characterToggled,
  ]);

  const list = useList($favoriteCharacters, {
    fn: (character) => (
      <CharacterCard
        character={character}
        onToggleFavorite={handleToggleCharacter}
      />
    ),
    placeholder: "Нету любимых персонажей",
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Favorites</h2>
      {favorites.length > 0 && (
        <Button onClick={handleClearCharacters} title="Clear all favorites">
          Clear all
        </Button>
      )}
      <CharacterListOptimized>{list}</CharacterListOptimized>
    </div>
  );
}
