import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, MapPin, CreditCard, Truck, Shield, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import kingfishImage from "@/assets/kingfish-dried.jpg";
import pomfretImage from "@/assets/pomfret-dried.jpg";

const cartItems = [
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
];

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [deliveryOption, setDeliveryOption] = useState('standard');
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = deliveryOption === 'express' ? 149 : subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05); // 5% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Checkout</h1>
            <p className="text-muted-foreground">Complete your order</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Delivery Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <div className="relative">
                      <Input id="firstName" placeholder="Enter first name" className="pl-10" />
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="relative">
                    <Input id="phone" placeholder="+91 9876543210" className="pl-10" />
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input id="address" placeholder="House No, Street, Area" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" placeholder="City" />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input id="state" placeholder="State" />
                  </div>
                  <div>
                    <Label htmlFor="pincode">PIN Code *</Label>
                    <Input id="pincode" placeholder="123456" />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox id="saveAddress" />
                  <Label htmlFor="saveAddress" className="text-sm">
                    Save this address for future orders
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-5 w-5" />
                  <span>Delivery Options</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption}>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
                    <RadioGroupItem value="standard" id="standard" />
                    <div className="flex-1">
                      <Label htmlFor="standard" className="cursor-pointer">
                        <div className="font-medium">Standard Delivery (3-5 days)</div>
                        <div className="text-sm text-muted-foreground">
                          {subtotal > 999 ? 'FREE' : '₹99'} • Delivered between 9 AM - 6 PM
                        </div>
                      </Label>
                    </div>
                    <Badge className="bg-green-100 text-green-700">
                      {subtotal > 999 ? 'FREE' : '₹99'}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
                    <RadioGroupItem value="express" id="express" />
                    <div className="flex-1">
                      <Label htmlFor="express" className="cursor-pointer">
                        <div className="font-medium">Express Delivery (1-2 days)</div>
                        <div className="text-sm text-muted-foreground">
                          ₹149 • Delivered between 10 AM - 8 PM
                        </div>
                      </Label>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      ₹149
                    </Badge>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Payment Method</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
                    <RadioGroupItem value="cod" id="cod" />
                    <div className="flex-1">
                      <Label htmlFor="cod" className="cursor-pointer">
                        <div className="font-medium">Cash on Delivery</div>
                        <div className="text-sm text-muted-foreground">
                          Pay when your order is delivered
                        </div>
                      </Label>
                    </div>
                    <Badge className="bg-gold/20 text-gold-foreground border-gold/30">
                      Popular
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
                    <RadioGroupItem value="online" id="online" />
                    <div className="flex-1">
                      <Label htmlFor="online" className="cursor-pointer">
                        <div className="font-medium">Online Payment</div>
                        <div className="text-sm text-muted-foreground">
                          UPI, Cards, Net Banking, Wallets
                        </div>
                      </Label>
                    </div>
                    <Badge className="bg-green-100 text-green-700">
                      Get 2% cashback
                    </Badge>
                  </div>
                </RadioGroup>
                
                {paymentMethod === 'online' && (
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-sm font-medium mb-2">Available Payment Options:</div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="text-center p-2 bg-white rounded border">UPI</div>
                      <div className="text-center p-2 bg-white rounded border">Cards</div>
                      <div className="text-center p-2 bg-white rounded border">NetBanking</div>
                      <div className="text-center p-2 bg-white rounded border">Wallets</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{item.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {item.weight} × {item.quantity}
                        </div>
                      </div>
                      <div className="text-sm font-medium">₹{item.price * item.quantity}</div>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                {/* Pricing */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>₹{subtotal}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Delivery Charges</span>
                    <span>
                      {shipping === 0 ? (
                        <Badge className="bg-green-100 text-green-700 text-xs">FREE</Badge>
                      ) : (
                        `₹${shipping}`
                      )}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Tax (5%)</span>
                    <span>₹{tax}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount</span>
                  <span className="text-primary">₹{total}</span>
                </div>
                
                {paymentMethod === 'online' && (
                  <div className="text-center">
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      💰 Save ₹{Math.round(total * 0.02)} with online payment
                    </Badge>
                  </div>
                )}
                
                {/* Place Order */}
                <div className="space-y-3 pt-4">
                  <Link to="/orders">
                    <Button variant="hero" className="w-full" size="lg">
                      Place Order - ₹{total}
                    </Button>
                  </Link>
                  
                  <div className="text-center">
                    <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">
                      🔒 100% Secure Checkout
                    </Badge>
                  </div>
                </div>

                {/* Policies */}
                <div className="pt-4 space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-3 w-3" />
                    <span>Safe and secure payments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-3 w-3" />
                    <span>Free returns within 7 days</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-3 w-3" />
                    <span>Multiple payment options</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;