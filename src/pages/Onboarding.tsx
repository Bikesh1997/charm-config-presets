import { useEffect, useState } from "react";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import ProgressStepper from "@/components/onboarding/ProgressStepper";
import PMSOverview from "@/components/onboarding/steps/PMSOverview";
import MobileVerification from "@/components/onboarding/steps/MobileVerification";
import PANDetails from "@/components/onboarding/steps/PANDetails";
import AadhaarNumber from "@/components/onboarding/steps/AadhaarNumber";
import AnnualIncome from "@/components/onboarding/steps/AnnualIncome";
import InvestmentAmount from "@/components/onboarding/steps/InvestmentAmount";
import DeclarationSign from "@/components/onboarding/steps/DeclarationSign";
import SuccessScreen from "@/components/onboarding/SuccessScreen";
import NavigationButtons from "@/components/onboarding/NavigationButtons";
import { useOnboardingStore } from "@/store/onboardingStore";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Onboarding = () => {
  const { currentStep, resetForm, goToPreviousStep, goToNextStep, setCurrentStep } = useOnboardingStore();
  const [showOverview, setShowOverview] = useState(currentStep === 1);

  const handleBack = () => {
    goToPreviousStep();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    setShowOverview(false);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // If arriving at step 7 (success), show overview on next visit
    if (currentStep === 7) {
      setShowOverview(false);
    } else if (currentStep === 1) {
      setShowOverview(true);
    }
  }, [currentStep]);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <MobileVerification />;
      case 2:
        return <PANDetails />;
      case 3:
        return <AadhaarNumber />;
      case 4:
        return <AnnualIncome />;
      case 5:
        return <InvestmentAmount />;
      case 6:
        return <DeclarationSign />;
      case 7:
        return <SuccessScreen />;
      default:
        return <MobileVerification />;
    }
  };

  // if (showOverview && currentStep === 1) {
  //   return (
  //     <div className="min-h-screen bg-background">
  //       <OnboardingHeader />
  //       <div className="container max-w-5xl mx-auto px-4 py-12">
  //         <PMSOverview onGetStarted={handleGetStarted} />
  //       </div>
  //     </div>
  //   );
  // }

  if (currentStep === 7) {
    return <SuccessScreen />;
  }

  return (
    <div className="min-h-screen bg-background">
      <OnboardingHeader />
      
      <div className="container max-w-2xl mx-auto px-4 py-8">
        <ProgressStepper />
        
        <div className="mt-8 bg-card rounded-xl shadow-lg p-6 md:p-10">
          <div className="flex items-start gap-4 mb-8">
            {currentStep > 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="mt-1 flex-shrink-0"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}
            
            <div className="flex-1 min-w-0">
              {renderStep()}
            </div>
          </div>
          
          {currentStep !== 1 && (
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-[40px]"></div>
              <div className="flex-1 min-w-0">
                <NavigationButtons />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
