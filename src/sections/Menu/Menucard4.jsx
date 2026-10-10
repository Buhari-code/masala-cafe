import React from "react";
import "./Menucard4.css";

// import kudalvaruval from "../../assets/kudalvaruval.png";
// import lollipop from "../../assets/boneless.png";
// import halfboil from "../../assets/half boil.jpeg";
// import noodles from "../../assets/noodles.png";

import jigirthanda from "../../assets/jigirthanda.png";
import sarbath from "../../assets/sarbath.png";
import butturmilk from "../../assets/buttermilk.jpg";
import sweetLassi from "../../assets/sweetlassi.jpg";
import mangoLassi from "../../assets/mango lasi.png";
import rosemilk from "../../assets/rosemilk.png";
import lemonJuice from "../../assets/lemonsoda.jpg";
import lemonSoda from "../../assets/lemon soda.png";
import badamMilk from "../../assets/badam.jpeg";
import masalaTea from "../../assets/tea.png";
import coffee from "../../assets/filtercoffee.png";
import soda from "../../assets/soda.jpg";
import Water from "../../assets/water.jpg"
import masalasoda from "../../assets/masalasoda.jpeg"

import Sfooter from "../Footer/Sfooter";


// const dishes = [
//   {
//     id: 1,
//     name: "Kudal Varuval",
//     image: kudalvaruval,
//     desc: "Tender goat intestine stir-fried with authentic Chettinad spices and roasted to perfection.",
//     price: "₹180",
//   },
//   {
//     id: 2,
//     name: "Chicken Lollipop",
//     image: lollipop,
//     desc: "Juicy chicken wings marinated with signature spices and deep-fried until crispy and golden.",
//     price: "₹220",
//   },
//   {
//     id: 3,
//     name: "Half Boil",
//     image: halfboil,
//     desc: "Perfectly half-boiled eggs seasoned with black pepper and a touch of Chettinad masala.",
//     price: "₹60",
//   },
//   {
//     id: 4,
//     name: "Chicken Noodles",
//     image: noodles,
//     desc: "Wok-tossed noodles with tender chicken, fresh vegetables and flavorful Indo-Chinese spices.",
//     price: "₹180",
//   },
// ];


const drinks = [
  {
    id: 1,
    name: "Jigarthanda",
    image: jigirthanda,
    desc: "Madurai's famous chilled drink made with milk, badam pisin, nannari syrup and creamy ice cream.",
    price: "$15",
    info: "Madurai Special",
  },
  {
    id: 2,
    name: "Nannari Sarbath",
    image: sarbath,
    desc: "Refreshing herbal drink prepared with natural nannari syrup, lemon and chilled water.",
    price: "$7",
    info: "Herbal Refreshment",
  },
  {
    id: 3,
    name: "Butter Milk",
    image: butturmilk,
    desc: "Traditional South Indian buttermilk seasoned with fresh herbs and aromatic spices.",
    price: "$7",
    info: "Fresh & Chilled",
  },
  {
    id: 4,
    name: "Sweet Lassi",
    image: sweetLassi,
    desc: "Creamy yogurt blended with sugar for a smooth, refreshing and naturally rich drink.",
    price: "$7",
    info: "Creamy Refreshment",
  },
  {
    id: 5,
    name: "Mango Lassi",
    image: mangoLassi,
    desc: "Creamy yogurt blended with sweet ripe mangoes for a refreshing traditional drink.",
    price: "$7",
    info: "Fresh Mango",
  },
  {
    id: 6,
    name: "Rose Milk",
    image: rosemilk,
    desc: "Chilled milk infused with fragrant rose syrup for a sweet and refreshing treat.",
    price: "$6",
    info: "Rose Flavour",
  },
  {
    id: 7,
    name: "Lemon Juice",
    image: lemonJuice,
    desc: "Fresh lemon juice prepared with chilled water and a touch of sweetness.",
    price: "$6",
    info: "Fresh Lemon",
  },
  {
    id: 8,
    name: "Lemon Soda",
    image: lemonSoda,
    desc: "Refreshing lemon soda made with fresh lemon juice and chilled sparkling soda.",
    price: "$7",
    info: "Sparkling Refreshment",
  },
  {
    id: 9,
    name: "Badam Milk",
    image: badamMilk,
    desc: "Rich and creamy milk blended with aromatic badam and traditional flavours.",
    price: "$8",
    info: "Rich & Creamy",
  },
  {
    id: 10,
    name: "Masala Tea",
    image: masalaTea,
    desc: "Hot South Indian tea infused with aromatic spices for a warm and refreshing taste.",
    price: "$4",
    info: "Hot Beverage",
  },
  {
    id: 11,
    name: "Filter Coffee",
    image: coffee,
    desc: "Freshly brewed authentic South Indian filter coffee with rich aroma and smooth taste.",
    price: "$6",
    info: "Fresh Brew",
  },
  {
    id: 12,
    name: "Masala Soda",
    image: masalasoda,
    desc: "Fizzy soda blended with lemon and a spicy masala mix for a refreshing kick.",
    price: "$7",
    info: "Spicy & Fizzy",
  },
  {
    id: 13,
    name: "Soda",
    image: soda,
    desc: "Chilled sparkling soda served refreshing and crisp.",
    price: "$3",
    info: "Chilled Soda",
  },
  {
    id: 14,
    name: "Water",
    image: Water,
    desc: "Clean and refreshing bottled drinking water served chilled.",
    price: "$3",
    info: "Drinking Water",
  },
];


