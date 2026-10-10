import React from "react";
import "./Gallery1.css";

import img1 from "../../assets/masalacafe-interier.png";
import img2 from "../../assets/masalainterier1.webp";

import img3 from "../../assets/galleryimg1.jpg";
import img4 from "../../assets/galleryimg2.jpg";
import img5 from "../../assets/galleryimg3.jpg";
import img6 from "../../assets/galleryimg4.jpg";
import img7 from "../../assets/galleryimg5.jpg";
import img8 from "../../assets/galleryimg6.jpg";
// import img9 from "../../assets/galleryimg4.jpg";
import img10 from "../../assets/galleryimg2.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.jpg";

import Sfooter from "../Footer/Sfooter";
// import img16 from "../../assets/gallery16.jpg";
// import img17 from "../../assets/gallery17.jpg";
// import img18 from "../../assets/gallery18.jpg";
// import img19 from "../../assets/gallery19.jpg";
// import img20 from "../../assets/gallery20.jpg";
// import img21 from "../../assets/gallery21.jpg";
// import img22 from "../../assets/gallery22.jpg";
// import img23 from "../../assets/gallery23.jpg";
// import img24 from "../../assets/gallery24.jpg";
// import img25 from "../../assets/gallery25.jpg";


const galleryImages = [
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  // img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  // img16,
  // img17,
  // img18,
  // img19,
  // img20,
  // img21,
  // img22,
  // img23,
  // img24,
  // img25,
];


const Gallery1 = () => {
  return (
    <>
    <section className="gallery-hero">

      <div className="gallery-title">

        <span>MASALA CAFE MEMORIES</span>

        <h2>
          Every Picture Tells
          <br />
          Our Story
        </h2>

        <p>
          From authentic Chettinad flavours to unforgettable dining moments,
          explore the memories created every day at Masala Cafe.
        </p>

      </div>

      <div className="gallery-feature">

        <div className="gallery-left">

          <img
            src={img1}
            alt="Masala Cafe Restaurant"
          />

        </div>


        <div className="gallery-right">

          <div className="gallery-card">

            <span>AUTHENTIC</span>

            <h3>
              Traditional
              <br />
              Chettinad Experience
            </h3>

          </div>


          <div className="gallery-small-grid">

            <img src={img2} alt="Masala Cafe Interior" />

            <img src={img3} alt="Masala Cafe" />

            <img src={img4} alt="Masala Cafe" />

            <img src={img5} alt="Masala Cafe" />

          </div>

        </div>

      </div>

      <div className="gallery-memory-section">

        <div className="memory-heading">

          <span>OUR COLLECTION</span>

          <h2>
            Moments Worth
            <br />
            Remembering
          </h2>

        </div>

        <div className="memory-grid">

          {galleryImages.map((image, index) => (

            <div
              className="memory-item"
              key={`gallery-${index}`}
            >

              <img
                src={image}
                alt={`Masala Cafe memory ${index + 1}`}
                loading="lazy"
              />

              <div className="memory-overlay">
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
    <Sfooter/>
    </>
  );
};

export default Gallery1;