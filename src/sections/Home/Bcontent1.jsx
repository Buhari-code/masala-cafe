import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "../../styles/Bcontent1.css";

import kamal from "../../assets/kamal.png";
import leafLeft from "../../assets/banana-bottom.png";

import chicken from "../../assets/mansattisoru.png";
import mutton from "../../assets/mutton.png";
import chickenGravy from "../../assets/chickengravy.png";
import Mcspecial from "./Mcspecial";
import { getWeekendSpecial, weekendSpecialService } from "../../services/weekend.service";
import { useQuery } from "@tanstack/react-query";

const weekendDishes = [
  {
    id: 1,
    name: "Chicken Satti Soru",
    image: chicken,
    offerPrice: "$15",
    desc: "Slow-cooked in traditional clay pots with aromatic spices and handcrafted Chettinad flavors.",
  },
  {
    id: 2,
    name: "Mutton Ghee Roast",
    image: mutton,
    offerPrice: "$17",
    desc: "Tender mutton roasted in pure ghee with freshly ground Chettinad spices.",
  },
  {
    id: 3,
    name: "Chettinad Chicken Gravy",
    image: chickenGravy,
    offerPrice: "$14",
    desc: "Rich and fiery Chettinad chicken curry simmered with signature house spices.",
  },
  {
    id: 4,
    name: "Nalli Briyani",
    image: chicken,
    offerPrice: "$16",
    desc: "Fragrant basmati rice cooked with tender mutton nalli and authentic Chettinad spices.",
  },
  {
    id: 5,
    name: "Mutton Biriyani",
    image: mutton,
    offerPrice: "$16",
    desc: "Aromatic rice layered with tender mutton and traditional biriyani masala.",
  },
  {
    id: 6,
    name: "Chettinad Chicken Curry",
    image: chickenGravy,
    offerPrice: "$14",
    desc: "Classic Chettinad chicken prepared with roasted spices, curry leaves and fresh herbs.",
  },
];

const Bcontent1 = () => {
  const trackRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const rafRef = useRef(null);

  const totalDots = Math.ceil(weekendDishes.length / 3);

  const getStep = () => {
    const track = trackRef.current;
    if (!track) return 0;

    const card = track.querySelector(".weekend-card");
    if (!card) return 0;

    const cardWidth = card.getBoundingClientRect().width;
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.gap) || 0;

    return (cardWidth + gap) * 3;
  };

  const scrollByCards = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const step = getStep();
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const goToDot = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const step = getStep();
    track.scrollTo({ left: index * step, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;

      const track = trackRef.current;
      const step = getStep();
      if (!track || !step) return;

      const index = Math.round(track.scrollLeft / step);
      setActiveDot(Math.min(Math.max(index, 0), totalDots - 1));
    });
  };

  const restaurantId = localStorage.getItem('restaurantId')

  const { data: weekend } = useQuery({
    queryKey: ['weekend'],
    queryFn: () => weekendSpecialService()
  })

  console.log(weekend?.weekendSpecial)

  const weekendSpecial = weekend?.weekendSpecial

  return (
    <section className="signature">
      <p className="background-text">AARAMBIKKALAMA </p>

      {/* Decorative leaves */}
      <img src={leafLeft} className="deco-leaf left" alt="" aria-hidden="true" />
      <img src={leafLeft} className="deco-leaf right" alt="" aria-hidden="true" />

      <div className="kamal-wrap">
        <img src={chicken} className="kamal-float left" alt="" aria-hidden="true" />
        <img src={kamal} className="kamal" alt="Chef special" />
        <img src={chickenGravy} className="kamal-float right" alt="" aria-hidden="true" />
      </div>

      <div className="container">

        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          WEEKEND SPECIAL
        </motion.span>

        {/* <motion.div
          className="offer-badge"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <span>Limited Time</span>
          <strong>20% OFF THIS WEEKEND</strong>
        </motion.div> */}

        <div className="weekend-carousel">

          <button
            type="button"
            className="weekend-arrow weekend-prev"
            onClick={() => scrollByCards(-1)}
            aria-label="Previous dish"
          >
            ‹
          </button>

          <div className="weekend-track" ref={trackRef} onScroll={handleScroll}>
            {weekendSpecial?.map((dish, index) => (
              <motion.div
                className="weekend-card"
                key={dish._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="weekend-image">
                  <img src={dish.image} alt={dish.title} />
                </div>

                <div className="weekend-content">
                  <h3>{dish.title}</h3>
                  <p>{dish.description}</p>

                  <div className="weekend-price-row">
                    {/* <span className="old-price">{dish.price}</span> */}
                    <span className="offer-price">{dish.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            type="button"
            className="weekend-arrow weekend-next"
            onClick={() => scrollByCards(1)}
            aria-label="Next dish"
          >
            ›
          </button>

        </div>

        {totalDots > 1 && (
          <div className="weekend-dots">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                type="button"
                key={index}
                className={`weekend-dot${activeDot === index ? " active" : ""}`}
                onClick={() => goToDot(index)}
                aria-label={`Go to weekend specials page ${index + 1}`}
              />
            ))}
          </div>
        )}

      </div>
      <Mcspecial/>
    </section>
  );
};

export default Bcontent1;