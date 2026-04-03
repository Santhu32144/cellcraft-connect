import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Settings, Cog, CircleDot, Smartphone } from "lucide-react";

const ScrollRotatingElements = () => {
  const { scrollY } = useScroll();
  const [scrollDir, setScrollDir] = useState(1);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    return scrollY.on("change", (y) => {
      setScrollDir(y > lastY ? 1 : -1);
      setLastY(y);
    });
  }, [scrollY, lastY]);

  // Gear rotations
  const rotation = useTransform(scrollY, [0, 5000], [0, 1800]);
  const reverseRotation = useTransform(scrollY, [0, 5000], [0, -1800]);
  const smoothRotation = useSpring(rotation, { stiffness: 50, damping: 20 });
  const smoothReverseRotation = useSpring(reverseRotation, { stiffness: 50, damping: 20 });

  // Pendulum
  const pendulumAngle = useTransform(scrollY, (y) => Math.sin(y * 0.008) * 25 * scrollDir);
  const smoothPendulum = useSpring(pendulumAngle, { stiffness: 80, damping: 12 });

  // Vertical parallax
  const yShift = useTransform(scrollY, [0, 3000], [0, -200]);
  const smoothY = useSpring(yShift, { stiffness: 40, damping: 20 });

  // 3D Phone rotation - Apple style
  const phoneRotateY = useTransform(scrollY, [0, 600, 1200, 1800, 2400], [0, 45, 0, -45, 0]);
  const phoneRotateX = useTransform(scrollY, [0, 600, 1200, 1800, 2400], [15, 0, -10, 0, 15]);
  const phoneScale = useTransform(scrollY, [0, 400, 800, 1200], [0.8, 1.1, 1, 0.9]);
  const phoneOpacity = useTransform(scrollY, [0, 200, 2000, 2600], [0, 1, 1, 0]);
  const phoneTranslateY = useTransform(scrollY, [0, 2400], [0, -300]);

  const smoothPhoneRotateY = useSpring(phoneRotateY, { stiffness: 40, damping: 25 });
  const smoothPhoneRotateX = useSpring(phoneRotateX, { stiffness: 40, damping: 25 });
  const smoothPhoneScale = useSpring(phoneScale, { stiffness: 50, damping: 20 });
  const smoothPhoneTranslateY = useSpring(phoneTranslateY, { stiffness: 30, damping: 20 });

  return (
    <>
      {/* 3D Rotating Phone - Apple style showcase */}
      <motion.div
        style={{
          rotateY: smoothPhoneRotateY,
          rotateX: smoothPhoneRotateX,
          scale: smoothPhoneScale,
          opacity: phoneOpacity,
          y: smoothPhoneTranslateY,
          perspective: 1200,
        }}
        className="fixed right-[5%] top-[15%] z-[1] pointer-events-none"
      >
        <div className="relative" style={{ transformStyle: "preserve-3d" }}>
          {/* Phone body */}
          <div className="w-[140px] h-[280px] rounded-[28px] border-2 border-primary/30 bg-gradient-to-b from-card/80 to-background/90 backdrop-blur-md shadow-[0_0_60px_rgba(34,197,94,0.15)] overflow-hidden">
            {/* Screen content */}
            <div className="absolute inset-[6px] rounded-[22px] overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
              {/* Notch */}
              <div className="w-16 h-5 bg-background/80 rounded-b-xl mx-auto" />
              {/* Screen elements */}
              <div className="p-3 mt-2 space-y-2">
                <div className="w-full h-2 rounded-full bg-primary/20" />
                <div className="w-3/4 h-2 rounded-full bg-primary/15" />
                <div className="w-full h-12 rounded-lg bg-primary/10 mt-3 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-primary/40" />
                </div>
                <div className="grid grid-cols-3 gap-1 mt-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-6 rounded bg-primary/8" />
                  ))}
                </div>
                <div className="w-full h-2 rounded-full bg-accent/15 mt-2" />
                <div className="w-2/3 h-2 rounded-full bg-accent/10" />
              </div>
            </div>
            {/* Side button */}
            <div className="absolute right-[-2px] top-[60px] w-[3px] h-8 rounded-l bg-primary/30" />
            <div className="absolute left-[-2px] top-[50px] w-[3px] h-5 rounded-r bg-primary/20" />
            <div className="absolute left-[-2px] top-[75px] w-[3px] h-10 rounded-r bg-primary/20" />
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-8 rounded-[40px] bg-primary/5 blur-2xl -z-10" />
          <div className="absolute -inset-16 rounded-full bg-primary/3 blur-3xl -z-20" />
        </div>
      </motion.div>

      {/* Left side - large gear */}
      <motion.div
        style={{ rotate: smoothRotation, y: smoothY }}
        className="fixed left-[-40px] top-[30%] z-0 opacity-[0.06] pointer-events-none"
      >
        <Settings className="h-32 w-32 text-primary" strokeWidth={1} />
      </motion.div>

      {/* Right side - counter-rotating gear */}
      <motion.div
        style={{ rotate: smoothReverseRotation, y: smoothY }}
        className="fixed right-[-30px] top-[50%] z-0 opacity-[0.06] pointer-events-none"
      >
        <Cog className="h-24 w-24 text-primary" strokeWidth={1} />
      </motion.div>

      {/* Pendulum left */}
      <motion.div
        style={{ rotate: smoothPendulum }}
        className="fixed left-8 top-[60%] z-0 opacity-[0.08] pointer-events-none origin-top"
      >
        <div className="flex flex-col items-center">
          <div className="w-[2px] h-24 bg-primary/40" />
          <CircleDot className="h-8 w-8 text-primary" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Small rotating accent */}
      <motion.div
        style={{ rotate: smoothRotation }}
        className="fixed right-12 top-[25%] z-0 opacity-[0.05] pointer-events-none"
      >
        <Cog className="h-16 w-16 text-accent" strokeWidth={1} />
      </motion.div>

      {/* Pendulum right */}
      <motion.div
        style={{ rotate: smoothPendulum }}
        className="fixed right-16 top-[75%] z-0 opacity-[0.07] pointer-events-none origin-top"
      >
        <div className="flex flex-col items-center">
          <div className="w-[2px] h-16 bg-accent/40" />
          <div className="h-5 w-5 rounded-full border-2 border-accent/60" />
        </div>
      </motion.div>

      {/* Floating particles that move on scroll */}
      {[...Array(5)].map((_, i) => {
        const xPos = 10 + i * 20;
        const yStart = 20 + i * 15;
        const particleY = useTransform(scrollY, [0, 3000], [0, -(100 + i * 60)]);
        const particleOpacity = useTransform(scrollY, [0, 500, 2500, 3000], [0, 0.12, 0.12, 0]);
        const particleRotate = useTransform(scrollY, [0, 5000], [0, 360 * (i % 2 === 0 ? 1 : -1)]);
        const smoothParticleY = useSpring(particleY, { stiffness: 30, damping: 20 });
        
        return (
          <motion.div
            key={i}
            style={{ y: smoothParticleY, opacity: particleOpacity, rotate: particleRotate }}
            className="fixed pointer-events-none z-0"
            initial={{ left: `${xPos}%`, top: `${yStart}%` }}
          >
            <div 
              className={`rounded-full border border-primary/20 ${
                i % 3 === 0 ? 'w-3 h-3' : i % 3 === 1 ? 'w-2 h-2' : 'w-4 h-4'
              }`}
              style={{ 
                background: `radial-gradient(circle, hsl(var(--primary) / 0.1), transparent)` 
              }}
            />
          </motion.div>
        );
      })}
    </>
  );
};

export default ScrollRotatingElements;
