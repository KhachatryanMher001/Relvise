import React from "react";
import { ColorItems, ColorBody } from "./ColorProduct.styled";

const ColorProduct = () => {
  const colors = [
    { color: "#BEBBC2", id: "BC2" },
    { color: "#F9DED7", id: "ED7" },
    { color: "#FCE9DB", id: "9DB" },
    { color: "#E8E8EA", id: "8EA" },
    { color: "#2E2D33", id: "D33" },
  ];
  return (
    <ColorItems>
      {colors.map((item) => (
        <ColorBody key={item.id} color={item.color} />
      ))}
    </ColorItems>
  );
};

export default ColorProduct;
