import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeftRight, Download, Filter, Plus } from "lucide-react";

const Transactions = () => {
  const transactions = [
    { id: 1, date: "25-Jan-2025", customer: "Rajesh Sharma", type: "Buy", instrument: "Large Cap Basket", amount: "₹2,00,000", units: "1,234", status: "Executed" },
    { id: 2, date: "24-Jan-2025", customer: "Priya Patel", type: "SIP", instrument: "Multi Cap Strategy", amount: "₹5,00,000", units: "3,210", status: "Executed" },
    { id: 3, date: "23-Jan-2025", customer: "Amit Verma", type: "Switch", instrument: "Debt to Equity", amount: "₹3,00,000", units: "-", status: "Pending" },
    { id: 4, date: "22-Jan-2025", customer: "Sunita Reddy", type: "Sell", instrument: "Balanced Portfolio", amount: "₹1,50,000", units: "980", status: "Executed" },
    { id: 5, date: "21-Jan-2025", customer: "Vikram Singh", type: "Top-up", instrument: "Large Cap Basket", amount: "₹10,00,000", units: "6,543", status: "Pending Approval" },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Buy": case "SIP": case "Top-up": return "text-green-600";
      case "Sell": return "text-red-600";
      case "Switch": return "text-blue-600";
      default: return "text-foreground";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-kotak-navy flex items-center gap-2">
            <ArrowLeftRight className="h-8 w-8 text-kotak-red" />
            Transactions Management
          </h1>
          <p className="text-muted-foreground">Track and manage all portfolio transactions</p>
        </div>
        <Button className="bg-kotak-red hover:bg-kotak-red/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Transaction
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Today's Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-kotak-navy">24</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approval</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-orange-600">7</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Value (Today)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">₹8.5 Cr</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Failed/Rejected</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-600">2</p>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Transactions</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Instrument</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Units</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.date}</TableCell>
                  <TableCell>{transaction.customer}</TableCell>
                  <TableCell>
                    <span className={`font-medium ${getTypeColor(transaction.type)}`}>
                      {transaction.type}
                    </span>
                  </TableCell>
                  <TableCell>{transaction.instrument}</TableCell>
                  <TableCell className="font-bold text-kotak-navy">{transaction.amount}</TableCell>
                  <TableCell>{transaction.units}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transaction.status === "Executed"
                          ? "default"
                          : transaction.status === "Pending Approval"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
