import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, ShoppingCart, X } from "lucide-react";
import { Link } from "react-router-dom";
import kingfishImage from "@/assets/kingfish-dried.jpg";
import pomfretImage from "@/assets/pomfret-dried.jpg";
import sardinesImage from "@/assets/sardines-dried.jpg";

const wishlistItems = [
  {
    id: "1",
    name: "Premium Kingfish (Vanjiram)",
    image: kingfishImage,
    price: 899,
    originalPrice: 1099,
    rating: 4.8,
    reviews: 127,
    description: "Fresh kingfish naturally sun-dried to perfection using traditional Rameshwaram methods.",
    badge: "Best Seller",
    weight: "500g",
    inStock: true
  },
  {
    id: "2", 
    name: "Golden Pomfret Dry Fish",
    image: pomfretImage,
    price: 1299,
    originalPrice: 1499,
    rating: 4.9,
    reviews: 89,
    description: "Premium pomfret carefully dried and seasoned. Known for its delicate flavor and tender texture.",
    badge: "Premium",
    weight: "500g",
    inStock: true
  },
  {
    id: "3",
    name: "Sardines Special (Mathi)",
    image: sardinesImage,
    price: 449,
    originalPrice: 549,
    rating: 4.7,
    reviews: 203,
    description: "Small sardines packed with flavor and nutrients. Traditional favorite from Tamil Nadu coastal regions.",
    badge: "Popular",
    weight: "1kg",
    inStock: false
  }
];

const Wishlist = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">My Wishlist</h1>
              <p className="text-muted-foreground">{wishlistItems.length} items saved for later</p>
            </div>
          </div>
          
          <Badge className="bg-primary/10 text-primary border-primary/20">
            ❤️ {wishlistItems.length} Items
          </Badge>
        </div>

        {wishlistItems.length === 0 ? (
          /* Empty Wishlist */
          <div className="text-center py-16">
            <div className="mb-6">
              <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
              <p className="text-muted-foreground">
                Save items you love to your wishlist and shop them later!
              </p>
            </div>
            
            <Link to="/">
              <Button variant="hero" size="lg">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="flex gap-3">
                <Button variant="hero">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add All to Cart
                </Button>
                <Button variant="outline">
                  Clear Wishlist
                </Button>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{wishlistItems.filter(item => item.inStock).length} available</span>
                <span>{wishlistItems.filter(item => !item.inStock).length} out of stock</span>
              </div>
            </div>

            {/* Wishlist Items */}
            <div className="grid gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Product Image */}
                      <div className="relative lg:w-64 h-48 lg:h-auto flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Badges */}
                        <div className="absolute top-3 left-3 space-y-2">
                          {item.badge && (
                            <Badge className="bg-gold text-gold-foreground shadow-md">
                              {item.badge}
                            </Badge>
                          )}
                          {!item.inStock && (
                            <Badge className="bg-destructive text-destructive-foreground shadow-md">
                              Out of Stock
                            </Badge>
                          )}
                        </div>
                        
                        {/* Remove Button */}
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="absolute top-3 right-3 bg-white/90 hover:bg-white hover:text-destructive transition-colors shadow-md"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-1 p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between h-full">
                          <div className="flex-1 space-y-3 mb-4 lg:mb-0">
                            <div>
                              <Link to={`/product/${item.id}`}>
                                <h3 className="font-semibold text-lg text-card-foreground hover:text-primary transition-colors">
                                  {item.name}
                                </h3>
                              </Link>
                              <p className="text-sm text-muted-foreground mt-1">
                                {item.description}
                              </p>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                              <Badge variant="secondary" className="text-xs">
                                {item.weight}
                              </Badge>
                              
                              <div className="flex items-center space-x-1">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <span 
                                      key={i} 
                                      className={`text-xs ${
                                        i < Math.floor(item.rating) 
                                          ? 'text-gold' 
                                          : 'text-gray-300'
                                      }`}
                                    >
                                      ★
                                    </span>
                                  ))}
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  ({item.reviews})
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Price & Actions */}
                          <div className="flex flex-col items-end space-y-4 lg:ml-6">
                            <div className="text-right">
                              <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold text-primary">
                                  ₹{item.price}
                                </span>
                                {item.originalPrice && (
                                  <span className="text-lg text-muted-foreground line-through">
                                    ₹{item.originalPrice}
                                  </span>
                                )}
                              </div>
                              {item.originalPrice && (
                                <Badge className="text-xs bg-destructive/10 text-destructive border-destructive/20 mt-1">
                                  Save ₹{item.originalPrice - item.price}
                                </Badge>
                              )}
                            </div>
                            
                            <div className="flex flex-col space-y-2 w-full lg:w-auto">
                              {item.inStock ? (
                                <>
                                  <Link to="/cart">
                                    <Button variant="ocean" className="w-full lg:w-auto">
                                      <ShoppingCart className="h-4 w-4 mr-2" />
                                      Add to Cart
                                    </Button>
                                  </Link>
                                  <Link to={`/product/${item.id}`}>
                                    <Button variant="outline" className="w-full lg:w-auto text-xs">
                                      View Details
                                    </Button>
                                  </Link>
                                </>
                              ) : (
                                <>
                                  <Button variant="outline" disabled className="w-full lg:w-auto">
                                    Out of Stock
                                  </Button>
                                  <Button variant="ghost" className="w-full lg:w-auto text-xs">
                                    Notify When Available
                                  </Button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="text-center py-8">
              <Link to="/">
                <Button variant="outline" size="lg">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Recommendations */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-2">You Might Also Like</h3>
              <p className="text-muted-foreground mb-6">
                Discover more premium dry fish varieties from Rameshwaram
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 cursor-pointer transition-colors">
                  🐟 Tuna Dry Fish
                </Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 cursor-pointer transition-colors">
                  🦐 Prawns Dried
                </Badge>
                <Badge className="bg-gold/20 text-gold-foreground border-gold/30 hover:bg-gold/30 cursor-pointer transition-colors">
                  🐠 Mackerel Special
                </Badge>
                <Badge className="bg-secondary/50 text-secondary-foreground border-secondary hover:bg-secondary cursor-pointer transition-colors">
                  🦑 Squid Rings
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;