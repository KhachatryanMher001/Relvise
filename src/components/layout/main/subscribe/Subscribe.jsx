import React from "react";
import * as S from "./Subscribe.styled";
import icon1 from "../../icon/subscribe/01.png";
import icon2 from "../../icon/subscribe/02.png";
import icon3 from "../../icon/subscribe/03.png";
import icon4 from "../../icon/subscribe/04.png";
import icon5 from "../../icon/subscribe/05.png";
import icon6 from "../../icon/subscribe/06.png";
import { GlobalContainer } from "../../../../styles/GlobalContainer.styled";

const Subscribe = () => {
  return (
    <>
      <GlobalContainer>
        <S.ClientsItems>
          <S.ClientItem>
            <img src={icon1} alt="" />
          </S.ClientItem>
          <S.ClientItem>
            <img src={icon2} alt="" />
          </S.ClientItem>
          <S.ClientItem>
            <img src={icon3} alt="" />
          </S.ClientItem>
          <S.ClientItem>
            <img src={icon4} alt="" />
          </S.ClientItem>
          <S.ClientItem>
            <img src={icon5} alt="" />
          </S.ClientItem>
          <S.ClientItem>
            <img src={icon6} alt="" />
          </S.ClientItem>
        </S.ClientsItems>
      </GlobalContainer>
      <S.SubscribeContent>
        <GlobalContainer>
          <S.SubscribeBody>
            <S.SubscribeTitle>
              S.Subscribe For Latest Newsletter
            </S.SubscribeTitle>
            <S.SubscribeInputBtn>
              <S.SubscribeInput type="text" placeholder="Your Email" />
              <S.SubscribeButton contained>S.Subscribe</S.SubscribeButton>
            </S.SubscribeInputBtn>
          </S.SubscribeBody>
        </GlobalContainer>
      </S.SubscribeContent>
    </>
  );
};

export default Subscribe;
