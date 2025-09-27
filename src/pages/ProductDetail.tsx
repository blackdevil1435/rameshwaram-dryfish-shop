import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Star, Heart, ShoppingCart, Truck, Shield, Award, Plus, Minus } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import kingfishImage from "@/assets/kingfish-dried.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('500g');

  // Mock product data - in real app, this would be fetched based on ID
  const product = {
    id: "1",
    name: "Premium Kingfish (Vanjiram)",
    image: kingfishImage,
    price: 899,
    originalPrice: 1099,
    rating: 4.8,
    reviews: 127,
    description: "Fresh kingfish naturally sun-dried to perfection using traditional Rameshwaram methods. Our premium kingfish is carefully selected from the pristine waters of Rameshwaram and processed using age-old techniques passed down through generations. Rich in protein and omega-3 fatty acids, this delicacy brings the authentic taste of Tamil Nadu's coastal heritage to your table.",
    features: [
      "100% Natural Sun-Dried",
      "No Artificial Preservatives", 
      "Rich in Protein & Omega-3",
      "Traditional Rameshwaram Processing",
      "Premium Quality Guaranteed",
      "Vacuum Packed for Freshness"
    ],
    weights: [
      { weight: '250g', price: 449, originalPrice: 549 },
      { weight: '500g', price: 899, originalPrice: 1099 },
      { weight: '1kg', price: 1699, originalPrice: 2099 }
    ],
    specifications: {
      origin: "Rameshwaram, Tamil Nadu",
      shelfLife: "6 months from packaging",
      storage: "Store in cool, dry place",
      preparation: "Traditional sun-drying method"
    }
  };

  const selectedWeightData = product.weights.find(w => w.weight === selectedWeight) || product.weights[1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/#products" className="text-muted-foreground hover:text-primary">Products</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative group">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2">
                <Badge className="bg-gold text-gold-foreground shadow-lg">
                  🏆 Best Seller
                </Badge>
                <Badge className="bg-green-100 text-green-700 shadow-lg">
                  ✅ In Stock
                </Badge>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4 bg-white/90 hover:bg-white hover:text-destructive transition-colors shadow-lg"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <img 
                  key={i}
                  src={product.image} 
                  alt={`${product.name} view ${i + 1}`}
                  className="w-full h-20 object-cover rounded-lg border-2 border-primary/20 hover:border-primary transition-colors cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? 'fill-gold text-gold' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
              
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-primary">₹{selectedWeightData.price}</span>
                {selectedWeightData.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{selectedWeightData.originalPrice}
                    </span>
                    <Badge className="bg-destructive/10 text-destructive border-destructive/20">
                      {Math.round(((selectedWeightData.originalPrice - selectedWeightData.price) / selectedWeightData.originalPrice) * 100)}% OFF
                    </Badge>
                  </>
                )}
              </div>
            </div>

            {/* Weight Selection */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Select Weight:</Label>
              <div className="grid grid-cols-3 gap-3">
                {product.weights.map((option) => (
                  <Button
                    key={option.weight}
                    variant={selectedWeight === option.weight ? 'default' : 'outline'}
                    className="p-4 h-auto flex-col space-y-1"
                    onClick={() => setSelectedWeight(option.weight)}
                  >
                    <span className="font-semibold">{option.weight}</span>
                    <span className="text-xs">₹{option.price}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Label className="text-sm font-medium">Quantity:</Label>
                <div className="flex items-center space-x-3">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-medium text-lg w-12 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Link to="/cart" className="flex-1">
                  <Button variant="hero" className="w-full" size="lg">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart - ₹{selectedWeightData.price * quantity}
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <Link to="/checkout">
                <Button variant="ocean" className="w-full" size="lg">
                  Buy Now
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span>Free delivery above ₹999</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-accent" />
                <span>100% Natural</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Award className="h-4 w-4 text-gold" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Star className="h-4 w-4 text-gold" />
                <span>Authentic Rameshwaram</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-16 space-y-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Description */}
            <Card className="lg:col-span-2">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="text-center">
                  <Badge className="bg-gold/20 text-gold-foreground border-gold/30">
                    🎯 Premium Quality Guaranteed
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;