import type { CharactersService } from "@/entites/character/character.service";
import { createDI } from "@/shared/lib/react";

export type CharactersCatalogDeps = {
  charactersService: CharactersService;
};

export const { Injector, useDI } = createDI<CharactersCatalogDeps>();
