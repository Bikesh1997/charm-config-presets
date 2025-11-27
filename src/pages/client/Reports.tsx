import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  PieChart,
  BarChart3,
  Receipt,
} from "lucide-react";

const Reports = () => {
  const reports = [
    {
      category: "Portfolio Statements",
      icon: PieChart,
      reports: [
        {
          name: "Monthly Portfolio Statement - January 2024",
          date: "01 Feb 2024",
          size: "2.4 MB",
        },
        {
          name: "Monthly Portfolio Statement - December 2023",
          date: "01 Jan 2024",
          size: "2.3 MB",
        },
        {
          name: "Quarterly Portfolio Statement - Q4 2023",
          date: "05 Jan 2024",
          size: "3.8 MB",
        },
      ],
    },
    {
      category: "Transaction Statements",
      icon: Receipt,
      reports: [
        {
          name: "Transaction Statement - January 2024",
          date: "01 Feb 2024",
          size: "1.2 MB",
        },
        {
          name: "Transaction Statement - December 2023",
          date: "01 Jan 2024",
          size: "1.1 MB",
        },
        {
          name: "Annual Transaction Statement 2023",
          date: "10 Jan 2024",
          size: "5.6 MB",
        },
      ],
    },
    {
      category: "Performance Reports",
      icon: TrendingUp,
      reports: [
        {
          name: "Annual Performance Report 2023",
          date: "15 Jan 2024",
          size: "4.2 MB",
        },
        {
          name: "Quarterly Performance Report - Q4 2023",
          date: "08 Jan 2024",
          size: "2.8 MB",
        },
        {
          name: "Half Yearly Performance Report - H2 2023",
          date: "05 Jan 2024",
          size: "3.5 MB",
        },
      ],
    },
    {
      category: "Tax Documents",
      icon: FileText,
      reports: [
        {
          name: "Capital Gains Statement - FY 2023-24",
          date: "31 Jan 2024",
          size: "1.8 MB",
        },
        {
          name: "Tax Loss Harvesting Report 2023",
          date: "28 Dec 2023",
          size: "890 KB",
        },
        {
          name: "Dividend Income Statement - FY 2023-24",
          date: "31 Mar 2024",
          size: "650 KB",
        },
      ],
    },
    {
      category: "Regulatory Documents",
      icon: BarChart3,
      reports: [
        {
          name: "PMS Agreement",
          date: "15 Mar 2023",
          size: "3.2 MB",
          badge: "Important",
        },
        {
          name: "Risk Disclosure Document",
          date: "15 Mar 2023",
          size: "1.5 MB",
        },
        {
          name: "Client Service Agreement",
          date: "15 Mar 2023",
          size: "2.1 MB",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-kotak-navy">
            Reports & Documents
          </h1>
          <p className="text-muted-foreground">
            Download your statements and reports
          </p>
        </div>
        <Button className="gap-2 bg-kotak-red hover:bg-kotak-red/90">
          <Calendar className="h-4 w-4" />
          Generate Custom Report
        </Button>
      </div>

      <Card className="bg-gradient-to-br from-kotak-red/10 to-kotak-navy/10 border-kotak-red/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-kotak-red" />
            Quick Download
          </CardTitle>
          <CardDescription>Most commonly accessed reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="h-auto flex-col items-start p-4 hover:border-kotak-red"
            >
              {/* <FileText className="h-6 w-6 mb-2 text-kotak-red" /> */}
              <p className="font-semibold">Latest Portfolio Statement</p>
              <p className="text-xs text-muted-foreground">January 2024</p>
            </Button>
            <Button
              variant="outline"
              className="h-auto flex-col items-start p-4 hover:border-kotak-red"
            >
              <Receipt className="h-6 w-6 mb-2 text-kotak-red" />
              <p className="font-semibold">Transaction Statement</p>
              <p className="text-xs text-muted-foreground">Last 3 months</p>
            </Button>
            <Button
              variant="outline"
              className="h-auto flex-col items-start p-4 hover:border-kotak-red"
            >
              <BarChart3 className="h-6 w-6 mb-2 text-kotak-red" />
              <p className="font-semibold">Capital Gains Report</p>
              <p className="text-xs text-muted-foreground">FY 2023-24</p>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {reports.map((category) => (
          <Card key={category.category}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <category.icon className="h-5 w-5 text-kotak-red" />
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.reports.map((report, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {/* <div className="h-12 w-12 rounded-lg bg-kotak-red/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-kotak-red" />
                      </div> */}
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{report.name}</p>
                          {report.badge && (
                            <Badge variant="outline" className="text-xs">
                              {report.badge}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{report.date}</span>
                          <span>•</span>
                          <span>{report.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-kotak-navy/20">
        <CardHeader>
          <CardTitle>Need a Custom Report?</CardTitle>
          <CardDescription>
            Request a customized report with specific date ranges and parameters
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Button className="bg-kotak-red hover:bg-kotak-red/90">
              Request Custom Report
            </Button>
            <p className="text-sm text-muted-foreground">
              Our team will generate and email the report within 24 hours
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
