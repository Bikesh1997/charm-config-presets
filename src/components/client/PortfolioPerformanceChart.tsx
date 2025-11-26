import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const periods = ["6M", "1Y", "3Y", "5Y", "All"];

const generateData = (period: string) => {
  const data = [];
  const months = period === "6M" ? 6 : period === "1Y" ? 12 : period === "3Y" ? 36 : period === "5Y" ? 60 : 72;
  const basePortfolio = 25000000;
  const baseNifty = 25000000;
  
  for (let i = 0; i <= months; i++) {
    const portfolioGrowth = Math.random() * 0.15 + 1.18;
    const niftyGrowth = Math.random() * 0.1 + 1.12;
    data.push({
      month: `${i}M`,
      portfolio: Math.round(basePortfolio * Math.pow(portfolioGrowth, i / 12)),
      nifty: Math.round(baseNifty * Math.pow(niftyGrowth, i / 12)),
    });
  }
  return data;
};

export const PortfolioPerformanceChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("1Y");
  const data = generateData(selectedPeriod);

  const formatCurrency = (value: number) => {
    const crores = value / 10000000;
    return `₹${crores.toFixed(2)}Cr`;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <CardTitle className="text-xl">Portfolio Performance</CardTitle>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {periods.map((period) => (
                <Button
                  key={period}
                  variant={selectedPeriod === period ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod(period)}
                  className={selectedPeriod === period ? "bg-kotak-red hover:bg-kotak-red/90" : ""}
                >
                  {period}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis tickFormatter={formatCurrency} stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              formatter={(value: number) => formatCurrency(value)}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="portfolio"
              stroke="hsl(var(--kotak-red))"
              strokeWidth={2}
              name="Your Portfolio"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="nifty"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={2}
              name="Nifty 50"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
