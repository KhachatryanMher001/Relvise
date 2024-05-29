import React from "react";
import * as S from "./Consulting.styled";
import { GlobalContainer } from "../../../../styles/GlobalContainer.styled";
const Consulting = () => {
  return (
    <S.ConsultingPage>
      <GlobalContainer>
        <S.ConsultingBody>
          <S.ConsultingInfo>
            <S.ConsultingTitle>
              Consulting Agency For Your Business
            </S.ConsultingTitle>
            <S.ConsultingText>
              the quick fox jumps over the lazy dog
            </S.ConsultingText>
          </S.ConsultingInfo>
          <S.ConsultingButton contained>Contact Us</S.ConsultingButton>
        </S.ConsultingBody>
      </GlobalContainer>
    </S.ConsultingPage>
  );
};

export default Consulting;
