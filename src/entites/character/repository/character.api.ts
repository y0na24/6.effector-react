import {
  httpClient,
  type ApiResponse,
  type RequestConfig,
} from "@/shared/api/HttpClient";
import { type CharactersDTO } from "@/shared/dto/characterDto";
import type { CharactersRepository } from "./types";
import type { Cache } from "@/shared/storages/types";

export class CharacterApi implements CharactersRepository {
  ENDPOINT = "character";

  constructor(private readonly cache: Cache<ApiResponse<CharactersDTO>>) {}

  async getCharacters(config?: RequestConfig): ApiResponse<CharactersDTO> {
    const params = config?.options?.params ?? {};
    const cacheKey = JSON.stringify(params);

    if (this.cache.has(cacheKey)) {
      const cachedValue = this.cache.get(cacheKey);

      if (cachedValue) {
        console.log(`[CharacterApi] из кэша: ${cacheKey}`);
        return cachedValue;
      }
    }

    const response = httpClient.get<CharactersDTO>(
      this.ENDPOINT,
      config?.options,
    );

    this.cache.set(cacheKey, response);

    return response;
  }
}
