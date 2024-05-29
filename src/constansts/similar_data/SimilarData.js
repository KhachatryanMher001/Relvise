import AsusFlip from "../../assets/image/similar_card/asus_pro 15flip.png";
import Asus15 from "../../assets/image/similar_card/asus_15pro1.png";
import VivoBook from "../../assets/image/similar_card/asus_vivobook.png";

const SimilarData = [
  {
    sale: "Topsale",
    img: AsusFlip,
    price: 3700,
    info:
      "ASUS ZenBook Pro 15 FLip \n" +
      'W7600H3A-OLED-L741X, 16.0", UHD+, Intel Core i7',
    stock: "In Stock",
    id: 1,
  },
  {
    img: Asus15,
    price: 2900,
    info:
      "ASUS ZenBook Pro 15  \n" +
      'OledW7600H3A-OLED-L741X, 16.0", UHD+, Intel Core i7',
    stock: "In Stock",
    id: 2,
  },
  {
    img: VivoBook,
    price: 3400,
    info:
      "ASUS VivBook  \n" +
      'OledW7600H3A-OLED-L741X, 16.0", UHD+, Intel Core i7',
    stock: "Out of Stock",
    oute: true,
    id: 3,
  },
];
export default SimilarData;
