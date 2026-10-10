import React from "react";
import "./catering.css";
import Sfooter from "../Footer/Sfooter";

const Catering = () => {

  const biryani = [
    ["VEG", "40", "60", "140", "170"],
    ["PANEER", "60", "80", "150", "190"],
    ["CHICKEN", "50", "75", "140", "170"],
    ["BONELESS CH", "65", "80", "150", "180"],
    ["MUTTON", "70", "90", "160", "190"],
  ];

  const curry = [
    ["VEG", "40", "60", "140", "170"],
    ["PANEER", "60", "80", "150", "190"],
    ["CHICKEN", "50", "75", "140", "170"],
    ["MUTTON", "70", "90", "160", "190"],
  ];

  const appetizers = [
    ["VEG", "50", "70", "150", "180"],
    ["PANEER", "70", "90", "160", "200"],
    ["CHICKEN", "70", "95", "160", "190"],
    ["MUTTON", "90", "110", "180", "210"],
    ["FISH", "80", "100", "170", "210"],
  ];

  const phoneNumber = "919884292625";
  const message = "Hello Masala Cafe, I would like to know more about your Catering Service";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <>

{/* 
      <section className="catering">

        <div className="catering-content">

          <h1>Catering</h1>

          <p>
            Ungaloda special occasions-ku, enga authentic Chettinad
            food-oda celebration-a innum special-ah maathunga! 😋
          </p>

          <button className="catering-btn">
            Enquire Now
          </button>

        </div>

      </section> */}


     

      <section className="catering-price-section">

        <div className="catering-price-container">

          <h2 className="price-list-title">
            PARTY ORDER TRAY PRICE LIST
          </h2>


          <div className="price-table-wrapper">

            <div className="price-table">

              {/* MAIN HEADER */}

              <div className="price-main-header">

                <div>ITEM</div>
                <div>FAMILY PACK</div>
                <div>SMALL TRAY</div>
                <div>MEDIUM TRAY</div>
                <div>LARGE TRAY</div>

              </div>

              <div className="price-category biryani-category">

                <div className="price-category-header">

                  <div>BIRYANI</div>
                  <div>5 PEOPLE</div>
                  <div>8 PEOPLE</div>
                  <div>10 PEOPLE</div>
                  <div>15 PEOPLE</div>

                </div>

                {biryani.map((item, index) => (

                  <div className="price-data-row" key={index}>

                    {item.map((value, i) => (
                      <div key={i}>{value}</div>
                    ))}

                  </div>

                ))}

              </div>

              <div className="price-category curry-category">

                <div className="price-category-header">

                  <div>CURRY</div>
                  <div>7 PEOPLE</div>
                  <div>10 PEOPLE</div>
                  <div>15 PEOPLE</div>
                  <div>20 PEOPLE</div>

                </div>

                {curry.map((item, index) => (

                  <div className="price-data-row" key={index}>

                    {item.map((value, i) => (
                      <div key={i}>{value}</div>
                    ))}

                  </div>

                ))}

              </div>

              <div className="price-category appetizers-category">

                <div className="price-category-header">

                  <div>APPETIZERS</div>
                  <div>7 PEOPLE</div>
                  <div>10 PEOPLE</div>
                  <div>15 PEOPLE</div>
                  <div>20 PEOPLE</div>

                </div>

                {appetizers.map((item, index) => (

                  <div className="price-data-row" key={index}>

                    {item.map((value, i) => (
                      <div key={i}>{value}</div>
                    ))}

                  </div>

                ))}

              </div>


              {/* ================= DESSERT ================= */}

              <div className="price-category dessert-category">

                <div className="price-category-header">

                  <div>DESSERT</div>
                  <div></div>
                  <div>10 PEOPLE</div>
                  <div>15 PEOPLE</div>
                  <div>20 PEOPLE</div>

                </div>

                <div className="price-data-row">

                  <div></div>
                  <div></div>
                  <div>80</div>
                  <div>140</div>
                  <div>200</div>

                </div>

              </div>

            </div>

          </div>


          {/* Price list bottom enquiry */}

          <div className="price-enquiry">

            <h3>
              Planning a Special Occasion?
            </h3>

            <p>
                Ungaloda special occasions-ku, enga authentic Chettinad
            food-oda celebration-a innum special-ah maathunga! 😋
            </p>

           <button
  className="price-enquiry-btn"
  onClick={() => window.open(whatsappURL, "_blank")}
>
  <span>Enquire Now</span>
  <span>↗</span>
</button>

          </div>

        </div>

      </section>

      <Sfooter />

    </>
  );
};

export default Catering;