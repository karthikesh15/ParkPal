import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar,
  MapPin,
  Clock,
  CreditCard,
  Search,
  Filter,
  Download,
  Star,
  CheckCircle,
  XCircle,
  AlertCircle,
  Car,
  TrendingUp
} from "lucide-react";

const History = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPeriod, setFilterPeriod] = useState("all");

  // Mock booking history data
  const bookings = [
    {
      id: "BK001",
      location: "Downtown Plaza Mall",
      address: "123 Main Street, Downtown",
      spotNumber: "A-15",
      date: "2024-01-15",
      startTime: "2:00 PM",
      endTime: "5:00 PM",
      duration: "3h 0m",
      amount: "$13.50",
      status: "completed",
      rating: 5,
      vehiclePlate: "ABC 123"
    },
    {
      id: "BK002",
      location: "Central Business District",
      address: "456 Business Ave, CBD",
      spotNumber: "B-23",
      date: "2024-01-12",
      startTime: "9:00 AM",
      endTime: "6:00 PM",
      duration: "9h 0m",
      amount: "$54.00",
      status: "completed",
      rating: 4,
      vehiclePlate: "ABC 123"
    },
    {
      id: "BK003",
      location: "Airport Terminal 2",
      address: "Airport Blvd, Terminal 2",
      spotNumber: "C-08",
      date: "2024-01-10",
      startTime: "11:30 AM",
      endTime: "2:30 PM",
      duration: "3h 0m",
      amount: "$9.00",
      status: "completed",
      rating: 4,
      vehiclePlate: "ABC 123"
    },
    {
      id: "BK004",
      location: "Shopping Center West",
      address: "789 Mall Drive, West Side",
      spotNumber: "D-45",
      date: "2024-01-08",
      startTime: "1:00 PM",
      endTime: "4:00 PM",
      duration: "3h 0m",
      amount: "$10.50",
      status: "cancelled",
      rating: null,
      vehiclePlate: "ABC 123"
    },
    {
      id: "BK005",
      location: "City Hall Complex",
      address: "321 Government St, Downtown",
      spotNumber: "E-12",
      date: "2024-01-05",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      duration: "2h 0m",
      amount: "$8.00",
      status: "completed",
      rating: 5,
      vehiclePlate: "ABC 123"
    }
  ];

  // Calculate statistics
  const stats = {
    totalBookings: bookings.length,
    completedBookings: bookings.filter(b => b.status === 'completed').length,
    totalSpent: bookings
      .filter(b => b.status === 'completed')
      .reduce((sum, b) => sum + parseFloat(b.amount.replace('$', '')), 0),
    averageRating: bookings
      .filter(b => b.rating)
      .reduce((sum, b) => sum + (b.rating || 0), 0) / bookings.filter(b => b.rating).length || 0,
    totalHours: bookings
      .filter(b => b.status === 'completed')
      .reduce((sum, b) => {
        const [hours] = b.duration.split('h');
        return sum + parseInt(hours);
      }, 0)
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success text-success-foreground';
      case 'cancelled':
        return 'bg-destructive text-destructive-foreground';
      case 'active':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4" />;
      case 'active':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || booking.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Booking History
            </h1>
            <p className="text-muted-foreground">
              Track all your parking bookings and manage your parking history
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Total Bookings
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stats.totalBookings}
                    </p>
                  </div>
                  <div className="bg-primary p-3 rounded-xl">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Total Spent
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      ${stats.totalSpent.toFixed(2)}
                    </p>
                  </div>
                  <div className="bg-success p-3 rounded-xl">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Avg Rating
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stats.averageRating.toFixed(1)}
                    </p>
                  </div>
                  <div className="bg-warning p-3 rounded-xl">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Total Hours
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stats.totalHours}h
                    </p>
                  </div>
                  <div className="bg-secondary p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card className="card-elevated mb-8">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle>Filter & Search</CardTitle>
                  <CardDescription>
                    Find specific bookings or filter by status
                  </CardDescription>
                </div>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export History
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by location or booking ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterPeriod} onValueChange={setFilterPeriod}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Booking History */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Your Bookings</CardTitle>
              <CardDescription>
                {filteredBookings.length} bookings found
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredBookings.map((booking) => (
                  <div key={booking.id} className="border rounded-lg p-6 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-semibold text-foreground text-lg">
                                {booking.location}
                              </h3>
                              <Badge className={getStatusColor(booking.status)}>
                                {getStatusIcon(booking.status)}
                                <span className="ml-1 capitalize">{booking.status}</span>
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-sm mb-1">
                              {booking.address}
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>Booking ID: {booking.id}</span>
                              <span className="mx-2">•</span>
                              <span>Spot {booking.spotNumber}</span>
                              <span className="mx-2">•</span>
                              <span>{booking.vehiclePlate}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            {booking.rating && (
                              <div className="flex items-center mb-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${
                                      i < booking.rating! 
                                        ? 'text-yellow-400 fill-current' 
                                        : 'text-gray-300'
                                    }`} 
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{booking.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{booking.startTime} - {booking.endTime}</span>
                          </div>
                          <div className="flex items-center">
                            <TrendingUp className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>Duration: {booking.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <CreditCard className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="font-semibold text-primary">{booking.amount}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-4 lg:mt-0 lg:ml-6">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {booking.status === 'completed' && !booking.rating && (
                          <Button variant="outline" size="sm">
                            <Star className="h-4 w-4 mr-1" />
                            Rate
                          </Button>
                        )}
                        {booking.status === 'completed' && (
                          <Button variant="outline" size="sm">
                            Book Again
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredBookings.length === 0 && (
                  <div className="text-center py-12">
                    <Car className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      No bookings found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button variant="outline">
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default History;