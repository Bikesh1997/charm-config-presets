import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Award, Users } from "lucide-react";

const PMSOverview = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-kotak-navy">
          Welcome to Kotak PMS
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional portfolio management services designed to help you achieve your wealth creation goals through expert investment strategies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        <Card className="p-6 space-y-3 border-2 hover:border-kotak-red/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-kotak-red/10 flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-kotak-red" />
          </div>
          <h3 className="font-semibold text-kotak-navy">Expert Management</h3>
          <p className="text-sm text-muted-foreground">
            Dedicated portfolio managers with proven track records
          </p>
        </Card>

        <Card className="p-6 space-y-3 border-2 hover:border-kotak-red/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-kotak-red/10 flex items-center justify-center">
            <Shield className="h-6 w-6 text-kotak-red" />
          </div>
          <h3 className="font-semibold text-kotak-navy">Risk Management</h3>
          <p className="text-sm text-muted-foreground">
            Customized strategies aligned with your risk appetite
          </p>
        </Card>

        <Card className="p-6 space-y-3 border-2 hover:border-kotak-red/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-kotak-red/10 flex items-center justify-center">
            <Award className="h-6 w-6 text-kotak-red" />
          </div>
          <h3 className="font-semibold text-kotak-navy">Premium Service</h3>
          <p className="text-sm text-muted-foreground">
            Exclusive access to high-potential investment opportunities
          </p>
        </Card>

        <Card className="p-6 space-y-3 border-2 hover:border-kotak-red/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-kotak-red/10 flex items-center justify-center">
            <Users className="h-6 w-6 text-kotak-red" />
          </div>
          <h3 className="font-semibold text-kotak-navy">Personalized Approach</h3>
          <p className="text-sm text-muted-foreground">
            Tailored investment plans based on your financial goals
          </p>
        </Card>
      </div>

      <div className="text-center pt-4">
        <Button
          onClick={onGetStarted}
          className="bg-kotak-red hover:bg-kotak-red/90 text-lg h-14 px-12"
        >
          Get Started
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Complete your application in just 5 minutes
        </p>
      </div>
    </div>
  );
};

export default PMSOverview;
