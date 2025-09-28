import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Sun, Users, Award, MapPin, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent/20 text-accent border-accent/30">
                🏛️ Heritage Since 1998
              </Badge>
              
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Authentic <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tradition</span> from Rameshwaram
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                For over 25 years, we've been preserving the authentic art of fish drying 
                using traditional methods passed down through generations of Tamil Nadu fishermen. 
                Our premium dry fish comes directly from the sacred waters of Rameshwaram.
              </p>

              <p className="text-md text-muted-foreground">
                Located in the holy island of Rameshwaram, our family business has been serving authentic 
                dried fish to Tamil Nadu households and restaurants worldwide. We follow ancient sun-drying 
                techniques that preserve not just the fish, but the rich cultural heritage of our coastal community. 
                Each piece of fish is carefully selected by our experienced fishermen who understand the waters 
                like their ancestors did centuries ago.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-accent mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Families</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Traditional Process</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Waves className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Fresh Catch</div>
                    <div className="text-xs text-muted-foreground">Daily from Rameshwaram waters</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border">
                  <div className="p-2 rounded-full bg-gold/10">
                    <Sun className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Sun Drying</div>
                    <div className="text-xs text-muted-foreground">Natural traditional method</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border">
                  <div className="p-2 rounded-full bg-accent/10">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Quality Check</div>
                    <div className="text-xs text-muted-foreground">Premium standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-xl">
              <div className="relative">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <MapPin className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Rameshwaram, Tamil Nadu</h4>
                      <p className="text-muted-foreground">Sacred coastal waters</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gold text-gold-foreground">
                    📍 Origin Location
                  </Badge>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center border-primary/20 bg-primary/5">
                <div className="text-3xl mb-2">🌊</div>
                <div className="font-semibold text-primary">Pure Waters</div>
                <div className="text-xs text-muted-foreground">Sacred Rameshwaram coast</div>
              </Card>
              
              <Card className="p-6 text-center border-gold/20 bg-gold/5">
                <div className="text-3xl mb-2">☀️</div>
                <div className="font-semibold text-gold-foreground">Sun Dried</div>
                <div className="text-xs text-muted-foreground">Natural traditional method</div>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-bold text-lg">Quality Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  Every batch is carefully inspected and meets our premium standards 
                  for taste, texture, and freshness.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;