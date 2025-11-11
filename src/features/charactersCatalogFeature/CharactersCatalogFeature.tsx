import { Spinner } from "@/shared/ui/spinner";
import { useDI } from "./di";
import { useUnit } from "effector-react";

import { CatalogInput } from "./ui/CatalogInput";
import { CatalogList } from "./ui/CatalogList";

export function CharactersCatalogFeature() {
  const {
    charactersService: { $isLoading },
  } = useDI();

  const isLoading = useUnit($isLoading);

  return (
    <div className="p-4 mb-4">
      <CatalogInput />
      {isLoading && <Spinner className="flex justify-center mx-auto mt-5" />}
      <CatalogList />
    </div>
  );
}
