import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Socials */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl">
              SD
            </div>
            <span className="font-bold text-xl">AHMAD<span className="text-primary"> ALISHA</span></span>
          </Link>
          <p className="text-muted-foreground leading-relaxed">
            Crafting digital experiences with passion and precision. Building scalable and efficient software solutions for global clients.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/Alisha-21-cloud" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/syed-ahmad-alisha/" },
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Instagram, href: "https://instagram.com" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-secondary flex items-center justify-center rounded-xl border border-border/50 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all shadow-sm"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {[
              { name: "Home", href: "/" },
              { name: "About Me", href: "/about" },
              { name: "Projects", href: "/projects" },
              { name: "Services", href: "/services" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-6">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 group">
              <Mail className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <a href="mailto:ahmadalisha1420@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  ahmadalisha1420@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <Phone className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm font-medium">Phone</p>
                <a href="tel:+917288827181" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 7288827181
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <MapPin className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-muted-foreground">India</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Projects Highlight */}
        <div>
          <h4 className="font-bold text-lg mb-6">Featured Projects</h4>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-secondary rounded-lg overflow-hidden border border-border/50 group cursor-pointer shadow-sm hover:border-primary/50 transition-colors">
                <img 
                  src={`https://picsum.photos/seed/footer-project-${i}/100/100`} 
                  alt={`Project ${i}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
        <p>&copy; {currentYear} Syed Ahmad Alisha. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <button className="hover:text-primary transition-colors">Privacy Policy</button>
          <button className="hover:text-primary transition-colors">Terms of Service</button>
          <button className="hover:text-primary transition-colors">Cookie Settings</button>
        </div>
      </div>
    </footer>
  );
}
