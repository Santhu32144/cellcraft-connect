import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Settings, Cog, CircleDot } from "lucide-react";

const ScrollRotatingElements = () => {
  const { scrollY } = useScroll();
  const [scrollDir, setScrollDir] = useState(1);
  const [lastY, setLastY] = useState(0);

  // Track scroll direction
  useEffect(() => {
    return scrollY.on("change", (y) => {
      setScrollDir(y > lastY ? 1 : -1);
      setLastY(y);
    });
  }, [scrollY, lastY]);

  // Continuous rotation based on scroll position
  const rotation = useTransform(scrollY, [0, 5000], [0, 1800]);
  const reverseRotation = useTransform(scrollY, [0, 5000], [0, -1800]);
  const smoothRotation = useSpring(rotation, { stiffness: 50, damping: 20 });
  const smoothReverseRotation = useSpring(reverseRotation, { stiffness: 50, damping: 20 });

  // Pendulum swing based on scroll
  const pendulumAngle = useTransform(scrollY, (y) => Math.sin(y * 0.008) * 25 * scrollDir);
  const smoothPendulum = useSpring(pendulumAngle, { stiffness: 80, damping: 12 });

  // Vertical parallax
  const yShift = useTransform(scrollY, [0, 3000], [0, -200]);
  const smoothY = useSpring(yShift, { stiffness: 40, damping: 20 });

  return (
    <>
      {/* Left side - large gear */}
      <motion.div
        style={{ rotate: smoothRotation, y: smoothY }}
        className="fixed left-[-40px] top-[30%] z-0 opacity-[0.04] pointer-events-none"
      >
        <Settings className="h-32 w-32 text-primary" strokeWidth={1} />
      </motion.div>

      {/* Right side - counter-rotating gear */}
      <motion.div
        style={{ rotate: smoothReverseRotation, y: smoothY }}
        className="fixed right-[-30px] top-[50%] z-0 opacity-[0.04] pointer-events-none"
      >
        <Cog className="h-24 w-24 text-primary" strokeWidth={1} />
      </motion.div>

      {/* Pendulum element - left side */}
      <motion.div
        style={{ rotate: smoothPendulum }}
        className="fixed left-8 top-[60%] z-0 opacity-[0.06] pointer-events-none origin-top"
      >
        <div className="flex flex-col items-center">
          <div className="w-[2px] h-24 bg-primary/40" />
          <CircleDot className="h-8 w-8 text-primary" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Small rotating accent - right */}
      <motion.div
        style={{ rotate: smoothRotation }}
        className="fixed right-12 top-[25%] z-0 opacity-[0.03] pointer-events-none"
      >
        <Cog className="h-16 w-16 text-accent" strokeWidth={1} />
      </motion.div>

      {/* Pendulum element - right side */}
      <motion.div
        style={{ rotate: smoothPendulum }}
        className="fixed right-16 top-[75%] z-0 opacity-[0.05] pointer-events-none origin-top"
      >
        <div className="flex flex-col items-center">
          <div className="w-[2px] h-16 bg-accent/40" />
          <div className="h-5 w-5 rounded-full border-2 border-accent/60" />
        </div>
      </motion.div>
    </>
  );
};

export default ScrollRotatingElements;
