import React from "react";
import "../../styles/Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getBusinessHours, getRestaurant } from "../../services/restaurant.service";



const Footer = () => {

  const restaurantId = localStorage.getItem('restaurantId')

  const {
    data,
    isLoading,
    error
  } = useQuery({
    queryKey: ["restaurant"],
    queryFn: () => getBusinessHours()
  });

  console.log()

  const businessHours = data?.businessHours

  return (
    <>
    <footer className="footer" id="contact">

      <div className="footer-top">

        <span className="footer-tag">
          THANK YOU FOR VISITING
        </span>

        <h2>Masala Cafe Chettinad</h2>

        <p className="footer-comedy">
          "Saaptu Mudichaacha?
          <span> Next Time Ellarayum Kootitu Vaanga 😎</span>"
        </p>

      </div>

      <div className="footer-grid">


        <div className="footer-box">

          <h3>Visit Us</h3>

          <p className="address">
            <FaMapMarkerAlt />
            <span>
              839 Newark Ave,
              <br />
              Jersey City,
              <br />
              NJ - 07306
            </span>
          </p>

          {/* GOOGLE MAP */}

          <a
            href="https://maps.google.com/?q=839+Newark+Ave,+Jersey+City,+NJ+07306"
            target="_blank"
            rel="noopener noreferrer"
            className="map-card"
          >

            <div className="map-overlay">

              <FaMapMarkedAlt className="map-icon" />

              <h4>Open Google Maps</h4>

              <span>Click Here</span>

            </div>

          </a>

        </div>


<div className="footer-box">

  <h3>Contact</h3>

  <div className="contact-item">
    <FaPhoneAlt />

    <div>
      <p>201-420-7635</p>
      <p>201-360-3367</p>
    </div>
  </div>

  <div className="contact-item">
    <FaEnvelope />

    <div>
      <p>masalacafejc@gmail.com</p>
    </div>
  </div>

  {/* Social Icons */}

  <div className="footer-social">

    <a
      href="https://www.facebook.com/profile.php?id=100073689934887"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://www.instagram.com/masalacafechettinad/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </a>

    <a
      href="https://www.youtube.com/channel/UCRGvbk5xTCmxqVOW_3WEU1A"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaYoutube />
    </a>

  </div>

</div>

        <div className="footer-box">

          <h3>Opening Hours</h3>

          <div className="hours-row">
            <FaClock />
            <div>
              <strong>Mon - Thu</strong>
                <p>{businessHours?.monday?.open} AM - {businessHours?.monday?.close} AM</p>
            </div>
          </div>

          <div className="hours-row">
            <FaClock />
            <div>
              <strong>Fri - Sat</strong>
                <p>{businessHours?.friday?.open} AM - {businessHours?.friday?.close} AM</p>
            </div>
          </div>

          <div className="hours-row">
            <FaClock />
            <div>
              <strong>Sunday</strong>
                <p>{businessHours?.sunday?.open} AM - {businessHours?.sunday?.close} AM</p>
            </div>
          </div>

        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}

      <div className="footer-bottom">

        <p>
          <strong>Masala Cafe Chettinad</strong>
        </p>

        <span>
          Made with ❤️ & Extra Masala
        </span>

      </div>

    </footer>
    </>
  );
};

export default Footer;