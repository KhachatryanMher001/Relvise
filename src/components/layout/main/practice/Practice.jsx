import React from "react";
import * as S from "./Practice.style";
import { GlobalContainer } from "../../../../styles/GlobalContainer.styled";
import PracticeCard from "../../../components_props/practice/PracticeCard";
import { PracticeInfo } from "../../../../constansts/pracitce_info/PracticeInfo";

const Practice = () => {
  return (
    <S.PracticePage>
      <GlobalContainer>
        <div>
          <S.DesigningTitle>Practice Advice</S.DesigningTitle>
          <S.DesigningText>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </S.DesigningText>
        </div>
        <S.PracticeBody>
          {PracticeInfo.map((item) => (
            <PracticeCard key={PracticeInfo.title} {...item} />
          ))}
        </S.PracticeBody>
      </GlobalContainer>
    </S.PracticePage>
  );
};
export default Practice;
