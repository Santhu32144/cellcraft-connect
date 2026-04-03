import { motion } from "framer-motion";
import { Smartphone, Cpu, Battery, HardDrive, Droplets, Camera, Wifi, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Smartphone, title: "Screen Replacement", desc: "OLED & LCD screen repairs for all brands with OEM-quality parts.", time: "1-2 hrs" },
  { icon: Cpu, title: "Chip Level Repair", desc: "Advanced motherboard and IC-level component repair by certified techs.", time: "2-4 hrs" },
  { icon: Battery, title: "Battery Replacement", desc: "Genuine battery replacement with health optimization and testing.", time: "30 min" },
  { icon: HardDrive, title: "Data Recovery", desc: "Recover lost photos, contacts, and files from damaged devices.", time: "1-3 days" },
  { icon: Droplets, title: "Water Damage", desc: "Ultrasonic cleaning and component-level water damage restoration.", time: "1-2 days" },
  { icon: Camera, title: "Camera Repair", desc: "Front and rear camera module replacement and autofocus calibration.", time: "1-2 hrs" },
  { icon: Wifi, title: "Network Issues", desc: "Wi-Fi, Bluetooth, and cellular signal repair and antenna replacement.", time: "1-3 hrs" },
  { icon: Volume2, title: "Speaker & Mic", desc: "Speaker, microphone, and earpiece replacement with sound testing.", time: "1 hr" },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Do</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">Our Expert Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From simple fixes to complex chip-level repairs, we handle it all with precision and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: -3 }}
              className="group glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{service.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-primary font-medium">⏱ {service.time}</span>
                <Link to="/contact" className="text-xs text-primary hover:underline">Book Now →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
