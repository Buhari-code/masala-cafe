import React from 'react'
import "./Menucardparotta.css"

import parotta from "../../assets/parottaa.png";
// import parotta2 from "../../assets/parottaa.png";

import vegKuruma from "../../assets/vegkuruma.jpeg";
import eggKuruma from "../../assets/eggkuruma.jpg";
import chickenKuruma from "../../assets/chicken kuruma.jpeg";
import muttonKuruma from "../../assets/mutton kuruma.jpg";
import kudalKulambu from "../../assets/kudalkulumbu.jpeg";
import meenKulambu from "../../assets/meen kazumbu.png";

import vegKothu from "../../assets/veg kothu parotta.jpg";
import eggKothu from "../../assets/egg kothu parotta.jpg";
import chickenKothu from "../../assets/chicken kothu parotta.jpg";
import muttonKothu from "../../assets/mutton kothu parotta.jpg";

import parottaComedy from "../../assets/parottacomedy.jpeg"

const Menucardparotta = () => {

    const parottaItems = [
  {
    id: 1,
    name: "Plain Parotta",
    image: parotta,
    price: "₹25",
    desc: "Flaky, layered South Indian parotta prepared fresh and served hot."
  },
//   {
//     id: 2,
//     name: "Special Parotta",
//     image: parotta2,
//     price: "₹35",
//     desc: "Crispy outside and soft inside, freshly prepared in traditional style."
//   }
];

const kurumaItems = [
  {
    id: 1,
    name: "Veg Kuruma",
    image: vegKuruma,
    price: "$16",
    desc: "Mixed vegetables cooked in a creamy and aromatic South Indian kuruma."
  },
  {
    id: 2,
    name: "Egg Kuruma",
    image: eggKuruma,
    price: "$18",
    desc: "Boiled eggs cooked in a rich, flavorful kuruma gravy."
  },
  {
    id: 3,
    name: "Chicken Kuruma",
    image: chickenKuruma,
    price: "$19",
    desc: "Tender chicken simmered in a rich traditional kuruma gravy."
  },
  {
    id: 4,
    name: "Mutton Kuruma",
    image: muttonKuruma,
    price: "$20",
    desc: "Tender mutton cooked slowly with aromatic spices and creamy gravy."
  },
  {
    id: 5,
    name: "Kudal Kulambu",
    image: kudalKulambu,
    price: "$20",
    desc: "Authentic Chettinad style goat intestine curry with roasted spices."
  },
  {
    id: 6,
    name: "Meen Kulambu",
    image: meenKulambu,
    price: "$20",
    desc: "Traditional South Indian fish curry prepared with aromatic spices."
  }
];

const kothuItems = [
  {
    id: 1,
    name: "Veg Kothu Parotta",
    image: vegKothu,
    price: "$16",
    desc: "Chopped parotta tossed with vegetables, spices and traditional masala."
  },
  {
    id: 2,
    name: "Egg Kothu Parotta",
    image: eggKothu,
    price: "$18",
    desc: "Flaky parotta chopped and tossed with egg, onions and aromatic spices."
  },
  {
    id: 3,
    name: "Chicken Kothu Parotta",
    image: chickenKothu,
    price: "$19",
    desc: "Chopped parotta tossed with tender chicken, egg and spicy masala."
  },
  {
    id: 4,
    name: "Mutton Kothu Parotta",
    image: muttonKothu,
    price: "$20",
    desc: "Traditional kothu parotta prepared with tender mutton and Chettinad spices."
  }
];

  return (
    <section className="parotta-section">

  <div className="parotta-heading">
    <h2>
      Parotta & Kothu Parotta
    </h2>

    <p>
      Flaky parottas, rich kurumas and flavourful kothu
      parottas prepared fresh with authentic South Indian
      flavours.
    </p>

  </div>


  {/* =================================
      PAROTTA
  ================================= */}

  <div className="parotta-block">

    <div className="category-heading">

      <h3>Parotta</h3>

    </div>


    <div className="parotta-layout">

      {/* LEFT - PAROTTA IMAGES */}

      <div className="parotta-main">

        {parottaItems.map((item) => (

          <div
            className="parotta-main-card"
            key={item.id}
          >

            <div className="parotta-main-image">

              <img
                src={item.image}
                alt={item.name}
              />

            </div>

            <div className="parotta-main-content">

              <h4>{item.name}</h4>

              <p>{item.desc}</p>

            </div>
            <div className="parotta-comedy">

  <img
    src={parottaComedy}
    alt="Funny parotta illustration"
  />



</div>
  <div className="comedy-text">
    <span>😋 PAROTTA LOVERS</span>
    <p>
      "Two parotta is never enough!"
    </p>
  </div>

          </div>

        ))}

      </div>


      {/* RIGHT - KURUMA */}

      <div className="kuruma-side">

        <div className="side-heading">

          <span>YOUR CHOICE</span>

          <h3>Served With</h3>

        </div>


        <div className="kuruma-list">

          {kurumaItems.map((item) => (

            <div
              className="kuruma-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="kuruma-content">

                <div>

                  <h4>{item.name}</h4>

                  <p>{item.desc}</p>

                </div>

                <strong>{item.price}</strong>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>


  {/* =================================
      KOTHU PAROTTA
  ================================= */}

  <div className="kothu-section">

    <div className="category-heading">

      <h3>Kothu Parotta</h3>

    </div>


    <div className="kothu-grid">

      {kothuItems.map((item) => (

        <div
          className="kothu-card"
          key={item.id}
        >

          <div className="kothu-image">

            <img
              src={item.image}
              alt={item.name}
            />

            <span className="price-tag">
              {item.price}
            </span>

          </div>


          <div className="kothu-content">

            <h4>{item.name}</h4>

            <p>{item.desc}</p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
  )
}

export default Menucardparotta