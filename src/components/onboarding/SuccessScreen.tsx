import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useOnboardingStore } from "@/store/onboardingStore";
import { formatIndianCurrency } from "@/lib/validation";
import { 
  CheckCircle2, 
  Download, 
  LayoutDashboard, 
  Search,
  Phone,
  Mail,
  Clock,
  FileCheck,
  Check
} from "lucide-react";

const SuccessScreen = () => {
  const navigate = useNavigate();
  const { formData, resetForm } = useOnboardingStore();

  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);


  // Generate or use existing application ID
  const applicationId = formData.applicationId || `KTK-PMS-${Math.floor(100000 + Math.random() * 900000)}`;
  
  // Save application ID if not already saved
  useEffect(() => {
    if (!formData.applicationId) {
      const { updateFormData } = useOnboardingStore.getState();
      updateFormData({ applicationId });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-8 animate-fade-in">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-kotak-success/20 rounded-full blur-2xl animate-pulse" />
            <CheckCircle2 className="h-20 w-20 text-kotak-success relative" />
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-kotak-navy">
            Welcome to Kotak PMS!
          </h1>
          <p className="text-lg text-muted-foreground">
            Your application has been submitted successfully
          </p>
        </div>

        {/* Application Details Card */}
        <div className="flex gap-6">
        <Card className="p-8 space-y-6 shadow-lg">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <h2 className="text-xl font-semibold text-foreground">Application Summary</h2>
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Under Review</Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Application ID</p>
              <p className="font-semibold text-foreground font-mono">{applicationId}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Applicant Name</p>
              <p className="font-semibold text-foreground">{formData.fullName}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Mobile Number</p>
              <p className="font-semibold text-foreground">+91-{formData.mobile}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Investment Amount</p>
              <p className="font-semibold text-kotak-red text-lg">
                ₹{formatIndianCurrency(formData.investmentAmount || 0)}
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-4 flex items-center gap-3">
            <Clock className="h-5 w-5 text-kotak-red flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Expected Activation</p>
              <p className="text-sm text-muted-foreground">Within 24-48 hours</p>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <Card className="p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FileCheck className="h-6 w-6 text-kotak-red" />
            What happens next?
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-kotak-success flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-foreground">Application Submitted</p>
                <p className="text-sm text-muted-foreground">
                  {new Date().toLocaleString('en-IN', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                <FileCheck className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">Document Verification</p>
                <p className="text-sm text-muted-foreground">2-4 hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">Account Activation</p>
                <p className="text-sm text-muted-foreground">24-48 hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                <Mail className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">Fund Transfer Instructions</p>
                <p className="text-sm text-muted-foreground">Via email after activation</p>
              </div>
            </div>
          </div>
        </Card>
</div>
        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
          <Button 
            className="flex items-center justify-center gap-2 h-14 bg-kotak-red hover:bg-kotak-red/90 text-lg"
            onClick={() => navigate('/client/dashboard')}
          >
            <LayoutDashboard className="h-5 w-5" />
            Go to Dashboard
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center justify-center gap-2 h-14 border-kotak-red text-kotak-red hover:bg-kotak-red/5"
          >
            <Download className="h-5 w-5" />
            Download Summary
          </Button>
        </div>

        {/* Support Info */}
        <Card className="p-6 bg-muted/30">
          <div className="text-sm text-center text-muted-foreground space-y-2">
            <p>You'll receive updates via SMS, Email, and WhatsApp</p>
            <div className="flex items-center justify-center gap-6 pt-2">
              <a href="tel:1800-xxx-xxxx" className="flex items-center gap-1 hover:text-kotak-red transition-colors">
                <Phone className="h-4 w-4" />
                <span>1800-XXX-XXXX</span>
              </a>
              <a href="mailto:pms@kotak.com" className="flex items-center gap-1 hover:text-kotak-red transition-colors">
                <Mail className="h-4 w-4" />
                <span>pms@kotak.com</span>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SuccessScreen;
