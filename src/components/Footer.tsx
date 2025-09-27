import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Fish, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <Fish className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Rameshwaram Dry Fish</h3>
                <p className="text-sm text-muted-foreground">Authentic Tamil Nadu Specialties</p>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Preserving the authentic taste of Rameshwaram's coastal heritage through 
              traditional fish drying methods for over 25 years.
            </p>
            
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </a>
              <a href="#products" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Products
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Shipping Info
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Return Policy
              </a>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Our Products</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Premium Kingfish
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Golden Pomfret
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Sardines Special
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Tuna Dried Fish
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Mackerel Dry Fish
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Anchovy Mix
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6" id="contact">
            <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-foreground">Address</div>
                  <div className="text-muted-foreground">
                    123 Fisherman Street,<br />
                    Rameshwaram, Tamil Nadu<br />
                    623526, India
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-foreground">Phone</div>
                  <div className="text-muted-foreground">+91 9876543210</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-muted-foreground">order@rameshwaramdryfish.com</div>
                </div>
              </div>
            </div>

            <Badge className="bg-gold/20 text-gold-foreground border-gold/30">
              📞 Call for Bulk Orders
            </Badge>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 text-center space-y-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Rameshwaram Dry Fish. All rights reserved. | Made with ❤️ in Tamil Nadu
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Shipping Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;