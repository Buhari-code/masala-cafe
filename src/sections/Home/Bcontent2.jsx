import React from "react";
import { motion } from "framer-motion";
import "../../styles/Bcontent2.css";
import { Link } from "react-router-dom";
import kuthunna from "../../assets/karthikuthu.png";
import video from "../../assets/parotta.mp4";

const Bcontent2 = () => {
  return (
    <section className="parotta-section">
      <div className="parotta-container">
        <motion.div
          className="parotta-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="small-title">CHEF'S SPECIAL</span>

          <h2>Kothu Parotta</h2>

          <p className="parotta-desc">
            Every Kothu Parotta is freshly chopped on a hot iron tawa,
            blended with aromatic Chettinad spices, fluffy eggs, succulent
            chicken, and our signature house gravy. Every bite delivers the
            perfect balance of crunch, spice, and authentic South Indian
            flavor.
          </p>

          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-stars">★★★★★</span>
              <span className="stat-label">4.9 Rating</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">20K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Authentic Recipe</span>
            </div>
          </div>

          <div className="order-wrapper">
          <Link to="/menu">
  <button className="porder-btn">Explore</button>
</Link>

            <div className="thought-box">
              <div className="bubble bubble1"></div>
              <div className="bubble bubble2"></div>
              <div className="bubble bubble3"></div>

              <div className="cloud">
                {/* <div className="cloud-top left"></div>
                <div className="cloud-top center"></div>
                <div className="cloud-top right"></div> */}
                <div className="typing">
                  <span>Rombo Yosikkatha...</span>
                  <span>😋 Parotta Theenthu Poidum</span>
                  <span>🔥 Vema Order Pannu!</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="parotta-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="video-wrap">
            <img src={kuthunna} alt="Kuthu Parotta being made" className="kuthuimg" />

            <div className="video-box">
              <video src={video} autoPlay muted loop playsInline />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bcontent2;