import styled from "styled-components";
import Button from "../../../UI/button/Button";
export const ConsultingPage = styled.div`
  background: #fafafa;
`;

export const ConsultingBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.625rem 0;
  align-items: center;
  @media (max-width: 48.5rem) {
    flex-direction: column;
  }
`;

export const ConsultingInfo = styled.div``;

export const ConsultingTitle = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 133%;
  margin: 0;
`;

export const ConsultingText = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 143%;
  letter-spacing: 0.01em;
  color: #737373;
  padding-top: 0.625rem;
`;

export const ConsultingButton = styled(Button)`
  padding: 1.2rem 2.5rem;
  border-radius: 0.3125rem;
  transition: 0.5s;
  &:hover {
  }

  @media (max-width: 776px) {
    margin-top: 1.25rem;
    margin-right: 0;
  }
`;
