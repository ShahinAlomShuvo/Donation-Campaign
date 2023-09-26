import { NavLink } from "react-router-dom";
import logo from "../../../assets/Images/Logo.png";

const NavLogo = () => {
  return (
    <div>
      <NavLink to={"/"}>
        <img className=' h-10  md:h-12' src={logo} alt='' />
      </NavLink>
    </div>
  );
};

export default NavLogo;
