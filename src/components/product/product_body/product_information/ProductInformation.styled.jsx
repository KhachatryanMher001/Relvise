import styled from "styled-components";

export const Information = styled.div`
  padding: 4.375rem 0;
`;
export const InformationBody = styled.div`
  display: flex;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.25);
  flex-direction: column;
  border-radius: 0.625rem;
  padding: 1rem 0;
`;
export const InformationTitle = styled.h3`
  font-weight: 700;
  font-size: 1.25rem;
  text-align: center;
  color: #1e1e1e;
`;
export const InformationRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #e4e7ee;
  p {
    font-weight: 400;
    letter-spacing: 0.01em;
    color: #6c757d;
  }
`;
