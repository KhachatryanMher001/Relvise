import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContainer } from "../../../styles/GlobalContainer.styled";
import ChildrenCard from "../component_props/children_card/ChildrenCard";
import * as S from "./Product_Header.styled";
import Favorites from "../../../assets/image/cildren_card/icon/Favorites.svg";
import Share from "../../../assets/image/cildren_card/icon/Share.svg";
import ColorProduct from "../component_props/color_component/ColorProduct";
import Asus1 from "../../../assets/image/cildren_card/asus 1.svg";
import DeliveryIcon from "../../../assets/image/cildren_card/icon/delivery.svg";
import ReturnsIcon from "../../../assets/image/cildren_card/icon/360.svg";
import SimilarData from "../../../constansts/similar_data/SimilarData";

const ProductHeader = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = SimilarData.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <S.CardColumn />;
  }

  return (
    <S.ProductContainer>
      <GlobalContainer>
        <S.ProductCard>
          <S.CardColumn>
            <S.MainCard>
              <S.CardIcon>
                <img src={Favorites} alt="favorites" />
                <img src={Share} alt="share" />
              </S.CardIcon>
              <S.MainCardImage
                src={selectedImage || product.img || Asus1}
                alt="icon"
              />
            </S.MainCard>
            <ChildrenCard setSelectedImage={setSelectedImage} />
          </S.CardColumn>
          <S.ProductInfo>
            <S.ProductContent>
              <S.ProductText>
                {product.info ||
                  "ASUS ProArt Studiobook Pro 16 W7600H3A-OLED-L741X, 16.0, UHD+, Intel Core i7"}
              </S.ProductText>
              <S.ProductColor>
                <S.ColorText>
                  <p>Color</p>
                  <p>Dark</p>
                </S.ColorText>
                <ColorProduct />
              </S.ProductColor>
              <S.ProductPrice>
                <p>Price:</p>
                <p>{product.price} BGN</p>
              </S.ProductPrice>
              <S.ProductCredit>
                {(product.price / 3).toFixed(1)} BGN for 3 months
              </S.ProductCredit>
              <S.CreditInfo>
                <S.CreditButton outlined color="#0d63f3">
                  3 months
                </S.CreditButton>
                <p>6</p> <p>12</p> <p>16</p> <p>18</p>
                <S.CreditButton outlined color="#0d63f3">
                  + Add to cart
                </S.CreditButton>
              </S.CreditInfo>
              <S.Buttons>
                <S.BuyButton contained background="#0d63f3">
                  Buy
                </S.BuyButton>
                <S.BuyButton
                  contained
                  color="#0d63f3"
                  background="rgba(13, 99, 243, 0.2)"
                  border="#0d63f3"
                >
                  Buy in installments
                </S.BuyButton>
              </S.Buttons>
            </S.ProductContent>
            <S.ProductDelivery>
              <S.Delivery>
                <img src={DeliveryIcon} /> <p>Delivery</p> <p>5 working days</p>
              </S.Delivery>
              <S.ProductReturns>
                <img src={ReturnsIcon} />{" "}
                <p>Product returns and exchanges Terms</p>
                <p>15 days</p>
                <p>Conditions</p>
              </S.ProductReturns>
            </S.ProductDelivery>
          </S.ProductInfo>
        </S.ProductCard>
      </GlobalContainer>
    </S.ProductContainer>
  );
};

export default ProductHeader;
