import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex gap-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#61dafb] font-bold" : "text-white"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "text-[#61dafb] font-bold" : "text-white"
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/fav"
        className={({ isActive }) =>
          isActive ? "text-[#61dafb] font-bold" : "text-white"
        }
      >
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navbar;
