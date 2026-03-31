import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  "Apple Certified Repair Technician",
  "Samsung Authorized Service Partner",
  "Mobile Repair Certification – NSDC",
  "Advanced Micro-Soldering Certificate",
  "Data Recovery Specialist",
  "Quality Assurance – ISO 9001",
];

const CertificationsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Credentials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">Our Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications that guarantee expertise and quality in every repair.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-6 flex items-center gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium text-foreground">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
