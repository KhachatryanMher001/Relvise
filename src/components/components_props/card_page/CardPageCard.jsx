import * as S from "./CardPageCard.styled";
import React from "react";

const ConsultingCards = ({ icon, title, text, active }) => {
  return (
    <S.CardColumn active={active}>
      <S.CardItem>
        <S.CardIcon>
          <S.CardIconImg src={icon} alt="" />
        </S.CardIcon>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardText>{text}</S.CardText>
      </S.CardItem>
    </S.CardColumn>
  );
};
export default ConsultingCards;
