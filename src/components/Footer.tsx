import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary to-primary-light p-2 rounded-xl">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">ParkPal</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Revolutionizing urban parking with smart technology. Find, book, and pay for parking spots instantly with our innovative platform.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-white/80 hover:text-white transition-colors duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#locations" className="text-white/80 hover:text-white transition-colors duration-200">
                  Locations
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/80 hover:text-white transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="#help" className="text-white/80 hover:text-white transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-white transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-white/80 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-white/80 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#refund" className="text-white/80 hover:text-white transition-colors duration-200">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-white/80">
                <Mail className="h-5 w-5 mr-3" />
                <span>support@parkpal.com</span>
              </div>
              <div className="flex items-center text-white/80">
                <Phone className="h-5 w-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="h-5 w-5 mr-3" />
                <span>123 Tech Hub, Silicon Valley</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div>
              <h4 className="font-medium mb-3">Newsletter</h4>
              <p className="text-white/80 text-sm mb-4">
                Get updates on new features and parking locations.
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-1"
                />
                <Button size="sm" className="bg-primary hover:bg-primary-dark">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 ParkPal. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Privacy
              </a>
              <a href="#terms" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Terms
              </a>
              <a href="#cookies" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;