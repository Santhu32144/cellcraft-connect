import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const allTestimonials = [
  { name: "Rahul Sharma", review: "Amazing chip-level repair! My phone was dead and they brought it back to life in 3 hours. Highly recommended!", rating: 5, device: "iPhone 14 Pro", date: "2025-03-15" },
  { name: "Priya Patel", review: "Best screen replacement service. Quality OLED display and the phone looks brand new. Very professional team.", rating: 5, device: "Samsung S23", date: "2025-03-10" },
  { name: "Amit Kumar", review: "Water damaged phone recovered with all my data intact. These guys are true experts. Thank you CellCraft!", rating: 5, device: "OnePlus 11", date: "2025-03-05" },
  { name: "Sneha Gupta", review: "Quick battery replacement with genuine parts. Phone battery health went from 60% to 100%. Great service!", rating: 4, device: "iPhone 13", date: "2025-02-28" },
  { name: "Vikram Singh", review: "Motherboard issue fixed at half the price quoted by the service center. Honest and skilled technicians.", rating: 5, device: "Pixel 7", date: "2025-02-20" },
  { name: "Ananya Reddy", review: "Camera module replaced perfectly. Autofocus works like new. Will come back for any future repairs.", rating: 5, device: "Samsung S22", date: "2025-02-15" },
  { name: "Deepak Joshi", review: "Broken charging port fixed in 30 minutes. Fast, clean, and affordable. CellCraft is the real deal!", rating: 5, device: "Redmi Note 12", date: "2025-02-10" },
  { name: "Meera Nair", review: "Speaker replacement done with great quality. Sound is crystal clear now. Reasonable pricing too!", rating: 4, device: "iPhone 12", date: "2025-01-28" },
];

type SortType = "latest" | "highest";

const TestimonialsPage = () => {
  const [sortBy, setSortBy] = useState<SortType>("latest");
  const sorted = [...allTestimonials].sort((a, b) =>
    sortBy === "latest" ? new Date(b.date).getTime() - new Date(a.date).getTime() : b.rating - a.rating
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Reviews</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-4">Customer Testimonials</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Real reviews from real customers who trust CellCraft.</p>
          </motion.div>

          <div className="flex justify-center gap-3 mb-12">
            {(["latest", "highest"] as SortType[]).map((s) => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                  sortBy === s ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {s === "latest" ? "Latest First" : "Highest Rated"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sorted.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="glass rounded-xl p-6 relative"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`h-4 w-4 ${j < t.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`} />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4">"{t.review}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{t.name}</div>
                      <div className="text-muted-foreground text-xs">{t.device}</div>
                    </div>
                  </div>
                  <span className="text-muted-foreground text-xs">{new Date(t.date).toLocaleDateString()}</span>
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

export default TestimonialsPage;
