import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 2rem;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 0.3125rem;
  color: white;

  @media (max-width: 455px) {
    width: 100%;
  }

  ${(props) =>
    props.contained &&
    css`
      color: ${props.color};
      background: ${(props) => props.background || "#ff7b47"};

      &:hover {
        color: ${(props) => props.color || "#ff7b47"};
        background: ${(props) => props.background || "white"};
        border: 1px solid ${(props) => props.color || "#ff7b47"};
        transition: 0.3s;
      }
    `}
  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || "white"};
      background: transparent;
      border: 1px solid ${(props) => props.color || "#ff7b47"};
    `};
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
