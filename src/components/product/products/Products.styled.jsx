import styled from "styled-components";
import { ReactComponent as Prev } from "../../../assets/image/similar_card/prev.svg";
import { ReactComponent as Next } from "../../../assets/image/similar_card/Next.svg";

export const ProductsContainer = styled.div`
  display: flex;
  padding: 5.125rem 0;
  position: relative;
`;
export const SimilarBody = styled.div`
  display: flex;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.25);
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  border-radius: 0.625rem;
  overflow: hidden;
`;
export const SlideButtons = styled.div`
  fill: rgba(13, 99, 243, 0.2);
  svg {
    width: 32px;
    height: 32px;
  }
`;
export const ButtonPrev = styled(Prev)`
  position: absolute;
  left: 12rem;
  top: 20rem;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const ButtonNext = styled(Next)`
  position: absolute;
  right: 12rem;
  top: 20rem;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const SimilarTitle = styled.h3`
  color: #333232;
  font-weight: 700;
  font-size: 1.5rem;
`;
export const SimilarColumn = styled.div`
  display: flex;
  justify-content: center;
`;
