import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, Shield, ArrowLeft } from "lucide-react";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock admin login - would integrate with Supabase
    console.log("Admin login attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to User Login */}
        <Link 
          to="/login" 
          className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to User Login
        </Link>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 backdrop-blur rounded-2xl mb-4">
            <Shield className="h-8 w-8 text-red-400" />
          </div>
          <h1 className="text-3xl font-bold text-white">Admin Portal</h1>
          <p className="text-white/80 mt-2">Secure access for administrators only</p>
        </div>

        {/* Login Card */}
        <Card className="bg-white/10 backdrop-blur-xl border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white">Administrator Sign In</CardTitle>
            <CardDescription className="text-white/80">
              Enter your admin credentials to access the dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Admin Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="admin@parkpal.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter admin password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-white/60" />
                    ) : (
                      <Eye className="h-4 w-4 text-white/60" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Two-Factor Authentication */}
              <div className="space-y-2">
                <Label htmlFor="twofa" className="text-white">2FA Code (Optional)</Label>
                <Input
                  id="twofa"
                  name="twofa"
                  type="text"
                  placeholder="Enter 6-digit code"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  maxLength={6}
                />
              </div>

              {/* Sign In Button */}
              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3"
              >
                <Shield className="h-4 w-4 mr-2" />
                Access Admin Dashboard
              </Button>
            </form>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-red-600/20 border border-red-400/30 rounded-lg">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-red-400 mt-0.5" />
                <div>
                  <h4 className="text-red-200 font-medium text-sm">Security Notice</h4>
                  <p className="text-red-300 text-xs mt-1">
                    All admin activities are logged and monitored. Unauthorized access attempts 
                    will be reported to system administrators.
                  </p>
                </div>
              </div>
            </div>

            {/* Help */}
            <div className="text-center text-sm text-white/60">
              Need help accessing your account?{" "}
              <Link to="/admin/support" className="text-red-400 hover:text-red-300">
                Contact IT Support
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Additional Security Features */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-4 text-xs text-white/60">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              SSL Encrypted
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              SOC2 Compliant
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Activity Monitored
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;