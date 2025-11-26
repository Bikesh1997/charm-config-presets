import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

interface Report {
  name: string;
  file: string;
}

interface ReportsSectionProps {
  reports: Report[];
}

export const ReportsSection = ({ reports }: ReportsSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Reports & Documents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {reports.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-kotak-blue" />
                <span className="font-medium">{report.name}</span>
              </div>
              <Button variant="ghost" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
