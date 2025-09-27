import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, User, Package, MapPin, Heart, Settings, Edit3, Phone, Mail, Calendar, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import kingfishImage from "@/assets/kingfish-dried.jpg";
import pomfretImage from "@/assets/pomfret-dried.jpg";

const Profile = () => {
  const user = {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    phone: "+91 9876543210",
    joinDate: "January 2024",
    totalOrders: 12,
    totalSpent: 15840
  };

  const recentOrders = [
    {
      id: "RDF-2024-001234",
      date: "2024-01-15",
      status: "Delivered",
      total: 2397,
      items: ["Premium Kingfish", "Golden Pomfret"]
    },
    {
      id: "RDF-2024-001198",
      date: "2024-01-08",
      status: "Delivered", 
      total: 1549,
      items: ["Sardines Special", "Anchovy Mix"]
    }
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "Rajesh Kumar",
      address: "123 Main Street, Anna Nagar",
      city: "Chennai, Tamil Nadu 600040",
      phone: "+91 9876543210",
      isDefault: true
    },
    {
      id: 2,
      type: "Office",
      name: "Rajesh Kumar",
      address: "456 IT Park, OMR",
      city: "Chennai, Tamil Nadu 600113",
      phone: "+91 9876543210",
      isDefault: false
    }
  ];

  const wishlistItems = [
    {
      id: "1",
      name: "Premium Kingfish (Vanjiram)",
      image: kingfishImage,
      price: 899,
      originalPrice: 1099
    },
    {
      id: "2",
      name: "Golden Pomfret Dry Fish",
      image: pomfretImage,
      price: 1299,
      originalPrice: 1499
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">My Account</h1>
            <p className="text-muted-foreground">Manage your account and preferences</p>
          </div>
        </div>

        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="text-xl font-bold bg-primary text-primary-foreground">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <Button variant="outline" size="sm">
                    <Edit3 className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Member since {user.joinDate}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="text-2xl font-bold text-primary">{user.totalOrders}</div>
                <div className="text-sm text-muted-foreground">Total Orders</div>
              </div>
              
              <div className="text-center p-4 bg-gold/5 rounded-lg border border-gold/20">
                <div className="text-2xl font-bold text-gold-foreground">₹{user.totalSpent}</div>
                <div className="text-sm text-muted-foreground">Total Spent</div>
              </div>
              
              <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20">
                <div className="text-2xl font-bold text-accent">Gold</div>
                <div className="text-sm text-muted-foreground">Member Status</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Addresses</span>
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Wishlist</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Order History</h3>
              <Link to="/orders">
                <Button variant="outline">View All Orders</Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                      <div>
                        <div className="font-semibold">Order #{order.id}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(order.date).toLocaleDateString()} • {order.items.join(', ')}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <Badge className="bg-green-100 text-green-700">
                          {order.status}
                        </Badge>
                        <div className="text-lg font-bold text-primary">₹{order.total}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Delivery Addresses</h3>
              <Button variant="ocean">Add New Address</Button>
            </div>
            
            <div className="grid gap-4">
              {addresses.map((address) => (
                <Card key={address.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant={address.type === 'Home' ? 'default' : 'secondary'}>
                            {address.type}
                          </Badge>
                          {address.isDefault && (
                            <Badge className="bg-gold/20 text-gold-foreground border-gold/30">
                              Default
                            </Badge>
                          )}
                        </div>
                        
                        <div>
                          <div className="font-semibold">{address.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {address.address}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {address.city}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {address.phone}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">My Wishlist</h3>
              <Link to="/wishlist">
                <Button variant="outline">View Full Wishlist</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {wishlistItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium truncate">{item.name}</h4>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-lg font-bold text-primary">₹{item.price}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{item.originalPrice}
                            </span>
                          )}
                        </div>
                        <Button variant="outline" size="sm" className="mt-2 w-full">
                          <ShoppingBag className="h-3 w-3 mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h3 className="text-xl font-semibold">Account Settings</h3>
            
            <div className="grid gap-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Rajesh" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Kumar" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue={user.email} />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue={user.phone} />
                  </div>
                  
                  <Button variant="ocean">Update Information</Button>
                </CardContent>
              </Card>

              {/* Password */}
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  
                  <Button variant="ocean">Change Password</Button>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Order Updates</div>
                      <div className="text-sm text-muted-foreground">
                        Get notified about order status changes
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Enabled</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Promotional Offers</div>
                      <div className="text-sm text-muted-foreground">
                        Receive emails about special offers and discounts
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Enabled</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">New Products</div>
                      <div className="text-sm text-muted-foreground">
                        Be the first to know about new fish varieties
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Enabled</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Account Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    Download My Data
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                    Delete Account
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start">
                    Logout
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;