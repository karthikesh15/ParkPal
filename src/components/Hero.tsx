import { Button } from "@/components/ui/button";
import { MapPin, Clock, CreditCard, Shield } from "lucide-react";
import heroImage from "@/assets/hero-parking.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Smart parking garage with digital displays"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Text */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Smart Parking
                <span className="block text-secondary">Made Simple</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-lg">
                Find, book, and pay for parking spots instantly. Never circle the block again with ParkPal's real-time availability system.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-hero">
                <MapPin className="h-5 w-5 mr-2" />
                Find Parking Now
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary">
                <Clock className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-white/80 text-sm">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">Parking Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-white/80 text-sm">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            <div className="card-glass">
              <div className="flex items-start space-x-4">
                <div className="bg-success p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Real-Time Availability</h3>
                  <p className="text-muted-foreground">
                    See live parking availability with our smart sensors and GPS integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass">
              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Instant Booking</h3>
                  <p className="text-muted-foreground">
                    Reserve your spot in seconds with our streamlined booking process.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-xl">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Seamless Payments</h3>
                  <p className="text-muted-foreground">
                    Pay securely with multiple payment options and automatic billing.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass">
              <div className="flex items-start space-x-4">
                <div className="bg-warning p-3 rounded-xl">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Secure & Reliable</h3>
                  <p className="text-muted-foreground">
                    Your data and payments are protected with enterprise-grade security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;