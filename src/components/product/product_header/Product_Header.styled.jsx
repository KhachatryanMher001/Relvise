import styled from "styled-components";
import Button from "../../UI/button/Button";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductCard = styled.div`
  display: flex;
  border-radius: 10px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  margin-top: 5rem;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;
export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  max-width: 32.125rem;
  height: 25.125rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
  }
`;

export const CardIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  flex-grow: 1;

  img {
    padding: 5px 10px;
    width: 40px;
    object-fit: contain;
    cursor: pointer;
  }
`;
export const MainCardImage = styled.img`
  width: 100%;
  object-fit: contain;
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 1.4rem 1.25rem;
  justify-content: space-between;
`;
export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductText = styled.div`
  font-weight: 300;
  color: #1e1e1e;
`;

export const ProductColor = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ColorText = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 15rem;
  padding-top: 1rem;
  p {
    font-weight: 300;
    font-size: 14px;
    color: #1e1e1e;
  }
`;
export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;

  p {
    font-weight: 300;
    font-size: 1.25rem;
    &:last-child {
      color: #1e1e1e;
      font-weight: 600;
      font-size: 1.85rem;
    }
  }
`;
export const ProductCredit = styled.div`
  color: #0d63f3;
  font-weight: 300;
  padding-top: 2rem;
`;
export const CreditInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 22rem;
  padding-top: 1rem;

  p {
    font-weight: 300;
    &:not(:last-child) {
      padding-left: 0.5rem;
    }
    &:last-child {
      padding-right: 0.5rem;
    }
  }
`;
export const CreditButton = styled(Button)`
  padding: 0.5rem 1rem;
  @media (max-width: 768px) {
    width: 60%;
    padding: 0 0.5rem;
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 22rem;
  padding-top: 2rem;

  & > *:first-of-type:hover {
    background: white;
    border: 1px solid #0d63f3;
    color: #0d63f3;
  }
  & :last-child {
    margin-left: 0.5rem;
  }
`;

export const BuyButton = styled(Button)`
  padding: 0.5rem 1rem;
  transition: 0.5s;
  font-size: 0.75rem;
  min-width: 9.375rem;
`;

export const ProductDelivery = styled.div`
  display: flex;
  flex-direction: column;
  p {
    padding-left: 0.625rem;
    &:last-child {
      color: #2cb708;
    }
  }
`;
export const Delivery = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #6c757d;
`;
export const ProductReturns = styled(Delivery)`
  :nth-child(3) {
    color: #1e1e1e;
  }
    p {
        &:last-child {
            color: #0D63F3 ;
            text-decoration: underline;
        }
`;
