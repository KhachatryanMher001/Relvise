import React from "react";
import * as B from "./Burger_Menu.style";
import { Nav } from "../../../../../constansts/nav/Nav";

function BurgerMenu() {
  return (
    <B.BurgerContainer>
      <B.ListBurger>
        {Nav.map((item) => (
          <B.ListLi key={item.name}>
            <B.ListText to={item.to}>{item.name}</B.ListText>
          </B.ListLi>
        ))}
      </B.ListBurger>
    </B.BurgerContainer>
  );
}

export default BurgerMenu;
