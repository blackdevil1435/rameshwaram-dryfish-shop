import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Truck, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-dried-fish.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gold/20 text-gold-foreground border-gold/30 hover:bg-gold/30">
                🐟 Premium Quality from Rameshwaram
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Authentic</span>{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Dry Fish
                </span>{" "}
                <span className="text-foreground">from Tamil Nadu</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Experience the rich coastal flavors of Rameshwaram with our premium 
                dried fish varieties. Naturally sun-dried using traditional methods 
                passed down through generations.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="p-2 rounded-full bg-primary/10">
                  <Star className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="p-2 rounded-full bg-accent/10">
                  <Truck className="h-4 w-4 text-accent" />
                </div>
                <span className="text-muted-foreground">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="p-2 rounded-full bg-gold/10">
                  <Shield className="h-4 w-4 text-gold" />
                </div>
                <span className="text-muted-foreground">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="p-2 rounded-full bg-primary/10">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">Authentic</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Shop Our Collection
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Learn Our Story
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Fish Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Premium dried fish from Rameshwaram"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6">
                <Badge className="bg-gold text-gold-foreground shadow-lg text-sm px-3 py-1">
                  🏆 Best Quality Guarantee
                </Badge>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-sm">4.9/5 Rating</div>
                  <div className="text-xs text-muted-foreground">From 200+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="hsl(var(--accent))" opacity="0.1"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;