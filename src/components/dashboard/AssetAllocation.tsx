import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis } from "recharts";

interface AssetAllocationProps {
  byAssetClass: Array<{ label: string; percent: number }>;
  byMarketCap: Array<{ label: string; percent: number }>;
  bySector: Array<{ sector: string; percent: number }>;
}

const COLORS = {
  assetClass: ["hsl(var(--kotak-navy))", "hsl(var(--kotak-red))"],
  marketCap: ["hsl(var(--kotak-navy))", "hsl(var(--kotak-red))", "hsl(var(--kotak-success))"],
  sector: [
    "hsl(var(--kotak-navy))",      // Dark navy blue
    "hsl(var(--kotak-red))",        // Kotak red
    "hsl(var(--kotak-success))",    // Success green
    "hsl(200, 85%, 45%)",           // Teal blue
    "hsl(28, 90%, 55%)",            // Orange
    "hsl(265, 75%, 60%)"            // Purple
  ]
};

export const AssetAllocation = ({ byAssetClass, byMarketCap, bySector }: AssetAllocationProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Asset Class Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={byAssetClass}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ label, percent }) => `${label}: ${percent}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="percent"
              >
                {byAssetClass.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS.assetClass[index % COLORS.assetClass.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Market Cap Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={byMarketCap}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ label, percent }) => `${label}: ${percent}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="percent"
              >
                {byMarketCap.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS.marketCap[index % COLORS.marketCap.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">Sector Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bySector} layout="vertical">
              <XAxis type="number" unit="%" />
              <YAxis dataKey="sector" type="category" width={100} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="percent" fill="hsl(var(--kotak-navy))">
                {bySector.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS.sector[index % COLORS.sector.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
