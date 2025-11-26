import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface PerformanceValue {
  date: string;
  value: number;
}

interface PerformanceChartProps {
  portfolioValues: PerformanceValue[];
  benchmarkValues: PerformanceValue[];
}

export const PerformanceChart = ({ portfolioValues, benchmarkValues }: PerformanceChartProps) => {
  const [period, setPeriod] = useState("since_inception");

  const formatCurrency = (value: number) => {
    return `₹${(value / 100000).toFixed(1)}L`;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", { month: "short", year: "numeric" });
  };

  const chartData = portfolioValues.map((pv, index) => ({
    date: formatDate(pv.date),
    portfolio: pv.value,
    benchmark: benchmarkValues[index]?.value || 0
  }));

  const periods = [
    { label: "Since Inception", value: "since_inception" },
    { label: "3Y", value: "3y" },
    { label: "1Y", value: "1y" },
    { label: "6M", value: "6m" }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle>Performance Over Time</CardTitle>
          <div className="flex gap-2">
            {periods.map((p) => (
              <Button
                key={p.value}
                variant={period === p.value ? "default" : "outline"}
                size="sm"
                onClick={() => setPeriod(p.value)}
              >
                {p.label}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickFormatter={formatCurrency} />
            <Tooltip 
              formatter={(value: number) => formatCurrency(value)}
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
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
              dataKey="benchmark" 
              stroke="hsl(var(--kotak-blue))" 
              strokeWidth={2}
              name="Benchmark"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
