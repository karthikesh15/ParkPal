import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Car, 
  Filter,
  Search,
  Navigation
} from "lucide-react";
import { Input } from "@/components/ui/input";

const ParkingLocations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const locations = [
    {
      id: 1,
      name: "Downtown Business Center",
      address: "123 Main St, Downtown",
      distance: "0.2 miles",
      totalSpots: 150,
      availableSpots: 23,
      pricePerHour: 8,
      rating: 4.8,
      features: ["Covered", "Security", "EV Charging"],
      status: "available"
    },
    {
      id: 2,
      name: "City Mall Parking Garage",
      address: "456 Shopping Ave, Midtown", 
      distance: "0.5 miles",
      totalSpots: 300,
      availableSpots: 67,
      pricePerHour: 6,
      rating: 4.6,
      features: ["Multi-level", "24/7 Access", "Valet"],
      status: "available"
    },
    {
      id: 3,
      name: "Airport Terminal Parking",
      address: "789 Airport Rd, Terminal A",
      distance: "2.1 miles",
      totalSpots: 500,
      availableSpots: 0,
      pricePerHour: 12,
      rating: 4.4,
      features: ["Long-term", "Shuttle Service", "Security"],
      status: "full"
    },
    {
      id: 4,
      name: "University Campus Lot",
      address: "321 College Blvd, Campus",
      distance: "1.3 miles",
      totalSpots: 200,
      availableSpots: 89,
      pricePerHour: 4,
      rating: 4.7,
      features: ["Student Discount", "Bicycle Parking", "24/7"],
      status: "available"
    },
    {
      id: 5,
      name: "Hospital Medical Center",
      address: "555 Health Way, Medical District",
      distance: "0.8 miles",
      totalSpots: 100,
      availableSpots: 12,
      pricePerHour: 10,
      rating: 4.5,
      features: ["Visitor Parking", "Wheelchair Access", "Close to Entrance"],
      status: "limited"
    },
    {
      id: 6,
      name: "Beachfront Parking Plaza",
      address: "888 Ocean View Dr, Beach Area",
      distance: "3.2 miles", 
      totalSpots: 80,
      availableSpots: 45,
      pricePerHour: 5,
      rating: 4.9,
      features: ["Ocean View", "Beach Access", "Outdoor"],
      status: "available"
    }
  ];

  const getStatusColor = (status: string, availableSpots: number, totalSpots: number) => {
    if (status === "full" || availableSpots === 0) return "status-occupied";
    if (availableSpots <= totalSpots * 0.2) return "status-reserved";
    return "status-available";
  };

  const getStatusText = (status: string, availableSpots: number, totalSpots: number) => {
    if (status === "full" || availableSpots === 0) return "Full";
    if (availableSpots <= totalSpots * 0.2) return "Limited";
    return "Available";
  };

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedFilter === "all") return matchesSearch;
    if (selectedFilter === "available") return matchesSearch && location.availableSpots > 0;
    if (selectedFilter === "nearby") return matchesSearch && parseFloat(location.distance) <= 1.0;
    
    return matchesSearch;
  });

  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Find Parking
            <span className="block text-primary">Near You</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Browse available parking locations with real-time availability and instant booking.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by location, address, or name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
            <div className="flex gap-2">
              {["all", "available", "nearby"].map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? "default" : "outline"}
                  onClick={() => setSelectedFilter(filter)}
                  className="capitalize"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLocations.map((location) => (
            <Card key={location.id} className="card-elevated border-0 overflow-hidden group">
              <CardContent className="p-0">
                {/* Location Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {location.name}
                      </h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{location.address}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Navigation className="h-4 w-4 mr-2" />
                        <span className="text-sm">{location.distance} away</span>
                      </div>
                    </div>
                    <Badge 
                      className={`${getStatusColor(location.status, location.availableSpots, location.totalSpots)} text-xs px-3 py-1`}
                    >
                      {getStatusText(location.status, location.availableSpots, location.totalSpots)}
                    </Badge>
                  </div>

                  {/* Availability Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Availability</span>
                      <span>{location.availableSpots} of {location.totalSpots} spots</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          location.availableSpots === 0 ? 'bg-destructive' :
                          location.availableSpots <= location.totalSpots * 0.2 ? 'bg-warning' :
                          'bg-success'
                        }`}
                        style={{ width: `${(location.availableSpots / location.totalSpots) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {location.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Pricing and Rating */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-foreground">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span className="font-semibold">${location.pricePerHour}/hour</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="text-sm font-medium">{location.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 bg-muted/20">
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      disabled={location.availableSpots === 0}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      View Map
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-primary to-primary-light"
                      disabled={location.availableSpots === 0}
                    >
                      <Car className="h-4 w-4 mr-2" />
                      {location.availableSpots === 0 ? "Full" : "Book Now"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No locations found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters to find parking spots.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ParkingLocations;