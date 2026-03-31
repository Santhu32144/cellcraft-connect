import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">The CellCraft Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a passion for technology and precision, CellCraft has grown into a trusted name in mobile repair services. With over 8 years of hands-on experience, our certified technicians have successfully repaired more than 10,000 devices.
              </p>
              <p>
                We specialize in advanced chip-level repairs that most shops can't handle — from micro-soldering to complex motherboard diagnostics. Every repair is backed by our quality guarantee and genuine parts promise.
              </p>
              <p>
                Our vision is simple: make professional-grade mobile repair accessible, affordable, and trustworthy for everyone.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "8+", label: "Years Experience" },
              { value: "10K+", label: "Devices Repaired" },
              { value: "6", label: "Certifications" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-6 text-center glow-border">
                <div className="font-display text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
