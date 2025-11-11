import type { CharactersDTO } from "@/shared/dto/characterDto";
import { type Character } from "./model";
import type {
  CharactersRepository,
  FavoriteCharactersRepository,
} from "./repository/types";

export class CharactersGateway {
  constructor(
    private readonly charactersRepo: CharactersRepository,
    private readonly favoritesRepo: FavoriteCharactersRepository,
    private readonly fromDto: (dto: CharactersDTO) => Character[],
  ) {}

  async getCharacters(name: Character["name"] = ""): Promise<Character[]> {
    const [{ data }, ids] = await Promise.all([
      this.charactersRepo.getCharacters({
        options: { params: { name } },
      }),
      this.favoritesRepo.getFavoriteCharacterIds(),
    ]);

    return this.fromDto(data).map((character) => ({
      ...character,
      isFavorite: ids.includes(character.id),
    }));
  }

  public async toggleFavorite(id: Character["id"]) {
    await this.favoritesRepo.toggleFavorite(id);
  }

  public async clearFavorites() {
    await this.favoritesRepo.clearFavorites();
  }
}
