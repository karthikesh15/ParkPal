import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Clock, 
  CreditCard, 
  Calendar,
  Car,
  TrendingUp,
  Bell,
  Settings,
  Plus,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Timer
} from "lucide-react";

const Dashboard = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    membershipType: "Premium",
    totalBookings: 47,
    activeParkings: 1,
    upcomingBookings: 2
  };

  // Mock booking data
  const activeBookings = [
    {
      id: 1,
      location: "Downtown Plaza Mall",
      spotNumber: "A-15",
      startTime: "2:00 PM",
      endTime: "5:00 PM",
      timeRemaining: "2h 45m",
      price: "$8.50",
      status: "active"
    }
  ];

  const upcomingBookings = [
    {
      id: 2,
      location: "Central Business District",
      spotNumber: "B-23",
      startTime: "Tomorrow 9:00 AM",
      endTime: "Tomorrow 6:00 PM",
      price: "$15.00",
      status: "confirmed"
    },
    {
      id: 3,
      location: "Airport Terminal 2",
      spotNumber: "C-08",
      startTime: "Friday 11:30 AM",
      endTime: "Friday 2:30 PM",
      price: "$12.00",
      status: "confirmed"
    }
  ];

  const quickStats = [
    {
      icon: Car,
      title: "Active Parking",
      value: user.activeParkings,
      subtitle: "Currently parked",
      color: "bg-success"
    },
    {
      icon: Calendar,
      title: "Upcoming",
      value: user.upcomingBookings,
      subtitle: "Bookings scheduled",
      color: "bg-primary"
    },
    {
      icon: TrendingUp,
      title: "Total Bookings",
      value: user.totalBookings,
      subtitle: "All time",
      color: "bg-secondary"
    },
    {
      icon: CreditCard,
      title: "Monthly Savings",
      value: "$127",
      subtitle: "vs street parking",
      color: "bg-warning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  Welcome back, {user.name}!
                </h1>
                <p className="text-muted-foreground mt-2">
                  Manage your parking bookings and discover new locations
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="px-4 py-2">
                  {user.membershipType} Member
                </Badge>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickStats.map((stat, index) => (
              <Card key={index} className="card-elevated hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-foreground mt-1">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {stat.subtitle}
                      </p>
                    </div>
                    <div className={`${stat.color} p-3 rounded-xl`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Active Bookings */}
            <div className="lg:col-span-2">
              <Card className="card-elevated">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <Timer className="h-5 w-5 mr-2 text-success" />
                        Active Parking
                      </CardTitle>
                      <CardDescription>
                        Your current parking sessions
                      </CardDescription>
                    </div>
                    <Link to="/booking">
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        New Booking
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  {activeBookings.length > 0 ? (
                    <div className="space-y-4">
                      {activeBookings.map((booking) => (
                        <div key={booking.id} className="border border-success/20 bg-success/5 rounded-lg p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <CheckCircle className="h-4 w-4 text-success" />
                                <span className="font-medium text-foreground">
                                  {booking.location}
                                </span>
                                <Badge variant="outline" className="text-xs">
                                  Spot {booking.spotNumber}
                                </Badge>
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {booking.startTime} - {booking.endTime}
                                </div>
                                <div className="flex items-center">
                                  <Timer className="h-4 w-4 mr-1" />
                                  {booking.timeRemaining} remaining
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-foreground">
                                {booking.price}
                              </div>
                              <Button variant="outline" size="sm" className="mt-2">
                                Extend Time
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Car className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No active parking sessions</p>
                      <Link to="/locations">
                        <Button className="mt-4">
                          Find Parking Spot
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Upcoming Bookings */}
              <Card className="card-elevated mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Upcoming Bookings
                  </CardTitle>
                  <CardDescription>
                    Your scheduled parking reservations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {upcomingBookings.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingBookings.map((booking) => (
                        <div key={booking.id} className="border rounded-lg p-4 hover:border-primary/30 transition-colors">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <AlertCircle className="h-4 w-4 text-primary" />
                                <span className="font-medium text-foreground">
                                  {booking.location}
                                </span>
                                <Badge variant="outline" className="text-xs">
                                  Spot {booking.spotNumber}
                                </Badge>
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {booking.startTime} - {booking.endTime}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-foreground">
                                {booking.price}
                              </div>
                              <div className="flex space-x-2 mt-2">
                                <Button variant="outline" size="sm">
                                  Modify
                                </Button>
                                <Button variant="outline" size="sm" className="text-destructive">
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No upcoming bookings</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/locations" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <MapPin className="h-4 w-4 mr-2" />
                      Find Parking
                      <ArrowRight className="h-4 w-4 ml-auto" />
                    </Button>
                  </Link>
                  <Link to="/booking" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="h-4 w-4 mr-2" />
                      Quick Book
                      <ArrowRight className="h-4 w-4 ml-auto" />
                    </Button>
                  </Link>
                  <Link to="/history" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Clock className="h-4 w-4 mr-2" />
                      View History
                      <ArrowRight className="h-4 w-4 ml-auto" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payment Methods
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Booking Confirmed</p>
                        <p className="text-xs text-muted-foreground">
                          Downtown Plaza Mall - Today
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Payment Processed</p>
                        <p className="text-xs text-muted-foreground">
                          $8.50 - Yesterday
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Booking Completed</p>
                        <p className="text-xs text-muted-foreground">
                          Airport Terminal - 2 days ago
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;