import React from "react";
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
      <div className="flex items-start justify-between">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isCompletedOrCurrent = currentStep >= stepNumber;
          
          return (
            <React.Fragment key={stepNumber}>
              <div className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                    isCompletedOrCurrent 
                      ? "bg-kotak-red text-white" 
                      : "bg-gray-100 text-gray-400 border-2 border-gray-200"
                  )}
                >
                  {stepNumber}
                </div>
                <span 
                  className={cn(
                    "text-xs transition-colors duration-300 whitespace-nowrap",
                    isCompletedOrCurrent 
                      ? "text-kotak-red font-medium" 
                      : "text-muted-foreground"
                  )}
                >
                  {label}
                </span>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex-1 flex items-start pt-4">
                  <div 
                    className={cn(
                      "h-0.5 w-full mx-2 transition-all duration-300",
                      currentStep > stepNumber
                        ? "bg-kotak-red"
                        : "bg-gray-200"
                    )}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressStepper;
