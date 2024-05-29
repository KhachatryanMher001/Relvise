import * as S from "./DesigningCard.styled";
import React from "react";

const DesigningCard = ({ number, text, icon }) => (
  <S.DesigningCardColumn>
    <S.DesigningCardIcon>
      <img src={icon} alt="" />
    </S.DesigningCardIcon>
    <S.DesigningCardTitle>{number}</S.DesigningCardTitle>
    <S.DesigningCardText>{text}</S.DesigningCardText>
  </S.DesigningCardColumn>
);

export default DesigningCard;
