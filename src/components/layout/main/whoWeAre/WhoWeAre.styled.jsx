import styled from "styled-components";

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

export const WhoWeArePage = styled.div`
  background-color: #ffffff;
  padding: 1.875rem 0;
`;

export const WhoWeAreTop = styled.div`
  padding-top: 6.25rem;

  @media (max-width: 48rem) {
    padding-top: 1.875rem;
  }
`;

export const WhoWeAreBody = styled.div`
  display: flex;
  padding: 6.25rem 0 8.5rem 0;

  @media (max-width: 48rem) {
    padding-top: 1.875rem;
    padding-bottom: 4.25rem;
  }

  @media (max-width: 62rem) {
    flex-direction: column;
    padding: 2rem 0;
  }
`;

export const WhoWeAreContent = styled.div`
  padding-left: 5rem;

  @media (max-width: 62rem) {
    padding: 2rem;
  }
`;

export const WhoWeAreTitle = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: 0.01em;
  padding-top: 1.25rem;
  margin: 0;
`;

export const WhoWeAreText = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.01em;
  color: #737373;
  padding-top: 1.25rem;
  line-height: 132%;
`;

export const WhoWeAreBox = styled.div`
  display: flex;
  align-items: baseline;
  padding-top: 1.25rem;
`;

export const WhoWeAreBoxItem = styled.div`
  padding-left: 1.25rem;
`;

export const WhoWeAreBoxTitle = styled.h3`
  font-weight: 700;
  margin: 0;
  font-size: 22px;
`;

export const WhoWeAreBoxText = styled.p`
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.01em;
  color: #737373;
  padding-top: 0.625rem;
`;
export const WhoWeAreIcon = styled.div``;
export const WhoWeAreVideo = styled.div`
  width: 100%;
  iframe {
    width: 100%;
    object-fit: cover;
  }
`;
