import React from "react";
import "./Contact.css";
import franchiseImg from "../../assets/franchise.jpeg";
import contactimg from "../../assets/contactcomedy.png";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import Sfooter from "../Footer/Sfooter";

const Contact = () => {

  const phoneNumber = "919884292625";

  const message =
    "Hello Masala Cafe, I am interested in taking a franchise. Please share more details regarding the franchise opportunity.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

const handleSubmit = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  const subject = `Contact Enquiry from ${name}`;

  const body = `
Hello Masala Cafe,

Name: ${name}
Email: ${email}

Message:
${message}

Thank you.
  `;

  const mailURL =
    `mailto:masalacafejc@gmail.com` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;
  window.location.href = mailURL;
  e.target.reset();
};


  return (
    <>
      <section className="contact-page">

        <div className="contact-hero">

          <div className="contact-hero-content">

            <div className="contact-hero-text">
              <p>
                Hungry-ah irundha call pannunga...
                <br />
                Late pannina unga friend saaptutu selfie anupiduvaanga.
              </p>
            </div>

            <div className="contact-hero-image">
              <img
                src={contactimg}
                alt="Masala Cafe"
              />
            </div>

          </div>

        </div>

        <div className="contact-container">

          {/* =========================
              CONTACT INFORMATION
          ========================= */}

          <div className="contact-info">

            <div className="info-card">

              <FaPhoneAlt />

              <div>
                <h3>Phone</h3>

                <p>201-420-7635</p>

                <small>
                  📢 Ring adichitu cut panna blocklist! 😂
                </small>
              </div>

            </div>


            <div className="info-card">

              <FaEnvelope />

              <div>
                <h3>Email</h3>

                <p>masalacafejc@gmail.com</p>

                <small>
                  Reply varum... chef busy illana. 👨‍🍳
                </small>
              </div>

            </div>


            <div className="info-card">

              <FaMapMarkerAlt />

              <div>
                <h3>Location</h3>

                <p>
                  839 Newark Ave, Jersey City, NJ - 07306
                </p>

                <small>
                  Google Maps enga vittaalum sapadu enga kitta. 😎
                </small>
              </div>

            </div>


            <div className="info-card">

              <FaClock />

              <div>
                <h3>Opening Hours</h3>

                <p>10:00 AM - 10:00 PM</p>

                <small>
                  11 PM-ku vandha chef thookathula iruppaaru 😂
                </small>
              </div>

            </div>

          </div>

          <div className="contact-form">

            <h2>
              🍛 Pasikkudha? Message Podunga!
            </h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Unga Peru 😎"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Saapadu pathi complaint ah? Illa love letter ah? 😁"
                required
              ></textarea>

              <button type="submit">
                🚀 Send Message
              </button>

            </form>

            <p className="fun-note">
              🤣 <b>Warning:</b> "Menu super!" nu message anupina,
              next visit-la extra smile free! ❤️
            </p>

          </div>

          <div className="franchise-card">
            <div className="franchise-image">

              <img
                src={franchiseImg}
                alt="Masala Cafe Franchise"
              />

            </div>
            <div className="franchise-content">

              <div className="franchise-icon">
                🤝
              </div>

              <span className="franchise-tag">
                GROW WITH MASALA CAFE
              </span>

              <h4>
                Oru kadai podhuma? Innonnu thirakkalama? 😎
              </h4>

              <p>
                Bring the authentic taste of Chettinad cuisine
                to your city. Partner with Masala Cafe and grow
                your own successful food business.
              </p>
              <div className="franchise-contact">

                <div>
                  <FaPhoneAlt />
                  <span>201-420-7635</span>
                </div>

                <div>
                  <FaEnvelope />
                  <span>masalacafejc@gmail.com</span>
                </div>

              </div>
              <button
                type="button"
                className="price-enquiry-btn"
                onClick={() =>
                  window.open(whatsappURL, "_blank")
                }
              >
                🤝 Enquire Now
              </button>

            </div>

          </div>

        </div>

      </section>

      <Sfooter />

    </>
  );
};

export default Contact;
