import React from "react";
import * as S from "./Consultancy.styled";
import { GlobalContainer } from "../../../../styles/GlobalContainer.styled";

const ConsultancyPage = () => {
  return (
    <S.ConsultancyContainer backgroundImage="../../images/cover.jpg ">
      <GlobalContainer>
        <S.ConsultancyBody>
          <S.ConsultancyTitle>
            Finance and Consultancy Solution
          </S.ConsultancyTitle>
          <S.ConsultancyText>
            <p>
              We know how large objects will
              <br /> act, but things on a small scale.
            </p>
          </S.ConsultancyText>
          <S.ButtonContent>
            <S.ButtonOrange contained>Get Quote Now</S.ButtonOrange>
            <S.ButtonGreen outlined color="#0D5C63">
              Learn More
            </S.ButtonGreen>
          </S.ButtonContent>
        </S.ConsultancyBody>
      </GlobalContainer>
    </S.ConsultancyContainer>
  );
};

export default ConsultancyPage;
