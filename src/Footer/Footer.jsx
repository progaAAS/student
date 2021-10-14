import React from "react";
import s from "./Footer.module.css";

const Footer = React.memo(function Footer() {

  return (
    <div className={s.footer}>
      <div>2021</div>
    </div>
  );
})
export default Footer;

