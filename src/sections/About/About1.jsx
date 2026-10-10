import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "./About1.css";
import { Link } from "react-router-dom";

import restaurantImg from "../../assets/masalacafe-interier.png";
import foundersImg from "../../assets/founder.png";
import Sfooter from "../Footer/Sfooter";


const whyChoose = [
  { icon: "🍛", title: "100% Fresh", sub: "Ingredients" },
  { icon: "🌶️", title: "Authentic", sub: "Chettinad Spices" },
  { icon: "👨‍🍳", title: "Master", sub: "Chefs" },
  { icon: "❤️", title: "Family", sub: "Friendly" },
  { icon: "⭐", title: "Premium", sub: "Taste" },
  { icon: "🏆", title: "Quality", sub: "Service" },
];

const stats = [
  { end: 10, suffix: "+", label: "Years" },
  { end: 80, suffix: "+", label: "Dishes" },
  { end: 1000, suffix: "+", label: "Happy Customers" },
  { end: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
];


const Counter = ({ end, suffix, decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(progress * end);
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(end);
    };
    requestAnimationFrame(tick);
  }, [isInView, end]);

  return (
    <span className="counter-number" ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const About1 = () => {
  return (
    <>
      <section className="why-choose">
        <div className="why-heading">
          <span>WHY CHOOSE MASALA CAFE</span>
          <h2>More Than Food, It's An Experience</h2>
        </div>

        {/* <div className="why-grid">
          {whyChoose.map((item, i) => (
            <motion.div
              className="why-card"
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="why-circle">
                <span>{item.icon}</span>
              </div>

              <h4>{item.title}</h4>
              <p>{item.sub}</p>
            </motion.div>
          ))}
        </div> */}
      </section>

      <section className="experience-section">
        <img src={restaurantImg} alt="Restaurant interior" />

        <div className="experience-overlay">
          <h2>
            Traditional Ambience
            <br />
            Modern Comfort
          </h2>

          <p>Enjoy Every Meal</p>

          <Link to="/gallery" className="experience-btn">
  Explore Gallery →
</Link>
        </div>
      </section>

      <section className="counters-section">
        <div className="counters-grid">
          {stats.map((stat) => (
            <div className="counter-item" key={stat.label}>
              <Counter
                end={stat.end}
                suffix={stat.suffix}
                decimals={stat.decimals || 0}
              />
              <span className="counter-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

     <section className="chef-quote-section">

  <div className="founders-heading">
    <h2>MASALA CAFE FOUNDERS</h2>
  </div>

  <div className="founders-content">

    <div className="quote-side">
      <div className="quote-mark">“</div>

      <p className="chef-quote">
        Our food is not just cooked.
        <br />
        It is crafted with tradition,
        <br />
        served with love,
        <br />
        and remembered forever.
      </p>

      <div className="quote-mark bottom">”</div>

      <span className="chef-signature">
        — Masala Cafe Founders
      </span>
    </div>

    <div className="founders-image">
      <img
        src={foundersImg}
        alt="Masala Cafe Founders"
      />
    </div>

  </div>

</section>
      <Sfooter/>
    </>
  );
};

export default About1;