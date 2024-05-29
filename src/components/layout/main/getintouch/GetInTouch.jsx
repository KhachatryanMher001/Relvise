import React from "react";
import * as S from "./GetInTouch.styled";
import { GlobalContainer } from "../../../../styles/GlobalContainer.styled";
import CardBody from "../../../components_props/getintouch/GetInTouch-card";
import { CardTegs } from "../../../../constansts/cardtegs/CardTegs";

const GetInTouch = () => {
  return (
    <S.PageGetInTouch>
      <GlobalContainer>
        <div>
          <S.DesigningTitle>Get In Touch</S.DesigningTitle>
          <S.DesigningText>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </S.DesigningText>
        </div>
        <S.GetInTouchCards>
          {CardTegs.map((item) => (
            <CardBody key={item.icon} {...item} />
          ))}
        </S.GetInTouchCards>
      </GlobalContainer>
    </S.PageGetInTouch>
  );
};

export default GetInTouch;
