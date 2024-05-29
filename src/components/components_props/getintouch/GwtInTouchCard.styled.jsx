import styled from "styled-components";
import Button from "../../UI/button/Button";

export const GetInTouchIcon = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  display: inline-block;
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #0d5c63;
  }
`;
export const GetInTouchEmail = styled.div`
  padding-top: 0.9375em;
  display: flex;
  flex-direction: column;
`;

export const Example = styled.a`
  color: black;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 171%;
  letter-spacing: 0.01em;
`;
export const GetInTouchTitle = styled.h5`
  padding-top: 0.93em;
  font-weight: 700;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.01em;
`;
export const GetInTouchButton = styled(Button)`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 171%;
`;
export const GetInTouchCard = styled.div`
  width: calc(100% / 3);
  padding: 3.125rem 2.5rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  transition: 0.3s;
  @media (max-width: 992px) {
    width: calc((100% - 1 * 1.875rem) / 2);

    &:nth-child(n + 3) {
      margin-top: 1.25rem;
    }

    &:nth-child(2n) {
      margin-inline-start: 1.875rem;
    }

    &:nth-last-child(1):nth-child(odd) {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    width: 100%;

    &:nth-child(n) {
      margin-left: 0;
    }

    &:not(:first-child) {
      margin-top: 1.25rem;
    }
  }

  &:hover {
    background: #252b42;
    transition: 0.5s;
    transform: scaleY(105%);
    color: white;
    fill: white;

    ${GetInTouchIcon} svg {
      fill: white;
    }

    ${Example} {
      color: white;
    }

    ${GetInTouchTitle} {
      color: white;
    }

    ${GetInTouchButton} {
      color: white;
      border-color: white;
    }
  }
`;
