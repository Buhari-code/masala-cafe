// import React from "react";
// import "../../styles/Bcontentdiffen.css";
// import { motion } from "framer-motion";

// import dosai from "../../assets/dosai.png";
// import poori from "../../assets/poori.png";
// import pongal from "../../assets/pongal.png";
// import idly from "../../assets/chicken.png";
// import oothaappam from "../../assets/oothaappam.png";

// import manager from "../../assets/yen late.png";
// import employee from "../../assets/staff reply.png";

// const breakfast = [
//   {
//     id: 1,
//     name: "Ghee Roast Dosai",
//     image: dosai,
//     price: "$11",
//     desc: "Golden crispy dosai with aromatic ghee with variety of chutney",
//   },
//   {
//     id: 2,
//     name: "Poori Masala",
//     image: poori,
//     price: "$6",
//     desc: "Poori with (choiceof potato,channa,vegetable) masala",
//   },
//   {
//     id: 3,
//     name: "Ven Pongal",
//     image: pongal,
//     price: "$11",
//     desc: "Traditional pongal with ghee & pepper flavour.",
//   },
// ];

// const BContentdiffen = () => {
//   return (
//     <section className="breakfast-section">
//       <div className="breakfast-container">
//         <motion.span
//           className="breakfast-tag"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           ☀️ MORNING SPECIAL
//         </motion.span>

//         <motion.div
//           className="office-comedy"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="manager-side">
//             <img
//               src={manager}
//               alt="Manager asking why late"
//               className="manager-img"
//             />
//           </div>

//           <div className="employee-side">
//             <img
//               src={employee}
//               alt="Employee explaining Masala Cafe breakfast"
//               className="employee-img"
//             />
//           </div>
//         </motion.div>
//       </div>

//       <div className="breakfast-grid-wrap">
//         <span className="float-deco d1">🌶️</span>
//         <span className="float-deco d2">🍗</span>
//         <span className="float-deco d3">🥚</span>
//         <span className="float-deco d4">☕</span>
//         <span className="float-deco d5">🍽️</span>

//         <div className="breakfast-grid">
//           {breakfast.map((item, index) => (
//             <motion.div
//               className="plate-card"
//               key={item.id}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               viewport={{ once: true }}
//             >
            

//               <div className="plate">
//                 <img src={item.image} alt={item.name} />
//               </div>

//               <h3>{item.name}</h3>

//               <div className="rating">
//                 <span className="rating-stars">⭐⭐⭐⭐⭐</span>
//                 <span className="rating-item">4.9 Rating</span>
//                 <span className="rating-divider" />
//                 <span className="rating-item">15 mins</span>
//                 <span className="rating-divider" />
//                 <span className="rating-item">Chef Choice</span>
//               </div>

//               <p>{item.desc}</p>

//               <div className="food-bottom">
//                 <span>{item.price}</span>
//                 <button>Order Now </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <div className="more-food-section">
//         <div className="more-food-img">
//           <img src={oothaappam} alt="Oothappam" />
//         </div>

//         <div className="more-food-content">
//           <h3 className="more-food-title">Craving Something Different?</h3>
//           <p className="more-food-desc">
//             Explore more comfort food from our kitchen — fresh, hot, and
//             full of flavor.
//           </p>

//           <button className="more-food-btn">
//             {/* <span className="arrow-loop">🍗</span> */}
//             Innum Tiffin Variety Venumna Inga Press Pannunga
//           </button>
//         </div>
//       </div>

//       {/* <div className="underline">
//         <span></span>
//         <div className="diamond">🌶️</div>
//         <span></span>
//       </div> */}
//     </section>
//   );
// };

// export default BContentdiffen;