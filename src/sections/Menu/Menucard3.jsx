import React from "react";
import "./Menucard3.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import nalli from "../../assets/Nalli Biryani.png";
import karidosa from "../../assets/karidosai.png";
import paya from "../../assets/paya.png";
import podimas from "../../assets/podimas.png";
import crab from "../../assets/crab (1).png";
import kudal from "../../assets/kudalvaruval.png"
import nattukozhipulavu from  "../../assets/nattukozhipulavu.jpg"
import muttondalcha from "../../assets/mutton dalcha.jpg"
import kiliparatto from "../../assets/kizhi porotta.jpg"
import meenpollichathu from "../../assets/Meen Polichathu.jpg"
import kudalcurry from "../../assets/kudal kari.jpg"
import nalliwp from "../../assets/nalli masala with porotta.jpg" 
import briyani from "../../assets/Ambur Biryani goat (1).png"

import idli from '../../assets/idli.png'
import vada from '../../assets/vada.png'
import samosa from '../../assets/samosa.png'
import v4 from '../../assets/carrot halwa.png'
import ennaikathri from '../../assets/ennai kathari.png'
import Menucard4 from "./Menucard4";
import Menucardparotta from "./Menucardparotta";

const nonVeg = [
  {
    id: 1,
    image: nalliwp,
    name: "2 paraotta w nalli",
    desc: "Mutton marrow masala served with soft layered parottas on side",
    price: "$35"
  },
  {
    id: 2,
    image: crab,
    name: "Nandu Masala", // Crab Masala
    desc: "Crab cooked in a rich, spicy masala",
    price: "$25"
  },
  {
    id: 3,
    image: kudal,
    name: "Kudal Varuval",
    desc: "Traditional spicy stir-fry of goat intestines with bold spices",
    price: "$25"
  },
  {
    id: 4,
    image: nattukozhipulavu,
    name: "Naatu Kozhi Pulao",
    desc: "Country chicken cooked with aromatic rice and spices",
    price: "$23"
  },
  {
    id: 5,
    image: muttondalcha,
    name: "Mutton Dalcha",
    desc: "Lentil and mutton stew cooked with mild spices",
    price: "$22"
  },
  {
    id: 6,
    image: kiliparatto,
    name: "Kizhi Parotta",
    desc: "Flaky parotta layered with spicy meat masala, wrapped and slow-cooked",
    price: "$25"
  },
  {
    id: 7,
    image: kudalcurry,
    name: "Kudal Curry",
    desc: "Slow-cooked goat intestine in a flavorful spice gravy",
    price: "$25"
  },
  {
    id: 8,
    image: meenpollichathu,
    name: "Meen Pollichathu",
    desc: "Fish marinated in spices, wrapped in banana leaf, and slow-cooked",
    price: "$30"
  },
  {
    id: 9,
    image: briyani,
    name: "Ambur Mutton Biryani",
    desc: "Seeraga samba rice cooked with tender mutton and aromatic spices",
    price: "$25"
  }
];

const Menucard3 = () => {
  return (
    <>
    <section className="menu-showcase">

      {/* Featured Dish */}

      <div className="featured-dish">

        <div className="featured-image">

          <img src={nalli} alt="Chicken 65" />

        </div>

        <div className="featured-content">

          <small>Chef's Signature</small>

          <h2>Nalli Briyani</h2>

          <div className="rating">

            ★★★★★
          </div>
          <div className="featured-price">
  <span>$35</span>
</div>

          <p>
            One of our most loved dishes prepared using freshly ground
            Chettinad masala, curry leaves and traditional recipes passed
            through generations.
          </p>

          <div className="dish-tags">

            <span>Fresh Chicken</span>

            <span>Traditional Recipe</span>

            <span>Chettinad Spice</span>

          </div>

        </div>

      </div>

      {/* Dish Cards — Non-Veg Slider */}

      <div className="nonveg-slider">

        <button
          type="button"
          className="slider-btn slider-prev"
          aria-label="Previous dish"
        >
          ❮
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
          }}
          spaceBetween={30}
          slidesPerView={3}
          loop={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          className="nonveg-swiper"
        >

          {nonVeg.map((dish) => (

            <SwiperSlide key={dish.id}>

              <div className="dish-card">

                <img src={dish.image} alt={dish.name} />

                <div className="dish-body">

                  <h3>{dish.name}</h3>

                  {/* <div className="stars">★★★★★</div> */}

                  <p>{dish.desc}</p>

                  <div className="dish-footer">

  {/* <span>Authentic Chettinad Recipe</span> */}

  <strong>{dish.price}</strong>

</div>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

        <button
          type="button"
          className="slider-btn slider-next"
          aria-label="Next dish"
        >
          ❯
        </button>

      </div>

    </section>

    {/* ===========================
      VEG SPECIAL
=========================== */}

{/* <section className="veg-special">

  <div className="veg-left">

    <img src={ennaikathri} alt="Paneer Pepper Fry" />

    <div className="veg-overlay">

      <span>CHEF'S VEG PICK</span>

      <h2>Ennai Kathirikai</h2>

      <p>
        Tender baby brinjals stuffed with aromatic Chettinad spices
      and slow-cooked in rich sesame oil for an authentic, flavorful
      South Indian delicacy.
      </p>

    </div>

  </div>

  <div className="veg-right">

    <div className="veg-title">

      <span>VEGETARIAN SPECIALS</span>

      <h2>Fresh • Healthy • Authentic</h2>

      <p>
        Prepared daily using farm-fresh vegetables and traditional
        South Indian recipes.
      </p>

    </div>

    <div className="veg-list">

  <div className="veg-item">

    <img src={idli} alt="Idli" />

    <div>
      <h3>Soft Idli</h3>
      <p>Steamed rice cakes served soft, fluffy, and fresh every day.</p>
    </div>

  </div>

  <div className="veg-item">

    <img src={vada} alt="Medu Vada" />

    <div>
      <h3>Medhu Vada</h3>
      <p>Golden crispy lentil doughnuts with a soft center and authentic South Indian flavor.</p>
    </div>

  </div>

  <div className="veg-item">

    <img src={samosa} alt="Samosa" />

    <div>
      <h3>Crispy Samosa</h3>
      <p>Flaky pastry stuffed with spicy potato filling and fried to golden perfection.</p>
    </div>

  </div>

</div>
  </div>

</section> */}

<Menucardparotta/>
<Menucard4/>
</>
  );
};

export default Menucard3;