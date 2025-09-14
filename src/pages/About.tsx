import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  TrendingUp,
  Globe,
  Shield,
  Zap
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "10,000+", label: "Happy Users", icon: Users },
    { number: "500+", label: "Parking Locations", icon: Globe },
    { number: "99.9%", label: "Uptime", icon: Shield },
    { number: "50K+", label: "Bookings Monthly", icon: TrendingUp }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We leverage cutting-edge technology to solve urban parking challenges and create seamless experiences."
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Every feature is designed with our users in mind, prioritizing convenience, reliability, and satisfaction."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We maintain the highest standards of security and privacy to protect our users' data and transactions."
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "We streamline the parking process, saving time and reducing stress for drivers in urban environments."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      image: "👩‍💼",
      bio: "Former Tesla engineering lead with 10+ years in smart city solutions."
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-founder", 
      image: "👨‍💻",
      bio: "Ex-Google engineer specializing in real-time systems and mobile platforms."
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      image: "👩‍🎨",
      bio: "Former Uber product manager focused on urban mobility and user experience."
    },
    {
      name: "David Kim",
      role: "Head of Operations",
      image: "👨‍💼",
      bio: "Operations expert with experience scaling parking solutions across major cities."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About
              <span className="block text-primary">ParkPal</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              We're revolutionizing urban parking through smart technology, making it easier for everyone to find, book, and pay for parking spots instantly.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light">
              Join Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center card-elevated border-0">
                <CardContent className="p-8">
                  <div className="bg-primary p-4 rounded-2xl w-fit mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                To eliminate the frustration of urban parking by creating intelligent, connected parking solutions that save time, reduce traffic congestion, and contribute to cleaner, more livable cities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-success p-2 rounded-full mr-4">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-foreground font-medium">Reduce urban traffic by 30%</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary p-2 rounded-full mr-4">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-foreground font-medium">Make parking accessible to everyone</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-secondary p-2 rounded-full mr-4">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-foreground font-medium">Create stress-free urban mobility</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A future where every parking space is optimized, every journey is seamless, and cities are designed around people, not cars. We envision smart cities where parking is predictable, affordable, and sustainable.
              </p>
              <Card className="card-elevated border-0 bg-gradient-to-br from-primary to-secondary text-white">
                <CardContent className="p-8">
                  <Award className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Award-Winning Innovation</h3>
                  <p className="text-white/90">
                    Recognized by Smart City Awards 2024 for outstanding contribution to urban mobility solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do at ParkPal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elevated border-0 text-center group">
                <CardContent className="p-8">
                  <div className="bg-primary p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              The passionate innovators behind ParkPal's success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-elevated border-0 text-center group">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <div className="text-primary font-medium mb-4">{member.role}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join the Parking Revolution?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the future of urban parking with ParkPal. Join thousands of users who have already made the switch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;