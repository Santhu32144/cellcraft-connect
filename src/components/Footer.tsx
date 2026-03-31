import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="CellCraft" className="h-10 w-10" />
              <span className="font-display text-xl font-bold text-gradient">CellCraft</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted destination for advanced mobile repair. Certified technicians, genuine parts, and guaranteed satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Services", "Gallery", "Testimonials", "Contact"].map((item) => (
                <Link key={item} to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Our Services</h4>
            <div className="flex flex-col gap-2 text-muted-foreground text-sm">
              <span>Screen Replacement</span>
              <span>Chip Level Repair</span>
              <span>Battery Replacement</span>
              <span>Water Damage Repair</span>
              <span>Data Recovery</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-muted-foreground text-sm">
              <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" /> +91 99999 99999
              </a>
              <a href="mailto:info@cellcraft.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" /> info@cellcraft.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Shop No. 1, Main Market,<br />New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Mon–Sat: 10AM – 8PM
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} CellCraft. All rights reserved.
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 p-4 rounded-full shadow-lg transition-transform hover:scale-110 animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-foreground" />
      </a>
    </footer>
  );
};

export default Footer;
