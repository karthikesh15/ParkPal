import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  LayoutDashboard,
  Users,
  MapPin,
  Car,
  CreditCard,
  TrendingUp,
  Settings,
  Bell,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BarChart3,
  PieChart,
  Activity,
  Shield,
  LogOut
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const dashboardStats = {
    totalUsers: 2847,
    activeBookings: 156,
    totalLocations: 24,
    monthlyRevenue: 45670,
    occupancyRate: 78,
    newUsersToday: 23,
    completedBookings: 1204,
    cancelledBookings: 45
  };

  const recentBookings = [
    {
      id: "BK001",
      user: "John Doe",
      location: "Downtown Plaza Mall",
      spot: "A-15",
      startTime: "2:00 PM",
      endTime: "5:00 PM",
      amount: "$13.50",
      status: "active"
    },
    {
      id: "BK002",
      user: "Jane Smith",
      location: "Central Business District",
      spot: "B-23",
      startTime: "9:00 AM",
      endTime: "6:00 PM",
      amount: "$54.00",
      status: "completed"
    },
    {
      id: "BK003",
      user: "Mike Johnson",
      location: "Airport Terminal 2",
      spot: "C-08",
      startTime: "11:30 AM",
      endTime: "2:30 PM",
      amount: "$9.00",
      status: "cancelled"
    }
  ];

  const parkingLocations = [
    {
      id: 1,
      name: "Downtown Plaza Mall",
      address: "123 Main Street, Downtown",
      totalSpots: 150,
      occupiedSpots: 120,
      availableSpots: 30,
      revenue: "$12,450",
      status: "active"
    },
    {
      id: 2,
      name: "Central Business District",
      address: "456 Business Ave, CBD",
      totalSpots: 200,
      occupiedSpots: 155,
      availableSpots: 45,
      revenue: "$18,900",
      status: "active"
    },
    {
      id: 3,
      name: "Airport Terminal 2",
      address: "Airport Blvd, Terminal 2",
      totalSpots: 500,
      occupiedSpots: 380,
      availableSpots: 120,
      revenue: "$8,750",
      status: "maintenance"
    }
  ];

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      totalBookings: 47,
      totalSpent: "$425.50",
      joinDate: "2023-03-15",
      status: "active",
      membershipType: "Premium"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@email.com",
      totalBookings: 32,
      totalSpent: "$298.75",
      joinDate: "2023-05-22",
      status: "active",
      membershipType: "Basic"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.j@email.com",
      totalBookings: 18,
      totalSpent: "$167.25",
      joinDate: "2023-08-10",
      status: "inactive",
      membershipType: "Basic"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success text-success-foreground';
      case 'completed':
        return 'bg-success text-success-foreground';
      case 'cancelled':
        return 'bg-destructive text-destructive-foreground';
      case 'maintenance':
        return 'bg-warning text-warning-foreground';
      case 'inactive':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-red-600" />
                <h1 className="text-2xl font-bold text-gray-900">ParkPal Admin</h1>
              </div>
              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                Administrator
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="text-red-600">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-6 space-y-2">
            <Button 
              variant={activeTab === "overview" ? "default" : "ghost"} 
              className="w-full justify-start"
              onClick={() => setActiveTab("overview")}
            >
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Overview
            </Button>
            <Button 
              variant={activeTab === "bookings" ? "default" : "ghost"} 
              className="w-full justify-start"
              onClick={() => setActiveTab("bookings")}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Bookings
            </Button>
            <Button 
              variant={activeTab === "locations" ? "default" : "ghost"} 
              className="w-full justify-start"
              onClick={() => setActiveTab("locations")}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Locations
            </Button>
            <Button 
              variant={activeTab === "users" ? "default" : "ghost"} 
              className="w-full justify-start"
              onClick={() => setActiveTab("users")}
            >
              <Users className="h-4 w-4 mr-2" />
              Users
            </Button>
            <Button 
              variant={activeTab === "analytics" ? "default" : "ghost"} 
              className="w-full justify-start"
              onClick={() => setActiveTab("analytics")}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </Button>
            <Button 
              variant={activeTab === "settings" ? "default" : "ghost"} 
              className="w-full justify-start"
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
                <p className="text-gray-600">Monitor your parking system performance and key metrics</p>
              </div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Users</p>
                        <p className="text-2xl font-bold text-gray-900">{dashboardStats.totalUsers.toLocaleString()}</p>
                        <p className="text-xs text-green-600">+{dashboardStats.newUsersToday} today</p>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Active Bookings</p>
                        <p className="text-2xl font-bold text-gray-900">{dashboardStats.activeBookings}</p>
                        <p className="text-xs text-gray-500">{dashboardStats.occupancyRate}% occupancy</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-xl">
                        <Car className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Locations</p>
                        <p className="text-2xl font-bold text-gray-900">{dashboardStats.totalLocations}</p>
                        <p className="text-xs text-gray-500">Across the city</p>
                      </div>
                      <div className="bg-purple-100 p-3 rounded-xl">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                        <p className="text-2xl font-bold text-gray-900">${dashboardStats.monthlyRevenue.toLocaleString()}</p>
                        <p className="text-xs text-green-600">+12% vs last month</p>
                      </div>
                      <div className="bg-yellow-100 p-3 rounded-xl">
                        <CreditCard className="h-6 w-6 text-yellow-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                    <CardDescription>Latest parking reservations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBookings.map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{booking.user}</p>
                            <p className="text-sm text-gray-600">{booking.location} - Spot {booking.spot}</p>
                            <p className="text-xs text-gray-500">{booking.startTime} - {booking.endTime}</p>
                          </div>
                          <div className="text-right">
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status}
                            </Badge>
                            <p className="text-sm font-medium mt-1">{booking.amount}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>System Alerts</CardTitle>
                    <CardDescription>Important notifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-yellow-800">Maintenance Required</p>
                          <p className="text-sm text-yellow-700">Airport Terminal 2 needs inspection</p>
                          <p className="text-xs text-yellow-600">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-green-800">System Update Complete</p>
                          <p className="text-sm text-green-700">Payment gateway successfully updated</p>
                          <p className="text-xs text-green-600">1 day ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <Activity className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-blue-800">Peak Usage Alert</p>
                          <p className="text-sm text-blue-700">Downtown location at 95% capacity</p>
                          <p className="text-xs text-blue-600">3 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Bookings Tab */}
            <TabsContent value="bookings" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Booking Management</h2>
                  <p className="text-gray-600">View and manage all parking bookings</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Manual Booking
                  </Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4">
                            <div>
                              <p className="font-medium">{booking.id}</p>
                              <p className="text-sm text-gray-600">{booking.user}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">{booking.location}</p>
                              <p className="text-sm text-gray-600">Spot {booking.spot}</p>
                            </div>
                            <div>
                              <p className="text-sm">{booking.startTime} - {booking.endTime}</p>
                              <p className="text-sm text-gray-600">Duration: 3h</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">{booking.amount}</p>
                              <Badge className={getStatusColor(booking.status)}>
                                {booking.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Locations Tab */}
            <TabsContent value="locations" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Location Management</h2>
                  <p className="text-gray-600">Manage parking locations and spot availability</p>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Location
                </Button>
              </div>

              <div className="grid lg:grid-cols-1 gap-6">
                {parkingLocations.map((location) => (
                  <Card key={location.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-4">
                            <h3 className="text-lg font-semibold">{location.name}</h3>
                            <Badge className={getStatusColor(location.status)}>
                              {location.status}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-4">{location.address}</p>
                          
                          <div className="grid grid-cols-4 gap-4">
                            <div>
                              <p className="text-sm text-gray-600">Total Spots</p>
                              <p className="text-xl font-bold">{location.totalSpots}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Occupied</p>
                              <p className="text-xl font-bold text-red-600">{location.occupiedSpots}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Available</p>
                              <p className="text-xl font-bold text-green-600">{location.availableSpots}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Revenue</p>
                              <p className="text-xl font-bold text-blue-600">{location.revenue}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4 mr-2" />
                            Manage
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">User Management</h2>
                  <p className="text-gray-600">Manage user accounts and memberships</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Search className="h-4 w-4 mr-2" />
                    Search Users
                  </Button>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {users.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-6">
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Bookings: {user.totalBookings}</p>
                              <p className="text-sm text-gray-600">Spent: {user.totalSpent}</p>
                            </div>
                            <div>
                              <p className="text-sm">Joined: {user.joinDate}</p>
                              <Badge variant="outline">{user.membershipType}</Badge>
                            </div>
                            <div>
                              <Badge className={getStatusColor(user.status)}>
                                {user.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Analytics & Reports</h2>
                <p className="text-gray-600">Detailed insights and performance metrics</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Analytics</CardTitle>
                    <CardDescription>Monthly revenue trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Revenue chart would appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Usage Patterns</CardTitle>
                    <CardDescription>Peak hours and occupancy rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Usage chart would appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">System Settings</h2>
                <p className="text-gray-600">Configure system preferences and options</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>Basic system configuration</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">System Name</label>
                      <Input defaultValue="ParkPal System" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Default Currency</label>
                      <Select defaultValue="usd">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Time Zone</label>
                      <Select defaultValue="utc">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="utc">UTC</SelectItem>
                          <SelectItem value="est">Eastern Time</SelectItem>
                          <SelectItem value="pst">Pacific Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Security and access controls</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-600">Require 2FA for admin access</p>
                      </div>
                      <Button variant="outline" size="sm">Enable</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Session Timeout</p>
                        <p className="text-sm text-gray-600">Auto-logout after inactivity</p>
                      </div>
                      <Select defaultValue="30">
                        <SelectTrigger className="w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15m</SelectItem>
                          <SelectItem value="30">30m</SelectItem>
                          <SelectItem value="60">1h</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;