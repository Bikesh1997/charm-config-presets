import { Button } from "@/components/ui/button";
import { useOnboardingStore } from "@/store/onboardingStore";
import { ArrowRight } from "lucide-react";
import { validateStep } from "@/lib/validation";
import { toast } from "sonner";

const NavigationButtons = () => {
  const { currentStep, goToNextStep, formData } = useOnboardingStore();

  const handleContinue = () => {
    const validation = validateStep(currentStep, formData);
    
    if (!validation.isValid) {
      toast.error(validation.message || "Please fill all required fields");
      return;
    }

    goToNextStep();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonText = currentStep === 6 ? "Submit" : "Continue";

  return (
    <div className="w-[400px] mx-auto">
      <Button
        onClick={handleContinue}
        className="flex items-center gap-2 bg-kotak-red hover:bg-kotak-red/90 w-full h-12"
      >
        {buttonText}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default NavigationButtons;
