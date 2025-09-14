import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Menu, X, User, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-primary-light p-2 rounded-xl">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              ParkPal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/features" 
              className={`transition-colors duration-200 ${
                isActive('/features') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/locations" 
              className={`transition-colors duration-200 ${
                isActive('/locations') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Locations
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors duration-200 ${
                isActive('/about') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors duration-200 ${
                isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/features" 
                className={`py-2 transition-colors duration-200 ${
                  isActive('/features') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/locations" 
                className={`py-2 transition-colors duration-200 ${
                  isActive('/locations') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </Link>
              <Link 
                to="/about" 
                className={`py-2 transition-colors duration-200 ${
                  isActive('/about') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`py-2 transition-colors duration-200 ${
                  isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex flex-col space-y-3 pt-4 border-t border-border">
              <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;