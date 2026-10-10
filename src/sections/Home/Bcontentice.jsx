import React from "react";
import "../../styles/Bcontentice.css";

import juice from "../../assets/gulab jamun.png";
import mojito from "../../assets/tea.png";
import shake from "../../assets/lemon soda.png";
import comedyImage from "../../assets/sweetcomedy.png";

const desserts = [
  {
    id: 1,
    image: juice,
    title: "Gulabjamun",
    price: "$8",
    description:
      "Warm soft gulab jamuns soaked in rich fragrant sugar syrup"
  },
  {
    id: 2,
    image: mojito,
    title: "Masala Tea",
    price: "$4",
    description:
      "Hot refreshing tea infused with traditional Indian spices"
  },
  {
    id: 3,
    image: shake,
    title: "Lemon Soda",
    price: "$6",
    description:
      "Chilled sparkling lemon soda with a refreshing citrus burst"
  },
];

const Bcontentice = () => {
  return (
    <>
      <section className="dessert-section">
        <div className="dessert-container">
          <div className="dessert-heading">
            <span className="dessert-tag">DESSERTS & REFRESHMENTS</span>
            <h2 className="dessert-title">
              Sweet Ending,
              <span> Happy Heart!</span>
            </h2>
            <p className="dessert-content">
              Fresh Juices, Creamy Ice Creams, Thick Milkshakes and Delicious
              Desserts... Every meal deserves a sweet ending!
            </p>
          </div>

          <div className="dessert-grid">
            {desserts.map((item) => (
              <div className="dessert-card" key={item.id}>
                <div className="dessert-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="dessert-body">
                  <h3>{item.title}</h3>
                   <p className="dessert-description">
    {item.description}
  </p>
                  <div className="dessert-bottom">
                    <span className="dessert-price">{item.price}</span>
                    {/* <button className="dessert-btn">Order</button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-banner">
        <div className="banner-left">
          <span className="banner-tag">LAST WARNING 😎</span>
          <h2>
            Dessert Skip
            <span> Pannadheenga!</span>
          </h2>
          <p>
            Saapadu mudinjudha? Ice Cream, Juice, Falooda, Brownie ellam
            waiting... Inga stop pannina experience complete aagadhu!
          </p>
          {/* <button className="banner-btn">Order Now</button> */}
        </div>

        <div className="banner-right">
          <img src={comedyImage} alt="Comedy mascot" />
        </div>
      </section>
    </>
  );
};

export default Bcontentice;