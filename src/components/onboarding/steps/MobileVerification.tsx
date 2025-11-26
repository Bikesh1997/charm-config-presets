import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useOnboardingStore } from "@/store/onboardingStore";
import { Check, Loader2, ArrowRight } from "lucide-react";

const MobileVerification = () => {
  const { formData, updateFormData, goToNextStep } = useOnboardingStore();
  const [mobile, setMobile] = useState(formData.mobile || "");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [otpSentMessage, setOtpSentMessage] = useState("");
  
  const isValidMobile = mobile.length === 10 && /^\d{10}$/.test(mobile);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  useEffect(() => {
    if (otp.length === 6) {
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        setIsVerified(true);
        updateFormData({
          mobile,
          mobileVerified: true
        });
        setTimeout(() => {
          goToNextStep();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
      }, 1000);
    }
  }, [otp, mobile, updateFormData, goToNextStep]);

  const handleSendOTP = () => {
    if (isValidMobile) {
      setShowOTP(true);
      setResendTimer(30);
      setOtpSentMessage("");
    }
  };

  const handleResendOTP = () => {
    setResendTimer(30);
    setOtp("");
    setOtpSentMessage("OTP resent successfully");
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-left max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-kotak-navy">Verify Your Mobile</h2>
      </div>

      {!showOTP ? (
        <div className="space-y-6 max-w-md mx-auto">
          <div className="w-[400px] mx-auto space-y-3">
            <label className="text-sm font-medium text-foreground">
              Mobile Number
            </label>
            <div className="flex gap-2">
              <div className="flex items-center justify-center px-3 py-2 border border-input rounded-md bg-muted text-muted-foreground font-medium">
                +91
              </div>
              <Input 
                type="tel" 
                placeholder="Enter mobile number" 
                value={mobile} 
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setMobile(value);
                  updateFormData({ mobile: value });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && isValidMobile) {
                    e.preventDefault();
                    handleSendOTP();
                  }
                }}
                className="text-lg flex-1" 
                maxLength={10} 
                autoFocus 
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button
              onClick={handleSendOTP}
              disabled={!isValidMobile}
              className="flex items-center gap-2 bg-kotak-red hover:bg-kotak-red/90 w-[400px] h-12"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6 max-w-md mx-auto">
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                OTP sent to <span className="font-semibold text-foreground">+91-{mobile.slice(0, 5)}-{mobile.slice(5)}</span>
              </p>
              {otpSentMessage && (
                <p className="text-sm text-kotak-success font-medium">
                  {otpSentMessage}
                </p>
              )}
              <label className="text-sm font-medium text-foreground block">
                
              </label>
            </div>

            <div className="flex justify-center">
              <InputOTP 
                maxLength={6} 
                value={otp} 
                onChange={(value) => setOtp(value)} 
                disabled={isVerifying}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {isVerifying && (
              <div className="flex items-center justify-center gap-2 text-kotak-success">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span className="font-medium">Verifying...</span>
              </div>
            )}

            {isVerified && (
              <div className="flex flex-col items-center gap-4 animate-fade-in">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-kotak-success flex items-center justify-center">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-kotak-success/20 rounded-full blur-xl animate-pulse" />
                </div>
                <p className="text-sm font-medium text-kotak-success">
                  OTP verified successfully
                </p>
              </div>
            )}

            <div className="text-sm">
              {resendTimer > 0 ? (
                <p className="text-muted-foreground">
                  Resend OTP in <span className="font-semibold">{resendTimer}s</span>
                </p>
              ) : (
                <button 
                  onClick={handleResendOTP} 
                  className="text-kotak-red hover:underline font-medium"
                >
                  Resend OTP
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileVerification;
