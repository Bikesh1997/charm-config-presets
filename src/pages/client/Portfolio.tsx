import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, TrendingUp, TrendingDown } from "lucide-react";

const Portfolio = () => {
  const holdings = [
    { name: "Reliance Industries", quantity: 150, avgPrice: 2450, currentPrice: 2580, value: 387000, returns: 5.31, type: "Equity" },
    { name: "HDFC Bank", quantity: 200, avgPrice: 1620, currentPrice: 1650, value: 330000, returns: 1.85, type: "Equity" },
    { name: "TCS", quantity: 100, avgPrice: 3450, currentPrice: 3520, value: 352000, returns: 2.03, type: "Equity" },
    { name: "Infosys", quantity: 120, avgPrice: 1550, currentPrice: 1580, value: 189600, returns: 1.94, type: "Equity" },
    { name: "ICICI Bank", quantity: 180, avgPrice: 920, currentPrice: 950, value: 171000, returns: 3.26, type: "Equity" },
  ];

  const strategies = [
    { name: "Equity Refinement Strategy (ERS)", invested: 15000000, current: 17250000, returns: 15.0, allocation: 48 },
    { name: "Dynamic Delta Diversification (DDD+)", invested: 12000000, current: 13440000, returns: 12.0, allocation: 37 },
    { name: "Fixed Income Strategy", invested: 5000000, current: 5350000, returns: 7.0, allocation: 15 },
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
                  { sector: "Information Technology", percentage: 28, value: 8960000 },
                  { sector: "Financial Services", percentage: 25, value: 8000000 },
                  { sector: "Oil & Gas", percentage: 18, value: 5760000 },
                  { sector: "Consumer Goods", percentage: 15, value: 4800000 },
                  { sector: "Others", percentage: 14, value: 4480000 },
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
                      ₹{(sector.value / 100000).toFixed(2)} L
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
