import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const documents = [
  {
    name: "Portfolio Statement",
    description: "November 2025",
    icon: FileText,
  },
  {
    name: "Transaction Statement",
    description: "Last 6 months",
    icon: FileText,
  },
  {
    name: "Capital Gains Statement",
    description: "FY 2024-25",
    icon: FileText,
  },
  {
    name: "Annual Performance Report",
    description: "2024",
    icon: FileText,
  },
  {
    name: "Contract Notes",
    description: "All transactions",
    icon: FileText,
  },
  {
    name: "PMS Agreement",
    description: "Signed copy",
    icon: FileText,
  },
];

export const DocumentsReports = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Your Documents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kotak-red/10 flex items-center justify-center">
                  <doc.icon className="h-5 w-5 text-kotak-red" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm truncate">{doc.name}</h4>
                  <p className="text-xs text-muted-foreground">{doc.description}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-kotak-red text-kotak-red hover:bg-kotak-red/10"
              >
                <Download className="h-3 w-3 mr-2" />
                Download PDF
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
