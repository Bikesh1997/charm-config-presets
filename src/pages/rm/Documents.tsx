import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FolderOpen,
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  Download,
} from "lucide-react";

const Documents = () => {
  const documentTypes = [
    { type: "PAN", required: true, completed: 245, pending: 8 },
    { type: "Aadhaar", required: true, completed: 238, pending: 15 },
    { type: "KYC Form", required: true, completed: 241, pending: 12 },
    { type: "PMS Agreement", required: true, completed: 250, pending: 3 },
    { type: "Risk Profiling", required: true, completed: 235, pending: 18 },
    { type: "FATCA", required: true, completed: 248, pending: 5 },
    { type: "Bank Proof", required: true, completed: 243, pending: 10 },
    {
      type: "POA (Power of Attorney)",
      required: false,
      completed: 156,
      pending: 0,
    },
  ];

  const recentUploads = [
    {
      customer: "Rajesh Sharma",
      document: "PAN Card",
      date: "25-Jan-2025",
      status: "Verified",
    },
    {
      customer: "Priya Patel",
      document: "KYC Form",
      date: "24-Jan-2025",
      status: "Pending Review",
    },
    {
      customer: "Amit Verma",
      document: "Bank Proof",
      date: "23-Jan-2025",
      status: "Verified",
    },
    {
      customer: "Sunita Reddy",
      document: "FATCA",
      date: "22-Jan-2025",
      status: "Rejected",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-kotak-navy flex items-center gap-2">
            Document Management
          </h1>
          <p className="text-muted-foreground">
            Track compliance documents and KYC status
          </p>
        </div>
        <Button className="bg-kotak-red hover:bg-kotak-red/90">
          <Upload className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-2 border-l-green-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Complete Profiles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">235</p>
          </CardContent>
        </Card>
        <Card className="border-l-2 border-l-orange-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-orange-600">71</p>
          </CardContent>
        </Card>
        <Card className="border-l-2 border-l-red-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Expiring Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-600">12</p>
          </CardContent>
        </Card>
        <Card className="border-l-2 border-l-blue-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Review
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">18</p>
          </CardContent>
        </Card>
      </div>

      {/* Document Type Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Document Type Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {documentTypes.map((doc) => (
              <Card key={doc.type} className="border">
                <CardContent className="pt-3">
                  <div className="flex items-start justify-between mb-1">
                    {/* <FileText className="h-5 w-5 text-kotak-red" /> */}
                    {/* {doc.required && (
                      <Badge variant="outline" className="text-xs">
                        Required
                      </Badge>
                    )} */}
                  </div>
                  <h3 className="text-l font-bold mb-3">{doc.type}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        Completed
                      </span>
                      <span className="text-sm font-bold text-green-600">
                        {doc.completed}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <AlertCircle className="h-3 w-3 text-orange-600" />
                        Pending
                      </span>
                      <span className="text-sm font-bold text-orange-600">
                        {doc.pending}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Uploads */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Uploads</CardTitle>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentUploads.map((upload, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-kotak-red/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-kotak-red" />
                  </div>
                  <div>
                    <p className="font-medium">{upload.customer}</p>
                    <p className="text-sm text-muted-foreground">
                      {upload.document}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {upload.date}
                  </span>
                  <Badge
                    variant={
                      upload.status === "Verified"
                        ? "default"
                        : upload.status === "Rejected"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {upload.status}
                  </Badge>
                  <Button size="sm" variant="ghost">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documents;
