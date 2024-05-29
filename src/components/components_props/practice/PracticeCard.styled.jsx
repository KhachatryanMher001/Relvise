import styled from "styled-components";

export const PracticeColumn = styled.div`
  width: calc((100% - 3 * 1.875rem) / 4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;

  &:not(:nth-child(4n + 1)) {
    margin-inline-start: 1.875rem;
  }

  &:nth-child(n + 5) {
    margin-top: 1.875rem;
  }

  @media (max-width: 992px) {
    width: calc((100% - 1.875rem) / 2);

    &:nth-child(n) {
      margin-inline-start: 0;
    }

    &:not(:nth-child(2n + 1)) {
      margin-inline-start: 1.875rem;
    }

    &:nth-child(n + 3) {
      margin-top: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    &:nth-child(n) {
      margin-left: 0;
    }

    &:not(:first-child) {
      margin-top: 1.875rem;
    }
  }
`;

export const PracticeItem = styled.div`
  padding: 30px;
`;

export const PracticeTitle = styled.h5`
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.01em;
`;

export const PracticeText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: 0.01em;
  color: #737373;
  margin-top: 15px;
`;

export const PracticeImage = styled.img`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: right;
  }
`;
