import type { ApiResponse, RequestConfig } from "@/shared/api/HttpClient";
import type { CharactersDTO } from "@/shared/dto/characterDto";

export type CharactersRepository = {
  getCharacters(config?: RequestConfig): ApiResponse<CharactersDTO>;
};

export type FavoriteCharactersRepository = {
  getFavoriteCharacterIds: () => Promise<number[]>;
  toggleFavorite: (id: number) => Promise<void>;
  clearFavorites: () => Promise<void>;
};
