import { TrendingUp, PieChart, BarChart3, Shield, ArrowRight, Award, Users } from "lucide-react";
import kotakLogo from "@/assets/kotak.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50 shadow-sm">
        <div className="container max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src={kotakLogo} alt="Kotak Mahindra Bank" className="h-10" />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-kotak-navy transition-colors">
              About PMS
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-kotak-navy transition-colors">
              Investment Strategies
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-kotak-navy transition-colors">
              Performance
            </a>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/rm-portal/dashboard')}
              className="border-kotak-red text-kotak-red hover:bg-kotak-red/5"
            >
              Login RM
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/client/dashboard')}
              className="border-kotak-navy text-kotak-navy hover:bg-kotak-navy/5"
            >
              Dashboard
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block px-4 py-2 bg-kotak-red/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-kotak-red">Premium Wealth Management</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-kotak-navy leading-tight">
            Kotak Portfolio<br />Management Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Achieve your financial goals with personalized investment strategies managed by expert portfolio managers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              onClick={() => {
                // Clear any cached onboarding state before starting
                localStorage.removeItem('kotak-pms-onboarding');
                navigate('/onboarding');
              }}
              className="bg-kotak-red hover:bg-kotak-red/90 text-lg h-14 px-10 gap-2 shadow-lg shadow-kotak-red/20"
            >
              Start Your PMS Journey
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-lg h-14 px-10 border-2"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <Card className="border border-border hover:border-kotak-red/50 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-kotak-red/10 flex items-center justify-center mb-2">
                  <TrendingUp className="h-7 w-7 text-kotak-red" />
                </div>
                <p className="text-3xl font-bold text-kotak-navy">18.5%</p>
                <p className="text-sm text-muted-foreground">Avg. Annual Returns</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border hover:border-kotak-red/50 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-kotak-red/10 flex items-center justify-center mb-2">
                  <Users className="h-7 w-7 text-kotak-red" />
                </div>
                <p className="text-3xl font-bold text-kotak-navy">10K+</p>
                <p className="text-sm text-muted-foreground">Active Investors</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border hover:border-kotak-red/50 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-kotak-red/10 flex items-center justify-center mb-2">
                  <BarChart3 className="h-7 w-7 text-kotak-red" />
                </div>
                <p className="text-3xl font-bold text-kotak-navy">₹5000Cr+</p>
                <p className="text-sm text-muted-foreground">Assets Under Management</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border hover:border-kotak-red/50 transition-all hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-kotak-red/10 flex items-center justify-center mb-2">
                  <Award className="h-7 w-7 text-kotak-red" />
                </div>
                <p className="text-3xl font-bold text-kotak-navy">25+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-kotak-navy mb-4">
              Why Choose Kotak PMS?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience premium wealth management with dedicated portfolio managers and customized investment strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-kotak-red/30 transition-all p-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-kotak-red to-pink-600 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-kotak-navy text-lg">Risk Management</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sophisticated risk assessment and portfolio diversification strategies
                </p>
              </div>
            </Card>

            <Card className="border-2 hover:border-kotak-red/30 transition-all p-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-kotak-navy to-blue-600 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-kotak-navy text-lg">Expert Team</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dedicated portfolio managers with proven track records
                </p>
              </div>
            </Card>

            <Card className="border-2 hover:border-kotak-red/30 transition-all p-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                  <PieChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-kotak-navy text-lg">Custom Strategies</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Personalized investment approach aligned with your goals
                </p>
              </div>
            </Card>

            <Card className="border-2 hover:border-kotak-red/30 transition-all p-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-kotak-navy text-lg">Performance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Consistent above-market returns with transparent reporting
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-kotak-navy to-blue-900 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Wealth?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of investors who trust Kotak PMS for their wealth management needs
          </p>
          <Button 
            size="lg"
            onClick={() => {
              localStorage.removeItem('kotak-pms-onboarding');
              navigate('/onboarding');
            }}
            className="bg-kotak-red hover:bg-kotak-red/90 text-lg h-14 px-10 gap-2 shadow-xl"
          >
            Start Application
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Landing;