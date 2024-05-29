import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as S from "./Header.syled";
import BurgerMenu from "./components/burger_menu/Burger_Menu";
import { createPortal } from "react-dom";
import { GlobalContainer } from "../../../styles/GlobalContainer.styled";
import { Nav } from "../../../constansts/nav/Nav";

const Header = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const toggleBurger = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <S.HeaderBody>
        <GlobalContainer>
          <S.HeaderContainer>
            <S.HeaderLogoBlock>
              <S.HeaderLogo to="/">Relvise</S.HeaderLogo>
            </S.HeaderLogoBlock>
            <S.NavMenu>
              <S.HeaderList>
                {!isMobile ? (
                  Nav.map((item) => (
                    <S.ItemLi key={item.name}>
                      <S.HeaderLink to={item.to}>{item.name}</S.HeaderLink>
                    </S.ItemLi>
                  ))
                ) : (
                  <>
                    {open && createPortal(<BurgerMenu />, document.body)}
                    <S.MenuBurgerIcon onClick={toggleBurger}>
                      <use
                        xlinkHref={open ? "#close" : "#menu-burger-horizontal"}
                      ></use>
                    </S.MenuBurgerIcon>
                  </>
                )}
              </S.HeaderList>
            </S.NavMenu>
          </S.HeaderContainer>
        </GlobalContainer>
      </S.HeaderBody>
    </>
  );
};
export default Header;
