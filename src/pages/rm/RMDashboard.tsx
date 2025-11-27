import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  Users,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  IndianRupee,
  PieChart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RMDashboard = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: "",
    description: "",
  });
  const aumData = [
    {
      strategy: "Large Cap",
      aum: "₹1,250 Cr",
      change: "+12.3%",
      color: "text-green-600",
    },
    {
      strategy: "Multi Cap",
      aum: "₹980 Cr",
      change: "+8.5%",
      color: "text-green-600",
    },
    {
      strategy: "Debt",
      aum: "₹670 Cr",
      change: "+5.2%",
      color: "text-green-600",
    },
    {
      strategy: "Balanced",
      aum: "₹450 Cr",
      change: "+6.8%",
      color: "text-green-600",
    },
  ];

  const alerts = [
    {
      id: 1,
      type: "KYC Expiring",
      customer: "Rajesh Sharma",
      priority: "High",
      status: "pending",
    },
    {
      id: 2,
      type: "Mandate Renewal",
      customer: "Priya Patel",
      priority: "Medium",
      status: "pending",
    },
    {
      id: 3,
      type: "SIP Failed",
      customer: "Amit Verma",
      priority: "High",
      status: "action",
    },
    {
      id: 4,
      type: "Document Missing",
      customer: "Sunita Reddy",
      priority: "Low",
      status: "pending",
    },
  ];

  const topCustomers = [
    { name: "Rajesh Sharma", aum: "₹45 Cr", returns: "+18.5%", risk: "Medium" },
    { name: "Priya Patel", aum: "₹38 Cr", returns: "+22.1%", risk: "High" },
    { name: "Amit Verma", aum: "₹32 Cr", returns: "+15.8%", risk: "Low" },
    { name: "Sunita Reddy", aum: "₹28 Cr", returns: "+19.3%", risk: "Medium" },
  ];

  const handleViewAll = (section: string) => {
    setDialogContent({
      title: `View All ${section}`,
      description: `This will navigate to the ${section} page with complete details.`,
    });
    setDialogOpen(true);
  };

  const handleAlertAction = (action: string, customer: string) => {
    setDialogContent({
      title: `${action} Alert`,
      description: `Processing ${action.toLowerCase()} action for ${customer}.`,
    });
    setDialogOpen(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-kotak-navy">RM Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Welcome back! Here's your portfolio overview
        </p>
      </div>

      {/* AUM Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-kotak-red">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total AUM
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-kotak-navy">3,350 Cr</p>
                <p className="text-sm text-green-600 mt-1">+9.8% YTD</p>
              </div>
              <IndianRupee className="h-8 w-8 text-kotak-red" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-kotak-navy">284</p>
                <p className="text-sm text-muted-foreground mt-1">
                  12 new this month
                </p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active SIPs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-kotak-navy">156</p>
                <p className="text-sm text-muted-foreground mt-1">
                  ₹45 Cr monthly
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-violet-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-kotak-navy">23</p>
                <p className="text-sm text-orange-600 mt-1">
                  Requires attention
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer Funnel & AUM by Strategy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-kotak-red" />
              AUM by Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aumData.map((item) => (
                <div
                  key={item.strategy}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-kotak-red" />
                    <span className="font-medium">{item.strategy}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-kotak-navy">{item.aum}</p>
                    <p className={`text-sm ${item.color}`}>{item.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-kotak-red" />
              Customer Funnel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Onboarding in Progress
                </span>
                <Badge variant="secondary">12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">KYC Pending</span>
                <Badge variant="secondary">8</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Mandate Pending</span>
                <Badge variant="secondary">15</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Fund Transfer Pending
                </span>
                <Badge variant="secondary">6</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Portfolio Live</span>
                <Badge className="bg-green-600">243</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts & Top Customers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-kotak-red" />
                Tasks & Alerts
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleViewAll("Alerts")}
              >
                View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alerts.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell className="font-medium">{alert.type}</TableCell>
                    <TableCell>{alert.customer}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          alert.priority === "High"
                            ? "destructive"
                            : alert.priority === "Medium"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {alert.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() =>
                          handleAlertAction(
                            alert.status === "action" ? "Resolve" : "View",
                            alert.customer
                          )
                        }
                      >
                        {alert.status === "action" ? "Resolve" : "View"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-kotak-red" />
                Top Customers by AUM
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleViewAll("Customers")}
              >
                View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>AUM</TableHead>
                  <TableHead>Returns</TableHead>
                  <TableHead>Risk</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topCustomers.map((customer, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">
                      {customer.name}
                    </TableCell>
                    <TableCell className="font-bold text-kotak-navy">
                      {customer.aum}
                    </TableCell>
                    <TableCell className="text-green-600">
                      {customer.returns}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{customer.risk}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Dialog for button actions */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogContent.title}</DialogTitle>
            <DialogDescription>{dialogContent.description}</DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setDialogOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RMDashboard;
