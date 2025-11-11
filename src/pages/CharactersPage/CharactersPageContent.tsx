import { useService } from "@/app/locator/ServiceProvider";
import { CharactersCatalogFeature } from "@/features/charactersCatalogFeature/CharactersCatalogFeature";
import { Injector } from "@/features/charactersCatalogFeature/di";

export function CharactersPageContent() {
  const charactersService = useService("CHARACTERS_SERVICE");

  return (
    <Injector
      value={{
        charactersService,
      }}
    >
      <CharactersCatalogFeature />
    </Injector>
  );
}
