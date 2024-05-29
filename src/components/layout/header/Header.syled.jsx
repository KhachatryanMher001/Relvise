import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";
export const HeaderBody = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 4.375rem;
  z-index: 2;
`;

export const HeaderContainer = styled.div`
  display: flex;
  height: 5rem;
`;

export const HeaderLogoBlock = styled.div`
  display: flex;
`;

export const HeaderLogo = styled(Link)`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
`;

export const NavMenu = styled.nav`
  display: flex;
  padding-inline-start: 8.25rem;
  @media screen and (max-width: 768px) {
    flex-grow: 1;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: flex-end;
  @media screen and (max-width: 48rem) {
    align-items: center;
  }
`;

export const ItemLi = styled.li`
  display: flex;
  &:not(:first-child) {
    margin-inline-start: 1.3125rem;
  }
`;

export const HeaderLink = styled(NavLink)`
  color: #737373;
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;

  ${({ active }) =>
    active &&
    css`
      color: red;
    `};

  @media (max-width: 768px) {
    padding-inline-end: 0.9375rem;
    font-size: 1.125rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const MenuBurgerIcon = styled.svg`
  width: 1.4375rem;
  height: 1.4375rem;
  stroke: black;
  cursor: pointer;
`;
