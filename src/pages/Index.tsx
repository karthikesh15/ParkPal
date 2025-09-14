import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Clock, 
  CreditCard, 
  Shield,
  ArrowRight,
  Star,
  Users,
  Zap
} from "lucide-react";

const Index = () => {
  const quickFeatures = [
    {
      icon: MapPin,
      title: "Real-Time Availability",
      description: "See live parking spots instantly",
      color: "bg-primary"
    },
    {
      icon: Clock,
      title: "Instant Booking",
      description: "Reserve your spot in seconds",
      color: "bg-secondary"
    },
    {
      icon: CreditCard,
      title: "Seamless Payments",
      description: "Pay securely with one tap",
      color: "bg-success"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security",
      color: "bg-warning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Quick Features Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose
              <span className="block text-primary">ParkPal?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the future of parking with our smart, efficient, and user-friendly platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {quickFeatures.map((feature, index) => (
              <Card key={index} className="card-elevated border-0 text-center group">
                <CardContent className="p-8">
                  <div className={`${feature.color} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-elevated border-0 group cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Find Parking</h3>
                    <p className="text-muted-foreground mb-4">
                      Browse available parking locations near you with real-time availability.
                    </p>
                    <Link to="/locations">
                      <Button className="bg-gradient-to-r from-primary to-primary-light group-hover:shadow-lg transition-all duration-300">
                        Browse Locations
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                  </div>
                  <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    🅿️
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated border-0 group cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Learn More</h3>
                    <p className="text-muted-foreground mb-4">
                      Discover all the powerful features that make ParkPal the best parking solution.
                    </p>
                    <Link to="/features">
                      <Button variant="outline" className="group-hover:shadow-lg transition-all duration-300">
                        View Features
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                  </div>
                  <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    ⚡
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the growing community of smart parkers who save time and money with ParkPal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-muted-foreground">App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="flex justify-center mb-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="flex justify-center mb-2">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-muted-foreground">Parking Locations</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Start Smart Parking?
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of users and transform your parking experience today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:text-primary-dark">
                  <Zap className="h-5 w-5 mr-2" />
                  Get Started Free
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
