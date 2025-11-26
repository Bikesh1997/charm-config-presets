import { useOnboardingStore } from "@/store/onboardingStore";
import { cn } from "@/lib/utils";

const ProgressStepper = () => {
  const { currentStep } = useOnboardingStore();
  const totalSteps = 6;

  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isCompletedOrCurrent = currentStep >= stepNumber;
          
          return (
            <div
              key={stepNumber}
              className={cn(
                "h-2 flex-1 rounded-sm transition-all duration-300",
                isCompletedOrCurrent 
                  ? "bg-kotak-red" 
                  : "bg-gray-200"
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProgressStepper;
