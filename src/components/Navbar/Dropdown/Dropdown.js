import React, { useState } from "react";
import { MenuItems } from "../MenuItems/MenuItems";
import s from "./Dropdown.module.css";
import { Link } from "react-router-dom";

function Dropdown() {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
      <ul onClick={handleClick} className={click ? [s.dropdown__menu, s.clicked].join(' ') : s.dropdown__menu}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}><Link className={s.dropdown__link} to={item.path} onClick={() => setClick(false)}>{item.title}</Link></li>
          );
        })}
      </ul>
  );
}

export default Dropdown;
