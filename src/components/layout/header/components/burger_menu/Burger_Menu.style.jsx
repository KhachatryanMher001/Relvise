import styled from "styled-components";
import { Link } from "react-router-dom";
export const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  justify-content: center;
  background-color: rgba(13, 92, 99, 0.97);
`;

export const ListBurger = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const ListLi = styled.li`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const ListText = styled(Link)`
  display: flex;
  flex-grow: 1;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 171%;
  letter-spacing: 0.01em;
  flex-direction: column;
  align-items: center;
  color: #737373;
  text-decoration: underline;
  transition: 0.2s;
  &:hover {
    background-color: rgb(6, 17, 74);
  }
`;
