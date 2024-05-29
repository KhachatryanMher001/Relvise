import React, { useState } from "react";
import * as S from "./Footer.styled";
import phone from "../icon/footer/01.svg";
import navigation from "../icon/footer/02.svg";
import message from "../icon/footer/03.svg";
import instagram from "../icon/footer/i.svg";
import facebook from "../icon/footer/f.svg";
import twitter from "../icon/footer/t.svg";
import youtube from "../icon/footer/y.svg";
import { useMediaQuery } from "react-responsive";
import CompanyInfo from "./components/mobile_menu/components/company_info/Company_Info";
import Legal from "./components/mobile_menu/components/legal/Legal";
import Features from "./components/mobile_menu/components/features/Features";
import Resources from "./components/mobile_menu/components/resources/Resources";
import GetInTouch from "./components/mobile_menu/components/get_in_touch/GetInTouch";
import { GlobalContainer } from "../../../styles/GlobalContainer.styled";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 532 });
  const [showList, setShowList] = useState(null);

  const toggleList = (names) => {
    setShowList(names === showList ? null : names);
  };

  const [rotation, setRotation] = useState(0);

  const rotateImage = () => {
    setRotation(rotation === 0 ? 90 : 0);
  };

  return (
    <>
      <S.FooterPage>
        <GlobalContainer>
          <S.FooterBody>
            <S.FooterColumn>
              <S.ColumnContent>
                <li>
                  <S.TitleMobile>
                    <S.ColumnTitle>Company Info</S.ColumnTitle>
                  </S.TitleMobile>
                </li>

                {!isMobile ? (
                  <>
                    <S.ContentText>
                      <S.TitleMobile href="#">About Us</S.TitleMobile>
                    </S.ContentText>
                    <S.ContentText>
                      <S.TitleMobile href="#">Carrier</S.TitleMobile>
                    </S.ContentText>
                    <S.ContentText>
                      <S.TitleMobile href="#">We are hiring</S.TitleMobile>
                    </S.ContentText>
                    <S.ContentText>
                      <S.TitleMobile href="#">Blog</S.TitleMobile>
                    </S.ContentText>
                  </>
                ) : (
                  <>{showList === "Company_Info" && <CompanyInfo />}</>
                )}
              </S.ColumnContent>
              {isMobile && (
                <S.Arrow
                  rotated={showList === "Company_Info" ? 90 : 0}
                  className={` ${showList === "Company_Info" ? "rotated" : ""}`}
                  onClick={() => {
                    rotateImage();
                    toggleList("Company_Info");
                  }}
                >
                  <use xlinkHref="#arrow-next-small"></use>
                </S.Arrow>
              )}
            </S.FooterColumn>
            <S.FooterColumn>
              <S.ColumnContent>
                <li>
                  <S.TitleMobile href="#">
                    <S.ColumnTitle>Legal</S.ColumnTitle>
                  </S.TitleMobile>
                </li>
                {!isMobile ? (
                  <>
                    <S.ContentText>
                      <S.TitleMobile href="#">About Us</S.TitleMobile>
                    </S.ContentText>
                    <S.ContentText>
                      <S.TitleMobile href="#">Carrier</S.TitleMobile>
                    </S.ContentText>
                    <S.ContentText>
                      <S.TitleMobile href="#">We are hiring</S.TitleMobile>
                    </S.ContentText>
                    <S.ContentText>
                      <S.TitleMobile href="#">Blog</S.TitleMobile>
                    </S.ContentText>
                  </>
                ) : (
                  <>{showList === "Legal" && <Legal />}</>
                )}
              </S.ColumnContent>
              {isMobile && (
                <S.Arrow
                  rotated={showList === "Legal" ? 90 : 0}
                  className={` ${showList === "Legal" ? "rotated" : ""}`}
                  onClick={() => {
                    rotateImage();
                    toggleList("Legal");
                  }}
                >
                  <use xlinkHref="#arrow-next-small"></use>
                </S.Arrow>
              )}
            </S.FooterColumn>
            <S.FooterColumn>
              <S.ColumnContent>
                <li>
                  <S.TitleMobile href="#">
                    <S.ColumnTitle>Features</S.ColumnTitle>
                  </S.TitleMobile>
                </li>
                {!isMobile ? (
                  <>
                    <S.ContentText>
                      <S.TitleMobile href="#">Business Marketing</S.TitleMobile>
                    </S.ContentText>
                    <S.ContentText>
                      <S.TitleMobile href="#">User Analytic</S.TitleMobile>
                    </S.ContentText>
                    <S.ContentText>
                      <S.TitleMobile href="#">Live Chat</S.TitleMobile>
                    </S.ContentText>
                    <S.ContentText>
                      <S.TitleMobile href="#">Unlimited Support</S.TitleMobile>
                    </S.ContentText>
                  </>
                ) : (
                  <>{showList === "Features" && <Features />}</>
                )}
              </S.ColumnContent>
              {isMobile && (
                <S.Arrow
                  rotated={showList === "Features" ? 90 : 0}
                  className={` ${showList === "Features" ? "rotated" : ""}`}
                  onClick={() => {
                    rotateImage();
                    toggleList("Features");
                  }}
                >
                  <use xlinkHref="#arrow-next-small"></use>
                </S.Arrow>
              )}
            </S.FooterColumn>
            <S.FooterColumn>
              <S.ColumnContent>
                <li>
                  <S.TitleMobile href="#">
                    <S.ColumnTitle>Resources</S.ColumnTitle>
                  </S.TitleMobile>
                </li>
                {!isMobile ? (
                  <>
                    <S.ContentText>
                      <S.TitleMobile href="#">IOS & Android</S.TitleMobile>
                    </S.ContentText>
                    <S.ContentText>
                      <S.TitleMobile href="#">Watch a Demo</S.TitleMobile>
                    </S.ContentText>
                    <S.ContentText>
                      <S.TitleMobile href="#">Customers</S.TitleMobile>
                    </S.ContentText>
                    <S.ContentText>
                      <S.TitleMobile href="#">API</S.TitleMobile>
                    </S.ContentText>
                  </>
                ) : (
                  <>{showList === "Resources" && <Resources />}</>
                )}
              </S.ColumnContent>
              {isMobile && (
                <S.Arrow
                  rotated={showList === "Resources" ? 90 : 0}
                  className={`${showList === "Resources" ? "rotated" : ""}`}
                  onClick={() => {
                    rotateImage();
                    toggleList("Resources");
                  }}
                >
                  <use xlinkHref="#arrow-next-small"></use>
                </S.Arrow>
              )}
            </S.FooterColumn>
            <S.FooterColumn>
              <S.ColumnContent>
                <S.TitleMobile href="#">
                  <S.ColumnTitle>Get In Touch</S.ColumnTitle>
                </S.TitleMobile>
                {!isMobile ? (
                  <>
                    <S.Contacts>
                      <S.ContactIcon src={phone} />
                      <S.TitleMobile href="tel:4805550103">
                        (480) 555-0103
                      </S.TitleMobile>
                    </S.Contacts>
                    <S.Contacts>
                      <S.ContactIcon src={navigation} />
                      <S.TitleMobile href="#"> Washington Ave.</S.TitleMobile>
                    </S.Contacts>
                    <S.Contacts>
                      <S.ContactIcon src={message} />
                      <S.TitleMobile href="mailto:debra.holt@example.com">
                        debra.holt@example.com
                      </S.TitleMobile>
                    </S.Contacts>
                  </>
                ) : (
                  <>{showList === "GetInTouch" && <GetInTouch />}</>
                )}
              </S.ColumnContent>
              {isMobile && (
                <S.Arrow
                  rotated={showList === "GetInTouch" ? 90 : 0}
                  className={`${showList === "GetInTouch" ? "rotated" : ""}`}
                  onClick={() => {
                    rotateImage();
                    toggleList("GetInTouch");
                  }}
                >
                  <use xlinkHref="#arrow-next-small"></use>
                </S.Arrow>
              )}
            </S.FooterColumn>
          </S.FooterBody>
        </GlobalContainer>
      </S.FooterPage>
      <S.PageInfo>
        <GlobalContainer>
          <S.InfoBody>
            <S.InfoText>
              Made With Love By Figmaland All Right Reserved
            </S.InfoText>
            <S.PageIcon>
              <S.Icon src={facebook} />
              <S.Icon src={instagram} />
              <S.Icon src={twitter} />
              <S.Icon src={youtube} />
            </S.PageIcon>
          </S.InfoBody>
        </GlobalContainer>
      </S.PageInfo>
    </>
  );
};

export default Footer;
