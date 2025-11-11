import { ROUTES } from "@/shared/routes";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const linkBase =
    "px-3 py-2 rounded hover:bg-accent hover:text-accent-foreground";
  const active = "bg-accent text-accent-foreground";

  return (
    <nav className="border-b">
      <div className="container mx-auto p-4 flex items-center gap-4">
        <Link to={ROUTES.HOME} className="font-semibold">
          R&M
        </Link>
        <NavLink
          to={ROUTES.HOME}
          end
          className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
        >
          Characters
        </NavLink>
        <NavLink
          to={ROUTES.FAVORITES}
          className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
        >
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}
