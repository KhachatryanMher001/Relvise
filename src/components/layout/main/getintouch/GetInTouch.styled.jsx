import styled from "styled-components";

export const DesigningTitle = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 142%;
  letter-spacing: 0.01em;
  text-align: center;
  margin: 0 0 0.625rem 0;

  &:not(:last-child) {
    margin-bottom: 0.625rem;
  }
`;

export const DesigningText = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 143%;
  letter-spacing: 0.01em;
  text-align: center;
  color: #737373;
`;

export const PageGetInTouch = styled.div`
  margin-top: 3.125rem;
  background-color: #f3f3f3;
  padding: 5rem 0;
`;

export const GetInTouchCards = styled.div`
  display: flex;
  padding: 6.25rem 0 0 1.875rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;
