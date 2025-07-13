import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 text-white">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-red-500 px-4" : "text-white px-4"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-red-500 px-4" : "text-white px-4"
        }
      >
        About
      </NavLink>
<NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-red-500 px-4" : "text-white px-4"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;