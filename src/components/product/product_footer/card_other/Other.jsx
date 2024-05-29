import React from "react";
import * as S from "./Other.styled";
import Buy from "../../../../assets/image/similar_card/Buy.svg";
import Like from "../../../../assets/image/cildren_card/icon/Favorites.svg";
import OtherData from "../../../../constansts/other_data/OtherData";

import { useMediaQuery } from "react-responsive";

const Other = ({ currentSlide, itemsPerPage }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  itemsPerPage = isMobile ? 1 : 3;

  const currentSlides = OtherData.slice(
    currentSlide,
    currentSlide + itemsPerPage,
  );
  return (
    <>
      {currentSlides.map((item) => (
        <S.OtherCard key={item.price}>
          <S.CardHeader sale={item.sale}>
            {item.sale && (
              <S.TopSale
                style={{ background: item.sale === "New" ? "#EB8528" : "red" }}
              >
                {item.sale}
              </S.TopSale>
            )}
            <S.Like src={Like} />
          </S.CardHeader>
          <S.NoteImg src={item.img} />
          <S.NotePrice>
            <p>Price:</p>
            <p>{item.price}</p>
          </S.NotePrice>
          <S.NoteInfo>{item.info}</S.NoteInfo>
          <S.Stock out={item.oute}>{item.stock}</S.Stock>
          <S.OtherButtons>
            <S.OtherButton contained background="#0d63f3">
              View more
            </S.OtherButton>
            {!item.oute && <S.IconBuy src={Buy} />}
          </S.OtherButtons>
        </S.OtherCard>
      ))}
    </>
  );
};

export default Other;
