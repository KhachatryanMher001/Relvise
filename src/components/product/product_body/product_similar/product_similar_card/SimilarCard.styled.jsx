import styled, { css } from "styled-components";
import Button from "../../../../UI/button/Button";

export const SimilarCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  padding: 0.625rem;
  border-radius: 0.625rem;
  width: calc((100% - 2 * 45px) / 3);
  &:not(:first-child) {
    margin-left: 45px;
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: end;
  ${({ sale }) =>
    sale &&
    css`
      justify-content: space-between;
    `}
`;
export const Like = styled.img``;
export const TopSale = styled.div`
  background-color: #ff0101;
  border-radius: 4px;
  color: white;
  font-weight: 300;
  display: inline-table;
  max-width: 30%;
  text-align: center;
  padding: 5px;
`;
export const NoteImg = styled.img`
  object-fit: contain;
  width: 150px;
  height: 150px;
  padding-top: 1rem;
  margin: 0 auto;
`;
export const NotePrice = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  word-spacing: 5px;
  p:first-of-type {
    font-size: 16px;
    font-weight: 300;
    padding-right: 5px;
  }
`;
export const NoteInfo = styled.p`
  color: #1e1e1e;
  font-size: 0.75rem;
  padding-top: 1rem;
`;
export const Stock = styled.div`
  color: #2cb708;
  padding-top: 1rem;
  ${({ out }) =>
    out &&
    css`
      color: red;
    `}
`;
export const SimilarButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  align-items: center;
`;
export const SimilarButton = styled(Button)`
  color: white;
  width: 100%;
  padding: 0.6rem 2rem;
  &:hover {
    background-color: white;
    border-color: blue;
    color: blue;
  }
`;
export const IconBuy = styled.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
  cursor: pointer;
  margin-left: 2rem;
`;
