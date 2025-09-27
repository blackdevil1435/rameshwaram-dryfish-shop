import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Package, Truck, CheckCircle, Clock, MapPin, Phone, Search } from "lucide-react";
import { Link } from "react-router-dom";
import kingfishImage from "@/assets/kingfish-dried.jpg";
import pomfretImage from "@/assets/pomfret-dried.jpg";

const orderData = {
  id: "RDF-2024-001234",
  status: "out_for_delivery",
  placedDate: "2024-01-15",
  estimatedDelivery: "2024-01-18",
  total: 2397,
  items: [
    {
      id: "1",
      name: "Premium Kingfish (Vanjiram)",
      image: kingfishImage,
      price: 899,
      quantity: 2,
      weight: "500g",
    },
    {
      id: "2",
      name: "Golden Pomfret Dry Fish",
      image: pomfretImage,
      price: 1299,
      quantity: 1,
      weight: "500g",
    }
  ],
  deliveryAddress: {
    name: "Rajesh Kumar",
    address: "123 Main Street, Anna Nagar",
    city: "Chennai, Tamil Nadu 600040",
    phone: "+91 9876543210"
  },
  tracking: [
    {
      status: "Order Placed",
      date: "2024-01-15 10:30 AM",
      description: "Your order has been placed successfully",
      completed: true
    },
    {
      status: "Order Confirmed",
      date: "2024-01-15 11:15 AM", 
      description: "Order confirmed and being prepared for shipment",
      completed: true
    },
    {
      status: "Packed & Shipped",
      date: "2024-01-16 02:30 PM",
      description: "Your order has been packed and shipped from Rameshwaram facility",
      completed: true
    },
    {
      status: "Out for Delivery",
      date: "2024-01-18 08:00 AM",
      description: "Your order is out for delivery and will reach you soon",
      completed: true,
      current: true
    },
    {
      status: "Delivered",
      date: "Expected by 6:00 PM",
      description: "Order will be delivered to your address",
      completed: false
    }
  ]
};

const OrderTracking = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-700 border-green-200';
      case 'out_for_delivery': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'shipped': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'confirmed': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Track Your Order</h1>
              <p className="text-muted-foreground">Stay updated on your delivery status</p>
            </div>
          </div>
        </div>

        {/* Track Order Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Track Another Order</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="orderId">Order ID</Label>
                <Input
                  id="orderId"
                  placeholder="Enter your order ID (e.g., RDF-2024-001234)"
                  className="mt-1"
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Your registered phone number"
                  className="mt-1"
                />
              </div>
              <div className="flex items-end">
                <Button variant="ocean" className="w-full sm:w-auto">
                  Track Order
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg">Order #{orderData.id}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Placed on {new Date(orderData.placedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge className={getStatusColor(orderData.status)}>
                    🚚 Out for Delivery
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <Package className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="font-medium text-sm">Order Total</div>
                    <div className="text-lg font-bold text-primary">₹{orderData.total}</div>
                  </div>
                  
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="font-medium text-sm">Est. Delivery</div>
                    <div className="text-lg font-bold text-accent">
                      {new Date(orderData.estimatedDelivery).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gold/5 rounded-lg border border-gold/20">
                    <Truck className="h-6 w-6 text-gold mx-auto mb-2" />
                    <div className="font-medium text-sm">Items</div>
                    <div className="text-lg font-bold text-gold-foreground">
                      {orderData.items.reduce((sum, item) => sum + item.quantity, 0)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Order Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {orderData.tracking.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        step.completed 
                          ? step.current 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        {step.completed ? (
                          step.current ? (
                            <Truck className="h-4 w-4" />
                          ) : (
                            <CheckCircle className="h-4 w-4" />
                          )
                        ) : (
                          <Clock className="h-4 w-4" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-medium ${step.current ? 'text-primary' : ''}`}>
                            {step.status}
                          </h4>
                          <span className="text-sm text-muted-foreground">
                            {step.date}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-secondary/20 rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{item.name}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {item.weight}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            Qty: {item.quantity}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">₹{item.price * item.quantity}</div>
                        <div className="text-xs text-muted-foreground">₹{item.price} each</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Delivery Info */}
          <div className="space-y-6">
            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Delivery Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-medium">{orderData.deliveryAddress.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {orderData.deliveryAddress.address}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {orderData.deliveryAddress.city}
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{orderData.deliveryAddress.phone}</span>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Instructions */}
            <Card className="bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">📦 Delivery Instructions</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Please keep frozen items refrigerated immediately</li>
                  <li>• Check package condition before accepting</li>
                  <li>• Contact us if any quality issues</li>
                  <li>• Delivery person will call before arrival</li>
                </ul>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <h4 className="font-semibold">Need Help?</h4>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Support
                  </Button>
                  <Button variant="ghost" className="w-full">
                    Chat with Us
                  </Button>
                </div>
                
                <Badge className="bg-gold/20 text-gold-foreground border-gold/30 text-xs">
                  💬 24/7 Customer Support
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;