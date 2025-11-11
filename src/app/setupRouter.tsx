import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./BaseLayout";
import { ROUTES } from "@/shared/routes";
import { CharactersPage } from "@/pages/CharactersPage";
import { FavoritesPage } from "@/pages/FavoritesPage";

export const setupRouter = () => {
  const router = createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [
        { index: true, element: <CharactersPage /> },
        { path: ROUTES.FAVORITES, element: <FavoritesPage /> },
      ],
    },
  ]);

  return router;
};
