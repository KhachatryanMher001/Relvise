import React, { useState } from "react";
import * as S from "../products/Products.styled";
import { GlobalContainer } from "../../../styles/GlobalContainer.styled";
import SimilarCard from "../product_body/product_similar/product_similar_card/SimilarCard";
import SimilarData from "../../../constansts/similar_data/SimilarData";

const ProductsCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 3;
  const totalItems = SimilarData.length;
  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalItems - itemsPerPage));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <S.ProductsContainer>
      <GlobalContainer>
        <S.SimilarBody>
          <S.SlideButtons>
            <S.ButtonPrev onClick={handlePrev} />
            <S.ButtonNext onClick={handleNext} />
          </S.SlideButtons>
          <S.SimilarTitle>Similar products</S.SimilarTitle>
          <S.SimilarColumn>
            <SimilarCard currentSlide={currentSlide} />
          </S.SimilarColumn>
        </S.SimilarBody>
      </GlobalContainer>
    </S.ProductsContainer>
  );
};

export default ProductsCard;
