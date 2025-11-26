import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const allocationData = [
  { name: "ERS", value: 45, color: "hsl(var(--kotak-red))" },
  { name: "DDD+", value: 35, color: "hsl(var(--kotak-navy))" },
  { name: "Fixed Income", value: 20, color: "hsl(var(--kotak-success))" },
];

const strategies = [
  {
    name: "Equity Revival Strategy",
    badge: "EQUITY",
    invested: "₹1.12 Cr",
    currentValue: "₹1.48 Cr",
    returns: "+32.14%",
    returnsAmount: "₹36.00 L",
    performance: "+5.2% vs Nifty",
    isPositive: true,
  },
  {
    name: "DDD+ Strategy",
    badge: "HYBRID",
    invested: "₹87.50 L",
    currentValue: "₹1.05 Cr",
    returns: "+20.00%",
    returnsAmount: "₹17.50 L",
    performance: "+8.1% vs Benchmark",
    isPositive: true,
  },
  {
    name: "Fixed Income Strategy",
    badge: "DEBT",
    invested: "₹50.00 L",
    currentValue: "₹59.00 L",
    returns: "+18.00%",
    returnsAmount: "₹9.00 L",
    performance: "+6.5% vs G-Sec",
    isPositive: true,
  },
];

export const StrategyAllocation = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Strategy Allocation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Pie Chart */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={allocationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {allocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <Button variant="outline" className="w-full border-kotak-red text-kotak-red hover:bg-kotak-red/10">
          View Detailed Holdings
        </Button>

        {/* Strategies Table */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Your Active Strategies</h3>
          <div className="space-y-3">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{strategy.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {strategy.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Invested: {strategy.invested}
                    </p>
                  </div>
                  <Button variant="link" size="sm" className="text-kotak-red">
                    View Details
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Current Value</p>
                    <p className="font-semibold">{strategy.currentValue}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Returns</p>
                    <div className="flex items-center gap-1">
                      {strategy.isPositive ? (
                        <ArrowUpRight className="h-4 w-4 text-kotak-success" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-destructive" />
                      )}
                      <span className="font-semibold text-kotak-success">
                        {strategy.returns}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {strategy.returnsAmount}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Performance</p>
                    <p className="font-semibold text-kotak-success">
                      {strategy.performance}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
