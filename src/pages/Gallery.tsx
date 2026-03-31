import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Screen Replacement", "Water Damage", "Motherboard Repair", "Camera Issues", "Others"];

const galleryItems = [
  { category: "Screen Replacement", title: "iPhone 14 Pro Max – OLED Screen", status: "Completed" },
  { category: "Water Damage", title: "Samsung S23 Ultra – Full Restoration", status: "Completed" },
  { category: "Motherboard Repair", title: "OnePlus 11 – IC Chip Replacement", status: "Completed" },
  { category: "Camera Issues", title: "Pixel 7 Pro – Rear Camera Module", status: "Completed" },
  { category: "Screen Replacement", title: "Samsung Z Fold 5 – Inner Display", status: "Completed" },
  { category: "Others", title: "iPad Pro – Charging Port Repair", status: "Completed" },
  { category: "Motherboard Repair", title: "iPhone 13 – No Power Fix", status: "Completed" },
  { category: "Water Damage", title: "Redmi Note 12 – Ultrasonic Clean", status: "Completed" },
  { category: "Camera Issues", title: "iPhone 15 – Front Camera Fix", status: "Completed" },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Work</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-4">Repair Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Browse our recent repairs and see the quality of our work.</p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                className="glass rounded-xl overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <p className="text-muted-foreground text-xs">Before & After photos coming soon</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">{item.category}</span>
                    <span className="text-xs text-green-500 font-medium">✓ {item.status}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm">{item.title}</h3>
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

export default GalleryPage;
