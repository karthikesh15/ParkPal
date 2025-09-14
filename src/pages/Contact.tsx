import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Users,
  Headphones,
  FileText
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help from our support team",
      contact: "support@parkpal.com",
      availability: "24/7 Response",
      color: "bg-primary"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9AM-6PM EST",
      color: "bg-secondary"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant help through chat",
      contact: "Available in app",
      availability: "24/7 Online",
      color: "bg-success"
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit our headquarters",
      contact: "123 Tech Hub, Silicon Valley",
      availability: "Mon-Fri, 9AM-5PM",
      color: "bg-warning"
    }
  ];

  const departments = [
    {
      icon: Users,
      title: "General Support",
      description: "Account issues, billing questions, general help"
    },
    {
      icon: Headphones,
      title: "Technical Support", 
      description: "App issues, booking problems, technical difficulties"
    },
    {
      icon: FileText,
      title: "Business Inquiries",
      description: "Partnerships, enterprise solutions, bulk bookings"
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
              Get in
              <span className="block text-primary">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Have questions? Need support? Want to partner with us? We're here to help and would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">How Can We Help?</h2>
            <p className="text-xl text-muted-foreground">
              Choose the best way to reach us based on your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-elevated border-0 text-center group cursor-pointer">
                <CardContent className="p-8">
                  <div className={`${method.color} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <div className="text-primary font-medium mb-2">{method.contact}</div>
                  <div className="text-sm text-muted-foreground">{method.availability}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Send us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <Card className="card-elevated border-0">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input placeholder="Enter your first name" className="h-12" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Enter your last name" className="h-12" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email" className="h-12" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" className="h-12" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input placeholder="What is this regarding?" className="h-12" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-32 resize-none"
                      />
                    </div>
                    
                    <Button className="w-full h-12 bg-gradient-to-r from-primary to-primary-light text-lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">support@parkpal.com</p>
                      <p className="text-muted-foreground">business@parkpal.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">+1 (555) 987-6543 (Business)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-success p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">123 Tech Hub</p>
                      <p className="text-muted-foreground">Silicon Valley, CA 94043</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-warning p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Weekend: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Department Directory</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <Card key={index} className="card-elevated border-0">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-muted p-2 rounded-lg">
                            <dept.icon className="h-5 w-5 text-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{dept.title}</h4>
                            <p className="text-sm text-muted-foreground">{dept.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Need Quick Answers?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out our frequently asked questions or browse our help center for instant solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="hover-lift">
              Browse FAQ
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light hover-lift">
              Visit Help Center
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;