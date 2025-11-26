interface ValidationResult {
  isValid: boolean;
  message?: string;
}

export const validateStep = (step: number, formData: any): ValidationResult => {
  switch (step) {
    case 1:
      return validateMobileVerification(formData);
    case 2:
      return validatePANDetails(formData);
    case 3:
      return validateAadhaar(formData);
    case 4:
      return validateAnnualIncome(formData);
    case 5:
      return validateInvestmentAmount(formData);
    case 6:
      return validateDeclarationSign(formData);
    default:
      return { isValid: true };
  }
};

const validateMobileVerification = (data: any): ValidationResult => {
  if (!data.mobile || data.mobile.length !== 10) {
    return { isValid: false, message: 'Please enter a valid 10-digit mobile number' };
  }
  if (!data.mobileVerified) {
    return { isValid: false, message: 'Please verify your mobile number with OTP' };
  }
  return { isValid: true };
};

const validatePANDetails = (data: any): ValidationResult => {
  // Validate Full Name
  if (!data.fullName || data.fullName.trim().length < 3) {
    return { isValid: false, message: 'Please enter your full name (minimum 3 characters)' };
  }
  
  // Validate PAN
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if (!data.pan || !panRegex.test(data.pan.toUpperCase())) {
    return { isValid: false, message: 'Please enter a valid PAN number (e.g., ABCDE1234F)' };
  }
  
  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    return { isValid: false, message: 'Please enter a valid email address' };
  }
  
  return { isValid: true };
};

const validateAadhaar = (data: any): ValidationResult => {
  if (!data.aadhaar || data.aadhaar.length !== 12) {
    return { isValid: false, message: 'Please enter your 12-digit Aadhaar number' };
  }
  if (!/^\d{12}$/.test(data.aadhaar)) {
    return { isValid: false, message: 'Aadhaar number must contain only digits' };
  }
  return { isValid: true };
};

const validateAnnualIncome = (data: any): ValidationResult => {
  if (!data.annualIncome) {
    return { isValid: false, message: 'Please select your annual income range' };
  }
  return { isValid: true };
};

const validateInvestmentAmount = (data: any): ValidationResult => {
  const minAmount = 5000000; // 50 Lakhs
  if (!data.investmentAmount || data.investmentAmount < minAmount) {
    return { isValid: false, message: 'Minimum investment amount is ₹50,00,000' };
  }
  return { isValid: true };
};

const validateDeclarationSign = (data: any): ValidationResult => {
  if (!data.declarationAccepted) {
    return { isValid: false, message: 'Please accept the terms and conditions' };
  }
  if (!data.eSignCompleted) {
    return { isValid: false, message: 'Please complete the e-signature' };
  }
  return { isValid: true };
};

// Utility functions
export const formatIndianCurrency = (value: string | number): string => {
  const numValue = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;
  if (isNaN(numValue)) return '';
  return numValue.toLocaleString('en-IN');
};

export const validatePANFormat = (pan: string): boolean => {
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return panRegex.test(pan.toUpperCase());
};

export const formatMobileNumber = (mobile: string): string => {
  const cleaned = mobile.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return mobile;
};
