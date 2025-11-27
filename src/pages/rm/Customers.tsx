import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Filter, Download, Eye, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const customers = [
    {
      id: 1,
      name: "Rajesh Sharma",
      aum: "₹45 Cr",
      strategy: "Large Cap",
      returns: "+18.5%",
      risk: "Medium",
      status: "Active",
      lastContact: "2 days ago",
    },
    {
      id: 2,
      name: "Priya Patel",
      aum: "₹38 Cr",
      strategy: "Multi Cap",
      returns: "+22.1%",
      risk: "High",
      status: "Active",
      lastContact: "1 week ago",
    },
    {
      id: 3,
      name: "Amit Verma",
      aum: "₹32 Cr",
      strategy: "Debt",
      returns: "+15.8%",
      risk: "Low",
      status: "Active",
      lastContact: "3 days ago",
    },
    {
      id: 4,
      name: "Sunita Reddy",
      aum: "₹28 Cr",
      strategy: "Balanced",
      returns: "+19.3%",
      risk: "Medium",
      status: "Active",
      lastContact: "5 days ago",
    },
    {
      id: 5,
      name: "Vikram Singh",
      aum: "₹25 Cr",
      strategy: "Large Cap",
      returns: "+16.7%",
      risk: "Medium",
      status: "Active",
      lastContact: "1 day ago",
    },
    {
      id: 6,
      name: "Neha Gupta",
      aum: "₹22 Cr",
      strategy: "Multi Cap",
      returns: "+20.4%",
      risk: "High",
      status: "KYC Pending",
      lastContact: "2 weeks ago",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-kotak-navy flex items-center gap-2">
            Customer 360° Management
          </h1>
          <p className="text-muted-foreground">
            Manage all PMS customers and their portfolios
          </p>
        </div>
        <Button className="bg-kotak-red hover:bg-kotak-red/90">
          + Add New Customer
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-2 border-l-kotak-navy">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-kotak-navy">284</p>
          </CardContent>
        </Card>
        <Card className="border-l-2 border-l-green-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Portfolios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">243</p>
          </CardContent>
        </Card>
        <Card className="border-l-2 border-l-orange-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              KYC Pending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-orange-600">8</p>
          </CardContent>
        </Card>
        <Card className="border-l-2 border-l-blue-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Onboarding
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters & Search */}
      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, PAN, or account..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="AUM Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="0-10">₹0-10 Cr</SelectItem>
                <SelectItem value="10-25">₹10-25 Cr</SelectItem>
                <SelectItem value="25-50">₹25-50 Cr</SelectItem>
                <SelectItem value="50+">₹50 Cr+</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Strategy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Strategies</SelectItem>
                <SelectItem value="large-cap">Large Cap</SelectItem>
                <SelectItem value="multi-cap">Multi Cap</SelectItem>
                <SelectItem value="debt">Debt</SelectItem>
                <SelectItem value="balanced">Balanced</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Risk Profile" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="low">Low Risk</SelectItem>
                <SelectItem value="medium">Medium Risk</SelectItem>
                <SelectItem value="high">High Risk</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>

          {/* Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer Name</TableHead>
                  <TableHead>AUM</TableHead>
                  <TableHead>Strategy</TableHead>
                  <TableHead>Returns</TableHead>
                  <TableHead>Risk Profile</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Contact</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow
                    key={customer.id}
                    className="cursor-pointer hover:bg-muted/50"
                  >
                    <TableCell className="font-medium">
                      {customer.name}
                    </TableCell>
                    <TableCell className="font-bold text-kotak-navy">
                      {customer.aum}
                    </TableCell>
                    <TableCell>{customer.strategy}</TableCell>
                    <TableCell className="text-green-600 font-medium">
                      {customer.returns}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{customer.risk}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          customer.status === "Active" ? "default" : "secondary"
                        }
                      >
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {customer.lastContact}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() =>
                          navigate(`/rm-portal/customers/${customer.id}`)
                        }
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Customers;
