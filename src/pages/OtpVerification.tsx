import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, Shield, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setTimeLeft(30);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/5 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/login" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Login</span>
          </Link>
          
          <div className="space-y-2">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold">Verify Your Phone</h1>
            <p className="text-muted-foreground">We've sent a 6-digit code to your phone number</p>
          </div>
        </div>

        <Card className="shadow-xl border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Enter OTP Code</CardTitle>
            <CardDescription className="flex items-center justify-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 9876543210</span>
              <Badge variant="secondary" className="text-xs">
                Change
              </Badge>
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form className="space-y-6">
              {/* OTP Input */}
              <div className="space-y-4">
                <div className="flex justify-center space-x-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => inputRefs.current[index] = el}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-12 text-center text-lg font-semibold border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none bg-background"
                      autoComplete="one-time-code"
                    />
                  ))}
                </div>
                
                {/* Timer */}
                <div className="text-center">
                  {!canResend ? (
                    <p className="text-sm text-muted-foreground">
                      Resend code in <span className="font-medium text-primary">{timeLeft}s</span>
                    </p>
                  ) : (
                    <Button
                      type="button"
                      variant="link"
                      onClick={handleResend}
                      className="text-sm p-0 h-auto"
                    >
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Resend Code
                    </Button>
                  )}
                </div>
              </div>

              {/* Verify Button */}
              <Link to="/profile">
                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full" 
                  size="lg"
                  disabled={otp.some(digit => !digit)}
                >
                  Verify & Continue
                </Button>
              </Link>
            </form>

            {/* Security Note */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <h4 className="font-medium text-accent-foreground mb-1">Security Notice</h4>
                  <p className="text-muted-foreground">
                    Never share your OTP with anyone. Our team will never ask for your OTP over phone or email.
                  </p>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="text-center space-y-2">
              <p className="text-xs text-muted-foreground">
                Didn't receive the code?
              </p>
              <div className="flex justify-center space-x-4 text-xs">
                <button className="text-primary hover:underline">
                  Try SMS instead
                </button>
                <button className="text-primary hover:underline">
                  Call me instead
                </button>
              </div>
            </div>

            {/* Support */}
            <div className="text-center">
              <Badge className="bg-gold/20 text-gold-foreground border-gold/30 text-xs">
                💬 Need help? Call +91 9876543210
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="mt-6 bg-gradient-to-r from-secondary/20 to-muted/20 border-muted/30">
          <CardContent className="p-4">
            <h4 className="font-semibold text-sm mb-2">💡 Quick Tips</h4>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Check your SMS inbox and spam folder</li>
              <li>• Ensure you have network connectivity</li>
              <li>• Code expires in 10 minutes</li>
              <li>• Contact support if issues persist</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OtpVerification;