import React from "react";
import * as S from "./CardPage.styled";
import { GlobalContainer } from "../../../../styles/GlobalContainer.styled";
import ConsultingCards from "../../../components_props/card_page/CardPageCard";
import { CardInfo } from "../../../../constansts/cardeinfo/CardInfo";

export const CardPage = () => {
  return (
    <S.CardPageContainer>
      <GlobalContainer>
        <S.CardBody>
          {CardInfo.map((item) => (
            <ConsultingCards key={item.title} {...item} />
          ))}
        </S.CardBody>
      </GlobalContainer>
    </S.CardPageContainer>
  );
};

export default CardPage;
