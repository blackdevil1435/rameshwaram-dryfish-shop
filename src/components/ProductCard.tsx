import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  description: string;
  badge?: string;
  weight: string;
}

const ProductCard = ({ 
  name, 
  image, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  description, 
  badge, 
  weight 
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border border-border/50 overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {badge && (
          <Badge className="absolute top-3 left-3 bg-gold text-gold-foreground shadow-md">
            {badge}
          </Badge>
        )}
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 right-3 bg-white/90 hover:bg-white hover:text-destructive transition-colors"
        >
          <Heart className="h-4 w-4" />
        </Button>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${
                    i < Math.floor(rating) 
                      ? 'fill-gold text-gold' 
                      : 'text-gray-300'
                  }`} 
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({reviews})
            </span>
          </div>
          
          <Badge variant="secondary" className="text-xs">
            {weight}
          </Badge>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">
                ₹{price}
              </span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{originalPrice}
                </span>
              )}
            </div>
            {originalPrice && (
              <Badge className="text-xs bg-destructive/10 text-destructive border-destructive/20">
                Save ₹{originalPrice - price}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 space-y-2">
        <Button 
          variant="ocean" 
          className="w-full group-hover:shadow-ocean transition-all duration-300"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
        <Button variant="outline" className="w-full text-xs">
          Quick View
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;