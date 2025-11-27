import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useOnboardingStore } from "@/store/onboardingStore";
import { Check } from "lucide-react";

const AadhaarNumber = () => {
  const { formData, updateFormData } = useOnboardingStore();
  const [aadhaar, setAadhaar] = useState(formData.aadhaar || "");

  const isValid = aadhaar.length === 12 && /^\d{12}$/.test(aadhaar);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 12);
    setAadhaar(value);
    updateFormData({ aadhaar: value });
  };

  const formatAadhaar = (value: string) => {
    if (!value) return "";
    const groups = value.match(/.{1,4}/g) || [];
    return groups.join(" ");
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="w-[400px] mx-auto space-y-3">
          <label className="text-sm font-medium text-foreground">
            Aadhaar Number
          </label>
          <div className="relative">
            <Input
              type="tel"
              placeholder="xxxx xxxx xxxx"
              value={formatAadhaar(aadhaar)}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && isValid) {
                  e.preventDefault();
                  // Will be handled by NavigationButtons
                }
              }}
              className="text-xl h-14 tracking-wider font-mono w-full focus:border-kotak-navy focus:ring-kotak-navy"
              maxLength={14}
              autoFocus
            />
            {isValid && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Check className="h-5 w-5 text-kotak-success" />
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default AadhaarNumber;
