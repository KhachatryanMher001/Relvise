import * as S from "./PracticeCard.styled";
import React from "react";

const PracticeCard = ({ title, subTitle, image }) => (
  <S.PracticeColumn>
    <S.PracticeItem>
      <S.PracticeTitle>{title}</S.PracticeTitle>
      <S.PracticeText>{subTitle}</S.PracticeText>
    </S.PracticeItem>
    <S.PracticeImage src={image} />
  </S.PracticeColumn>
);

export default PracticeCard;
