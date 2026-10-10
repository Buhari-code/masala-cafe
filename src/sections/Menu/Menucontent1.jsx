import { useRef, useState } from "react";
import "../../styles/Menucontent1.css";
import {menuSections} from "../../sections/Menu/Menudata"

import Menucontent2 from "./Menucontent2";

const MenuList = ({ section }) => {
  const trackRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const rafRef = useRef(null);

  const totalDots = Math.ceil(section.items.length / 3);

  const getStep = () => {
    const track = trackRef.current;
    if (!track) return 0;

    const card = track.querySelector(".food-card");
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

  return (
    <section className="menu-category">

      <div className="category-heading">
        <span className="category-line"></span>
        <h2>{section.title}</h2>
        <span className="category-line"></span>
      </div>

      <div className="food-carousel">

        <button
          type="button"
          className="carousel-arrow carousel-arrow-left"
          onClick={() => scrollByCards(-1)}
          aria-label={`Previous ${section.title}`}
        >
          ‹
        </button>

        <div className="food-track" ref={trackRef} onScroll={handleScroll}>
          {section.items.map((item, i) => (
            <article className="food-card" key={`${item.name}-${i}`}>

              <div className="food-image">
                <img src={item.image || clogo} alt={item.name} loading="lazy" />
              </div>

              <div className="food-content">
                <div className="food-title-price">
                  <h3>{item.name}</h3>
                  <span>{item.price}</span>
                </div>

                {item.description && <p>{item.description}</p>}
              </div>

            </article>
          ))}
        </div>

        <button
          type="button"
          className="carousel-arrow carousel-arrow-right"
          onClick={() => scrollByCards(1)}
          aria-label={`Next ${section.title}`}
        >
          ›
        </button>

      </div>

      {totalDots > 1 && (
        <div className="carousel-dots">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              type="button"
              key={index}
              className={`carousel-dot${activeDot === index ? " active" : ""}`}
              onClick={() => goToDot(index)}
              aria-label={`Go to ${section.title} page ${index + 1}`}
            />
          ))}
        </div>
      )}

    </section>
  );
};

const Menucontent1 = () => {
  return (
    <>
      <section className="masala-menu">
        <div className="menu-container">

          {menuSections[0].sections.map((section) => (
            <MenuList key={section.title} section={section} />
          ))}

        </div>
      </section>

      <Menucontent2 />
    </>
  );
};

export default Menucontent1; 