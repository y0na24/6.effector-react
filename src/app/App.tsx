import { RouterProvider } from "react-router-dom";
import { setupRouter } from "./setupRouter";

const router = setupRouter();

export function App() {
  return <RouterProvider router={router} />;
}
