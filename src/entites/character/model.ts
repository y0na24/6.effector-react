import type { CharactersDTO } from "@/shared/dto/characterDto";

export type Character = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  isFavorite: boolean;
};

export function clearCharacters(characters: Character[]) {
  return characters.map((c) => ({ ...c, isFavorite: false }));
}

export function getFavoriteCharacters(characters: Character[]) {
  return characters.filter((c) => c.isFavorite);
}

export function toggleCharacterById(characters: Character[], id: number) {
  return characters.map((c) =>
    c.id === id ? { ...c, isFavorite: !c.isFavorite } : c,
  );
}

export function fromDto(charactersDto: CharactersDTO): Character[] {
  return charactersDto.results.map((result) => ({
    id: result.id,
    name: result.name,
    image: result.image,
    status: result.status,
    species: result.species,
    isFavorite: false,
  }));
}
