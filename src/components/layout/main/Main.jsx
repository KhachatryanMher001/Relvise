import React from "react";
import ConsultancyPage from "./consultancy/ConsultancyPage";
import Card_page from "./cardPage/Card_page";
import Designing from "./designing/Designing";
import Practice from "./practice/Practice";
import WhoWeAre from "./whoWeAre/WhoWeAre";
import Subscribe from "./subscribe/Subscribe";
import GetInTouch from "./getintouch/GetInTouch";
import Consulting from "./consulting/Consulting";

const Main = () => {
  return (
    <div>
      <ConsultancyPage />
      <Card_page />
      <Designing />
      <Practice />
      <WhoWeAre />
      <Subscribe />
      <GetInTouch />
      <Consulting />
    </div>
  );
};

export default Main;
