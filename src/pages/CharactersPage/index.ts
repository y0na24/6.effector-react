import { withServices } from "@/app/locator/ServiceProvider";
import { CharactersPageContent } from "./CharactersPageContent";

export const CharactersPage = withServices(["CHARACTERS_SERVICE"])(
  CharactersPageContent,
);
