import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Mail, Lock, Phone, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/5 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="text-muted-foreground">Sign in to your account to continue shopping</p>
          </div>
        </div>

        <Card className="shadow-xl border-border/50">
          <CardHeader className="space-y-4">
            <div className="text-center">
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>
                Choose your preferred login method
              </CardDescription>
            </div>
            
            {/* Login Method Toggle */}
            <div className="flex space-x-2">
              <Button
                variant={loginMethod === 'email' ? 'default' : 'outline'}
                className="flex-1"
                onClick={() => setLoginMethod('email')}
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
              <Button
                variant={loginMethod === 'phone' ? 'default' : 'outline'}
                className="flex-1"
                onClick={() => setLoginMethod('phone')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Phone
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form className="space-y-4">
              {/* Email/Phone Input */}
              <div className="space-y-2">
                <Label htmlFor={loginMethod}>
                  {loginMethod === 'email' ? 'Email Address' : 'Phone Number'}
                </Label>
                <div className="relative">
                  <Input
                    id={loginMethod}
                    type={loginMethod === 'email' ? 'email' : 'tel'}
                    placeholder={loginMethod === 'email' ? 'your@email.com' : '+91 9876543210'}
                    className="pl-10"
                  />
                  {loginMethod === 'email' ? (
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                  />
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <Button type="submit" variant="hero" className="w-full" size="lg">
                Sign In
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background px-4 text-xs text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full" size="lg">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>
              
              {loginMethod === 'phone' && (
                <Link to="/verify-otp">
                  <Button variant="coastal" className="w-full" size="lg">
                    Continue with OTP
                  </Button>
                </Link>
              )}
            </div>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary font-medium hover:underline">
                  Create account
                </Link>
              </p>
            </div>

            {/* Security Badge */}
            <div className="text-center">
              <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">
                🔒 Your data is secure with us
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Customer Support */}
        <div className="text-center mt-6">
          <p className="text-xs text-muted-foreground">
            Need help? Contact us at{' '}
            <a href="tel:+919876543210" className="text-primary hover:underline">
              +91 9876543210
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;