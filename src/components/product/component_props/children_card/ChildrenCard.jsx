import React from "react";
import asus1 from "../../../../assets/image/cildren_card/asus01.svg";
import asus2 from "../../../../assets/image/cildren_card/asus2.svg";
import asus3 from "../../../../assets/image/cildren_card/asus3.svg";
import asus4 from "../../../../assets/image/cildren_card/asus4.svg";
import { CardImage, CardContent } from "./ChildreCard.styled";

const ChildrenCard = ({ setSelectedImage }) => {
  const asus = [
    { image: asus1, id: 7 },
    { image: asus2, id: 8 },
    { image: asus3, id: 9 },
    { image: asus4, id: 10 },
  ];

  return (
    <CardContent>
      {asus.map((item) => (
        <CardImage key={item.id}>
          <img src={item.image} onClick={() => setSelectedImage(item.image)} />
        </CardImage>
      ))}
    </CardContent>
  );
};

export default ChildrenCard;
