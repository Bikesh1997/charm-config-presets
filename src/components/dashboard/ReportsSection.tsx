import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Report {
  name: string;
  file: string;
}

interface ReportsSectionProps {
  reports: Report[];
}

export const ReportsSection = ({ reports }: ReportsSectionProps) => {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedReport, setSelectedReport] = useState("");

  const handleDownload = (reportName: string) => {
    setSelectedReport(reportName);
    setShowDialog(true);
    
    // Simulate download after delay
    setTimeout(() => {
      setShowDialog(false);
    }, 2000);
  };

  return (
    <>
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
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleDownload(report.name)}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-kotak-success" />
              Download Started
            </DialogTitle>
            <DialogDescription className="pt-4">
              <p className="text-base">
                Your report <span className="font-semibold text-foreground">{selectedReport}</span> is being downloaded.
              </p>
              <p className="text-sm mt-2">
                The file will be saved to your downloads folder.
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
