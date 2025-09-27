import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, SlidersHorizontal } from "lucide-react";
import kingfishImage from "@/assets/kingfish-dried.jpg";
import pomfretImage from "@/assets/pomfret-dried.jpg";
import sardinesImage from "@/assets/sardines-dried.jpg";

const products = [
  {
    id: "1",
    name: "Premium Kingfish (Vanjiram)",
    image: kingfishImage,
    price: 899,
    originalPrice: 1099,
    rating: 4.8,
    reviews: 127,
    description: "Fresh kingfish naturally sun-dried to perfection using traditional Rameshwaram methods. Rich in protein and omega-3 fatty acids.",
    badge: "Best Seller",
    weight: "500g",
  },
  {
    id: "2", 
    name: "Golden Pomfret Dry Fish",
    image: pomfretImage,
    price: 1299,
    originalPrice: 1499,
    rating: 4.9,
    reviews: 89,
    description: "Premium pomfret carefully dried and seasoned. Known for its delicate flavor and tender texture. Perfect for traditional curry preparations.",
    badge: "Premium",
    weight: "500g",
  },
  {
    id: "3",
    name: "Sardines Special (Mathi)",
    image: sardinesImage,
    price: 449,
    originalPrice: 549,
    rating: 4.7,
    reviews: 203,
    description: "Small sardines packed with flavor and nutrients. Traditional favorite from Tamil Nadu coastal regions. Great for spicy curries.",
    badge: "Popular",
    weight: "1kg",
  },
  {
    id: "4",
    name: "Tuna Dried Fish",
    image: kingfishImage, // Reusing for demo
    price: 1599,
    rating: 4.6,
    reviews: 67,
    description: "Premium tuna dried using age-old techniques. High protein content and authentic coastal taste. Perfect for special occasions.",
    weight: "500g",
  },
  {
    id: "5",
    name: "Mackerel Dry Fish",
    image: pomfretImage, // Reusing for demo
    price: 699,
    originalPrice: 799,
    rating: 4.5,
    reviews: 156,
    description: "Fresh mackerel from Rameshwaram waters, sun-dried naturally. Rich flavor and perfect for daily cooking needs.",
    weight: "750g",
  },
  {
    id: "6",
    name: "Anchovy Special Mix",
    image: sardinesImage, // Reusing for demo
    price: 399,
    rating: 4.8,
    reviews: 98,
    description: "Premium anchovy mix dried to perfection. Authentic taste of Tamil Nadu coast. Great for traditional recipes and snacks.",
    badge: "Traditional",
    weight: "1kg",
  },
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            🐟 Fresh from Rameshwaram Waters
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Premium</span> Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of dry fish varieties, each piece naturally 
            sun-dried using traditional Tamil Nadu coastal methods.
          </p>
        </div>

        {/* Filter & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="text-sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="text-sm">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Sort by Price
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Showing {products.length} products
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="traditional">Traditional</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="premium" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.badge === "Premium").map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="popular" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.badge === "Popular" || p.badge === "Best Seller").map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="traditional" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.badge === "Traditional").map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;