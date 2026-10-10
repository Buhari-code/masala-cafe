import React from "react";
import "./Abouthero.css";
import { Link } from "react-router-dom";
import heroImg from "../../assets/chettinad egg curry .png";
import storyImg from "../../assets/carrot halwa.png";

import {
  FaLeaf,
  FaPepperHot,
  FaUtensils,
  FaAward,
} from "react-icons/fa";
import About1 from "./About1";

const Abouthero = () => {
  return (

    <>
    <section className="about-hero">

      <div className="about-overlay"></div>

      <img
        src={heroImg}
        alt="Masala Cafe"
        className="about-bg"
      />

      <div className="about-content">

        {/* <span className="about-tag">
          ✦ OUR STORY ✦
        </span> */}

        <h1>
          Every Meal Has
          <br />
          <span>A Story To Tell</span>
        </h1>

        <p>
          Welcome to Masala Cafe Chettinad, where every dish is crafted
          with authentic South Indian recipes, handpicked spices, and the
          warmth of traditional Chettinad hospitality.
        </p>

        <div className="about-buttons">

         <Link to="/menu" className="about-btn1">
  Explore Menu
</Link>

          {/* <button className="about-btn2">
            Our Story
          </button> */}
        </div>

      </div>

      <div className="scroll-down">

        <span></span>

      </div>

    </section>

     <section className="about-story">
            <span className="story-tag">

            OUR STORY

          </span>



          <h2 style={{color:"white"}}>

            Bringing Authentic

            <span> Chettinad Flavours </span>

            To Every Table

          </h2>

      <div className="story-container">

        {/* Left */}

        <div className="story-image">

          <img
            src={storyImg}
            alt="Masala Cafe"
          />

          <div className="story-badge">

            <h2>10+</h2>

            <span>
              Years of
              <br />
              Tradition
            </span>

          </div>
          

        </div>

        {/* Right */}

        <div className="story-content">

          {/* <p>
            Masala Cafe Chettinad was created with one simple dream —
            to bring the authentic taste of Tamil Nadu to food lovers.
            Every recipe is prepared using traditional cooking methods,
            premium spices, and recipes passed down through generations.
          </p>

          <p>
            We don't just serve food.
            We serve memories, celebrations, and the true spirit of
            South Indian hospitality.
          </p> */}

          <div className="story-features">

            <div className="feature">

              <FaLeaf />

              <div>

                <h4>Fresh Ingredients</h4>

                <p>Prepared every day using premium vegetables and spices.</p>

              </div>

            </div>

            <div className="feature">

              <FaPepperHot />

              <div>

                <h4>Authentic Masala</h4>

                <p>Traditional Chettinad spice blend made in house.</p>

              </div>

            </div>

            <div className="feature">

              <FaUtensils />

              <div>

                <h4>Traditional Cooking</h4>

                <p>Every dish is cooked with authentic South Indian methods.</p>

              </div>

            </div>

            <div className="feature">

              <FaAward />

              <div>

                <h4>Premium Quality</h4>

                <p>Every meal is prepared with care and passion.</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

    <About1/>

    </>
  );
};

export default Abouthero;