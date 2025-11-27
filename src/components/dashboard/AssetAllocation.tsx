import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis } from "recharts";

interface AssetAllocationProps {
  byAssetClass: Array<{ label: string; percent: number }>;
  byMarketCap: Array<{ label: string; percent: number }>;
  bySector: Array<{ sector: string; percent: number }>;
}

const COLORS = {
  assetClass: ["hsl(211, 50%, 22%)", "hsl(0, 55%, 54%)", "hsl(200, 37%, 44%)", "hsl(200, 61%, 77%)", "hsl(210, 7%, 46%)"],
  marketCap: ["hsl(0, 55%, 54%)", "hsl(200, 37%, 44%)", "hsl(200, 61%, 77%)", "hsl(210, 7%, 46%)", "hsl(180, 37%, 48%)"],
  sector: [
    "hsl(45, 85%, 65%)",            // Light yellow
    "hsl(340, 75%, 68%)",           // Light coral red
    "hsl(160, 65%, 55%)",           // Light teal green
    "hsl(170, 75%, 60%)",           // Mint green
    "hsl(35, 85%, 65%)",            // Light orange
    "hsl(270, 70%, 70%)"            // Light purple
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
              <defs>
                {COLORS.assetClass.map((color, index) => (
                  <radialGradient key={`gradient-asset-${index}`} id={`gradient-asset-${index}`}>
                    <stop offset="0%" stopColor={color} stopOpacity={1} />
                    <stop offset="100%" stopColor={color} stopOpacity={0.7} />
                  </radialGradient>
                ))}
              </defs>
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
                  <Cell key={`cell-${index}`} fill={`url(#gradient-asset-${index})`} stroke={COLORS.assetClass[index % COLORS.assetClass.length]} strokeWidth={1} />
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
              <defs>
                {COLORS.marketCap.map((color, index) => (
                  <radialGradient key={`gradient-market-${index}`} id={`gradient-market-${index}`}>
                    <stop offset="0%" stopColor={color} stopOpacity={1} />
                    <stop offset="100%" stopColor={color} stopOpacity={0.7} />
                  </radialGradient>
                ))}
              </defs>
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
                  <Cell key={`cell-${index}`} fill={`url(#gradient-market-${index})`} stroke={COLORS.marketCap[index % COLORS.marketCap.length]} strokeWidth={1} />
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
              <Bar dataKey="percent" fill="hsl(45, 85%, 65%)">
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
