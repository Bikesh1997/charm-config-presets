import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useOnboardingStore } from "@/store/onboardingStore";
import { Check, Loader2, Shield, Mail, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

const DeclarationSign = () => {
  const { formData, updateFormData } = useOnboardingStore();
  const [declarationAccepted, setDeclarationAccepted] = useState(
    formData.declarationAccepted || false
  );
  const [eSignMethod, setESignMethod] = useState<'aadhaar' | 'email'>(
    formData.eSignMethod || 'aadhaar'
  );
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [otpSentMessage, setOtpSentMessage] = useState("");

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  useEffect(() => {
    updateFormData({ declarationAccepted, eSignMethod });
  }, [declarationAccepted, eSignMethod]);

  const handleSendOTP = () => {
    setShowOTP(true);
    setResendTimer(30);
    setOtpSentMessage("");
  };

  const handleResendOTP = () => {
    setResendTimer(30);
    setOtp("");
    setOtpSentMessage("OTP resent successfully");
  };

  useEffect(() => {
    if (otp.length === 6 && showOTP) {
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        updateFormData({ eSignCompleted: true });
        // Navigate to next step after e-signature completion
        setTimeout(() => {
          const { goToNextStep } = useOnboardingStore.getState();
          goToNextStep();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
      }, 1500);
    }
  }, [otp, showOTP]);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="w-[400px] mx-auto">
      {/* Combined Single Card */}
      <Card className="p-6 space-y-6">
        {/* Declaration Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <FileText className="h-5 w-5 text-kotak-red" />
            Declaration
          </h3>
          
          <div className="flex items-start gap-3">
            <Checkbox
              id="declaration"
              checked={declarationAccepted}
              onCheckedChange={(checked) => setDeclarationAccepted(checked as boolean)}
              className="mt-1"
            />
            <label htmlFor="declaration" className="text-sm leading-relaxed cursor-pointer">
              I have read and agree to the{" "}
              <Dialog>
                <DialogTrigger className="text-kotak-red hover:underline font-medium">
                  Terms & Conditions
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Terms & Conditions</DialogTitle>
                    <DialogDescription className="pt-4 space-y-4 text-sm">
                      <p><strong>1. Investment Acknowledgment:</strong> I understand that Portfolio Management Services (PMS) investments are subject to market risks and there is no guarantee of returns.</p>
                      <p><strong>2. Source of Funds:</strong> I confirm that this investment is from my legitimate sources of income and complies with all applicable laws.</p>
                      <p><strong>3. Risk Disclosure:</strong> I acknowledge that past performance is not indicative of future results and the value of my investment may fluctuate.</p>
                      <p><strong>4. Fees & Charges:</strong> I agree to pay the management fees and other charges as per the fee schedule provided.</p>
                      <p><strong>5. Data Privacy:</strong> I consent to Kotak Mahindra Bank collecting and processing my personal data as per the Privacy Policy.</p>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              , understand that PMS investments are subject to market risks, and confirm that this investment is from my legitimate sources of income.
            </label>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* E-Signature Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Shield className="h-5 w-5 text-kotak-red" />
            E-Signature
          </h3>

          <Tabs value={eSignMethod} onValueChange={(v) => setESignMethod(v as 'aadhaar' | 'email')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="aadhaar" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Aadhaar e-Sign
              </TabsTrigger>
              <TabsTrigger value="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email OTP
              </TabsTrigger>
            </TabsList>

            <TabsContent value="aadhaar" className="space-y-4 mt-6">
              {!showOTP ? (
                <Button
                  onClick={handleSendOTP}
                  disabled={!declarationAccepted}
                  className="w-full h-12 bg-kotak-success hover:bg-kotak-success/90 text-white"
                >
                  <Shield className="h-5 w-5 mr-2" />
                  Sign with Aadhaar OTP
                </Button>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-center text-muted-foreground">
                    Enter OTP sent to your Aadhaar-linked mobile
                  </p>
                  {otpSentMessage && (
                    <p className="text-sm text-center text-kotak-success font-medium">
                      {otpSentMessage}
                    </p>
                  )}
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
                      <span className="font-medium">Verifying signature...</span>
                    </div>
                  )}

                  {formData.eSignCompleted && (
                    <div className="flex items-center justify-center gap-2 text-kotak-success animate-scale-in">
                      <Check className="h-6 w-6" />
                      <span className="font-semibold">E-signature completed!</span>
                    </div>
                  )}

                  <div className="text-sm text-center">
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
              )}
            </TabsContent>

            <TabsContent value="email" className="space-y-4 mt-6">
              {!showOTP ? (
                <Button
                  onClick={handleSendOTP}
                  disabled={!declarationAccepted}
                  className="w-full h-12 bg-kotak-red hover:bg-kotak-red/90"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send OTP to Email
                </Button>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-center text-muted-foreground">
                    Enter OTP sent to <span className="font-semibold">{formData.email}</span>
                  </p>
                  {otpSentMessage && (
                    <p className="text-sm text-center text-kotak-success font-medium">
                      {otpSentMessage}
                    </p>
                  )}
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
                    <div className="flex items-center justify-center gap-2 text-kotak-red">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span className="font-medium">Verifying signature...</span>
                    </div>
                  )}

                  {formData.eSignCompleted && (
                    <div className="flex items-center justify-center gap-2 text-kotak-success animate-scale-in">
                      <Check className="h-6 w-6" />
                      <span className="font-semibold">E-signature completed!</span>
                    </div>
                  )}

                  <div className="text-sm text-center">
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
              )}
            </TabsContent>
          </Tabs>
        </div>
      </Card>
      </div>
    </div>
  );
};

export default DeclarationSign;
