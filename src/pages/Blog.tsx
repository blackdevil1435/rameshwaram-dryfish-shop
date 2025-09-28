import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowRight, ChefHat, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "1",
    title: "Traditional Kingfish Curry Recipe from Rameshwaram",
    excerpt: "Learn how to prepare authentic Tamil Nadu style kingfish curry using our premium dried kingfish. This recipe has been passed down through generations.",
    image: "/api/placeholder/400/250",
    category: "Recipes",
    readTime: "8 min read",
    author: "Chef Meera",
    date: "Dec 15, 2024",
    featured: true
  },
  {
    id: "2", 
    title: "Health Benefits of Dried Fish: A Nutritional Powerhouse",
    excerpt: "Discover the incredible health benefits of dried fish. From omega-3 fatty acids to high protein content, learn why dried fish should be part of your diet.",
    image: "/api/placeholder/400/250",
    category: "Health",
    readTime: "6 min read",
    author: "Dr. Ravi Kumar",
    date: "Dec 12, 2024"
  },
  {
    id: "3",
    title: "Sardine Fish Fry: Crispy & Delicious Preparation",
    excerpt: "Master the art of making crispy sardine fish fry with this traditional Tamil recipe. Perfect as a side dish or snack with rice and sambar.",
    image: "/api/placeholder/400/250", 
    category: "Recipes",
    readTime: "5 min read",
    author: "Chef Lakshmi",
    date: "Dec 10, 2024"
  },
  {
    id: "4",
    title: "The Art of Sun-Drying Fish: Traditional Methods",
    excerpt: "Explore the ancient art of sun-drying fish practiced in Rameshwaram for centuries. Learn about the traditional techniques that preserve flavor and nutrition.",
    image: "/api/placeholder/400/250",
    category: "Culture", 
    readTime: "7 min read",
    author: "Fisherman Raja",
    date: "Dec 8, 2024"
  },
  {
    id: "5",
    title: "Pomfret Sambar: A Tangy Tamil Delight",
    excerpt: "Create the perfect pomfret sambar with our step-by-step guide. This tangy and flavorful dish is a staple in South Indian households.",
    image: "/api/placeholder/400/250",
    category: "Recipes",
    readTime: "10 min read", 
    author: "Chef Priya",
    date: "Dec 5, 2024"
  },
  {
    id: "6",
    title: "Storing Dried Fish: Best Practices for Freshness",
    excerpt: "Learn the proper techniques to store dried fish to maintain its quality, taste, and nutritional value for months. Essential tips for every kitchen.",
    image: "/api/placeholder/400/250",
    category: "Tips",
    readTime: "4 min read",
    author: "Home Chef Suma",
    date: "Dec 3, 2024"
  }
];

const categories = ["All", "Recipes", "Health", "Culture", "Tips"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold-foreground border-gold/30 mb-6">
            📖 Fresh Knowledge Daily
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Dry Fish <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Recipe</span> Blog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover authentic Tamil Nadu recipes, cooking tips, health benefits, and traditional methods 
            for preparing the finest dried fish dishes from Rameshwaram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg">
              <ChefHat className="h-5 w-5 mr-2" />
              Latest Recipes
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              <BookOpen className="h-5 w-5 mr-2" />
              Cooking Tips
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="px-6"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="mb-16 overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <ChefHat className="h-16 w-16 text-primary" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-gold text-gold-foreground">
                    ⭐ Featured Recipe
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20">
                    {post.category}
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                  <p className="text-muted-foreground mb-6 text-lg">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <Button variant="hero" size="lg" className="w-full sm:w-auto">
                      Read Full Recipe
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          ))}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <ChefHat className="h-12 w-12 text-primary" />
                  <Badge className="absolute top-3 left-3 text-xs">
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span>{post.date}</span>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Get Fresh <span className="text-primary">Recipes</span> Weekly
            </h3>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest dry fish recipes, cooking tips, 
              and exclusive offers from our Rameshwaram collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;