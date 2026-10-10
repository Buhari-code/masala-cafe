import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "../../styles/Bcontentsidedish.css";

import chicken65 from "../../assets/chicken 65.png";
import pepperChicken from "../../assets/gobi 65.png";
import muttonChukka from "../../assets/tawa fish.png";
import fishFry from "../../assets/muttai kalaki.png";
import bigilu from "../../assets/bigilu.png";
import bigilutext from '../../assets/bigilutext.png'

const sideDishes = [
  {
    id: 1,
    image: chicken65,
    name: "Chicken 65",
    price: "$18",
    desc: "Crispy spicy chicken with authentic Chettinad masala.",
  },
  {
    id: 2,
    image: pepperChicken,
    name: "Gobi 65",
    price: "$17",
    desc: "Fresh pepper roasted Gobi with rich flavour.",
  },
  {
    id: 3,
    image: muttonChukka,
    name: "Tawa Fish",
    price: "$20",
    desc: "Crispy tawa-roasted fish with bold Chettinad masala",
  },
  {
    id: 4,
    image: fishFry,
    name: "Mutta Kalakki",
    price: "$10",
    desc: "Creamy street-style Kalakki made with fresh eggs.",
  },
];

const Bcontentsidedish = () => {
  return (
    <section className="side-section">
      <div className="side-container">

        <motion.div
          className="heading-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="side-title">
  <img src={bigilutext} alt="Side Dish" />
</div>

          <div className="content-row">
            <img src={bigilu} alt="Bigilu" className="bigilu" />

            <motion.p
              className="side-content"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Chicken 65, Pepper Chicken, Mutton Chukka, Fish Fry... Main
              course-ku pakkathula ivanga irundha dhaan complete
              satisfaction! Oru plate order panninaa... innoru plate
              automatica order pannuveenga!
            </motion.p>
          </div>
        </motion.div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {sideDishes.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                className="side-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div className="side-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="side-body">
                  <h3>{item.name}</h3>

                  <p>{item.desc}</p>

                  <div className="side-bottom">
                    <span>{item.price}</span>

              
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Bcontentsidedish;