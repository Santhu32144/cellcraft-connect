import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Cpu, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/hero-repair.jpg";
import heroImage2 from "@/assets/hero-slide2.jpg";
import heroImage3 from "@/assets/hero-slide3.jpg";

const slides = [
  {
    image: heroImage1,
    badge: "Certified Repair Experts",
    title: "Advanced Mobile",
    highlight: "Repair & Service",
    description: "From chip-level repairs to screen replacements — we bring your device back to life with precision, care, and guaranteed results.",
  },
  {
    image: heroImage2,
    badge: "Chip-Level Specialists",
    title: "Precision",
    highlight: "Motherboard Repair",
    description: "Expert micro-soldering and chip-level diagnostics to fix even the most complex hardware issues your device faces.",
  },
  {
    image: heroImage3,
    badge: "Same Day Service",
    title: "Premium Screen",
    highlight: "Replacement",
    description: "Original quality displays fitted with care. Walk in with a cracked screen, walk out with a phone that looks brand new.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt="Mobile repair"
            className="w-full h-full object-cover opacity-35"
            width={1920}
            height={1080}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Animated glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
                <Shield className="h-4 w-4" /> {slide.badge}
              </div>

              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                {slide.title}
                <span className="text-gradient block">{slide.highlight}</span>
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:gap-3"
            >
              Our Services <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border bg-card/50 text-foreground font-semibold hover:bg-card transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border/50 bg-card/40 hover:bg-card transition-colors text-foreground"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full border border-border/50 bg-card/40 hover:bg-card transition-colors text-foreground"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 mt-12 max-w-lg"
          >
            {[
              { icon: Cpu, value: "10,000+", label: "Devices Fixed" },
              { icon: Shield, value: "8+", label: "Years Experience" },
              { icon: Zap, value: "98%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
