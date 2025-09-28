import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle, Truck, Award, Users } from "lucide-react";

const Contact = () => {
  const handleWhatsAppContact = () => {
    const message = "Hi! I'm interested in your premium dried fish products. Could you please provide more information?";
    const phoneNumber = "919876543210"; // Replace with your WhatsApp business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold-foreground border-gold/30 mb-6">
            📞 Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Team</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our premium dried fish? Need bulk orders or custom packaging? 
            We're here to help with authentic Rameshwaram dried fish expertise.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us for any queries about our products, bulk orders, 
                  or to learn more about our traditional fishing and drying processes.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Phone Support</h3>
                        <p className="text-muted-foreground">Call us for immediate assistance</p>
                        <div className="space-y-1">
                          <a href="tel:+919876543210" className="text-primary hover:underline block">
                            +91 98765 43210
                          </a>
                          <a href="tel:+914565123456" className="text-primary hover:underline block">
                            +91 45651 23456 (Landline)
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-accent/10">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Email Us</h3>
                        <p className="text-muted-foreground">Send us your queries anytime</p>
                        <div className="space-y-1">
                          <a href="mailto:orders@rameshwaramdriedfish.com" className="text-accent hover:underline block">
                            orders@rameshwaramfish.com
                          </a>
                          <a href="mailto:support@rameshwaramdriedfish.com" className="text-accent hover:underline block">
                            support@rameshwaramfish.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-500/20 bg-green-50 dark:bg-green-950/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                        <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold">WhatsApp Support</h3>
                        <p className="text-muted-foreground">Quick responses and easy ordering</p>
                        <Button 
                          onClick={handleWhatsAppContact}
                          className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto"
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Chat on WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold/20 bg-gold/5">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-gold/10">
                        <MapPin className="h-6 w-6 text-gold" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Visit Our Location</h3>
                        <p className="text-muted-foreground">Come see our facilities</p>
                        <address className="not-italic text-sm">
                          Traditional Fish Processing Center<br />
                          Rameshwaram Fishing Harbor<br />
                          Rameshwaram, Tamil Nadu 623526<br />
                          India
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Business Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-secondary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Business Hours</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Monday - Saturday:</span>
                          <span className="font-medium">8:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="font-medium">10:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>WhatsApp Support:</span>
                          <span>24/7 Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="Enter your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Enter your last name" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input id="subject" placeholder="How can we help you?" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="orderType">Order Type</Label>
                        <select 
                          id="orderType"
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        >
                          <option value="">Select order type</option>
                          <option value="individual">Individual Order</option>
                          <option value="bulk">Bulk Order (Restaurant/Business)</option>
                          <option value="wholesale">Wholesale Inquiry</option>
                          <option value="custom">Custom Packaging</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us more about your requirements..."
                          className="min-h-[120px]"
                          required 
                        />
                      </div>

                      <div className="space-y-4">
                        <Button variant="hero" className="w-full" size="lg">
                          Send Message
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          By submitting this form, you agree to our privacy policy and terms of service.
                        </p>
                      </div>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-16 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">Our Support</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience personalized service with deep knowledge of traditional dried fish processing and authentic Tamil Nadu cuisine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">Expert Team</h3>
              <p className="text-sm text-muted-foreground">
                25+ years of experience in traditional fish processing
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold">Quick Response</h3>
              <p className="text-sm text-muted-foreground">
                24/7 WhatsApp support with quick response times
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-gold/10 w-fit mx-auto">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-semibold">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                100% satisfaction guaranteed on all products and services
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-green-600/10 w-fit mx-auto">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold">Custom Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Bulk orders, custom packaging, and special requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-muted-foreground mb-6">
              For urgent orders or immediate support, contact us directly via WhatsApp or phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-700 text-white"
                size="lg"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Now
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+919876543210">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;