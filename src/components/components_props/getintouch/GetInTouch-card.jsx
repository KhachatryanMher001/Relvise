import * as S from "./GwtInTouchCard.styled";
import React from "react";

const CardBody = ({ icon, links, text, button }) => (
  <S.GetInTouchCard>
    <S.GetInTouchIcon>{icon} </S.GetInTouchIcon>
    <S.GetInTouchEmail>
      {links.map((link, index) => (
        <S.Example href="#" key={index}>
          {link}
        </S.Example>
      ))}
    </S.GetInTouchEmail>
    <S.GetInTouchTitle>{text}</S.GetInTouchTitle>
    <S.GetInTouchButton outlined color="#FF7B47">
      {button}
    </S.GetInTouchButton>
  </S.GetInTouchCard>
);
export default CardBody;
