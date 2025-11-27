import { useState, useEffect } from "react";
import { useOnboardingStore } from "@/store/onboardingStore";
import { Card } from "@/components/ui/card";
import { Check, IndianRupee } from "lucide-react";
import { cn } from "@/lib/utils";

const incomeRanges = [
  { id: "below-5", label: "Below ₹5 Lakhs" },
  { id: "5-10", label: "₹5 - 10 Lakhs" },
  { id: "10-25", label: "₹10 - 25 Lakhs" },
  { id: "25-100", label: "₹25 Lakhs - ₹1 Crore" },
  { id: "100-500", label: "₹1 - 5 Crores" },
  { id: "above-500", label: "Above ₹5 Crores" },
];

const AnnualIncome = () => {
  const { formData, updateFormData } = useOnboardingStore();
  const [selected, setSelected] = useState(formData.annualIncome || "");

  const handleSelect = (value: string) => {
    setSelected(value);
    updateFormData({ annualIncome: value });
  };

  // Add keyboard support for Enter key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && selected) {
        e.preventDefault();
        // Trigger navigation
        document.querySelector<HTMLButtonElement>('button[type="button"]')?.click();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected]);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-3">
        {incomeRanges.map((range) => (
          <Card
            key={range.id}
            onClick={() => handleSelect(range.label)}
            className={cn(
              "p-3 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] relative",
              selected === range.label
                ? "border-2 border-kotak-red bg-kotak-red/5"
                : "border-2 border-border hover:border-kotak-red/50"
            )}
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center transition-colors",
                  selected === range.label
                    ? "bg-kotak-red text-white"
                    : "bg-muted text-muted-foreground"
                )}
              >
                <IndianRupee className="h-4 w-4" />
              </div>
              <p className="text-xs font-semibold text-foreground leading-tight">
                {range.label}
              </p>
              {selected === range.label && (
                <div className="absolute top-2 right-2">
                  <div className="w-5 h-5 rounded-full bg-kotak-red flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
      </div>
    </div>
  );
};

export default AnnualIncome;
