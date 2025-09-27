import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import kingfishImage from "@/assets/kingfish-dried.jpg";
import pomfretImage from "@/assets/pomfret-dried.jpg";
import sardinesImage from "@/assets/sardines-dried.jpg";

const cartItems = [
  {
    id: "1",
    name: "Premium Kingfish (Vanjiram)",
    image: kingfishImage,
    price: 899,
    originalPrice: 1099,
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
  },
  {
    id: "3",
    name: "Sardines Special (Mathi)",
    image: sardinesImage,
    price: 449,
    originalPrice: 549,
    quantity: 3,
    weight: "1kg",
  },
];

const Cart = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice || item.price) - item.price) * item.quantity, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Shopping Cart</h1>
              <p className="text-muted-foreground">{cartItems.length} items in your cart</p>
            </div>
          </div>
          
          <Badge className="bg-primary/10 text-primary border-primary/20">
            🛒 {cartItems.reduce((sum, item) => sum + item.quantity, 0)} Items
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full sm:w-24 h-32 sm:h-24 object-cover rounded-lg"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {item.weight}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        {/* Price */}
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-primary">₹{item.price}</span>
                            {item.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                ₹{item.originalPrice}
                              </span>
                            )}
                          </div>
                          {item.originalPrice && (
                            <Badge className="text-xs bg-destructive/10 text-destructive border-destructive/20">
                              Save ₹{item.originalPrice - item.price}
                            </Badge>
                          )}
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="font-medium text-lg w-8 text-center">{item.quantity}</span>
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        {/* Item Total */}
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">
                            ₹{item.price * item.quantity}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            ₹{item.price} × {item.quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Continue Shopping */}
            <div className="text-center py-6">
              <Link to="/">
                <Button variant="outline" size="lg">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Order Summary</span>
                  <Badge className="bg-gold/20 text-gold-foreground border-gold/30">
                    🎯 {cartItems.length} Items
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{subtotal}</span>
                  </div>
                  
                  {savings > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>You Save</span>
                      <span className="font-medium">-₹{savings}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <Badge className="bg-green-100 text-green-700 text-xs">FREE</Badge>
                      ) : (
                        `₹${shipping}`
                      )}
                    </span>
                  </div>
                  
                  {shipping > 0 && (
                    <div className="text-xs text-muted-foreground">
                      Add ₹{1000 - subtotal} more for free shipping
                    </div>
                  )}
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">₹{total}</span>
                </div>
                
                <div className="space-y-3 mt-6">
                  <Link to="/checkout" className="block">
                    <Button variant="hero" className="w-full" size="lg">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  
                  <div className="text-center">
                    <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">
                      🔒 Secure Checkout Guaranteed
                    </Badge>
                  </div>
                </div>

                {/* Offers */}
                <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/20">
                  <h4 className="font-semibold text-gold-foreground mb-2">🎉 Special Offers</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• Free shipping on orders above ₹999</li>
                    <li>• 10% off on orders above ₹2000</li>
                    <li>• Bulk order discounts available</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;