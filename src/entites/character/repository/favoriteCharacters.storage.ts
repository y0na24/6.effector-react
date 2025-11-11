import { type FavoriteCharactersRepository } from "./types";
import { type KeyValueStorage } from "@/shared/storages/types";
import { type Character } from "../model";

const FAVORITES_KEY = "favorite-characters";

export class FavoritesCharactersStorage
  implements FavoriteCharactersRepository
{
  favorites: Character["id"][] = [];

  constructor(private readonly storage: KeyValueStorage) {
    this.setInitialValue();
  }

  async getFavoriteCharacterIds() {
    const result =
      (await this.storage.get<Character["id"][]>(FAVORITES_KEY)) ?? [];

    return result;
  }

  async toggleFavorite(id: number) {
    const favorites = this.favorites;

    if (this.isFavorite(id)) {
      await this.save(favorites.filter((element) => element !== id));
    } else {
      await this.save([...favorites, id]);
    }
  }

  async clearFavorites() {
    this.storage.clear();
  }

  private async save(value: Character["id"][]) {
    this.favorites = value;
    await this.storage.set(FAVORITES_KEY, value);
  }

  private isFavorite(id: Character["id"]) {
    return this.favorites.includes(id);
  }

  private async setInitialValue() {
    const value =
      (await this.storage.get<Character["id"][]>(FAVORITES_KEY)) ?? [];

    this.favorites = value;
  }
}
