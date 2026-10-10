import React from "react";
import "../../styles/Bcontent3.css";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/mushroom chettinad masala.png";
import img2 from "../../assets/paneer pepper fry.png";
import img3 from "../../assets/kozhi milagu rasam.png";
import img4 from "../../assets/fried rice.png";

import ellarumvanga from "../../assets/muni.png";
import chickenFloat from "../../assets/mchicken.png";

const cards = [
  {
    id: 1,
    image: img1,
    title: "Mushroom Chettinad Masala",
    desc: "A spicy and creamy Chettinad mushroom curry ",
  },
  {
    id: 2,
    image: img2,
    title: "Paneer Pepper Fry",
    desc: "Soft paneer cubes tossed with freshly crushed black pepper",
  },
  {
    id: 3,
    image: img3,
    title: "Kozhi Milagu Rasam",
    desc: "Tender chicken, bold black pepper, and rich Chettinad spices in every flavorful sip.",
  },
  {
    id: 4,
    image: img4,
    title: "Egg Fried Rice",
    desc: "Perfectly stir-fried rice with scrambled eggs, spring onions, and authentic Asian flavors.",
  },
];

export default function Bcontent3() {
  const navigate = useNavigate();
  return (
    <section className="curve-section">
      <svg className="curve-svg" viewBox="0 0 1200 220">
        <defs>
          <path id="curvePath" d="M0 170 C250 20 950 20 1200 170" />
        </defs>

        <text className="curve-text">
          <textPath href="#curvePath" startOffset="51%" textAnchor="middle">
            ...INNAIKKU ORU PUDI...
          </textPath>
        </text>
      </svg>

      <div className="ellarum-wrapper">
        <img
          src={chickenFloat}
          className="chicken-float left"
          alt=""
          aria-hidden="true"
        />
        <img src={ellarumvanga} className="ellarum-vanga" alt="Ellarum Vanga" />
        <img
          src={chickenFloat}
          className="chicken-float right"
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className="events-slider">
        <div className="slide-track">
          {[...cards, ...cards].map((card, index) => (
            <div className="event-card" key={index}>
              <img src={card.image} alt={card.title} />

              <div className="event-content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <button onClick={() => navigate("/menu")} className="eventcontentbutton">Click Here To Explore More Menu</button> */}
    </section>
  );
}