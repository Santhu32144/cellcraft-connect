import { motion } from "framer-motion";
import { Shield, Clock, Award, Wrench, ThumbsUp, HeadphonesIcon } from "lucide-react";

const reasons = [
  { icon: Award, title: "Certified Technicians", desc: "Our team holds industry certifications for all major brands." },
  { icon: Shield, title: "Genuine Parts", desc: "We use OEM-quality parts with warranty on every repair." },
  { icon: Clock, title: "Fast Turnaround", desc: "Most repairs completed same-day, some within the hour." },
  { icon: Wrench, title: "Chip-Level Expertise", desc: "Advanced motherboard repair that others can't handle." },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "30-day warranty on all repairs. Your trust is our priority." },
  { icon: HeadphonesIcon, title: "Post-Repair Support", desc: "Free follow-up support and device health check-ups." },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">Why Choose CellCraft?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine years of expertise with cutting-edge tools to deliver repairs you can trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03, x: 8 }}
              className="flex gap-4 p-4 rounded-xl hover:bg-card/50 transition-colors cursor-pointer"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center glow-border">
                <r.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
