import React from "react";
import * as S from "./CompanyInfo.styled";
import { Company_Info } from "../../../../../../../constansts/company_info/Company_Info";

function CompanyInfo() {
  return (
    <S.CompanyInfoPage>
      <S.CompanyContent>
        {Company_Info.map((item) => (
          <S.CompanyList key={item.name}>
            <S.ListText href="#">{item.name}</S.ListText>
          </S.CompanyList>
        ))}
      </S.CompanyContent>
    </S.CompanyInfoPage>
  );
}

export default CompanyInfo;
