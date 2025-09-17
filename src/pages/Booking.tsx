import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { 
  CalendarIcon, 
  Clock, 
  MapPin, 
  Car, 
  CreditCard,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Navigation
} from "lucide-react";
import { format } from "date-fns";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSpot, setSelectedSpot] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [duration, setDuration] = useState("");

  // Mock parking locations
  const locations = [
    {
      id: 1,
      name: "Downtown Plaza Mall",
      address: "123 Main Street, Downtown",
      distance: "0.2 miles",
      rating: 4.8,
      totalSpots: 150,
      availableSpots: 23,
      pricePerHour: 4.50,
      features: ["Covered", "Security", "EV Charging"]
    },
    {
      id: 2,
      name: "Central Business District",
      address: "456 Business Ave, CBD",
      distance: "0.5 miles",
      rating: 4.6,
      totalSpots: 200,
      availableSpots: 45,
      pricePerHour: 6.00,
      features: ["24/7 Access", "Security", "Valet"]
    },
    {
      id: 3,
      name: "Airport Terminal 2",
      address: "Airport Blvd, Terminal 2",
      distance: "2.1 miles",
      rating: 4.4,
      totalSpots: 500,
      availableSpots: 120,
      pricePerHour: 3.00,
      features: ["Long-term", "Shuttle", "Security"]
    }
  ];

  // Mock available spots for selected location
  const availableSpots = [
    { id: "A-15", level: "Level A", section: "15", type: "Standard", price: 4.50 },
    { id: "A-16", level: "Level A", section: "16", type: "Compact", price: 4.00 },
    { id: "B-23", level: "Level B", section: "23", type: "Standard", price: 4.50 },
    { id: "B-24", level: "Level B", section: "24", type: "Premium", price: 6.00 },
    { id: "C-08", level: "Level C", section: "08", type: "EV Charging", price: 5.50 }
  ];

  const calculatePrice = () => {
    if (!startTime || !endTime || !selectedSpot) return 0;
    const spot = availableSpots.find(s => s.id === selectedSpot);
    if (!spot) return 0;
    
    // Simple duration calculation (would be more sophisticated in real app)
    const durationHours = 3; // Mock 3 hours
    return spot.price * durationHours;
  };

  const handleBooking = () => {
    // Mock booking process
    console.log("Booking:", {
      location: selectedLocation,
      spot: selectedSpot,
      date: selectedDate,
      startTime,
      endTime,
      price: calculatePrice()
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Book Parking Spot
            </h1>
            <p className="text-muted-foreground">
              Find and reserve your perfect parking spot in seconds
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Location Selection */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Select Location
                  </CardTitle>
                  <CardDescription>
                    Choose from available parking locations near you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {locations.map((location) => (
                      <div 
                        key={location.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                          selectedLocation === location.name 
                            ? 'border-primary bg-primary/5' 
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedLocation(location.name)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-foreground">
                                {location.name}
                              </h3>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-muted-foreground ml-1">
                                  {location.rating}
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {location.address}
                            </p>
                            <div className="flex items-center space-x-4 text-sm">
                              <div className="flex items-center">
                                <Navigation className="h-4 w-4 mr-1 text-primary" />
                                {location.distance}
                              </div>
                              <div className="flex items-center">
                                <Car className="h-4 w-4 mr-1 text-success" />
                                {location.availableSpots} available
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {location.features.map((feature, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">
                              ${location.pricePerHour}/hr
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Starting from
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Date & Time Selection */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    Date & Time
                  </CardTitle>
                  <CardDescription>
                    Select when you need the parking spot
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label>Parking Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="startTime">Start Time</Label>
                          <Select value={startTime} onValueChange={setStartTime}>
                            <SelectTrigger>
                              <SelectValue placeholder="Start time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="08:00">8:00 AM</SelectItem>
                              <SelectItem value="09:00">9:00 AM</SelectItem>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                              <SelectItem value="12:00">12:00 PM</SelectItem>
                              <SelectItem value="13:00">1:00 PM</SelectItem>
                              <SelectItem value="14:00">2:00 PM</SelectItem>
                              <SelectItem value="15:00">3:00 PM</SelectItem>
                              <SelectItem value="16:00">4:00 PM</SelectItem>
                              <SelectItem value="17:00">5:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="endTime">End Time</Label>
                          <Select value={endTime} onValueChange={setEndTime}>
                            <SelectTrigger>
                              <SelectValue placeholder="End time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                              <SelectItem value="12:00">12:00 PM</SelectItem>
                              <SelectItem value="13:00">1:00 PM</SelectItem>
                              <SelectItem value="14:00">2:00 PM</SelectItem>
                              <SelectItem value="15:00">3:00 PM</SelectItem>
                              <SelectItem value="16:00">4:00 PM</SelectItem>
                              <SelectItem value="17:00">5:00 PM</SelectItem>
                              <SelectItem value="18:00">6:00 PM</SelectItem>
                              <SelectItem value="19:00">7:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label>Quick Duration</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <Button 
                          variant={duration === "1h" ? "default" : "outline"} 
                          size="sm"
                          onClick={() => setDuration("1h")}
                        >
                          1 Hour
                        </Button>
                        <Button 
                          variant={duration === "2h" ? "default" : "outline"} 
                          size="sm"
                          onClick={() => setDuration("2h")}
                        >
                          2 Hours
                        </Button>
                        <Button 
                          variant={duration === "4h" ? "default" : "outline"} 
                          size="sm"
                          onClick={() => setDuration("4h")}
                        >
                          4 Hours
                        </Button>
                        <Button 
                          variant={duration === "all-day" ? "default" : "outline"} 
                          size="sm"
                          onClick={() => setDuration("all-day")}
                        >
                          All Day
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Spot Selection */}
              {selectedLocation && (
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Car className="h-5 w-5 mr-2" />
                      Available Spots
                    </CardTitle>
                    <CardDescription>
                      Choose your preferred parking spot
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {availableSpots.map((spot) => (
                        <div
                          key={spot.id}
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                            selectedSpot === spot.id 
                              ? 'border-primary bg-primary/5' 
                              : 'border-gray-200 hover:border-primary/50'
                          }`}
                          onClick={() => setSelectedSpot(spot.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-foreground">
                                Spot {spot.id}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {spot.level} • {spot.type}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-primary">
                                ${spot.price}/hr
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Booking Summary */}
            <div className="space-y-6">
              <Card className="card-elevated sticky top-24">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedLocation && (
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Location</span>
                        <span className="font-medium">{selectedLocation}</span>
                      </div>
                    </div>
                  )}
                  
                  {selectedSpot && (
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Spot</span>
                        <span className="font-medium">{selectedSpot}</span>
                      </div>
                    </div>
                  )}
                  
                  {selectedDate && (
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Date</span>
                        <span className="font-medium">
                          {format(selectedDate, "MMM dd, yyyy")}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {startTime && endTime && (
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Time</span>
                        <span className="font-medium">
                          {startTime} - {endTime}
                        </span>
                      </div>
                    </div>
                  )}

                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span>3 hours</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Rate</span>
                      <span>$4.50/hr</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Service Fee</span>
                      <span>$0.50</span>
                    </div>
                  </div>

                  <Separator />
                  
                  <div className="flex items-center justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-lg text-primary">
                      ${(calculatePrice() + 0.50).toFixed(2)}
                    </span>
                  </div>

                  <Button 
                    className="w-full btn-hero" 
                    onClick={handleBooking}
                    disabled={!selectedLocation || !selectedSpot || !selectedDate || !startTime || !endTime}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Book & Pay Now
                  </Button>

                  <div className="flex items-center justify-center text-xs text-muted-foreground">
                    <Shield className="h-4 w-4 mr-1" />
                    Secure payment protected by SSL
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>Why Book with ParkPal?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Guaranteed Spot</p>
                      <p className="text-xs text-muted-foreground">
                        Your reservation is confirmed and protected
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Flexible Cancellation</p>
                      <p className="text-xs text-muted-foreground">
                        Cancel up to 1 hour before start time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">24/7 Support</p>
                      <p className="text-xs text-muted-foreground">
                        Get help whenever you need it
                      </p>
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

export default Booking;