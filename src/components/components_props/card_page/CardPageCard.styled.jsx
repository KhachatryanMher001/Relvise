import styled, { css } from "styled-components";

export const CardItem = styled.div`
  padding: 2.1875rem;
`;

export const CardIcon = styled.div`
  height: 3rem;
  width: 3rem;
`;

export const CardIconImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const CardTitle = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 133%;
`;

export const CardColumn = styled.div`
  width: calc((100% - 2 * 1.875rem) / 3);
  background: #ffffff;
  box-shadow: 0 0.8125rem 1.1875rem rgba(0, 0, 0, 0.7);
  position: relative;
  z-index: 1;

  ${({ active }) =>
    active &&
    css`
      background: #0d5c63;
      color: white;

      ${CardText} {
        color: white;
      }
    `}

  &:not(:first-child) {
    margin-inline-start: 1.875rem;
  }

  &:nth-child(n + 4) {
    margin-top: 1.25rem;
  }

  &:nth-child(3n + 1) {
    margin-inline-start: 0;
  }

  @media (max-width: 992px) {
    width: calc((100% - 1 * 1.875rem) / 2);
    &:nth-child(2n + 1) {
      margin-left: 0;
    }

    &:nth-child(n + 3) {
      margin-top: 1.25rem;
    }

    &:nth-child(4n) {
      margin-left: 1.875rem;
    }

    &:nth-last-child(1):nth-child(odd) {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    &:nth-child(n) {
      margin-left: 0;
    }

    &:not(:first-child) {
      margin-top: 1.25rem;
    }
  }
`;

export const CardText = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 143%;
  letter-spacing: 0.01em;
  color: #737373;
`;
