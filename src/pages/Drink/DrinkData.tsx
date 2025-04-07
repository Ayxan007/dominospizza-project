import favoritesLogo from "../../assets/img/download (19).png";
import manatLogo from "../../assets/img/download (18).png";
import colaDrink from "../../assets/img/classic500ml.png";
import zeroColaDrink from "../../assets/img/zero500ml.png";
import fantaDrink from "../../assets/img/500mlf.png";
import spriteDrink from "../../assets/img/500mlS.png";
import millaMintDrink from "../../assets/img/Ayran-200ml-naneli.png";
import millaDrink from "../../assets/img/Ayran-200ml-sade.png";
import cappyDrink from "../../assets/img/SourCherry.png";
import fuseDrink from "../../assets/img/Pineapple330ml (1).png";
import waterDrink from '../../assets/img/500mld.png';
import colaOneDrink from '../../assets/img/classic330ml.png';
import colaThreeDrink from '../../assets/img/Classic1L.png'
import zeroOneDrink from '../../assets/img/zero330ml.png'
import zeroThreeDrink from '../../assets/img/zero1L.png'
import fantaOneDrink from '../../assets/img/330mlf.png'
import fantaThreeDrink from '../../assets/img/1Lf.png'
import spriteOneDrink from '../../assets/img/330mls.png'
import spriteThreeDrink from '../../assets/img/1Ls.png'
import millaMintTwoDrink from '../../assets/img/Ayran-300ml-naneli (1).png'
import millaTwoDrink from  "../../assets/img/Ayran-300ml-sade.png"
import cappyOneDrink from '../../assets/img/Apricot.png';
import cappyThreeDrink from '../../assets/img/Multivitamin.png'
import fuseOneDrink from '../../assets/img/Lemon330ml.png'
import fuseThreeDrink from '../../assets/img/Peach330ml.png'
import waterTwoDrink from '../../assets/img/500mls (2).png'

const DrinkData = [
  {
    drinkImg: colaDrink,
    favoritesImg: favoritesLogo,
    popularImg: undefined,
    oneChange: { label: "330 ML", img: colaOneDrink, price: "3.00" },
    twoChange: { label: "500 ML", img: colaDrink, price: "2.50" },
    threeChange: { label: "1L", img: colaThreeDrink, price: "3.50" },
    title: "COCA-COLA",
    price: "2.50",
    azeManatLogo: manatLogo,
    startBtn: "SƏBƏTƏ ƏLAVƏ ET",
  },
  {
    drinkImg: zeroColaDrink,
    favoritesImg: favoritesLogo,
    popularImg: undefined,
    oneChange: { label: "330 ML", img: zeroOneDrink, price: "3.00" },
    twoChange: { label: "500 ML", img: zeroColaDrink, price: "2.50" },
    threeChange: { label: "1L", img: zeroThreeDrink, price: "3.50" },
    title: "COCA-COLA ZERO",
    price: "2.50",
    azeManatLogo: manatLogo,
    startBtn: "SƏBƏTƏ ƏLAVƏ ET",
  },
  {
    drinkImg: fantaDrink,
    favoritesImg: favoritesLogo,
    popularImg: undefined,
    oneChange: { label: "330 ML", img: fantaOneDrink, price: "3.00" },
    twoChange: { label: "500 ML", img: fantaDrink, price: "2.50" },
    threeChange: { label: "1L", img: fantaThreeDrink, price: "3.50" },
    title: "FANTA",
    price: "2.50",
    azeManatLogo: manatLogo,
    startBtn: "SƏBƏTƏ ƏLAVƏ ET",
  },
  {
    drinkImg: spriteDrink,
    favoritesImg: favoritesLogo,
    popularImg: undefined,
    oneChange: { label: "330 ML", img: spriteOneDrink, price: "3.00" },
    twoChange: { label: "500 ML", img: spriteDrink, price: "2.50" },
    threeChange: { label: "1L", img: spriteThreeDrink, price: "3.50" },
    title: "SPRITE",
    price: "2.50",
    azeManatLogo: manatLogo,
    startBtn: "SƏBƏTƏ ƏLAVƏ ET",
  },
  {
    drinkImg: millaMintDrink,
    favoritesImg: favoritesLogo,
    popularImg: undefined,
    oneChange: { label: "200 ML", img: millaMintDrink, price: "1.70" },
    twoChange: { label: "300 ML", img: millaMintTwoDrink, price: "2.20" },
    threeChange: undefined,
    title: "MILLA AYRAN MINT",
    price: "2.20",
    azeManatLogo: manatLogo,
    startBtn: "SƏBƏTƏ ƏLAVƏ ET",
  },
  {
    drinkImg: millaDrink,
    favoritesImg: favoritesLogo,
    popularImg: undefined,
    oneChange: { label: "200 ML", img: millaDrink, price: "1.70" },
    twoChange: { label: "300 ML", img: millaTwoDrink, price: "2.20" },
    threeChange: undefined,
    title: "MILLA AYRAN",
    price: "2.20",
    azeManatLogo: manatLogo,
    startBtn: "SƏBƏTƏ ƏLAVƏ ET",
  },
  {
    drinkImg: cappyDrink,
    favoritesImg: favoritesLogo,
    popularImg: undefined,
    oneChange: { label: "Ərik", img: cappyOneDrink, price: "2.00" },
    twoChange: { label: "Albalı", img: cappyDrink, price: "2.00" },
    threeChange: { label: "Multivitamin", img: cappyThreeDrink, price: "2.00" },
    title: "CAPPY MEYVƏ ŞİRƏSİ",
    price: "2.00",
    azeManatLogo: manatLogo,
    startBtn: "SƏBƏTƏ ƏLAVƏ ET",
  },
  {
    drinkImg: fuseDrink,
    favoritesImg: favoritesLogo,
    popularImg: undefined,
    oneChange: { label: "Limon", img: fuseOneDrink, price: "3.00" },
    twoChange: { label: "Manqo Ananas", img: fuseDrink,  price: "3.00" },
    threeChange: { label: "Şaftalı", img: fuseThreeDrink,  price: "3.00" },
    title: "FUSE TESA",
    price: "3.00",
    azeManatLogo: manatLogo,
    startBtn: "SƏBƏTƏ ƏLAVƏ ET",
  },
  {
    drinkImg: waterDrink,
    favoritesImg: favoritesLogo,
    popularImg: undefined,
    oneChange: { label: "Qazsız", img: waterDrink, price: "1.00" },
    twoChange: { label: "Qazlı", img: waterTwoDrink, price: "1.00" },
    threeChange: undefined,
    title: "SULU",
    price: "1.50",
    azeManatLogo: manatLogo,
    startBtn: "SƏBƏTƏ ƏLAVƏ ET",
  },
];



export default DrinkData;
