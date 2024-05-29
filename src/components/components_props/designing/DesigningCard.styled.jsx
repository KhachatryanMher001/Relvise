import styled from "styled-components";

export const DesigningCardColumn = styled.div`
  width: calc((100% - 3 * 1.875rem) / 4);
  text-align: center;
  padding: 1.875rem;
  background: #ffffff;

  &:not(:nth-child(4n + 1)) {
    margin-left: 1.875rem;
  }
  &:nth-child(n + 5) {
    margin-top: 1.875rem;
  }
  @media (max-width: 992px) {
    width: calc((100% - 1.875rem) / 2);
    .last_card {
      width: 100%;
    }
    &:nth-child(n) {
      margin-left: 0;
    }
    &:not(:nth-child(2n + 1)) {
      margin-left: 1.875rem;
    }
    &:not(:nth-child(-n + 2)) {
      margin-top: 1.875rem;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    &:nth-child(n) {
      margin-left: 0;
      margin-top: 0;
    }
    &:not(:first-child) {
      margin-top: 1.875rem;
    }
  }
`;

export const DesigningCardIcon = styled.div`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const DesigningCardTitle = styled.h3`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 142%;
  letter-spacing: 0.01em;
  margin: 0;
  padding-top: 1.25rem;
`;

export const DesigningCardText = styled.p`
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #737373;
  padding-top: 1.25rem;
`;
