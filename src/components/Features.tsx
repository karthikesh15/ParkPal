import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  MapPin, 
  Clock, 
  CreditCard, 
  Bell, 
  BarChart3,
  Shield,
  Users,
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Intuitive mobile app with offline support and push notifications for the best user experience.",
      color: "bg-primary"
    },
    {
      icon: MapPin,
      title: "GPS Integration",
      description: "Find the nearest parking spots with precise GPS location and turn-by-turn navigation.",
      color: "bg-secondary"
    },
    {
      icon: Clock,
      title: "Time-Based Booking",
      description: "Book parking slots for specific time windows with flexible duration options.",
      color: "bg-success"
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Pay with credit cards, digital wallets, or mobile payments with automatic receipts.",
      color: "bg-warning"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get alerts for booking confirmations, reminders, and availability updates.",
      color: "bg-destructive"
    },
    {
      icon: BarChart3,
      title: "Usage Analytics",
      description: "Track your parking patterns, expenses, and get personalized recommendations.",
      color: "bg-primary"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security with encrypted payments and data protection.",
      color: "bg-secondary"
    },
    {
      icon: Users,
      title: "Multi-User Support",
      description: "Share parking access with family or team members with role-based permissions.",
      color: "bg-success"
    },
    {
      icon: Zap,
      title: "Instant Confirmation",
      description: "Get immediate booking confirmations with QR codes for quick access.",
      color: "bg-warning"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powerful Features for
            <span className="block text-primary">Smart Parking</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the future of parking with our comprehensive platform designed for both users and administrators.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="card-elevated border-0 group cursor-pointer">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className={`${feature.color} p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Parking Experience?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already discovered the convenience of smart parking with ParkPal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:text-primary-dark">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;