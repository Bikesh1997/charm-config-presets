import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpDown } from "lucide-react";

interface Holding {
  stock: string;
  sector: string;
  quantity: number;
  avg_buy_price: number;
  current_price: number;
  value: number;
  gain_loss_percent: number;
  weight_percent: number;
}

interface HoldingsTableProps {
  holdings: Holding[];
}

type SortKey = keyof Holding;

export const HoldingsTable = ({ holdings }: HoldingsTableProps) => {
  const [sortKey, setSortKey] = useState<SortKey>("value");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const formatCurrency = (value: number) => {
    return `₹${value.toLocaleString("en-IN")}`;
  };

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("desc");
    }
  };

  const sortedHoldings = [...holdings].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    const multiplier = sortOrder === "asc" ? 1 : -1;
    return aVal > bVal ? multiplier : -multiplier;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Holdings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer" onClick={() => handleSort("stock")}>
                  <div className="flex items-center gap-1">
                    Stock <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("sector")}>
                  <div className="flex items-center gap-1">
                    Sector <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="text-right cursor-pointer" onClick={() => handleSort("quantity")}>
                  <div className="flex items-center justify-end gap-1">
                    Quantity <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="text-right cursor-pointer" onClick={() => handleSort("avg_buy_price")}>
                  <div className="flex items-center justify-end gap-1">
                    Avg Buy <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="text-right cursor-pointer" onClick={() => handleSort("current_price")}>
                  <div className="flex items-center justify-end gap-1">
                    Current <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="text-right cursor-pointer" onClick={() => handleSort("value")}>
                  <div className="flex items-center justify-end gap-1">
                    Value <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="text-right cursor-pointer" onClick={() => handleSort("gain_loss_percent")}>
                  <div className="flex items-center justify-end gap-1">
                    Gain/Loss % <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="text-right cursor-pointer" onClick={() => handleSort("weight_percent")}>
                  <div className="flex items-center justify-end gap-1">
                    Weight % <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedHoldings.map((holding, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{holding.stock}</TableCell>
                  <TableCell>{holding.sector}</TableCell>
                  <TableCell className="text-right">{holding.quantity || "-"}</TableCell>
                  <TableCell className="text-right">
                    {holding.avg_buy_price > 0 ? formatCurrency(holding.avg_buy_price) : "-"}
                  </TableCell>
                  <TableCell className="text-right">
                    {holding.current_price > 0 ? formatCurrency(holding.current_price) : "-"}
                  </TableCell>
                  <TableCell className="text-right font-semibold">{formatCurrency(holding.value)}</TableCell>
                  <TableCell className={`text-right font-semibold ${
                    holding.gain_loss_percent > 0 ? "text-green-600" : 
                    holding.gain_loss_percent < 0 ? "text-red-600" : ""
                  }`}>
                    {holding.gain_loss_percent > 0 ? "+" : ""}{holding.gain_loss_percent.toFixed(2)}%
                  </TableCell>
                  <TableCell className="text-right">{holding.weight_percent.toFixed(2)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
