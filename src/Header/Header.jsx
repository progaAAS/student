import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = React.memo(function Header() {

  return (
    <div className={s.header}>
      <NavLink to="/" className={s.header__logo}>Студенты</NavLink>
    </div>
  );
})
export default Header;

