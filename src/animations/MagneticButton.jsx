import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Wrap any button/link. On hover, it pulls slightly toward the
 * cursor position within its own bounds, then springs back on
 * mouse-leave. `strength` controls how far it can travel.
 *
 * Usage:
 *   <MagneticButton className="btn-primary" strength={18}>
 *     View Menu
 *   </MagneticButton>
 */
export default function MagneticButton({
  children,
  as: Tag = "button",
  className = "",
  strength = 20,
  onClick,
  ...rest
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const MotionTag = motion[Tag] ?? motion.button;

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / (rect.width / 2)) * strength);
    y.set((relY / (rect.height / 2)) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <MotionTag
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.94 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
