import React from "react";
import * as S from "./Features.styled";
import { Features_Items } from "../../../../../../../constansts/features/Features";
function Features() {
  return (
    <S.FeaturesBody>
      <S.FeaturesContent>
        {Features_Items.map((item) => (
          <S.FeaturesList key={item.name}>
            <S.ListText href={item.href}>{item.name}</S.ListText>
          </S.FeaturesList>
        ))}
      </S.FeaturesContent>
    </S.FeaturesBody>
  );
}

export default Features;
