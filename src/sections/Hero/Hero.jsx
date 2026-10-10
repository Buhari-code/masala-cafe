import React from 'react'
import '../../styles/hero.css'
import heroVideo from '../../assets/herov2.mp4'
import therikka from '../../assets/therikka.png'

const Hero = ({ setOrderOpen }) => {
  return (

    <section className="hero">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>
      
      <div className="hero-content container">

        <img
          src={therikka}
          alt="Therikka"
          className="hero-poster"
        />

        <h1>
          Experience the <span>Real Taste</span> of Chettinad
        </h1>

        <div className="hero-btns">

          <button
            className="pickup-btn"
            onClick={() => {
              console.log("Pickup selected");
            }}
          >
            🍽 Pickup
          </button>

          <button
            className="delivery-btn"
            onClick={() => setOrderOpen(true)}
          >
            🛵 Delivery
          </button>

        </div>

      </div>

    </section>
  )
}

export default Hero