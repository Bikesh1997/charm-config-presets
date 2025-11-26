import { Phone } from "lucide-react";
import kotakLogo from "@/assets/kotak.svg";

const OnboardingHeader = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={kotakLogo} alt="Kotak Mahindra Bank" className="h-12" />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-kotak-red" />
            <span className="font-medium text-kotak-navy hidden sm:inline">Support:</span>
            <a href="tel:18602662666" className="text-kotak-red font-semibold hover:underline">
              1860 266 2666
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default OnboardingHeader;
