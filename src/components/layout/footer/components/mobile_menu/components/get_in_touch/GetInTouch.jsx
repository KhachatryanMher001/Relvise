import React from "react";
import * as S from "./GetInTouch.styled";
import { GetLinks } from "../../../../../../../constansts/getintouch/Get_links";

const GetInTouch = () => {
  return (
    <div>
      {GetLinks.map((item) => (
        <S.Items key={item.name}>
          <S.GetInTouchImages src={item.icon} />
          <S.ListText>{item.name}</S.ListText>
        </S.Items>
      ))}
    </div>
  );
};
export default GetInTouch;
