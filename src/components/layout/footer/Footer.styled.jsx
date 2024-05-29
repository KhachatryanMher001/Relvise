import styled, { css } from "styled-components";

export const FooterPage = styled.div`
  background-color: #17213c;
  padding: 2.1875rem 0;
`;

export const FooterBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FooterColumn = styled.div`
  width: calc((100% - 4 * 1.875rem) / 5);
  display: flex;

  &:nth-child(n + 6) {
    margin-top: 1.25rem;
  }

  @media (max-width: 62rem) {
    width: calc((100% - 3 * 1.875rem) / 4);

    &:nth-child(n + 5) {
      margin-top: 1.25rem;
    }
    &:nth-last-child(1):nth-child(odd) {
      width: 100%;
    }
  }

  @media (max-width: 48rem) {
    width: calc((100% - 1 * 1.875rem) / 2);

    &:not(:nth-child(2n + 1)) {
      padding-inline-start: 1.875rem;
    }
    &:nth-child(n + 3) {
      margin-top: 1.25rem;
    }
    &:nth-last-child(1):nth-child(odd) {
      width: 100%;
    }
  }

  @media (max-width: 33.25rem) {
    width: 100%;
    border-bottom: 1px solid gray;
    padding: 0.625rem 0;
    &:nth-child(n) {
      padding-left: 0;
      margin-top: 0;
    }
  }
`;

export const ColumnContent = styled.ul`
  margin: 0;
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  padding: 0;

  @media (max-width: 33.25rem) {
    flex-grow: 1;
    margin-top: 0;
  }
`;

export const ContentText = styled.li`
  color: white;
  line-height: 171%;
  padding: 0;
  margin: 0;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.01rem;
`;
export const TitleMobile = styled.a`
  font-size: 1rem;
  display: flex;
  white-space: nowrap;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

export const Contacts = styled.div`
  display: flex;
  padding-top: 0.625rem;
  align-items: center;
`;

export const ContactIcon = styled.img`
  padding-inline-end: 0.625rem;
`;
export const ColumnTitle = styled.h3`
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.01em;
  margin: 0;
  color: white;
`;
export const PageInfo = styled.div`
  background-color: #fafafa;
  padding: 1.875rem 0;
`;

export const InfoBody = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 48.5rem) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoText = styled.p`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 171%;
  letter-spacing: 0.01em;
  color: #737373;
`;

export const Icon = styled.img`
  &:not(:nth-child(4n + 1)) {
    margin-inline-start: 0.625rem;
  }

  @media (max-width: 48.5rem) {
    margin-top: 0.625rem;
  }
`;

export const Arrow = styled.svg`
  width: 1.875rem;
  height: 1.875rem;
  fill: white;
  transition: transform 0.3s ease;

  ${({ rotated }) =>
    rotated &&
    css`
      transform: rotate(90deg);
    `}
`;

export const PageIcon = styled.div`
  display: flex;
`;
