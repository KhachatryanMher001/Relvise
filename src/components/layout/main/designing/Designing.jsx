import React from "react";
import * as S from "./Designing.styled";
import { GlobalContainer } from "../../../../styles/GlobalContainer.styled";
import DesigningCard from "../../../components_props/designing/DesigningCard";
import { DesigningInfo } from "../../../../constansts/designing_info/DesigningInfo";

const Designing = () => {
  return (
    <S.DesigningPage>
      <GlobalContainer>
        <S.DesigningTitle>Designing Better Experience</S.DesigningTitle>
        <S.DesigningText>
          Problems trying to resolve the conflict between the two major realms
          <br />
          of Classical physics: Newtonian mechanics
        </S.DesigningText>
        <S.DesigningCards>
          {DesigningInfo.map((item) => (
            <DesigningCard key={item.number} {...item} />
          ))}
        </S.DesigningCards>
      </GlobalContainer>
    </S.DesigningPage>
  );
};
export default Designing;
