import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  User, 
  Briefcase, 
  FileText, 
  Phone, 
  Mail,
  MapPin,
  Calendar,
  TrendingUp,
  DollarSign,
  Shield,
  Clock,
  CreditCard,
  Target,
  Users,
  Receipt,
  Activity
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CustomerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  // Mock customer data - in real app, fetch based on id
  const customer = {
    id: id || "1",
    name: "Rajesh Sharma",
    email: "rajesh.sharma@email.com",
    phone: "+91-98765-43210",
    pan: "ABCDE1234F",
    aum: "₹45 Cr",
    strategy: "Multi Cap Growth",
    riskProfile: "Medium",
    returns: "+18.5%",
    accountStatus: "Active",
    kycStatus: "Valid",
    kycExpiry: "2025-12-31",
    address: "Mumbai, Maharashtra",
    onboardingDate: "2023-01-15",
    lastContact: "2024-11-20",
    dateOfBirth: "1985-03-15",
    occupation: "Business Owner",
    annualIncome: "₹75 Lakhs - ₹1 Crore",
    investmentExperience: "5+ years",
    primaryBank: "HDFC Bank",
    accountNumber: "****6789",
    ifscCode: "HDFC0001234",
    investmentGoal: "Wealth Creation & Retirement Planning",
    investmentHorizon: "Long Term (10+ years)",
    liquidityNeeds: "Low - Less than 10%",
    nomineeName: "Priya Sharma",
    nomineeRelation: "Spouse",
    nomineeShare: "100%",
    taxStatus: "Individual",
    taxResidency: "Resident Indian",
    aadhaar: "****7890",
  };

  const handleAction = (action: string) => {
    setDialogMessage(`${action} action has been initiated for ${customer.name}`);
    setShowDialog(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/rm-portal/customers")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-kotak-navy">{customer.name}</h1>
            <p className="text-sm text-muted-foreground">Customer ID: {customer.id}</p>
          </div>
        </div>
        <Badge className="bg-green-600">
          {customer.accountStatus}
        </Badge>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">AUM</p>
                <p className="text-2xl font-bold text-kotak-navy">{customer.aum}</p>
              </div>
              <DollarSign className="h-8 w-8 text-kotak-red" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Returns</p>
                <p className="text-2xl font-bold text-green-600">{customer.returns}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Strategy</p>
                <p className="text-lg font-semibold">{customer.strategy}</p>
              </div>
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Risk Profile</p>
                <p className="text-lg font-semibold">{customer.riskProfile}</p>
              </div>
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="mandates">Mandates</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-kotak-red" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p className="font-medium">{customer.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date of Birth</p>
                <p className="font-medium">{customer.dateOfBirth}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">PAN</p>
                <p className="font-medium font-mono">{customer.pan}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Aadhaar</p>
                <p className="font-medium font-mono">{customer.aadhaar}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{customer.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{customer.phone}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Occupation</p>
                <p className="font-medium">{customer.occupation}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Annual Income</p>
                <p className="font-medium">{customer.annualIncome}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-medium">{customer.address}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Onboarding Date</p>
                <p className="font-medium">{customer.onboardingDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Investment Experience</p>
                <p className="font-medium">{customer.investmentExperience}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-kotak-red" />
                KYC & Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">KYC Status</p>
                  <Badge className="bg-green-600 mt-1">{customer.kycStatus}</Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Expiry Date</p>
                  <p className="font-medium">{customer.kycExpiry}</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleAction("KYC Renewal")}
              >
                <Clock className="h-4 w-4 mr-2" />
                Renew KYC
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-kotak-red" />
                Banking & Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Primary Bank</p>
                <p className="font-medium">{customer.primaryBank}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account Number</p>
                <p className="font-medium font-mono">{customer.accountNumber}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">IFSC Code</p>
                <p className="font-medium font-mono">{customer.ifscCode}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account Type</p>
                <p className="font-medium">Savings Account</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-kotak-red" />
                Investment Goals & Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Investment Goal</p>
                <p className="font-medium">{customer.investmentGoal}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Investment Horizon</p>
                <p className="font-medium">{customer.investmentHorizon}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Risk Appetite</p>
                <Badge variant="secondary">{customer.riskProfile}</Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Liquidity Needs</p>
                <p className="font-medium">{customer.liquidityNeeds}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">Preferred Strategy</p>
                <p className="font-medium">{customer.strategy}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-kotak-red" />
                Nominee Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Nominee Name</p>
                <p className="font-medium">{customer.nomineeName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Relationship</p>
                <p className="font-medium">{customer.nomineeRelation}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Allocation Share</p>
                <p className="font-medium">{customer.nomineeShare}</p>
              </div>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleAction("Update Nominee")}
                >
                  Update Nominee
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5 text-kotak-red" />
                Tax Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Tax Status</p>
                <p className="font-medium">{customer.taxStatus}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tax Residency</p>
                <p className="font-medium">{customer.taxResidency}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">PAN Verified</p>
                <Badge className="bg-green-600">Verified</Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Form 60/61</p>
                <p className="font-medium">Not Applicable</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-kotak-red" />
                Relationship History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="h-2 w-2 bg-kotak-red rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Portfolio Review Completed</p>
                  <p className="text-xs text-muted-foreground">November 20, 2024</p>
                  <p className="text-xs mt-1">Discussed Q3 performance and rebalancing strategy</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="h-2 w-2 bg-blue-600 rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">SIP Increased</p>
                  <p className="text-xs text-muted-foreground">October 15, 2024</p>
                  <p className="text-xs mt-1">Monthly SIP increased from ₹1.5L to ₹2L</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="h-2 w-2 bg-green-600 rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">KYC Updated</p>
                  <p className="text-xs text-muted-foreground">September 5, 2024</p>
                  <p className="text-xs mt-1">Annual KYC verification completed successfully</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="h-2 w-2 bg-orange-600 rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Additional Investment</p>
                  <p className="text-xs text-muted-foreground">August 10, 2024</p>
                  <p className="text-xs mt-1">One-time lumpsum investment of ₹10 Lakhs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Portfolio details would be displayed here with holdings, performance charts, and asset allocation.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mandates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Mandates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Mandate details, SIP schedules, and payment history would be displayed here.</p>
              <Button 
                className="mt-4"
                onClick={() => handleAction("Create New Mandate")}
              >
                Create New Mandate
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-kotak-red" />
                Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Customer documents, agreements, and compliance files would be listed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Communication Log</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-xs text-muted-foreground">{customer.lastContact}</p>
                <p className="text-sm mt-1">Last contacted regarding quarterly portfolio review</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => handleAction("Call")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => handleAction("Email")}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Action Confirmed</DialogTitle>
            <DialogDescription className="pt-4">
              <p className="text-base">{dialogMessage}</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomerDetail;
