import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useOnboardingStore } from "@/store/onboardingStore";
import { Check } from "lucide-react";
import { formatIndianCurrency } from "@/lib/validation";

const quickAmounts = [
  { label: "₹50L", value: 5000000 },
  { label: "₹75L", value: 7500000 },
  { label: "₹1Cr", value: 10000000 },
  { label: "₹2Cr", value: 20000000 },
  { label: "₹5Cr", value: 50000000 },
];

const InvestmentAmount = () => {
  const { formData, updateFormData } = useOnboardingStore();
  const [amount, setAmount] = useState(
    formData.investmentAmount ? formData.investmentAmount.toString() : ""
  );

  const minAmount = 5000000;
  const numAmount = parseFloat(amount.replace(/,/g, '')) || 0;
  const isValid = numAmount >= minAmount;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setAmount(value);
    const num = parseFloat(value) || 0;
    updateFormData({ investmentAmount: num });
  };

  const handleQuickSelect = (value: number) => {
    setAmount(value.toString());
    updateFormData({ investmentAmount: value });
  };

  const displayValue = amount ? formatIndianCurrency(amount) : "";

  return (
    <div className="animate-fade-in">
      <div className="w-[400px] mx-auto space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            Initial Investment Amount
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xl font-medium text-muted-foreground flex items-center">
              ₹
            </div>
            <Input
              type="text"
              placeholder="Enter amount"
              value={displayValue}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && isValid) {
                  e.preventDefault();
                  // Will be handled by NavigationButtons
                }
              }}
              className={`text-2xl h-16 pl-10 pr-12 font-semibold w-full focus:border-kotak-navy focus:ring-kotak-navy ${
                amount && !isValid ? 'border-destructive' : ''
              }`}
              autoFocus
            />
            {amount && isValid && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Check className="h-6 w-6 text-kotak-success" />
              </div>
            )}
          </div>

          {amount && !isValid && (
            <p className="text-sm text-destructive font-medium">
              Minimum investment amount is ₹50,00,000
            </p>
          )}
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground text-center">
            Quick Select
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {quickAmounts.map((item) => (
              <Button
                key={item.label}
                variant="outline"
                onClick={() => handleQuickSelect(item.value)}
                className={`h-10 ${
                  numAmount === item.value
                    ? 'border-kotak-red bg-kotak-red/5 text-kotak-red hover:bg-kotak-red/10'
                    : ''
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAmount;
