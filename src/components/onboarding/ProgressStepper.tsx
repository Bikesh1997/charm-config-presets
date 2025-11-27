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
      <div className="flex flex-col gap-2">
        {/* Circles and connecting lines row */}
        <div className="flex items-center justify-between">
          {steps.map((label, index) => {
            const stepNumber = index + 1;
            const isCompletedOrCurrent = currentStep >= stepNumber;
            
            return (
              <React.Fragment key={stepNumber}>
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
                
                {index < steps.length - 1 && (
                  <div 
                    className={cn(
                      "h-0.5 flex-1 mx-2 transition-all duration-300",
                      currentStep > stepNumber
                        ? "bg-kotak-red"
                        : "bg-gray-200"
                    )}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
        
        {/* Labels row */}
        <div className="flex justify-between">
          {steps.map((label, index) => {
            const stepNumber = index + 1;
            const isCompletedOrCurrent = currentStep >= stepNumber;
            
            return (
              <div key={stepNumber} className="flex-1 flex justify-center">
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressStepper;
