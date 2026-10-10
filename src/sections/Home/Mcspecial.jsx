import React from "react";
import "../../styles/mcspecial.css";

import biryani from "../../assets/briyani.png";
import chicken from "../../assets/butter chicken.png";
import meen from "../../assets/meen kazumbu.png";
import parotta from "../../assets/parottaa.png";
import sambar from "../../assets/sambar.png";
import { useNavigate } from "react-router-dom";

const specials = [
  {
    id: 1,
    image: biryani,
    title: "Dindigul Biryani",
    description: "Aromatic rice with tender meat and authentic spices",
  },
  {
    id: 2,
    image: chicken,
    title: "Butter Chicken",
    description: "Creamy, rich chicken cooked in flavorful gravy",
  },
  {
    id: 3,
    image: meen,
    title: "Meen Kuzhambu",
    description: "Traditional fish curry with bold Chettinad flavors",
  },
  {
    id: 4,
    image: parotta,
    title: "Parotta",
    description: "Flaky layered parotta served fresh and hot",
  },
  {
    id: 5,
    image: sambar,
    title: "Special Sambar",
    description: "Fresh vegetables simmered with aromatic lentils and spices",
  },
];

const Mcspecial = () => {
  const navigate = useNavigate();
  return (
    <section className="mc-special">

      <div className="mc-special-heading">
        <h2>
          Masala Cafe <strong>Special</strong>
        </h2>

        <p>
          A delicious collection of our most loved dishes,
          crafted with authentic South Indian flavors.
        </p>
      </div>

      <div className="mc-special-wrapper">
        <div className="mc-special-scroll">

          {specials.map((item) => (
            <div className="mc-special-card" key={item.id}>

              <div className="mc-special-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="mc-special-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button onClick={() => navigate("/menu")}>Explore Dish</button>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Mcspecial;