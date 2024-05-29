import React from "react";
import * as S from "./SimilarCard.styled";
import Buy from "../../../../../assets/image/similar_card/Buy.svg";
import Like from "../../../../../assets/image/cildren_card/icon/Favorites.svg";
import { useNavigate } from "react-router-dom";
import SimilarData from "../../../../../constansts/similar_data/SimilarData";

const SimilarCard = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/products/product/${id}`);
  };

  return (
    <>
      {SimilarData.map((item) => (
        <S.SimilarCard key={item.id}>
          <S.CardHeader sale={item.sale}>
            {item.sale && <S.TopSale>{item.sale}</S.TopSale>}
            <S.Like src={Like} />
          </S.CardHeader>
          <S.NoteImg src={item.img} />
          <S.NotePrice>
            <p>Price:</p>
            <p>{item.price} BGN</p>
          </S.NotePrice>
          <S.NoteInfo>{item.info}</S.NoteInfo>
          <S.Stock out={item.oute}>{item.stock}</S.Stock>
          <S.SimilarButtons>
            <S.SimilarButton
              contained
              background="#0d63f3"
              onClick={() => handleClick(item.id)}
            >
              View more
            </S.SimilarButton>
            {!item.oute && <S.IconBuy src={Buy} />}
          </S.SimilarButtons>
        </S.SimilarCard>
      ))}
    </>
  );
};

export default SimilarCard;
