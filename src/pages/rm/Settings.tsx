import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings as SettingsIcon, Bell, User, Mail, Shield } from "lucide-react";

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-kotak-navy flex items-center gap-2">
          <SettingsIcon className="h-8 w-8 text-kotak-red" />
          Settings
        </h1>
        <p className="text-muted-foreground">Manage your RM portal preferences and settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-kotak-red" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input defaultValue="Amit" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input defaultValue="Kumar" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input type="email" defaultValue="amit.kumar@kotakpms.com" />
              </div>
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input type="tel" defaultValue="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <Label>Employee ID</Label>
                <Input defaultValue="RM-2024-1234" disabled />
              </div>
              <Button className="bg-kotak-red hover:bg-kotak-red/90">
                Save Changes
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-kotak-red" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">KYC Expiry Alerts</p>
                  <p className="text-sm text-muted-foreground">Get notified when customer KYC is expiring</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SIP Failure Alerts</p>
                  <p className="text-sm text-muted-foreground">Immediate notification for failed SIP transactions</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Mandate Renewal Reminders</p>
                  <p className="text-sm text-muted-foreground">Reminders for upcoming mandate renewals</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Document Missing Alerts</p>
                  <p className="text-sm text-muted-foreground">Get notified about missing compliance documents</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weekly Summary Report</p>
                  <p className="text-sm text-muted-foreground">Receive weekly email summary of activities</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-kotak-red" />
                Communication Templates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Welcome Email
              </Button>
              <Button variant="outline" className="w-full justify-start">
                KYC Reminder
              </Button>
              <Button variant="outline" className="w-full justify-start">
                SIP Confirmation
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Meeting Follow-up
              </Button>
              <Button variant="ghost" className="w-full text-kotak-red">
                + Create New Template
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-kotak-red" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full">
                Change Password
              </Button>
              <Button variant="outline" className="w-full">
                Two-Factor Authentication
              </Button>
              <Button variant="outline" className="w-full">
                Login History
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
