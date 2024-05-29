import React from "react";
import * as S from "./Resources.styled";
import { RecourcesLink } from "../../../../../../../constansts/recources/Recurces";

const Resources = () => {
  return (
    <S.Container>
      <S.RecourcesBody>
        {RecourcesLink.map((item) => (
          <S.RecourcesList key={item.name}>
            <S.RecourcesText href={item.href}>{item.name}</S.RecourcesText>
          </S.RecourcesList>
        ))}
      </S.RecourcesBody>
    </S.Container>
  );
};

export default Resources;
