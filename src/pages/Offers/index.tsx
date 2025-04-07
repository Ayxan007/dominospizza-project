import miniOffer from '../../assets/img/mini lezzet-600x600-eng-min.png'
import favoritesLogo from "../../assets/img/download (19).png";
import Navbar from '../Main/sections/Navbar';
import comboOffer from '../../assets/img/KomboMenu-600x600-en-min.png'
import twoPizzaOffer from '../../assets/img/2Small-600x600-en-min.png'
import freshOffer from '../../assets/img/ENG-600x600-fit&fresh-min.png'
import twoOneOffer from '../../assets/img/2Al1Ode-Dec23-600x600-eng-min.png'
import largeOffer from '../../assets/img/LargeMenu-Dec23-600x600-eng-min.png'
import twoLargeOffer from '../../assets/img/19,19-600x600-en-min.png'
import superOffer from '../../assets/img/SuperOnline-Dec23-600x600-eng-min.png'
import fourPizzaOffer from '../../assets/img/4OrtaPizza-Dec23-600x600-eng-min.png'
import sixPizzaOffer from '../../assets/img/6-neferlik-hezz-600x600-eng-min w.png'
import './index.css'


interface Offer {
    offerImg: string;
    title: string;
    favoritesLogo: string;
  }
  
  const offersData: Offer[] = [
    { offerImg: miniOffer , title: "2 Bites + 0.5L Fanta for 5.10 AZN", favoritesLogo: favoritesLogo  },
    { offerImg: comboOffer , title: "Small pizza + Potato Wedges + 0.5 L Drinks for 13.90 AZN", favoritesLogo: favoritesLogo  },
    { offerImg: twoPizzaOffer , title: "2 Small Pizzas for 17 AZN", favoritesLogo: favoritesLogo  },
    { offerImg: freshOffer , title: "Medium pizza + Salad for 18.30 AZN", favoritesLogo: favoritesLogo  },
    { offerImg: twoOneOffer , title: "2 Medium Pizzas for 20.40 AZN", favoritesLogo: favoritesLogo  },
    { offerImg: largeOffer , title: "1 Large Pizza + 1L Drink for 24.90 AZN", favoritesLogo: favoritesLogo  },
    { offerImg: twoLargeOffer , title: "1 Large Pizza + 1L Drink for 24.90 AZN", favoritesLogo: favoritesLogo  },
    { offerImg: superOffer , title: "2 Medium Pizzas + 1Lt Drink 27.90 AZN", favoritesLogo: favoritesLogo  },
    { offerImg: fourPizzaOffer , title: "4 Medium Pizzas for 44 AZN", favoritesLogo: favoritesLogo  },
    { offerImg: sixPizzaOffer , title: "2 Medium Pizzas + Chicken Kickers + CHICKEN WINGS + 6 Bites + CINNAMON ROLL for 55 AZN", favoritesLogo: favoritesLogo  },
  ];
  
  const Offer: React.FC = () => {
    return (
        <>
        <Navbar/>
      <div className="offer-container">
        {offersData.map((offer, index) => (
          <div key={index} className="offer-card">
            <div className="offer-img">
            <img src={offer.offerImg}/>
            </div>
            <div className="offer-card-down">
            <h3>{offer.title}</h3>
             <img src={favoritesLogo}/>
            </div>
          </div>
        ))}
      </div>
      </>
    );
  };
  
  export default Offer;
  