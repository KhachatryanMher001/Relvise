import React from "react";
import * as S from "./WhoWeAre.styled";
import icon1 from "../../icon/whoWeAre/01.svg";
import icon2 from "../../icon/whoWeAre/02.svg";
import { GlobalContainer } from "../../../../styles/GlobalContainer.styled";

const WhoWeAre = () => {
  return (
    <S.WhoWeArePage>
      <GlobalContainer>
        <S.WhoWeAreTop>
          <S.DesigningTitle>Who We Are</S.DesigningTitle>
          <S.DesigningText>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </S.DesigningText>
        </S.WhoWeAreTop>
        <S.WhoWeAreBody>
          <S.WhoWeAreVideo>
            {" "}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9prTwMLJQC8?si=vWD1rduv5cHS8jU7"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write;
                                 encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>{" "}
          </S.WhoWeAreVideo>
          <S.WhoWeAreContent>
            <S.WhoWeAreTitle>Most trusted in our field</S.WhoWeAreTitle>
            <S.WhoWeAreText>
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </S.WhoWeAreText>
            <S.WhoWeAreBox>
              <S.WhoWeAreIcon>
                <img src={icon1} alt="" />
              </S.WhoWeAreIcon>
              <S.WhoWeAreBoxItem>
                <S.WhoWeAreBoxTitle>
                  the quick fox jumps over the lazy dog
                </S.WhoWeAreBoxTitle>
                <S.WhoWeAreBoxText>
                  Things on a very small scale ...
                </S.WhoWeAreBoxText>
              </S.WhoWeAreBoxItem>
            </S.WhoWeAreBox>
            <S.WhoWeAreBox>
              <S.WhoWeAreIcon>
                <img src={icon2} alt="" />
              </S.WhoWeAreIcon>
              <S.WhoWeAreBoxItem>
                <S.WhoWeAreBoxTitle>
                  the quick fox jumps over the lazy dog
                </S.WhoWeAreBoxTitle>
                <S.WhoWeAreBoxText>
                  Things on a very small scale ...
                </S.WhoWeAreBoxText>
              </S.WhoWeAreBoxItem>
            </S.WhoWeAreBox>
          </S.WhoWeAreContent>
        </S.WhoWeAreBody>
      </GlobalContainer>
    </S.WhoWeArePage>
  );
};

export default WhoWeAre;
