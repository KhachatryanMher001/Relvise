import styled from "styled-components";

export const ColorItems = styled.div`
  display: flex;
  padding-top: 10px;
`;
export const ColorBody = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ color }) => color};
  border-radius: 5px;
  cursor: pointer;

  &:not(:first-child) {
    margin-inline-start: 10px;
  }
`;
