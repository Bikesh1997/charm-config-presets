import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useOnboardingStore } from "@/store/onboardingStore";
import { Check, Loader2 } from "lucide-react";

const PANDetails = () => {
  const { formData, updateFormData } = useOnboardingStore();
  const [fullName, setFullName] = useState(formData.fullName || "");
  const [pan, setPan] = useState(formData.pan || "");
  const [email, setEmail] = useState(formData.email || "");
  const [isPanValidating, setIsPanValidating] = useState(false);
  const [isPanValidated, setIsPanValidated] = useState(false);
  const [panError, setPanError] = useState("");

  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const isValidPanFormat = panRegex.test(pan.toUpperCase());
  const isValidEmail = emailRegex.test(email);
  const isValidName = fullName.trim().length >= 3;

  useEffect(() => {
    if (pan.length === 10 && isValidPanFormat) {
      setIsPanValidating(true);
      setIsPanValidated(false);
      setTimeout(() => {
        setIsPanValidating(false);
        setIsPanValidated(true);
        updateFormData({ pan: pan.toUpperCase() });
      }, 1000);
    } else {
      setIsPanValidated(false);
    }
  }, [pan, isValidPanFormat]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z\s.]/g, '');
    setFullName(value);
    updateFormData({ fullName: value });
  };

  const handlePanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 10);
    setPan(value);
    
    // Real-time keyboard-level validation
    if (value.length === 0) {
      setPanError("");
    } else if (value.length < 10) {
      setPanError("PAN must be 10 characters");
    } else if (value.length === 10) {
      // Validate format character by character
      const first5Letters = /^[A-Z]{5}/.test(value);
      const next4Digits = /^[A-Z]{5}[0-9]{4}/.test(value);
      const lastLetter = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value);
      
      if (!first5Letters) {
        setPanError("First 5 characters must be letters");
      } else if (!next4Digits) {
        setPanError("Characters 6-9 must be digits");
      } else if (!lastLetter) {
        setPanError("Last character must be a letter");
      } else {
        setPanError("");
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    updateFormData({ email: value });
  };

  const handleKeyDown = (e: React.KeyboardEvent, nextField: string) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const nextInput = document.getElementById(nextField) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="w-[400px] mx-auto space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Full Name
          </label>
          <div className="relative">
            <Input
              id="fullName"
              type="text"
              placeholder="Enter full name"
              value={fullName}
              onChange={handleNameChange}
              onKeyDown={(e) => handleKeyDown(e, 'pan')}
              className="text-base h-12 w-full focus:border-kotak-navy focus:ring-kotak-navy"
              autoFocus
            />
            {isValidName && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Check className="h-5 w-5 text-kotak-success" />
              </div>
            )}
          </div>
        </div>

        {/* PAN Number */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            PAN Number
          </label>
          <div className="relative">
            <Input
              id="pan"
              type="text"
              placeholder="ABCDE1234F"
              value={pan}
              onChange={handlePanChange}
              onKeyDown={(e) => handleKeyDown(e, 'email')}
              className={`text-base h-12 uppercase tracking-wide font-mono pr-10 w-full focus:border-kotak-navy focus:ring-kotak-navy ${
                panError ? 'border-destructive' : ''
              }`}
              maxLength={10}
            />
            {isPanValidating && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
            )}
            {isPanValidated && !isPanValidating && !panError && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Check className="h-5 w-5 text-kotak-success" />
              </div>
            )}
          </div>
          {panError && (
            <p className="text-xs text-destructive mt-1">{panError}</p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Email Address
          </label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={handleEmailChange}
              className="text-base h-12 pr-10 w-full focus:border-kotak-navy focus:ring-kotak-navy"
            />
            {isValidEmail && email && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Check className="h-5 w-5 text-kotak-success" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PANDetails;
