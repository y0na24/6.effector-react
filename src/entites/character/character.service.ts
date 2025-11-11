import { createFactory } from "@withease/factories";
import { debounce } from "patronum/debounce";
import {
  createEffect,
  createEvent,
  sample,
  restore,
  createStore,
  combine,
} from "effector";
import {
  clearCharacters,
  getFavoriteCharacters,
  toggleCharacterById,
  type Character,
} from "./model";
import { CharactersGateway } from "./character.gateway";

export type CharactersServiceDeps = {
  charactersGateway: CharactersGateway;
};

export const $$charactersService = createFactory(
  ({ charactersGateway }: CharactersServiceDeps) => {
    const charactersSearched = createEvent<Character["name"]>();

    const characterToggled = createEvent<Character["id"]>();

    const charactersCleared = createEvent();

    const loadCharactersFx = createEffect(
      async (name: Character["name"]) =>
        await charactersGateway.getCharacters(name),
    );

    const toggleCharacterFx = createEffect(
      async (id: Character["id"]) => await charactersGateway.toggleFavorite(id),
    );

    const clearFavoritesFx = createEffect(
      async () => await charactersGateway.clearFavorites(),
    );

    const $search = createStore<Character["name"]>("");
    const debouncedSearch = debounce($search, 200);
    $search.on(charactersSearched, (_, newValue) => newValue);

    const $characters = restore<Character[]>(loadCharactersFx, []);

    const $favoriteCharacters = combine($characters, getFavoriteCharacters);
    const $isLoading = loadCharactersFx.pending.map((isPending) => isPending);

    sample({
      clock: debouncedSearch,
      target: loadCharactersFx,
    });

    sample({
      clock: characterToggled,
      target: toggleCharacterFx,
    });

    sample({
      clock: charactersCleared,
      target: clearFavoritesFx,
    });

    $characters.on(clearFavoritesFx.done, clearCharacters);

    $characters.on(toggleCharacterFx.done, (characters, { params: id }) =>
      toggleCharacterById(characters, id),
    );

    loadCharactersFx("");

    return {
      $search,
      $characters,
      $isLoading,
      $favoriteCharacters,
      charactersCleared,
      charactersSearched,
      characterToggled,
    };
  },
);

export type CharactersService = ReturnType<typeof $$charactersService>;
