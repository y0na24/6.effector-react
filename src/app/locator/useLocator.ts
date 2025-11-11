import { Locator } from "./locator";
import { $$charactersService } from "@/entites/character/character.service";
import { CharacterApi } from "@/entites/character/repository/character.api";
import { InMemoryCache } from "@/shared/storages/InMemoryCache";
import { FavoritesCharactersStorage } from "@/entites/character/repository/favoriteCharacters.storage";
import { localStoragePersister } from "@/shared/storages/LocalStoragePersister";

import { CharactersGateway } from "@/entites/character/character.gateway";
import { invoke } from "@withease/factories";
import { fromDto } from "@/entites/character/model";

export const locator = new Locator({
  CHARACTERS_SERVICE: invoke($$charactersService, {
    charactersGateway: new CharactersGateway(
      new CharacterApi(new InMemoryCache()),
      new FavoritesCharactersStorage(localStoragePersister),
      fromDto,
    ),
  }),
} as const);

export type ServiceKey = ReturnType<typeof locator.getKeys>[number];

export function getLocator<T extends ServiceKey>(
  token: T,
): ReturnType<typeof locator.get<T>> {
  return locator.get(token);
}

export function createFeatureLocator<AllowedTokens extends ServiceKey>() {
  return function <T extends AllowedTokens>(token: T) {
    return getLocator(token);
  };
}
