import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Transaction {
  date: string;
  type: string;
  amount: number;
}

interface TransactionsSectionProps {
  transactions: Transaction[];
}

export const TransactionsSection = ({ transactions }: TransactionsSectionProps) => {
  const formatCurrency = (value: number) => {
    return `₹${value.toLocaleString("en-IN")}`;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  };

  const sortedTransactions = [...transactions].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "contribution":
        return "bg-green-100 text-green-800";
      case "withdrawal":
        return "bg-red-100 text-red-800";
      case "fee":
        return "bg-orange-100 text-orange-800";
      case "dividend":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedTransactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{formatDate(transaction.date)}</TableCell>
                <TableCell>
                  <Badge className={getTypeColor(transaction.type)} variant="secondary">
                    {transaction.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-semibold">
                  {formatCurrency(transaction.amount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
