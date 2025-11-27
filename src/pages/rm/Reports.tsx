import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Download, FileText, TrendingUp } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      name: "Customer AUM Report",
      description: "Detailed breakdown of AUM by customer",
      frequency: "Monthly",
      lastGenerated: "25-Jan-2025",
    },
    {
      name: "Returns Performance Report",
      description: "Portfolio returns across all strategies",
      frequency: "Quarterly",
      lastGenerated: "15-Jan-2025",
    },
    {
      name: "SIP Performance Report",
      description: "Analysis of SIP execution and performance",
      frequency: "Monthly",
      lastGenerated: "25-Jan-2025",
    },
    {
      name: "Mandate Status Report",
      description: "Status of all active and pending mandates",
      frequency: "Weekly",
      lastGenerated: "22-Jan-2025",
    },
    {
      name: "Transactions Summary",
      description: "Complete transaction log with analytics",
      frequency: "Daily",
      lastGenerated: "26-Jan-2025",
    },
    {
      name: "Document Deficiency Report",
      description: "Missing or expiring documents by customer",
      frequency: "Weekly",
      lastGenerated: "22-Jan-2025",
    },
    {
      name: "Risk Profile Analysis",
      description: "Customer risk distribution and compliance",
      frequency: "Monthly",
      lastGenerated: "20-Jan-2025",
    },
    {
      name: "RM Activity Report",
      description: "Your interactions and customer touchpoints",
      frequency: "Monthly",
      lastGenerated: "25-Jan-2025",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-kotak-navy flex items-center gap-2">
            Reports & Analytics
          </h1>
          <p className="text-muted-foreground">
            Generate and download comprehensive reports
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-2 border-l-kotak-navy">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Available Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-kotak-navy">8</p>
          </CardContent>
        </Card>
        <Card className="border-l-2 border-l-green-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Generated This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">42</p>
          </CardContent>
        </Card>
        <Card className="border-l-2 border-l-blue-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Scheduled Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </CardContent>
        </Card>
        <Card className="border-l-2 border-l-purple-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Custom Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-purple-600">5</p>
          </CardContent>
        </Card>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, idx) => (
          <Card key={idx} className="hover:border-kotak-red/50 transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  {/* <div className="w-10 h-10 rounded-lg bg-kotak-red/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-kotak-red" />
                  </div> */}
                  <div>
                    <CardTitle className="text-lg">{report.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {report.description}
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Badge variant="outline">{report.frequency}</Badge>
                  <p className="text-xs text-muted-foreground">
                    Last: {report.lastGenerated}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    PDF
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Excel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Custom Report Builder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-kotak-red" />
            Custom Report Builder
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              Build custom reports with specific date ranges, customer filters,
              and metrics
            </p>
            <Button className="bg-kotak-red hover:bg-kotak-red/90">
              Create Custom Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
