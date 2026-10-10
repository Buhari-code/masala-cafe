// import React from "react";
// import { motion } from "framer-motion";

// import "../../styles/Bcontentcrab.css";

// import crabImg from "../../assets/nandumasala.png";
// import comedyImg from "../../assets/mala.png";

// const Bcontentcrab = () => {
//   return (
//     <section className="crab-section">
//       <div className="crab-container">
//         {/* Heading */}

//         <motion.span
//           className="crab-tag"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           CHEF'S SPECIAL
//         </motion.span>

//         <motion.h2
//           className="crab-title"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           Nandu{" "}
//           <span
//             style={{
//               fontFamily: '"Great Vibes", cursive',
//             }}
//           >
//             Masala
//           </span>
//         </motion.h2>

//         {/* Gold underline */}

//         <div className="title-line">
//           <span></span>
//         </div>

//         <motion.p
//           className="crab-subtitle"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           Fresh sea crab cooked with authentic Chettinad spices, rich aroma
//           and unforgettable taste.
//         </motion.p>
//       </div>

//       <div className="crab-layout">
//         {/* Left Premium Card */}

//         <motion.div
//           className="crab-card"
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <img src={crabImg} alt="Crab Masala" className="crab-image" />

//           <div className="crab-overlay">
//             <h5>Medical</h5>

//             <h3>BENEFITS</h3>

//             <ul>
//               <li>💪 Rich in Protein</li>

//               <li>❤️ Supports Heart Health</li>

//               <li>🦴 High in Calcium</li>

//               <li>🩸 Good Source of Iron</li>

//               <li>🧠 Boosts Brain Function</li>

//               <li>🌿 Low Fat & Nutritious</li>
//             </ul>

//             <button>100% Authentic Chettinad</button>
//           </div>
//         </motion.div>

//         {/* Center Arrow */}

//         <div className="center-design">
//           <div className="curve-arrow">
//             <svg width="180" height="180" viewBox="0 0 180 180">
//               <path
//                 d="M15 20 C80 10 90 170 165 120"
//                 stroke="#D4AF37"
//                 strokeWidth="4"
//                 fill="none"
//                 strokeDasharray="10 8"
//               />

//               <polygon points="160,115 172,120 162,130" fill="#D4AF37" />
//             </svg>
//           </div>
//         </div>

//         {/* Right Card */}

//         <motion.div
//           className="comedy-card"
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <img src={comedyImg} alt="" />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Bcontentcrab;