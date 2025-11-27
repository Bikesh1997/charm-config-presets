import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface RiskMetricsProps {
  beta: number;
  standard_deviation: number;
  sharpe_ratio: number;
  max_drawdown_percent: number;
  top_5_holdings_concentration_percent: number;
}

export const RiskMetrics = ({
  beta,
  standard_deviation,
  sharpe_ratio,
  max_drawdown_percent,
  top_5_holdings_concentration_percent,
}: RiskMetricsProps) => {
  const metrics = [
    { label: "Beta", value: beta.toFixed(2), description: "vs Benchmark" },
    {
      label: "Standard Deviation",
      value: `${standard_deviation.toFixed(1)}%`,
      description: "Volatility",
    },
    {
      label: "Sharpe Ratio",
      value: sharpe_ratio.toFixed(2),
      description: "Risk-adjusted returns",
    },
    {
      label: "Max Drawdown",
      value: `${max_drawdown_percent.toFixed(1)}%`,
      description: "Worst decline",
    },
    {
      label: "Top 5 Concentration",
      value: `${top_5_holdings_concentration_percent.toFixed(1)}%`,
      description: "Portfolio concentration",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">Risk Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="p-4 bg-muted/50 rounded-lg border-l-4">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="text-2xl font-bold mt-1">{metric.value}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
