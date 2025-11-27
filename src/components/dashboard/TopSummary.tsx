import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Wallet, TrendingDown, Target } from "lucide-react";

interface TopSummaryProps {
  currentValue: number;
  netContribution: number;
  netGain: number;
  netGainPercent: number;
  xirr: number;
  benchmark: {
    name: string;
    since_inception_return_percent: number;
    one_year_return_percent: number;
    three_year_return_percent: number;
  };
}

export const TopSummary = ({
  currentValue,
  netContribution,
  netGain,
  netGainPercent,
  xirr,
  benchmark
}: TopSummaryProps) => {
  const formatCurrency = (value: number) => {
    return `₹${(value / 10000000).toFixed(2)}Cr`;
  };

  const summaryCards = [
    {
      title: "Portfolio Value",
      value: formatCurrency(currentValue),
      icon: Wallet,
      iconColor: "text-blue-600",
      borderColor: "border-l-blue-600"
    },
    {
      title: "Net Contribution",
      value: formatCurrency(netContribution),
      icon: TrendingUp,
      iconColor: "text-purple-600",
      borderColor: "border-l-purple-600"
    },
    {
      title: "Net Gain",
      value: formatCurrency(netGain),
      subtitle: `${netGainPercent.toFixed(2)}%`,
      icon: netGain >= 0 ? TrendingUp : TrendingDown,
      iconColor: netGain >= 0 ? "text-green-600" : "text-red-600",
      borderColor: netGain >= 0 ? "border-l-green-600" : "border-l-red-600",
      subtitleColor: netGain >= 0 ? "text-green-600" : "text-red-600"
    },
    {
      title: "XIRR",
      value: `${xirr}%`,
      icon: Target,
      iconColor: "text-orange-600",
      borderColor: "border-l-orange-600"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card, index) => (
          <Card 
            key={index} 
            className={`border-l-4 ${card.borderColor} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{card.title}</p>
                  <h3 className="text-2xl font-bold mt-2 text-kotak-blue">{card.value}</h3>
                  {card.subtitle && (
                    <p className={`text-sm font-semibold mt-1 ${card.subtitleColor}`}>
                      {card.subtitle}
                    </p>
                  )}
                </div>
                <card.icon className={`h-8 w-8 ${card.iconColor}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div>
              <span className="text-muted-foreground">Benchmark: </span>
              <span className="font-semibold">{benchmark.name}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Since Inception: </span>
              <span className="font-semibold text-kotak-blue">{benchmark.since_inception_return_percent}%</span>
            </div>
            <div>
              <span className="text-muted-foreground">1Y: </span>
              <span className="font-semibold text-kotak-blue">{benchmark.one_year_return_percent}%</span>
            </div>
            <div>
              <span className="text-muted-foreground">3Y: </span>
              <span className="font-semibold text-kotak-blue">{benchmark.three_year_return_percent}%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
