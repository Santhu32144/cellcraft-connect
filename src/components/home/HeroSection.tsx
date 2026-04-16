import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Cpu, Zap, ChevronLeft, ChevronRight, Wrench, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo1 from "@/assets/hero-video.mp4";
import heroVideo2 from "@/assets/hero-video-2.mp4";
import heroVideo3 from "@/assets/hero-video-3.mp4";
import heroPoster1 from "@/assets/hero-poster-1.jpg";
import heroPoster2 from "@/assets/hero-poster-2.jpg";
import heroPoster3 from "@/assets/hero-poster-3.jpg";
const slides = [
  {
    badge: "Certified Repair Experts",
    icon: Shield,
    title: "Advanced Mobile",
    highlight: "Repair & Service",
    description: "From chip-level repairs to screen replacements — we bring your device back to life with precision, care, and guaranteed results.",
    video: heroVideo1,
  },
  {
    badge: "Chip-Level Specialists",
    icon: Cpu,
    title: "Precision",
    highlight: "Motherboard Repair",
    description: "Expert micro-soldering and chip-level diagnostics to fix even the most complex hardware issues your device faces.",
    video: heroVideo2,
  },
  {
    badge: "Same Day Service",
    icon: Zap,
    title: "Premium Screen",
    highlight: "Replacement",
    description: "Original quality displays fitted with care. Walk in with a cracked screen, walk out with a phone that looks brand new.",
    video: heroVideo3,
  },
];

const floatingCards = [
  { icon: Wrench, label: "Expert Repair", x: "right-8 md:right-16", y: "top-[30%]", delay: 0 },
  { icon: Smartphone, label: "All Brands", x: "right-4 md:right-28", y: "top-[55%]", delay: 0.8 },
  { icon: Shield, label: "Guaranteed", x: "right-12 md:right-8", y: "top-[75%]", delay: 1.6 },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [videosReady, setVideosReady] = useState<boolean[]>([false, false, false]);

  const handleVideoReady = useCallback((index: number) => {
    setVideosReady((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }, []);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];
  const SlideIcon = slide.icon;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Loading skeleton */}
      {!videosReady[current] && (
        <div className="absolute inset-0 z-[2] bg-muted animate-pulse flex items-center justify-center">
          <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Video Background - all videos play continuously, only opacity toggles */}
      {slides.map((s, i) => (
        <motion.div
          key={i}
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{ zIndex: i === current ? 1 : 0 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            onCanPlayThrough={() => handleVideoReady(i)}
            className="w-full h-full object-cover brightness-75"
          >
            <source src={s.video} type="video/mp4" />
          </video>
        </motion.div>
      ))}

      {/* Light overlay - kept minimal so video is bright and visible */}
      <div className="absolute inset-0 bg-background/25 dark:bg-background/25 bg-white/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 dark:from-background/55 via-background/35 dark:via-background/25 to-transparent bg-gradient-to-r from-white/80 dark:from-background/55 via-white/50 dark:via-background/25 to-transparent/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 dark:from-background/60 via-transparent to-background/30 dark:to-background/20 bg-gradient-to-t from-white/90 dark:from-background/60 via-white/20 dark:via-transparent to-white/40 dark:to-background/20" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated green glow orbs */}
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1], scale: [1.2, 1, 1.2], y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left: Text Content (3 cols) */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.5 }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-primary/20 text-primary text-sm mb-8"
                >
                  <SlideIcon className="h-4 w-4" />
                  {slide.badge}
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                </motion.div>

                {/* Title */}
                <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold leading-[0.95] mb-6 tracking-tight">
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="block text-foreground"
                  >
                    {slide.title}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="text-gradient block mt-2"
                  >
                    {slide.highlight}
                  </motion.span>
                </h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
                >
                  {slide.description}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300"
              >
                Our Services
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass text-foreground font-semibold hover:bg-card transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-5">
              <button onClick={prev} className="p-2.5 rounded-full glass hover:bg-card transition-colors text-foreground" aria-label="Previous slide">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2 items-center">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="relative h-1 rounded-full overflow-hidden transition-all duration-500"
                    style={{ width: i === current ? 40 : 12 }}
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    <span className="absolute inset-0 bg-muted-foreground/20 rounded-full" />
                    {i === current && (
                      <motion.span
                        className="absolute inset-0 bg-primary rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 5, ease: "linear" }}
                        style={{ transformOrigin: "left" }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <button onClick={next} className="p-2.5 rounded-full glass hover:bg-card transition-colors text-foreground" aria-label="Next slide">
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="text-muted-foreground text-sm font-mono ml-2">
                {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right: Floating glass cards (2 cols) */}
          <div className="hidden lg:block lg:col-span-2 relative h-[500px]">
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: 60, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
                className={`absolute ${card.x} ${card.y}`}
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
                  className="glass rounded-2xl p-5 flex items-center gap-4 glow-border"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/15 flex items-center justify-center">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-foreground font-semibold text-sm">{card.label}</div>
                    <div className="text-muted-foreground text-xs">✓ Verified</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute right-4 md:right-20 bottom-0"
            >
              {/* <div className="glass rounded-2xl p-6 glow-border">
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "10K+", label: "Fixed" },
                    { value: "8+", label: "Years" },
                    { value: "98%", label: "Success" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-display text-xl font-bold text-primary">{stat.value}</div>
                      <div className="text-muted-foreground text-[10px] uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>

        {/* Mobile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 mt-12 max-w-md lg:hidden"
        >
          {[
            { icon: Cpu, value: "10,000+", label: "Devices Fixed" },
            { icon: Shield, value: "8+", label: "Years Exp" },
            { icon: Zap, value: "98%", label: "Success Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center glass rounded-xl p-3">
              <stat.icon className="h-4 w-4 text-primary mx-auto mb-1" />
              <div className="font-display text-lg font-bold text-foreground">{stat.value}</div>
              <div className="text-muted-foreground text-[10px]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
