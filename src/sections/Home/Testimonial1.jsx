import React, { useState } from "react";
import "../../styles/testimonial.css";

import { FaStar, FaQuoteLeft,FaGoogle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "MalliSuri",
    // place: "Chennai",
    review:
      "Absolutely loved the food at Masala Cafe in Jersey City! The Dindigul Mutton Biryani was bursting with authentic South Indian flavor — perfectly spiced and tender. The Chicken 65 was crisp, juicy, and full of flavor, while the Pomfret Fish Fry tasted super fresh and well-marinated. The Mutton Chukka was rich and mouthwatering",
  },
  {
    id: 2,
    name: "Anirudh VA",
    // place: "Coimbatore",
    review:
      "The food , ambience , service was excellent ! The people in the restaurant were really friendly and polite. Totally The best restaurant for people who like South Indian food and mainly Tamilnadu  food. They served hot and filter coffee was the best",
  },
  {
    id: 3,
    name: "SonamGurung",
    // place: "Bangalore",
    review:
      "10/10 Indian cuisine. We ordered Garlic Naan, Paneer Butter Masala, and Poori with Potato side, and everything was delicious. My favorite was Poori. Never in my life had I thought Poori can even be non-oily. It was soft, thin, and non-greasy.",
  },
];

const REVIEW_LIMIT = 140;

const TestimonialCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = item.review.length > REVIEW_LIMIT;

  const displayText =
    expanded || !isLong
      ? item.review
      : item.review.slice(0, REVIEW_LIMIT).trim() + "...";

  return (
    <div className="testimonial-cell">
      <div className={`testimonial-card ${expanded ? "is-expanded" : ""}`}>
        <FaQuoteLeft className="quote-icon" />

        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <div className="review-text">
          "{displayText}"
          {isLong && (
            <div
              className="read-more-btn1"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? "Read less" : "Read more"}
            </div>
          )}
        </div>

        <div className="customer">
          <div className="avatar">{item.name.charAt(0)}</div>

          <div>
            <h4>{item.name}</h4>
            <span>{item.place}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <span className="testimonial-tag">OUR CUSTOMER REVIEWS</span>

      <h2 className="testimonial-title">
        People Love
        <span> Masala Cafe</span>
      </h2>

      <p className="testimonial-subtitle">
        Every smile, every compliment, and every returning customer inspires
        us to serve even better.
      </p>

      <div className="testimonial-container">
        {reviews.map((item) => (
          <TestimonialCard item={item} key={item.id} />
        ))}
      </div>
      <div className="review-btn">
  <div>
    <a
  href="https://g.page/r/CUBV6TGpLhyxEAE/review"
  target="_blank"
  rel="noopener noreferrer"
  className="review-btn-link"
>
  <FaGoogle className="google-icon" />
  <span>View More Reviews</span>
</a>
  </div>
</div>
    </section>
  );
};

export default Testimonial;