const Menucard4 = () => {

  /*
    14 items

    Row 1 → 4
    Row 2 → 3
    Row 3 → 4
    Row 4 → 3
  */

  const drinkRows = [
    drinks.slice(0, 4),
    drinks.slice(4, 7),
    drinks.slice(7, 11),
    drinks.slice(11, 14),
  ];


  return (
    <>

      {/* ==============================
          NON VEG SECTION
      ============================== */}

      {/* <section className="nonveg-section">

        <div className="nonveg-heading">

          <span>AUTHENTIC CHETTINAD</span>

          <h2>Non Veg Favourites</h2>

          <p>
            Traditional recipes, freshly prepared ingredients and
            authentic Chettinad flavours served with love.
          </p>

        </div>


        <div className="nonveg-grid">

          {dishes.map((item) => (

            <div
              className="nonveg-card"
              key={item.id}
            >

              <div className="nonveg-image">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="food-price">
                  {item.price}
                </div>

              </div>


              <div className="nonveg-content">

                <div className="food-top">

                  <h3>{item.name}</h3>

                  <span className="food-rating">
                    ★★★★★
                  </span>

                </div>

                <p>
                  {item.desc}
                </p>

                <div className="food-bottom">

                  <span>
                    Authentic Recipe
                  </span>

                  <span>
                    • Freshly Prepared
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section> */}



      {/* ==============================
          DRINKS SECTION
      ============================== */}

      <section
        className="drinks-section"
        id="section-drinks"
      >

        {/* Decorative elements */}

        <div className="gold-circle circle-one"></div>
        <div className="gold-circle circle-two"></div>


        {/* Heading */}

        <div className="drink-heading">

          <div className="heading-line">
            <span></span>
            <small>FRESH & REFRESHING</small>
            <span></span>
          </div>

          <h2>
            Juices & Refreshments
          </h2>

          <p>
            Freshly prepared traditional drinks and refreshing
            beverages to perfectly complement your meal.
          </p>

        </div>


        {/* =========================
            DRINK ROWS
        ========================= */}

        <div className="drinks-wrapper">

          {drinkRows.map((row, rowIndex) => (

            <div
              className={`drink-row ${
                row.length === 4
                  ? "row-four"
                  : "row-three"
              }`}
              key={rowIndex}
            >

              {row.map((drink, index) => (

                <article
                  className="drink-card"
                  key={`${drink.id}-${rowIndex}-${index}`}
                >

                  {/* Image */}

                  <div className="drink-image">

                    <div className="image-frame">

                      <img
                        src={drink.image}
                        alt={drink.name}
                      />

                    </div>

                    <span className="drink-price">
                      {drink.price}
                    </span>

                  </div>


                  {/* Content */}

                  <div className="drink-content">

                    <span className="drink-category">
                      {drink.info}
                    </span>

                    <h3>
                      {drink.name}
                    </h3>

                    <div className="small-line"></div>

                    <p>
                      {drink.desc}
                    </p>

                  </div>


                  {/* Footer */}

                  <div className="drink-footer">

                    {/* <span>
                      ✦ Freshly Prepared
                    </span> */}

                    <span className="stars">
                      ★★★★★
                    </span>

                  </div>

                </article>

              ))}

            </div>

          ))}

        </div>

      </section>


      <Sfooter />

    </>
  );
};


export default Menucard4;