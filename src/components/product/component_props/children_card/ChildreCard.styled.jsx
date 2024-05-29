import styled from "styled-components";

export const CardContent = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 5px;
  flex-wrap: wrap;
`;

export const CardImage = styled.div`
  width: calc((100% - 3 * 1.625rem) / 4);

  @media (max-width: 600px) {
    width: calc((100% - 2rem) / 4);
  }
  &:not(:first-child) {
    margin-inline-start: 1.625rem;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
    &:not(:first-child) {
      margin-inline-start: 0.5rem;
    }
  }
  img {
    width: 100px;
    height: 65px;
    object-fit: contain;
    border-radius: 0.625rem;
    padding: 0.5rem;
    background: #fff;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.25);
    @media (max-width: 500px) {
      width: 50px;
      height: 35px;
    }
  }
`;
