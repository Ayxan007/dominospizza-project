import premiumPizza from "../../assets/img/4meat-351x200-min.png";
import favoritesLogo from "../../assets/img/download (19).png";
import popularLogo from "../../assets/img/download (20).png";
import manatLogo from "../../assets/img/download (18).png";
import deluxePizza from "../../assets/img/DonerPizza-351x220-T (1).webp";
import italianoPizza from "../../assets/img/08PIREMX.jpg";
import americanoPizza from "../../assets/img/_08AMRCH.jpg";
import kentuckySteykPizza from "../../assets/img/08CHBBQ.jpg";
import kentuckyToyuqPizza from "../../assets/img/08PCHCHCK.jpg";
import fourPendirliPizza from "../../assets/img/08PCHFSL.jpg";
import supremePizza from "../../assets/img/_08CHBM.jpg";
import extravaganzaPizza from "../../assets/img/08PIREZZ.jpg";
import mexicanoPizza from "../../assets/img/08PKMEXI.jpg";
import steykPizza from "../../assets/img/08CHSTEAK.jpg";
import sucukPizza from "../../assets/img/08CHMNGL.jpg";
import cikenPizza from "../../assets/img/ChickenKickresPizza-351x220-+T.webp";
import qrilToyuqPizza from "../../assets/img/_08CHTAVP.jpg";
import marqeritaPizza from "../../assets/img/08PCHMRGT.jpg";
import popularAdded from "../../assets/img/download (21).png";
import pepperoniPizza from "../../assets/img/Pepperoni-new-351x220-min.png";
import aciliPeppePizza from "../../assets/img/08CHSPCY.jpg";
import vegiPizza from "../../assets/img/08PIREVX.jpg";
import twoPizza from "../../assets/img/_10CCHDFR.jpg";
import bolPizza from "../../assets/img/_08IHB5.jpg";
import sosialPizza from "../../assets/img/_08CHSYP.jpg";
import hawaiianPizza from "../../assets/img/Havaii-new-351x220-minn.png";
import portofinoPizza from "../../assets/img/08PORCH.jpg";
import kalipsoPizza from "../../assets/img/_10CCHCL.jpg";
import halfToHalf from "../../assets/img/02.36083394.png";
import myCreatePizza from "../../assets/img/pizza=blue.db5c1d9b.png";
import modalLittleImg from '../../assets/img/small-grey.a943f98a.webp';
import modalMiddleImg from '../../assets/img/medium.1852d9f7.webp';
import modalBigImg from '../../assets/img/large-grey.5330ac9c.webp';
import modalTwiceSlice from "../../assets/img/medium-double-cut-grey.021aceeb.webp";
import modalFourCorners from "../../assets/img/medium-square-cut-grey.6b3b2911.webp";
import modalNormalSlice from '../../assets/img/medium-regular-cut.790528a9.webp';
import modalPremiumImg from '../../assets/img/4meat2.webp'
import modalDeluxeImg from '../../assets/img/DonerPizza-600x600-final.webp'
import modalItalianoImg from '../../assets/img/08PIREMX.png'
import modalAmericanoImg from '../../assets/img/_08AMRCH.png'
import modalKentSteykImg from '../../assets/img/08CHBBQ.png'
import modalToyuqImg from '../../assets/img/08PCHCHCK.png'
import modalFourPizzaImg from '../../assets/img/08PCHFSL.png'
import modalSupremeImg from '../../assets/img/_08CHBM.png'
import modalExtravaganzaImg from '../../assets/img/08PIREZZ.png'
import modalMexicanoImg from '../../assets/img/08PKMEXI.png'
import modalSteykImg from '../../assets/img/08CHSTEAK.png'
import modalManqalImg from '../../assets/img/08CHMNGL.png'
import modalChickenImg from '../../assets/img/ChickenKickresPizza-600x600-final.webp'
import modalQrilImg from '../../assets/img/_08CHTAVP.png'
import modalMarqeritaImg from '../../assets/img/08PCHMRGT.png'
import modalPepperoniImg from '../../assets/img/Pepperoni-new-600x600-min.png'
import modalSpicyPepperoniImg from '../../assets/img/08CHSPCY.png'
import modalVegiImg from '../../assets/img/08PIREVX.png'
import modalFitImg from '../../assets/img/_10CCHDFR.png'
import modalBolImg from '../../assets/img/_08IHB5.png'
import modalSosialImg from '../../assets/img/_08CHSYP.png'
import modalHavaiiImg from '../../assets/img/Havaii-new-600x600-min.png'
import modalPortofinoImg from '../../assets/img/08PORCH.png'
import modalKalipsoImg from '../../assets/img/_10CCHCL.png'
import modalCreateImg from '../../assets/img/make-your-own-pizza.727c6883.png'
import pastryKlassikImg from '../../assets/img/Classic-Crust.png'
import pastryThinImg from '../../assets/img/Thin-Crust.png'
import pastryThinnestImg from '../../assets/img/Thinnest-Crust.png'
import pastryDuplexImg from '../../assets/img/Duplex-Crust.png'
import sideMozzarellaImg from '../../assets/img/Mozzarella-Edge.png'
import sideColbasaImg from '../../assets/img/Sausage-Edge.png'
import sideParmezanImg from '../../assets/img/Parmesan-Edge.png'
import sideGarlicImg from '../../assets/img/Garlic-Sauce-Edge.png'

