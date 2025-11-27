import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, TrendingUp, TrendingDown } from "lucide-react";

const Portfolio = () => {
  const holdings = [
    { name: "HDFC Bank", quantity: 1284, avgPrice: 1445, currentPrice: 1660, value: 2131440, returns: 14.9, type: "Equity" },
    { name: "ICICI Bank", quantity: 1051, avgPrice: 960, currentPrice: 1125, value: 1182375, returns: 17.2, type: "Equity" },
    { name: "Infosys", quantity: 875, avgPrice: 1390, currentPrice: 1675, value: 1465625, returns: 20.5, type: "Equity" },
    { name: "TCS", quantity: 467, avgPrice: 3320, currentPrice: 3825, value: 1786275, returns: 15.2, type: "Equity" },
    { name: "Dr. Reddy's", quantity: 292, avgPrice: 5150, currentPrice: 6070, value: 1772440, returns: 17.9, type: "Equity" },
    { name: "Aurobindo Pharma", quantity: 817, avgPrice: 930, currentPrice: 1025, value: 837425, returns: 10.2, type: "Equity" },
    { name: "Maruti Suzuki", quantity: 175, avgPrice: 9300, currentPrice: 11150, value: 1951250, returns: 19.9, type: "Equity" },
    { name: "Eicher Motors", quantity: 233, avgPrice: 3250, currentPrice: 3940, value: 918020, returns: 21.3, type: "Equity" },
    { name: "Asian Paints", quantity: 408, avgPrice: 2850, currentPrice: 3290, value: 1342320, returns: 15.4, type: "Equity" },
    { name: "Avenue Supermarts (DMart)", quantity: 175, avgPrice: 3510, currentPrice: 4050, value: 708750, returns: 15.4, type: "Equity" },
  ];

  const strategies = [
    { name: "Equity Refinement Strategy (ERS)", invested: 6260000, current: 7200000, returns: 15, allocation: 48 },
    { name: "Dynamic Delta Diversification (DDD+)", invested: 4955000, current: 5550000, returns: 12, allocation: 37 },
    { name: "Fixed Income Strategy", invested: 2103000, current: 2250000, returns: 7, allocation: 15 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-kotak-navy">Portfolio Holdings</h1>
          <p className="text-muted-foreground">Detailed view of your investments</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export Holdings
        </Button>
      </div>

      <Tabs defaultValue="strategies" className="space-y-6">
        <TabsList>
          <TabsTrigger value="strategies">By Strategy</TabsTrigger>
          <TabsTrigger value="holdings">Individual Holdings</TabsTrigger>
          <TabsTrigger value="sector">Sector Allocation</TabsTrigger>
        </TabsList>

        <TabsContent value="strategies" className="space-y-4">
          <div className="grid gap-4">
            {strategies.map((strategy) => (
              <Card key={strategy.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{strategy.name}</CardTitle>
                      <CardDescription>
                        {strategy.allocation}% of total portfolio
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-kotak-success">
                      {strategy.returns > 0 ? '+' : ''}{strategy.returns}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Invested</p>
                      <p className="text-xl font-bold">₹{(strategy.invested / 10000000).toFixed(2)} Cr</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Current Value</p>
                      <p className="text-xl font-bold">₹{(strategy.current / 10000000).toFixed(2)} Cr</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Gains</p>
                      <p className="text-xl font-bold text-kotak-success">
                        ₹{((strategy.current - strategy.invested) / 100000).toFixed(2)} L
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="holdings">
          <Card>
            <CardHeader>
              <CardTitle>Individual Stock Holdings</CardTitle>
              <CardDescription>Your current equity positions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Stock Name</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead className="text-right">Avg Price</TableHead>
                    <TableHead className="text-right">Current Price</TableHead>
                    <TableHead className="text-right">Value</TableHead>
                    <TableHead className="text-right">Returns</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {holdings.map((holding) => (
                    <TableRow key={holding.name}>
                      <TableCell className="font-medium">{holding.name}</TableCell>
                      <TableCell className="text-right">{holding.quantity}</TableCell>
                      <TableCell className="text-right">₹{holding.avgPrice.toLocaleString('en-IN')}</TableCell>
                      <TableCell className="text-right">₹{holding.currentPrice.toLocaleString('en-IN')}</TableCell>
                      <TableCell className="text-right">₹{holding.value.toLocaleString('en-IN')}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          {holding.returns > 0 ? (
                            <TrendingUp className="h-4 w-4 text-kotak-success" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-destructive" />
                          )}
                          <span className={holding.returns > 0 ? "text-kotak-success" : "text-destructive"}>
                            {holding.returns > 0 ? '+' : ''}{holding.returns}%
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sector">
          <Card>
            <CardHeader>
              <CardTitle>Sector Allocation</CardTitle>
              <CardDescription>Distribution across market sectors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { sector: "Financials", percentage: 32, value: 4800000 },
                  { sector: "IT", percentage: 18, value: 2700000 },
                  { sector: "Automobile", percentage: 14, value: 2100000 },
                  { sector: "Pharma", percentage: 12, value: 1800000 },
                  { sector: "Consumer", percentage: 10, value: 1500000 },
                  { sector: "Others", percentage: 14, value: 2100000 },
                ].map((sector) => (
                  <div key={sector.sector} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{sector.sector}</span>
                      <span className="text-muted-foreground">{sector.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-kotak-red"
                        style={{ width: `${sector.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      ₹{(sector.value / 10000000).toFixed(2)} Cr
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Portfolio;
