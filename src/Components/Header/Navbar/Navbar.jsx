import { NavLink } from "react-router-dom";
import NavLogo from "../NavLogo/NavLogo";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-red-500 underline font-bold"
              : isPending
              ? "pending"
              : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-red-500 underline font-bold"
              : isPending
              ? "pending"
              : ""
          }
          to={"/donation"}
        >
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-red-500 underline font-bold"
              : isPending
              ? "pending"
              : ""
          }
          to={"/statistic"}
        >
          Statistic
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=''>
      <nav className='flex justify-between items-center py-5 px-2 md:px-4 lg:px-0 container mx-auto'>
        <NavLogo></NavLogo>
        <ul className='flex gap-3 md:gap-5'>{navItems}</ul>
      </nav>
    </div>
  );
};

export default Navbar;
