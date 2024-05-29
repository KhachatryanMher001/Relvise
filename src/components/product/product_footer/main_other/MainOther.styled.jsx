import styled from "styled-components";
import { ReactComponent as Prev } from "../../../../assets/image/similar_card/prev.svg";
import { ReactComponent as Next } from "../../../../assets/image/similar_card/Next.svg";

export const MainOtherContainer = styled.div`
  display: flex;
  padding: 3.125rem 0;
  position: relative;
`;

export const MainOtherBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  border-radius: 0.625rem;
  overflow: hidden;
`;

export const SlideButtons = styled.div`
  fill: rgba(13, 99, 243, 0.2);
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const ButtonPrev = styled(Prev)`
  cursor: pointer;
  width: 32px;
  height: 32px;
  position: absolute;
  left: 12rem;
  @media (max-width: 500px) {
    left: 1rem;
  }
`;

export const ButtonNext = styled(Next)`
  cursor: pointer;
  width: 32px;
  height: 32px;
  position: absolute;
  right: 12rem;
  @media (max-width: 500px) {
    right: 1rem;
  }
`;

export const MainOtherTitle = styled.h3`
  color: #333232;
  font-weight: 700;
  font-size: 1.5rem;
`;

export const MainOtherColumn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