interface Pizza {
  pizzaImg: string;
  favoritesImg?: string;
  popularImg?: string;
  title: string;
  text: string;
  price: string;
  azeManatLogo: string;
  sizes: SizeSlice[];
  slice: SizeSlice[];
  startTitle: string;
  modalPizzaImg?: string;
  pastry: Pastry[];
  side: Side[];
}

interface Side{
  sideTitle: string;
  sideImg: string;
}

interface Pastry{
  pastryTitle: string,
  pastryImg: string,
}

interface SizeSlice {
  name: string;
  value: string;
  img: string;
}

interface PizzaData {
  premium: Pizza[];
  special: Pizza[];
  favorit: Pizza[];
  halfToHalf: Pizza[];
  createPizza: Pizza[];
}

const pizzaData: PizzaData = {
  premium: [
    {
      pizzaImg: premiumPizza,
      favoritesImg: favoritesLogo,
      popularImg: popularLogo,
      title: "PREMİUM 4 ƏTLİ",
      text: "Steyk, Basdırma, Köftəcik, Pepperoni, Mozzarella Pendiri, Pizza sousu",
      price: "14.40",
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      modalPizzaImg: modalPremiumImg,
      sizes: [
        { name: "Kiçik", value: "14.40", img: modalLittleImg },
        { name: "Orta", value: "22.40", img: modalMiddleImg },
        { name: "Böyük", value: "29.4", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar) +4.00 azn" ,pastryImg: pastryDuplexImg},
      ],
      side: [
        {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
        {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
        {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
        {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
      ]
    },
  ],
  special: [
    {
      pizzaImg: deluxePizza,
      favoritesImg: favoritesLogo,
      popularImg: popularLogo,
      modalPizzaImg: modalDeluxeImg,
      title: "DELUXE DÖNƏR",
      text: "Dana dönər əti, Yaşıl Bibər, Pamidor, Soğan, Mayonez, Pizza sousu, Mozzarella Pendiri",
      price: "12.40",
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "12.40", img: modalLittleImg },
        { name: "Orta", value: "20.40", img: modalMiddleImg },
        { name: "Böyük", value: "27.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
        {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
        {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
        {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
        {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
      ]
    },
    {
      pizzaImg: italianoPizza,
      favoritesImg: favoritesLogo,
      title: "ITALIANO",
      text: "Kub Sucuk, Göbələk, Közlənmiş Bibər, Qara Zeytun, Kəklikotu, Pizza Sousu, Mozzarella pendiri",
      price: "12.40",
      modalPizzaImg: modalItalianoImg,
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "12.40", img: modalLittleImg },
        { name: "Orta", value: "20.40", img: modalMiddleImg },
        { name: "Böyük", value: "27.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
       side: [
        {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
        {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
        {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
        {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
      ]
    },
    {
      pizzaImg: americanoPizza,
      favoritesImg: favoritesLogo,
      modalPizzaImg: modalAmericanoImg,
      title: "AMERICANO",
      text: "Çeddar Pendiri, Pepperoni, Hisə verilmiş Toyuq, Göbələk, Yaşıl Bibər ,Pizza Sousu, Mozzarella pendiri",
      price: "12.40",
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "12.40", img: modalLittleImg },
        { name: "Orta", value: "20.40", img: modalMiddleImg },
        { name: "Böyük", value: "27.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: kentuckySteykPizza,
      favoritesImg: favoritesLogo,
      modalPizzaImg: modalKentSteykImg, 
      title: "KENTUCKY BBQ STEYK",
      text: "Steyk, Közlənmiş Bibər, Yaşıl Bibər, BBQ Sous, Soğan, Pizza sousu, Mozzarella pendiri",
      price: "12.40",
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "12.40", img: modalLittleImg },
        { name: "Orta", value: "20.40", img: modalMiddleImg },
        { name: "Böyük", value: "27.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: kentuckyToyuqPizza,
      favoritesImg: favoritesLogo,
      title: "KENTUCKY BBQ TOYUQ",
      text: "Hisə verilmiş Toyuq, Közlənmiş Bibər, Yaşıl Bibər, BBQ Sous, Soğan, Pizza Sousu, Mozzarella Pendiri",
      price: "12.40",
      modalPizzaImg: modalToyuqImg,
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "12.40", img: modalLittleImg },
        { name: "Orta", value: "20.40", img: modalMiddleImg },
        { name: "Böyük", value: "27.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: fourPendirliPizza,
      favoritesImg: favoritesLogo,
      title: "4 PENDIRLI",
      text: "Çeddar Pendiri, Feta Pendiri, Parmesan Pendiri, Pizza Sousu, Mozzarella Pendiri",
      price: "12.40",
      modalPizzaImg: modalFourPizzaImg,
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "12.40", img: modalLittleImg },
        { name: "Orta", value: "20.40", img: modalMiddleImg },
        { name: "Böyük", value: "27.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: supremePizza,
      favoritesImg: favoritesLogo,
      title: "SUPREME",
      text: "Pepperoni, Dilim Sucuk, Mal Əti Vetçinası, Sosiska, Göbələk, Yaşıl Bibər, Qara Zeytun, Qarğıdalı, Pomidor, Küncüt, Kəklikotu, Pizza Sousu, Mozzarella Pendiri",
      price: "12.40",
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      modalPizzaImg: modalSupremeImg,
      sizes: [
        { name: "Kiçik", value: "12.40", img: modalLittleImg },
        { name: "Orta", value: "20.40", img: modalMiddleImg },
        { name: "Böyük", value: "27.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: extravaganzaPizza,
      favoritesImg: favoritesLogo,
      title: "EXTRAVAGANZA",
      modalPizzaImg: modalExtravaganzaImg,
      text: "Pepperoni, Mal Əti Vetçinası, Sosiska, Göbələk, Yaşıl Bibər, Qara Zeytun, Qarğıdalı, Soğan, Pizza Sousu, Mozzarella Pendiri",
      price: "12.40",
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "12.40", img: modalLittleImg },
        { name: "Orta", value: "20.40", img: modalMiddleImg },
        { name: "Böyük", value: "27.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: mexicanoPizza,
      favoritesImg: favoritesLogo,
      title: "MEXICANO",
      text: "Hisə verilmiş Toyuq, Kub Sucuk, Yaşıl Bibər, Qarğıdalı, Pomidor, Pul Bibər, Jalapeno Bibər, Pizza Sousu, Mozzarella Pendiri",
      price: "12.40",
      azeManatLogo: manatLogo,  
      modalPizzaImg: modalMexicanoImg,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "12.40", img: modalLittleImg },
        { name: "Orta", value: "20.40", img: modalMiddleImg },
        { name: "Böyük", value: "27.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: steykPizza,
      favoritesImg: favoritesLogo,
      title: "STEYK",
      text: "Steyk, Göbələk, Yaşıl Bibər, Soğan, Pizza Sousu, Mozzarella Pendiri",
      price: "12.40",
      azeManatLogo: manatLogo,
      modalPizzaImg: modalSteykImg,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "12.40", img: modalLittleImg },
        { name: "Orta", value: "20.40", img: modalMiddleImg },
        { name: "Böyük", value: "27.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: sucukPizza,
      favoritesImg: favoritesLogo,
      title: "MANQAL SUCUK",
      text: "Manqal Sucuk, Göbələk, Yaşıl Bibər, Pizza Sousu, Mozzarella Pendiri",
      price: "12.40",
      modalPizzaImg: modalManqalImg,
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "12.40", img: modalLittleImg },
        { name: "Orta", value: "20.40", img: modalMiddleImg },
        { name: "Böyük", value: "27.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
  ],
  favorit: [
    {
      pizzaImg: cikenPizza,
      favoritesImg: favoritesLogo,
      modalPizzaImg: modalChickenImg,
      title: "ÇIKEN KIKERS",
      text: "Toyuq Dilimləri, Göbələk, Yaşıl Bibər, Qara Zeytun, Pomidor, Pizza Sousu, Mozzarella Pendiri",
      price: "10.40",
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "10.40", img: modalLittleImg },
        { name: "Orta", value: "17.40", img: modalMiddleImg },
        { name: "Böyük", value: "24.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: qrilToyuqPizza,
      favoritesImg: favoritesLogo,
      title: "QRIL TOYUQ",
      text: "Hisə verilmiş Toyuq, Göbələk, Yaşıl Bibər, Qarğıdalı, Pizza Sousu, Mozzarella Pendiri",
      price: "10.40",
      modalPizzaImg: modalQrilImg,
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "10.40", img: modalLittleImg },
        { name: "Orta", value: "17.40", img: modalMiddleImg },
        { name: "Böyük", value: "24.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: marqeritaPizza,
      favoritesImg: favoritesLogo,
      popularImg: popularAdded,
      title: "MARQERITA",
      modalPizzaImg: modalMarqeritaImg,
      text: "Hisə verilmiş Toyuq, Göbələk, Yaşıl Bibər, Qarğıdalı, Pizza Sousu, Mozzarella Pendiri",
      price: "10.40",
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "10.40", img: modalLittleImg },
        { name: "Orta", value: "17.40", img: modalMiddleImg },
        { name: "Böyük", value: "24.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: pepperoniPizza,
      modalPizzaImg: modalPepperoniImg,
      favoritesImg: favoritesLogo,
      popularImg: popularLogo,
      title: "PEPPERONI",
      text: "Pepperoni, Pizza Sousu, Mozzarella Pendiri",
      price: "10.40",
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "10.40", img: modalLittleImg },
        { name: "Orta", value: "17.40", img: modalMiddleImg },
        { name: "Böyük", value: "24.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: aciliPeppePizza,
      modalPizzaImg: modalSpicyPepperoniImg,
      favoritesImg: favoritesLogo,
      title: "ACILI PEPPERONI",
      text: "Pepperoni, Göbələk, Jalapeno Bibər, Pizza Sousu, Mozzarella Pendiri",
      price: "10.40",
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "10.40", img: modalLittleImg },
        { name: "Orta", value: "17.40", img: modalMiddleImg },
        { name: "Böyük", value: "24.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: vegiPizza,
      modalPizzaImg: modalVegiImg,
      favoritesImg: favoritesLogo,
      title: "VEGI",
      text: "Göbələk, Yaşıl Bibər, Qara Zeytun, Qarğıdalı, Soğan, Pizza Sousu, Mozzarella Pendiri",
      price: "10.40",
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "10.40", img: modalLittleImg },
        { name: "Orta", value: "17.40", img: modalMiddleImg },
        { name: "Böyük", value: "24.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: twoPizza,
      modalPizzaImg: modalFitImg,
      favoritesImg: favoritesLogo,
      title: "FIT & FREŞ",
      text: "Yaşıl Bibər, Qara Zeytun, Feta Pendiri, Pomidor, Pizza Sousu, Mozzarella Pendiri",
      price: "10.40",
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "10.40", img: modalLittleImg },
        { name: "Orta", value: "17.40", img: modalMiddleImg },
        { name: "Böyük", value: "24.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: bolPizza,
      favoritesImg: favoritesLogo,
      modalPizzaImg: modalBolImg,
      title: "BOL 5-LI",
      text: "Pepperoni, Dilim Sucuk, Yaşıl Bibər, Qara Zeytun, Pizza Sousu, Mozzarella Pendiri",
      price: "10.40",
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "10.40", img: modalLittleImg },
        { name: "Orta", value: "17.40", img: modalMiddleImg },
        { name: "Böyük", value: "24.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: sosialPizza,
      favoritesImg: favoritesLogo,
      title: "SOSIAL",
      text: "Dilim Sucuk, Göbələk, Qarğıdalı, Pomidor, Kəklikotu, Pizza Sousu, Mozzarella Pendiri",
      price: "10.40", 
       modalPizzaImg: modalSosialImg,
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "10.40", img: modalLittleImg },
        { name: "Orta", value: "17.40", img: modalMiddleImg },
        { name: "Böyük", value: "24.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: hawaiianPizza,
      favoritesImg: favoritesLogo,
      title: "HAWAIIAN",
      text: "Mal Əti Vetçinası, Ananas, Pizza Sousu, Mozzarella Pendiri",
      price: "10.40",
      modalPizzaImg: modalHavaiiImg,
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "10.40", img: modalLittleImg },
        { name: "Orta", value: "17.40", img: modalMiddleImg },
        { name: "Böyük", value: "24.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: portofinoPizza,
      favoritesImg: favoritesLogo,
      title: "PORTOFINO",
      text: "Mal Əti Vetçinası, Göbələk, Yaşıl Bibər, Soğan, Pizza Sousu, Mozzarella Pendiri",
      price: "10.40",
      modalPizzaImg: modalPortofinoImg,
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "10.40", img: modalLittleImg },
        { name: "Orta", value: "17.40", img: modalMiddleImg },
        { name: "Böyük", value: "24.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
    {
      pizzaImg: kalipsoPizza,
      favoritesImg: favoritesLogo,
      title: "KALIPSO",
      text: "Ton Balığı, Qarğıdalı, Pomidor, Soğan, Pizza Sousu, Mozzarella Pendiri",
      price: "10.40",
      azeManatLogo: manatLogo,
      modalPizzaImg: modalKalipsoImg,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "10.40", img: modalLittleImg },
        { name: "Orta", value: "17.40", img: modalMiddleImg },
        { name: "Böyük", value: "24.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
  ],
  halfToHalf: [
    {
      pizzaImg: halfToHalf,
      title: "YARI-YARIYA",
      text: "Seçə bilmirsiz? Onda bir pizzada iki ləzzət…",
      modalPizzaImg: halfToHalf,
      price: "10.40",
      azeManatLogo: manatLogo,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "10.40", img: modalLittleImg },
        { name: "Orta", value: "17.40", img: modalMiddleImg },
        { name: "Böyük", value: "24.40", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
  ],
  createPizza: [
    {
      pizzaImg: myCreatePizza,
      title: "ÖZ PİZZANI YARAT",
      text: "Mozzarella Pendiri, Pizza Sousu",
      price: "9.00",
      azeManatLogo: manatLogo,
      modalPizzaImg: modalCreateImg,
      startTitle: "-dan başlıyaraq",
      sizes: [
        { name: "Kiçik", value: "9.00", img: modalLittleImg },
        { name: "Orta", value: "15.40", img: modalMiddleImg },
        { name: "Böyük", value: "21.90", img: modalBigImg },
      ],
      slice: [
        { name: "Normal Kəsim", img: modalNormalSlice, value: "6 dilim" },
        { name: "2 qat kəsim", img: modalTwiceSlice, value: "12 dilim" },
        { name: "4 qat kəsim", img: modalFourCorners, value: "16 dilim" },
      ],
      pastry: [
        {pastryTitle: "Klassik xəmir" ,pastryImg: pastryKlassikImg},
        {pastryTitle: "İncə xəmir" ,pastryImg: pastryThinImg},
        {pastryTitle: "İncəcik xəmir" ,pastryImg: pastryThinnestImg},
        {pastryTitle: "İkiqat xəmir(Mozzarella) +4.00 azn" ,pastryImg: pastryDuplexImg},
        {pastryTitle: "İkiqat xəmir(Çeddar)" ,pastryImg: pastryDuplexImg},
      ],
      side: [
       {sideTitle: "Mozzarella Kənar +3.5", sideImg: sideMozzarellaImg,},
       {sideTitle: "Kolbasa Kənar +3.5", sideImg: sideColbasaImg},
       {sideTitle: "Parmezan Kənar +2.5", sideImg: sideParmezanImg},
       {sideTitle: "Sarımsaq Souslu Kənar +2.5", sideImg: sideGarlicImg},
     ]
    },
  ],
};

export default pizzaData;
