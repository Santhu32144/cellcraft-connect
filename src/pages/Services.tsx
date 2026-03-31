import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Smartphone, Cpu, Battery, HardDrive, Droplets, Camera, Wifi, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Smartphone, title: "Screen Replacement", desc: "Professional OLED & LCD screen replacement for all major brands. We use OEM-quality displays with accurate color calibration and touch sensitivity testing.", time: "1-2 hrs", price: "₹1,500 – ₹8,000" },
  { icon: Cpu, title: "Chip Level Repair", desc: "Advanced motherboard repair including IC replacement, micro-soldering, and component-level diagnostics. We fix what others can't.", time: "2-4 hrs", price: "₹2,000 – ₹10,000" },
  { icon: Battery, title: "Battery Replacement", desc: "Genuine battery replacement with health optimization. We test charge cycles, calibrate the new battery, and ensure optimal performance.", time: "30 min", price: "₹800 – ₹3,000" },
  { icon: HardDrive, title: "Data Recovery", desc: "Advanced data recovery from damaged, dead, or water-damaged devices. We recover photos, contacts, messages, and important files.", time: "1-3 days", price: "₹2,000 – ₹8,000" },
  { icon: Droplets, title: "Water Damage Repair", desc: "Complete water damage restoration using ultrasonic cleaning, component drying, and circuit board repair. Quick response maximizes recovery chances.", time: "1-2 days", price: "₹1,500 – ₹6,000" },
  { icon: Camera, title: "Camera Repair", desc: "Front and rear camera module replacement, lens repair, and autofocus calibration. Restore your photos to perfect quality.", time: "1-2 hrs", price: "₹1,000 – ₹5,000" },
  { icon: Wifi, title: "Network & Signal", desc: "Wi-Fi, Bluetooth, cellular signal repair, antenna replacement, and SIM card slot fixes. Get your connectivity back.", time: "1-3 hrs", price: "₹800 – ₹4,000" },
  { icon: Volume2, title: "Speaker & Mic Repair", desc: "Speaker, microphone, and earpiece replacement with thorough sound testing and calibration for crystal-clear audio.", time: "1 hr", price: "₹600 – ₹2,500" },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-4">Expert Repair Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive mobile repair solutions with genuine parts and certified expertise.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-8 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="text-primary font-medium">⏱ {service.time}</span>
                      <span className="text-muted-foreground">💰 {service.price}</span>
                    </div>
                    <Link to="/contact" className="inline-block mt-4 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
