import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Waves, Fish } from "lucide-react";
import kingfishImage from "@/assets/kingfish-dried.jpg";
import pomfretImage from "@/assets/pomfret-dried.jpg";
import sardinesImage from "@/assets/sardines-dried.jpg";

const categories = [
  {
    id: "premium-fish",
    name: "Premium Fish",
    description: "Our finest selection of large, premium dried fish varieties perfect for special occasions and traditional celebrations.",
    image: kingfishImage,
    productCount: 8,
    featured: true,
    products: ["Kingfish (Vanjiram)", "Tuna", "Seer Fish", "Red Snapper"],
    priceRange: "₹899 - ₹2,499"
  },
  {
    id: "popular-varieties", 
    name: "Popular Varieties",
    description: "Most loved dried fish varieties that are perfect for daily cooking and traditional Tamil recipes.",
    image: pomfretImage,
    productCount: 12,
    products: ["Pomfret", "Mackerel", "Anchovy", "Sardines"],
    priceRange: "₹399 - ₹1,299"
  },
  {
    id: "small-fish",
    name: "Small Fish Collection", 
    description: "Traditional small fish varieties that add authentic flavor to curries, sambar, and daily meals.",
    image: sardinesImage,
    productCount: 15,
    products: ["Sardines (Mathi)", "Anchovy Mix", "Baby Fish", "Nethili"],
    priceRange: "₹199 - ₹699"
  },
  {
    id: "festive-special",
    name: "Festive Specials",
    description: "Special preparation dried fish perfect for festivals and ceremonial cooking with premium quality guarantee.",
    image: kingfishImage,
    productCount: 6,
    products: ["Festival Kingfish", "Celebration Pomfret", "Special Tuna"],
    priceRange: "₹1,299 - ₹3,499"
  },
  {
    id: "bulk-family",
    name: "Family Bulk Packs", 
    description: "Large family packs with mixed varieties perfect for households and restaurant needs at economical prices.",
    image: sardinesImage,
    productCount: 10,
    products: ["Mixed Fish Pack", "Family Combo", "Restaurant Pack"],
    priceRange: "₹999 - ₹4,999"
  },
  {
    id: "seasonal-catch",
    name: "Seasonal Catch",
    description: "Fresh seasonal catches from Rameshwaram waters, available based on fishing season and weather conditions.",
    image: pomfretImage,
    productCount: 8,
    products: ["Seasonal Kingfish", "Monsoon Special", "Summer Catch"],
    priceRange: "₹699 - ₹1,899"
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold-foreground border-gold/30 mb-6">
            🐟 Premium Categories
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Fish</span> Categories
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our carefully curated collection of dried fish varieties from the pristine waters of Rameshwaram. 
            Each category offers unique flavors and traditional preparations for authentic Tamil Nadu cuisine.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Fish Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">6</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">25+</div>
              <div className="text-sm text-muted-foreground">Years Heritage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={category.id} 
                className={`overflow-hidden group hover:shadow-xl transition-all duration-300 ${
                  category.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`grid ${category.featured ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
                  {/* Image Section */}
                  <div className={`relative ${category.featured ? 'h-64 lg:h-auto' : 'h-48'}`}>
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Overlays */}
                    <div className="absolute top-4 left-4">
                      {category.featured && (
                        <Badge className="bg-gold text-gold-foreground shadow-lg">
                          ⭐ Featured Category
                        </Badge>
                      )}
                    </div>
                    
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 text-sm">
                        <Fish className="h-4 w-4" />
                        <span>{category.productCount} Products</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className={`p-6 ${category.featured ? 'lg:p-8' : ''} flex flex-col justify-between`}>
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <h2 className={`font-bold group-hover:text-primary transition-colors ${
                          category.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
                        }`}>
                          {category.name}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                          {category.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Featured Products:</h4>
                          <div className="flex flex-wrap gap-2">
                            {category.products.map((product) => (
                              <Badge key={product} variant="secondary" className="text-xs">
                                {product}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Waves className="h-4 w-4" />
                            <span>Rameshwaram Origin</span>
                          </div>
                          <div className="font-semibold text-primary">
                            {category.priceRange}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-gold text-gold" />
                          <span>Premium Quality</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>•</span>
                          <span>Sun Dried</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>•</span>
                          <span>100% Natural</span>
                        </div>
                      </div>

                      <Link to={`/category/${category.id}`}>
                        <Button 
                          variant="outline" 
                          className={`w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors ${
                            category.featured ? 'h-12 text-base' : ''
                          }`}
                        >
                          Explore Category
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Categories */}
      <section className="py-16 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our <span className="text-primary">Categories</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each category is carefully curated to offer the best selection of dried fish 
              varieties for different cooking needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto">
                <Fish className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Premium Selection</h3>
              <p className="text-muted-foreground">
                Each category features hand-picked fish varieties ensuring premium quality and authentic taste.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto">
                <Waves className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Rameshwaram Origin</h3>
              <p className="text-muted-foreground">
                All fish varieties come from the sacred waters of Rameshwaram, ensuring authentic coastal flavor.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-gold/10 w-fit mx-auto">
                <Star className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold">Traditional Methods</h3>
              <p className="text-muted-foreground">
                Each category follows traditional sun-drying methods passed down through generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">
              Ready to Explore Our <span className="text-primary">Collection</span>?
            </h2>
            <p className="text-muted-foreground">
              Browse through our premium categories and discover the authentic taste of 
              Rameshwaram's finest dried fish varieties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#products">
                <Button variant="hero" size="lg">
                  Shop All Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;