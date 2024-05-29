import styled from "styled-components";

export const PracticePage = styled.div`
  padding: 1.875rem 0;
`;

export const DesigningTitle = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 142%;
  letter-spacing: 0.01em;
  text-align: center;

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

export const PracticeBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5rem 0;
`;
