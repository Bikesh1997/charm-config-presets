import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownLeft, ArrowUpRight, RefreshCw } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const transactions = [
  {
    type: "credit",
    description: "SIP Investment - ERS",
    date: "24 Nov 2025, 10:30 AM",
    amount: "₹2,00,000",
  },
  {
    type: "credit",
    description: "Dividend Received",
    date: "20 Nov 2025, 02:15 PM",
    amount: "₹45,230",
  },
  {
    type: "debit",
    description: "Management Fee - Q4",
    date: "15 Nov 2025, 09:00 AM",
    amount: "₹18,500",
  },
  {
    type: "rebalance",
    description: "Portfolio Rebalancing",
    date: "10 Nov 2025, 11:45 AM",
    amount: "₹5,00,000",
  },
  {
    type: "credit",
    description: "SIP Investment - DDD+",
    date: "05 Nov 2025, 10:30 AM",
    amount: "₹1,50,000",
  },
  {
    type: "credit",
    description: "Capital Gains Distribution",
    date: "01 Nov 2025, 03:20 PM",
    amount: "₹82,150",
  },
  {
    type: "debit",
    description: "Partial Withdrawal",
    date: "28 Oct 2025, 01:10 PM",
    amount: "₹3,00,000",
  },
  {
    type: "credit",
    description: "Additional Investment",
    date: "25 Oct 2025, 04:00 PM",
    amount: "₹10,00,000",
  },
];

export const RecentActivity = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "credit":
        return <ArrowDownLeft className="h-4 w-4 text-kotak-success" />;
      case "debit":
        return <ArrowUpRight className="h-4 w-4 text-destructive" />;
      case "rebalance":
        return <RefreshCw className="h-4 w-4 text-kotak-navy" />;
      default:
        return null;
    }
  };

  const getAmountColor = (type: string) => {
    switch (type) {
      case "credit":
        return "text-kotak-success";
      case "debit":
        return "text-destructive";
      case "rebalance":
        return "text-kotak-navy";
      default:
        return "text-foreground";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="flex items-start justify-between pb-4 border-b last:border-0"
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    {getIcon(transaction.type)}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {transaction.date}
                    </p>
                  </div>
                </div>
                <p className={`font-semibold ${getAmountColor(transaction.type)}`}>
                  {transaction.type === "debit" ? "-" : ""}
                  {transaction.amount}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Button
          variant="outline"
          className="w-full mt-4 border-kotak-red text-kotak-red hover:bg-kotak-red/10"
        >
          View All Transactions
        </Button>
      </CardContent>
    </Card>
  );
};
