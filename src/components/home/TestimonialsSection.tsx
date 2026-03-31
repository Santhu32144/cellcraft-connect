import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rahul Sharma", review: "Amazing chip-level repair! My phone was dead and they brought it back to life in 3 hours. Highly recommended!", rating: 5, device: "iPhone 14 Pro" },
  { name: "Priya Patel", review: "Best screen replacement service. Quality OLED display and the phone looks brand new. Very professional team.", rating: 5, device: "Samsung S23" },
  { name: "Amit Kumar", review: "Water damaged phone recovered with all my data intact. These guys are true experts. Thank you CellCraft!", rating: 5, device: "OnePlus 11" },
  { name: "Sneha Gupta", review: "Quick battery replacement with genuine parts. Phone battery health went from 60% to 100%. Great service!", rating: 4, device: "iPhone 13" },
  { name: "Vikram Singh", review: "Motherboard issue fixed at half the price quoted by the service center. Honest and skilled technicians.", rating: 5, device: "Pixel 7" },
  { name: "Ananya Reddy", review: "Camera module replaced perfectly. Autofocus works like new. Will come back for any future repairs.", rating: 5, device: "Samsung S22" },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of customers across the city for quality repairs and honest service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-6 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`h-4 w-4 ${j < t.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`} />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.device}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
