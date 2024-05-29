import styled from "styled-components";
import Button from "../../../UI/button/Button";

export const ClientsItems = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 0;
  align-items: center;
  margin: 0 1.875rem;
  flex-wrap: wrap;

  @media (max-width: 37rem) {
    margin: 0;
  }
`;

export const ClientItem = styled.div`
  @media (max-width: 992px) {
    width: calc(100% / 3);
    text-align: center;

    &:nth-child(n + 4) {
      padding-top: 1.25rem;
    }
  }

  @media (max-width: 592px) {
    width: calc(100% / 2);
    text-align: center;

    &:nth-child(n + 3) {
      padding-top: 1.25rem;
    }
  }
`;

export const SubscribeContent = styled.div`
  position: relative;
  padding-bottom: 1.875rem;

  &::before {
    content: "";
    position: absolute;
    height: 4.8125rem;
    top: 5rem;
    bottom: 0;
    width: 100%;
    background-color: #252b42;
    z-index: -1;
  }
`;

export const SubscribeBody = styled.div`
  margin: 0 30px;
  background: #17213c;
  display: flex;
  padding: 2.5rem 1.25rem;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const SubscribeTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  width: 80%;
  margin: 0;
  @media (max-width: 425px) {
    font-size: 1.125rem;
  }
`;

export const SubscribeInputBtn = styled.div`
  display: flex;
  width: 100%;
  padding-left: 5.25rem;

  @media (max-width: 50.4375rem) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    padding: 1.25rem 0 0 0;
  }
`;

export const SubscribeInput = styled.input`
  width: 100%;
  padding: 0.7rem 0.5rem;
  @media (max-width: 425px) {
    font-size: 0.75rem;
  }
  @media (max-width: 768px) {
    padding: 0.7rem 0.5rem;
  }
`;

export const SubscribeButton = styled(Button)`
  border-radius: 0 5px 5px 0;
  transition: 0.5s;
`;
