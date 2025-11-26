import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export const PortfolioValueCard = () => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg h-full">
      <CardContent className="p-0 h-full">
        <div 
          className="p-6 h-full flex flex-col" 
          style={{ background: 'var(--gradient-portfolio)' }}
        >
          {/* Header Section */}
          <div className="mb-4">
            <p className="text-xs text-kotak-navy/70 mb-2">Total Portfolio Value</p>
            <h2 className="text-3xl font-bold text-kotak-navy">₹87,45,230</h2>
          </div>

          {/* Metrics Section */}
          <div className="grid grid-cols-2 gap-3 flex-1">
            {/* XIRR */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-kotak-navy/10">
              <p className="text-xs text-muted-foreground mb-1">XIRR</p>
              <div className="flex items-center gap-1">
                <p className="text-xl font-bold text-kotak-navy">14.2%</p>
                <TrendingUp className="h-4 w-4 text-kotak-success" />
              </div>
            </div>

            {/* Invested */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-kotak-navy/10">
              <p className="text-xs text-muted-foreground mb-1">Invested</p>
              <p className="text-xl font-bold text-kotak-navy">₹75L</p>
            </div>

            {/* Realised Gain */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-kotak-navy/10">
              <p className="text-xs text-muted-foreground mb-1">Realised Gain</p>
              <p className="text-xl font-bold text-kotak-success">₹3.2L</p>
            </div>

            {/* Unrealised Gain */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-kotak-navy/10">
              <p className="text-xs text-muted-foreground mb-1">Unrealised Gain</p>
              <p className="text-xl font-bold text-kotak-success">₹9.2L</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
