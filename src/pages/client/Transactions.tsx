import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Search, Filter, ArrowUpCircle, ArrowDownCircle, RefreshCw } from "lucide-react";

const Transactions = () => {
  const transactions = [
    { id: "TXN001", date: "2024-01-15", type: "SIP Investment", strategy: "ERS", amount: 200000, status: "Completed", mode: "Debit" },
    { id: "TXN002", date: "2024-01-15", type: "SIP Investment", strategy: "DDD+", amount: 150000, status: "Completed", mode: "Debit" },
    { id: "TXN003", date: "2024-01-10", type: "Dividend Received", strategy: "ERS", amount: 45000, status: "Completed", mode: "Credit" },
    { id: "TXN004", date: "2024-01-05", type: "One-time Investment", strategy: "Fixed Income", amount: 500000, status: "Completed", mode: "Debit" },
    { id: "TXN005", date: "2023-12-28", type: "Portfolio Rebalancing", strategy: "ERS", amount: 0, status: "Completed", mode: "Rebalance" },
    { id: "TXN006", date: "2023-12-15", type: "SIP Investment", strategy: "ERS", amount: 200000, status: "Completed", mode: "Debit" },
    { id: "TXN007", date: "2023-12-15", type: "SIP Investment", strategy: "DDD+", amount: 150000, status: "Completed", mode: "Debit" },
    { id: "TXN008", date: "2023-12-10", type: "Withdrawal", strategy: "Fixed Income", amount: 100000, status: "Completed", mode: "Credit" },
  ];

  const getTransactionIcon = (mode: string) => {
    switch (mode) {
      case "Credit":
        return <ArrowUpCircle className="h-5 w-5 text-kotak-success" />;
      case "Debit":
        return <ArrowDownCircle className="h-5 w-5 text-destructive" />;
      default:
        return <RefreshCw className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-kotak-navy">Transaction History</h1>
          <p className="text-muted-foreground">View all your investment transactions</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export Transactions
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Transactions</CardTitle>
              <CardDescription>Complete history of your portfolio transactions</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search transactions..."
                  className="pl-9 w-64"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="sip">SIP Investment</SelectItem>
                  <SelectItem value="onetime">One-time</SelectItem>
                  <SelectItem value="dividend">Dividend</SelectItem>
                  <SelectItem value="withdrawal">Withdrawal</SelectItem>
                  <SelectItem value="rebalance">Rebalancing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Strategy</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Mode</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.id}</TableCell>
                  <TableCell>{new Date(transaction.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{transaction.strategy}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {transaction.amount > 0 ? (
                      <span className={transaction.mode === "Credit" ? "text-kotak-success" : ""}>
                        {transaction.mode === "Credit" ? "+" : "-"}₹{transaction.amount.toLocaleString('en-IN')}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">N/A</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-kotak-success/10 text-kotak-success border-kotak-success/20">
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getTransactionIcon(transaction.mode)}
                      <span className="text-sm">{transaction.mode}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Total Invested</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₹3.20 Cr</p>
            <p className="text-sm text-muted-foreground">Lifetime deposits</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Total Withdrawn</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₹10.00 L</p>
            <p className="text-sm text-muted-foreground">Lifetime withdrawals</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Dividends Received</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-kotak-success">₹1.35 L</p>
            <p className="text-sm text-muted-foreground">Total dividend income</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Transactions;
