import React, { useState } from "react";
import * as S from "./MainOther.styled";
import { GlobalContainer } from "../../../../styles/GlobalContainer.styled";
import Other from "../card_other/Other";
import OtherData from "../../../../constansts/other_data/OtherData";

const MainOther = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 3;
  const totalItems = OtherData.length;
  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalItems - itemsPerPage));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <S.MainOtherContainer>
      <GlobalContainer style={{ width: "100%" }}>
        <S.MainOtherBody>
          <S.MainOtherTitle>Other products</S.MainOtherTitle>
          <S.MainOtherColumn>
            <Other currentSlide={currentSlide} itemsPerPage={itemsPerPage} />
          </S.MainOtherColumn>
          <S.SlideButtons>
            <S.ButtonPrev onClick={handlePrev} />
            <S.ButtonNext onClick={handleNext} />
          </S.SlideButtons>
        </S.MainOtherBody>
      </GlobalContainer>
    </S.MainOtherContainer>
  );
};

export default MainOther;
