import { Input } from "@/shared/ui/input";
import { useDI } from "../di";
import { useUnit } from "effector-react";

export function CatalogInput() {
  const {
    charactersService: { $search, charactersSearched },
  } = useDI();

  const [search, handleSearchCharacter] = useUnit([
    $search,
    charactersSearched,
  ]);

  return (
    <Input
      placeholder="Find character by name..."
      value={search}
      onChange={(e) => handleSearchCharacter(e.target.value)}
    />
  );
}
