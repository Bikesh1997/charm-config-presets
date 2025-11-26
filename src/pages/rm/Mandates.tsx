import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, Plus, Pause, Play, Edit, XCircle, CheckCircle2, Clock, AlertCircle } from "lucide-react";

const Mandates = () => {
  const [open, setOpen] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [actionMessage, setActionMessage] = useState("");

  const handleAction = (action: string, customer: string) => {
    setActionMessage(`${action} for ${customer} has been initiated successfully`);
    setConfirmDialog(true);
  };

  const mandates = [
    { id: 1, customer: "Rajesh Sharma", type: "Monthly SIP", amount: "₹2,00,000", frequency: "Monthly", status: "Active", nextDebit: "01-Feb-2025", bank: "HDFC Bank" },
    { id: 2, customer: "Priya Patel", type: "Quarterly SIP", amount: "₹5,00,000", frequency: "Quarterly", status: "Active", nextDebit: "15-Mar-2025", bank: "ICICI Bank" },
    { id: 3, customer: "Amit Verma", type: "Monthly SIP", amount: "₹1,50,000", frequency: "Monthly", status: "Pending", nextDebit: "05-Feb-2025", bank: "Axis Bank" },
    { id: 4, customer: "Sunita Reddy", type: "One-time", amount: "₹50,00,000", frequency: "One-time", status: "Completed", nextDebit: "-", bank: "SBI" },
    { id: 5, customer: "Vikram Singh", type: "Monthly SIP", amount: "₹3,00,000", frequency: "Monthly", status: "Failed", nextDebit: "28-Jan-2025", bank: "Kotak Bank" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active": return <CheckCircle2 className="h-4 w-4" />;
      case "Pending": return <Clock className="h-4 w-4" />;
      case "Failed": return <XCircle className="h-4 w-4" />;
      case "Completed": return <CheckCircle2 className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case "Active": return "default";
      case "Pending": return "secondary";
      case "Failed": return "destructive";
      case "Completed": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-kotak-navy flex items-center gap-2">
            <FileText className="h-8 w-8 text-kotak-red" />
            Mandate Management
          </h1>
          <p className="text-muted-foreground">Create, track, and manage PMS mandates & e-mandates</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-kotak-red hover:bg-kotak-red/90">
              <Plus className="h-4 w-4 mr-2" />
              Create New Mandate
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Mandate</DialogTitle>
              <DialogDescription>Set up a new payment mandate for PMS investment</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Customer</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Rajesh Sharma</SelectItem>
                      <SelectItem value="2">Priya Patel</SelectItem>
                      <SelectItem value="3">Amit Verma</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Mandate Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly-sip">Monthly SIP</SelectItem>
                      <SelectItem value="quarterly-sip">Quarterly SIP</SelectItem>
                      <SelectItem value="one-time">One-time Lump Sum</SelectItem>
                      <SelectItem value="ad-hoc">Ad-hoc Top-up</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Amount</Label>
                  <Input type="number" placeholder="Enter amount" />
                </div>
                <div className="space-y-2">
                  <Label>Upper Limit</Label>
                  <Input type="number" placeholder="Max amount" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>End Date (Optional)</Label>
                  <Input type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Bank Account</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select bank account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hdfc">HDFC Bank - ****4567</SelectItem>
                    <SelectItem value="icici">ICICI Bank - ****8901</SelectItem>
                    <SelectItem value="axis">Axis Bank - ****2345</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button className="bg-kotak-red hover:bg-kotak-red/90" onClick={() => setOpen(false)}>
                Create Mandate
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Mandates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">156</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approval</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-orange-600">23</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Failed/Rejected</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-600">5</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Monthly Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-kotak-navy">₹45 Cr</p>
          </CardContent>
        </Card>
      </div>

      {/* Mandates Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Mandates</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead>Bank</TableHead>
                <TableHead>Next Debit</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mandates.map((mandate) => (
                <TableRow key={mandate.id}>
                  <TableCell className="font-medium">{mandate.customer}</TableCell>
                  <TableCell>{mandate.type}</TableCell>
                  <TableCell className="font-bold text-kotak-navy">{mandate.amount}</TableCell>
                  <TableCell>{mandate.frequency}</TableCell>
                  <TableCell>{mandate.bank}</TableCell>
                  <TableCell>{mandate.nextDebit}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(mandate.status)} className="flex items-center gap-1 w-fit">
                      {getStatusIcon(mandate.status)}
                      {mandate.status}
                    </Badge>
                  </TableCell>
                   <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {mandate.status === "Active" && (
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => handleAction("Pause mandate", mandate.customer)}
                        >
                          <Pause className="h-4 w-4" />
                        </Button>
                      )}
                      {mandate.status === "Pending" && (
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => handleAction("Activate mandate", mandate.customer)}
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => handleAction("Edit mandate", mandate.customer)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={confirmDialog} onOpenChange={setConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-kotak-success" />
              Action Completed
            </DialogTitle>
            <DialogDescription className="pt-4">
              <p className="text-base">{actionMessage}</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Mandates;
