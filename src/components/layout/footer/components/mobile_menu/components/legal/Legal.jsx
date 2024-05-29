import React from "react";

import * as S from "./Lega.styled";
import { LegalLink } from "../../../../../../../constansts/legal/Legal-Link";
const Legal = () => {
  return (
    <S.MobileList>
      {LegalLink.map((items) => (
        <S.MobileLi key={items.name}>
          <S.MobileText href={items.href}>{items.name}</S.MobileText>
        </S.MobileLi>
      ))}
    </S.MobileList>
  );
};

export default Legal;
