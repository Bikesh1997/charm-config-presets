import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Simplified data structure for minimal onboarding
interface OnboardingFormData {
  mobile?: string;
  mobileVerified?: boolean;
  fullName?: string;
  email?: string;
  pan?: string;
  aadhaar?: string;
  annualIncome?: string;
  investmentAmount?: number;
  declarationAccepted?: boolean;
  eSignMethod?: 'aadhaar' | 'email';
  eSignCompleted?: boolean;
  applicationId?: string;
}

interface OnboardingStore {
  currentStep: number;
  formData: OnboardingFormData;
  updateFormData: (data: Partial<OnboardingFormData>) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  setCurrentStep: (step: number) => void;
  resetForm: () => void;
}

const initialFormData: OnboardingFormData = {
  mobile: '',
  mobileVerified: false,
  fullName: '',
  email: '',
  pan: '',
  aadhaar: '',
  annualIncome: '',
  investmentAmount: undefined,
  declarationAccepted: false,
  eSignMethod: undefined,
  eSignCompleted: false,
  applicationId: '',
};

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set) => ({
      currentStep: 1,
      formData: initialFormData,
      
      updateFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),
      
      goToNextStep: () =>
        set((state) => ({
          currentStep: Math.min(state.currentStep + 1, 7),
        })),
      
      goToPreviousStep: () =>
        set((state) => ({
          currentStep: Math.max(state.currentStep - 1, 1),
        })),
      
      setCurrentStep: (step) =>
        set(() => ({
          currentStep: step,
        })),
      
      resetForm: () =>
        set(() => ({
          currentStep: 1,
          formData: initialFormData,
        })),
    }),
    {
      name: 'kotak-pms-onboarding',
      version: 1, // Added version to force cache clear if structure changes
    }
  )
);
