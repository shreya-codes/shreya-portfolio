import React from "react";
import { NavLink } from "react-router-dom";
import NavItems from "../data/NavItems";
const Nav = () => {
  console.log(NavItems, "====================");
  return (
    <header>
      <img src="../shreyaLogo.png" alt="shreya" />
      <nav>
        <ul>
          {NavItems.map((item, index) => {
            console.log(item);
            return (
              <li key={index}>
                <NavLink to={item.url} className={item.cName}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
