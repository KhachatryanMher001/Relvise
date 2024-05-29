import styled from "styled-components";
import Button from "../../../UI/button/Button";
import cover from "../../images/cover.jpg";

export const ConsultancyContainer = styled.div`
  background-image: url(${cover});
  background-position: right;
  background-size: cover;
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: -1;
    @media (max-width: 858px) {
      content: "";
    }
  }

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 1);
  }
`;

export const ConsultancyBody = styled.div`
  padding: 11.5rem 0 10.0625rem 0;
`;

export const ConsultancyTitle = styled.h1`
  font-weight: 800;
  font-size: 3.625rem;
  line-height: 138%;
  margin: 0;
  max-width: 25rem;
  @media (max-width: 48rem) {
    font-size: 2.1875rem;
  }
`;

export const ConsultancyText = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #737373;
  margin-top: 2.1875rem;
  max-width: 25rem;
`;

export const ButtonContent = styled.div`
  margin-top: 2.1875rem;
`;

export const ButtonOrange = styled(Button)`
  font-weight: 700;
  transition: 0.5s;
  border-radius: 2.3125rem;
  padding: 1rem 2.5rem;
`;

export const ButtonGreen = styled(Button)`
  border-radius: 2.3125rem;
  font-weight: 650;
  margin-inline-start: 0.9375rem;
  transition: 0.5s;
  padding: 1rem 3rem;
  &:hover {
    background: #0d5c63;
    color: white;
    border: 1px solid white;
    transition: 0.3s;
  }
  @media (max-width: 455px) {
    margin-left: 0;
    margin-top: 0.5rem;
  }
`;
