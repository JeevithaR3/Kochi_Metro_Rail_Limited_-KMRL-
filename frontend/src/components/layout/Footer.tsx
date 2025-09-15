import { motion } from 'framer-motion';
import { Train, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+91 484 233 3000', href: 'tel:+914842333000' },
    { icon: Mail, text: 'info@kochimetro.org', href: 'mailto:info@kochimetro.org' },
    { icon: MapPin, text: 'Kochi Metro Rail Limited, Kochi, Kerala', href: '#' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg metro-gradient">
                <Train className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">KMRL</h3>
                <p className="text-sm text-muted-foreground">AI Document System</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Revolutionizing metro document management with AI-powered solutions for efficient,
              transparent, and intelligent operations.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <contact.icon className="h-4 w-4 group-hover:text-primary" />
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Privacy Policy', 'Terms of Service', 'Documentation', 'Support', 'API Access', 'Status'].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 3 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Kochi Metro Rail Limited. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Powered by AI • Built with ❤️ for Kerala
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;