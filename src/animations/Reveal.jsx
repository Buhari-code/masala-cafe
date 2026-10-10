import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Usage:
 *   <Reveal><h2>Title</h2><p>Text</p></Reveal>          -> children stagger in together
 *   <Reveal as="div" className="menu-grid" stagger={0.08}>
 *     {items.map(item => <MenuCard key={item.id} {...item} />)}
 *   </Reveal>                                             -> grid items stagger in
 *
 * Animates its direct children up + fade-in once the wrapper scrolls
 * into view. Re-triggers on scroll-back (toggleActions), which reads
 * as more alive than a play-once fade.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  y = 60,
  duration = 1,
  delay = 0,
  stagger = 0.12,
  start = "top 85%",
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.children.length ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y, duration, delay, stagger, start]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
