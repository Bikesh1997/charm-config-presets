import { useOnboardingStore } from "@/store/onboardingStore";
import { cn } from "@/lib/utils";

const ProgressStepper = () => {
  const { currentStep } = useOnboardingStore();
  
  const steps = [
    "Mobile",
    "PAN",
    "Aadhaar",
    "Income",
    "Investment",
    "Declaration"
  ];

  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isCompletedOrCurrent = currentStep >= stepNumber;
          
          return (
            <div key={stepNumber} className="flex-1 flex flex-col items-center gap-2">
              <div
                className={cn(
                  "h-2 w-full rounded-sm transition-all duration-300",
                  isCompletedOrCurrent 
                    ? "bg-kotak-red" 
                    : "bg-gray-200"
                )}
              />
              <span 
                className={cn(
                  "text-xs transition-colors duration-300",
                  isCompletedOrCurrent 
                    ? "text-foreground font-medium" 
                    : "text-muted-foreground"
                )}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressStepper;
