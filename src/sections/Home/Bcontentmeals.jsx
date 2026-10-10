import React from 'react'
import '../../styles/Bcontentmeals.css'
import { motion } from "framer-motion";

import rice from '../../assets/rice.png'
import meen from '../../assets/meen kazumbu.png'
import chickenk from '../../assets/butter chicken.png'
import eggk  from '../../assets/chettinad egg curry .png'
import Sambar from '../../assets/sambar.png'
import rasam from '../../assets/rasam.png'
import memeImage from '../../assets/sorusoru.png'


const Bcontentmeals = () => {
  return (
    <>
    <section className="meals-section">

      <div className="meals-container">

        <motion.span
          className="meals-tag"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          LUNCH SPECIAL
        </motion.span>

        <motion.h2
          className="meals-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          Soru Mattum Illa...
          <span> Full Meals Experience!</span>
        </motion.h2>

        <motion.p
          className="meals-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .9 }}
          viewport={{ once: true }}
        >
          Unlimited rice, flavorful sambar, spicy rasam,
          creamy curd, crispy appalam, fresh poriyal,
          kootu, pickle and our signature Chettinad gravies.
          Every meal is served fresh on a traditional banana leaf
          to give you the authentic South Indian dining experience.
        </motion.p>

      </div>

    </section>
    <section className="meals-showcase">
      <section className="meals-circle">

  <div className="circle-card card1">
    <img src={rice} alt="" />
    <h3>Rice</h3>
     <p>Fluffy rice, perfectly cooked</p>
  </div>

  <div className="circle-card card2">
    <img src={meen} alt="" />
    <h3>Meen kuzhambu</h3>
     <p>Spicy fish curry delight</p>
  </div>

  <div className="circle-card card3">
    <img src={chickenk} alt="" />
    <h3>Butter Chicken</h3>
    <p>Rich creamy chicken curry</p>
  </div>

  <div className="circle-center">
    <img src={memeImage} alt="" />
  </div>

  <div className="circle-card card4">
    <img src={eggk} alt="" />
    <h3>Egg Curry</h3>
     <p>Flavorful eggs, spiced gravy</p>
  </div>

  <div className="circle-card card5">
    <img src={Sambar} alt="" />
    <h3>Sambar</h3>
     <p>Traditional lentil vegetable stew</p>
  </div>

  <div className="circle-card card6">
    <img src={rasam} alt="" />
    <h3>Rasam</h3>
    <p>Tangy peppery South Indian soup</p>
  </div>

</section>

</section>
    </>
  )
}

export default Bcontentmeals