import React from "react";
import * as S from "./ProductInformation.styled.jsx";
import { GlobalContainer } from "../../../../styles/GlobalContainer.styled";

const ProductInformation = () => {
  return (
    <S.Information>
      <GlobalContainer>
        <S.InformationBody>
          <S.InformationTitle>Features</S.InformationTitle>
          <S.InformationRow>
            <h3>Product information</h3>
          </S.InformationRow>
          <S.InformationRow>
            <p>TYPE</p>
            <p>LAPTOP</p>
          </S.InformationRow>
          <S.InformationRow>
            <p>RAM</p>
            <p>16GB</p>
          </S.InformationRow>
          <S.InformationRow>
            <p>SSD</p>
            <p>1000 BG</p>
          </S.InformationRow>
          <S.InformationRow>
            <p>PROCESSOR TYPE</p>
            <p>INTEL CORE I7-12700H</p>
          </S.InformationRow>
          <S.InformationRow>
            <p>PROCESSOR SPEED</p>
            <p>2.3 - 4.7 GHz</p>
          </S.InformationRow>
          <S.InformationRow>
            <p>DISPLAY SIZE INCH</p>
            <p>16.0”</p>
          </S.InformationRow>
          <S.InformationRow>
            <p>DISPLAY SIZE SM</p>
            <p>40.64 cm</p>
          </S.InformationRow>
          <S.InformationRow>
            <p>DISPLAY TYPE</p>
            <p>OLED, TOUCHSCREEN, 120 Hz</p>
          </S.InformationRow>
          <S.InformationRow>
            <p>DISPLAY RESOLUTION</p>
            <p>2880x1620</p>
          </S.InformationRow>
          <S.InformationRow>
            <p>VIDEO CARD TYPE</p>
            <p>INTEL ARC A370M GRAPHICS</p>
          </S.InformationRow>
          <S.InformationRow>
            <p>GRAPHIC MEMORY SIZE</p>
            <p>4 GB GDDR6</p>
          </S.InformationRow>
          <S.InformationRow>
            <p>WEB CAMERA</p>
            <p>720p + IR</p>
          </S.InformationRow>
          <S.InformationRow>
            <p>OS</p>
            <p>WINDOWS 11 PRO</p>
          </S.InformationRow>
        </S.InformationBody>
      </GlobalContainer>
    </S.Information>
  );
};

export default ProductInformation;
