import React from "react";
import { NavLink } from "react-router-dom";
import { useToggle } from "react-use";
import Dropdown from "./Dropdown/Dropdown";
import s from "./Navbar.module.css";

const Navbar = React.memo(function Navbar() {

  const [dropdown, setDropdown] = useToggle(false);
  return (
    <nav className={s.navbar}>
      <ul className={s.nav__menu}>
        <NavLink to="/" className={s.nav__links}>
          <li className={s.nav__item}>Главная страница</li>
        </NavLink >
        <NavLink to='#' className={s.nav__links}>
          <li className={s.nav__item} onMouseEnter={setDropdown} onMouseLeave={setDropdown}>Сервис{dropdown && <Dropdown/>}</li>
        </NavLink >
      </ul>    
    </nav>
  );
})
export default Navbar;

