import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Phone, MapPin, Building2, CreditCard, Shield, Bell, FileText, Edit } from "lucide-react";

const Profile = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-kotak-navy">Profile & Settings</h1>
          <p className="text-muted-foreground">Manage your account information</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Summary Card */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="bg-kotak-red text-white text-2xl">RS</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle>Rahul Sharma</CardTitle>
            <CardDescription>PMS Client since March 2023</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>rahul.sharma@email.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Client ID</span>
                <span className="text-sm font-medium">KOT-PMS-2023-001</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">KYC Status</span>
                <Badge variant="outline" className="bg-kotak-success/10 text-kotak-success border-kotak-success/20">
                  Verified
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Risk Profile</span>
                <Badge variant="outline">Aggressive</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full gap-2">
              <Edit className="h-4 w-4" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Main Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-kotak-red" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Rahul" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Sharma" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="rahul.sharma@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" defaultValue="15/03/1985" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pan">PAN Number</Label>
                  <Input id="pan" defaultValue="ABCDE1234F" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Residential Address</Label>
                <Input id="address" defaultValue="301, Kotak Towers, Bandra Kurla Complex, Mumbai - 400051" />
              </div>
              <Button className="bg-kotak-red hover:bg-kotak-red/90">Save Changes</Button>
            </CardContent>
          </Card>

          {/* Bank Account Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-kotak-red" />
                Bank Account Details
              </CardTitle>
              <CardDescription>Linked accounts for transactions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-8 w-8 text-kotak-red" />
                    <div>
                      <p className="font-medium">Kotak Mahindra Bank</p>
                      <p className="text-sm text-muted-foreground">Account ending in ****3210</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-kotak-success/10 text-kotak-success border-kotak-success/20">
                    Primary
                  </Badge>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Account Type</p>
                    <p className="font-medium">Savings Account</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">IFSC Code</p>
                    <p className="font-medium">KKBK0001234</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">Add Another Bank Account</Button>
            </CardContent>
          </Card>

          {/* Nominee Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-kotak-red" />
                Nominee Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nomineeName">Nominee Name</Label>
                  <Input id="nomineeName" defaultValue="Priya Sharma" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nomineeRelation">Relationship</Label>
                  <Input id="nomineeRelation" defaultValue="Spouse" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nomineeDob">Date of Birth</Label>
                  <Input id="nomineeDob" defaultValue="20/08/1988" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nomineeShare">Share Percentage</Label>
                  <Input id="nomineeShare" defaultValue="100%" />
                </div>
              </div>
              <Button className="bg-kotak-red hover:bg-kotak-red/90">Update Nominee</Button>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-kotak-red" />
                Communication Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Button variant="outline" size="sm">Enabled</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Alerts</p>
                    <p className="text-sm text-muted-foreground">Transaction and important alerts</p>
                  </div>
                  <Button variant="outline" size="sm">Enabled</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">WhatsApp Updates</p>
                    <p className="text-sm text-muted-foreground">Portfolio updates on WhatsApp</p>
                  </div>
                  <Button variant="outline" size="sm">Enabled</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-kotak-red" />
                KYC Documents
              </CardTitle>
              <CardDescription>Your verified documents on file</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "PAN Card", status: "Verified", date: "15 Mar 2023" },
                  { name: "Aadhaar Card", status: "Verified", date: "15 Mar 2023" },
                  { name: "Bank Statement", status: "Verified", date: "15 Mar 2023" },
                  { name: "Address Proof", status: "Verified", date: "15 Mar 2023" },
                ].map((doc) => (
                  <div key={doc.name} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">Uploaded on {doc.date}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-kotak-success/10 text-kotak-success border-kotak-success/20">
                      {doc.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
