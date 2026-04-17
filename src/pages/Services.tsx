import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Smartphone, Cpu, Battery, HardDrive, Droplets, Camera, Wifi, Volume2, ArrowRight, Clock, IndianRupee, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Smartphone, title: "Screen Replacement", desc: "Professional OLED & LCD screen replacement for all major brands. We use OEM-quality displays with accurate color calibration and touch sensitivity testing.", time: "1-2 hrs", price: "₹1,500 – ₹8,000", featured: true },
  { icon: Cpu, title: "Chip Level Repair", desc: "Advanced motherboard repair including IC replacement, micro-soldering, and component-level diagnostics. We fix what others can't.", time: "2-4 hrs", price: "₹2,000 – ₹10,000", featured: true },
  { icon: Battery, title: "Battery Replacement", desc: "Genuine battery replacement with health optimization. We test charge cycles, calibrate the new battery, and ensure optimal performance.", time: "30 min", price: "₹800 – ₹3,000" },
  { icon: HardDrive, title: "Data Recovery", desc: "Advanced data recovery from damaged, dead, or water-damaged devices. We recover photos, contacts, messages, and important files.", time: "1-3 days", price: "₹2,000 – ₹8,000" },
  { icon: Droplets, title: "Water Damage Repair", desc: "Complete water damage restoration using ultrasonic cleaning, component drying, and circuit board repair. Quick response maximizes recovery chances.", time: "1-2 days", price: "₹1,500 – ₹6,000" },
  { icon: Camera, title: "Camera Repair", desc: "Front and rear camera module replacement, lens repair, and autofocus calibration. Restore your photos to perfect quality.", time: "1-2 hrs", price: "₹1,000 – ₹5,000" },
  { icon: Wifi, title: "Network & Signal", desc: "Wi-Fi, Bluetooth, cellular signal repair, antenna replacement, and SIM card slot fixes. Get your connectivity back.", time: "1-3 hrs", price: "₹800 – ₹4,000" },
  { icon: Volume2, title: "Speaker & Mic Repair", desc: "Speaker, microphone, and earpiece replacement with thorough sound testing and calibration for crystal-clear audio.", time: "1 hr", price: "₹600 – ₹2,500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero / Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Services</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Expert Repair,{" "}
              <span className="text-gradient bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                Delivered Right
              </span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Comprehensive mobile repair solutions powered by genuine parts, certified expertise, and a passion for restoring devices to perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                className={`group relative glass rounded-2xl p-7 border transition-all duration-300 overflow-hidden ${
                  service.featured
                    ? "border-primary/30 hover:border-primary/60 lg:col-span-1"
                    : "border-border/40 hover:border-primary/40"
                }`}
              >
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Featured badge */}
                {service.featured && (
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-primary/15 border border-primary/30">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Popular</span>
                  </div>
                )}

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-5 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] transition-shadow"
                  >
                    <service.icon className="h-7 w-7 text-primary" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                    {service.desc}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 mb-5 pb-5 border-b border-border/40">
                    <div className="flex items-center gap-1.5 text-xs">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      <span className="text-muted-foreground font-medium">{service.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <IndianRupee className="h-3.5 w-3.5 text-primary" />
                      <span className="text-muted-foreground font-medium">{service.price.replace("₹", "")}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                  >
                    Request a Quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 text-center glass rounded-2xl p-10 border border-primary/20 max-w-3xl mx-auto"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Don't see your issue listed?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We diagnose every device for free. Bring it in or message us — we'll let you know exactly what's wrong and what it'll cost.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)]"
            >
              Get Free Diagnosis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
