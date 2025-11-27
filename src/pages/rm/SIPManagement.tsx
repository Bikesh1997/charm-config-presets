import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RepeatIcon,
  Plus,
  Pause,
  Play,
  Edit,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const SIPManagement = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [splitMode, setSplitMode] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [actionMessage, setActionMessage] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [selectedSip, setSelectedSip] = useState<any>(null);
  const [allocations, setAllocations] = useState([
    { strategy: "Multi Cap", percentage: 40 },
    { strategy: "Large Cap", percentage: 40 },
    { strategy: "Cash Equivalent", percentage: 20 },
  ]);

  const handleAction = (action: string, customer: string) => {
    setActionMessage(
      `${action} for ${customer} has been completed successfully`
    );
    setConfirmDialog(true);
  };

  const handleEdit = (sip: any) => {
    setSelectedSip(sip);
    setEditMode(true);
    setSplitMode(sip.split);
    setOpen(true);
  };

  const handleCreate = () => {
    setSelectedSip(null);
    setEditMode(false);
    setSplitMode(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditMode(false);
    setSelectedSip(null);
    setSplitMode(false);
  };

  const handleSubmit = () => {
    if (editMode) {
      toast({
        title: "SIP Updated",
        description: `SIP for ${selectedSip?.customer} has been updated successfully.`,
      });
    } else {
      toast({
        title: "SIP Created",
        description: "New SIP has been created successfully.",
      });
    }
    handleClose();
  };

  const sips = [
    {
      id: 1,
      customer: "Rajesh Sharma",
      amount: "₹2,00,000",
      frequency: "Monthly",
      strategy: "Large Cap",
      nextDate: "01-Feb-2025",
      status: "Active",
      split: false,
    },
    {
      id: 2,
      customer: "Priya Patel",
      amount: "₹5,00,000",
      frequency: "Quarterly",
      strategy: "Multi Cap",
      nextDate: "15-Mar-2025",
      status: "Active",
      split: false,
    },
    {
      id: 3,
      customer: "Amit Verma",
      amount: "₹1,50,000",
      frequency: "Monthly",
      strategy: "Split (3 strategies)",
      nextDate: "05-Feb-2025",
      status: "Active",
      split: true,
    },
    {
      id: 4,
      customer: "Sunita Reddy",
      amount: "₹3,00,000",
      frequency: "Monthly",
      strategy: "Balanced",
      nextDate: "10-Feb-2025",
      status: "Paused",
      split: false,
    },
  ];

  const handleAllocationChange = (index: number, value: number) => {
    const newAllocations = [...allocations];
    newAllocations[index].percentage = value;
    setAllocations(newAllocations);
  };

  const totalAllocation = allocations.reduce(
    (sum, item) => sum + item.percentage,
    0
  );

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-kotak-navy flex items-center gap-2">
            SIP Management
          </h1>
          <p className="text-muted-foreground">
            Manage systematic investment plans with split allocation support
          </p>
        </div>
        <Button
          className="bg-kotak-red hover:bg-kotak-red/90"
          onClick={handleCreate}
        >
          <Plus className="h-4 w-4 mr-2" />
          Create New SIP
        </Button>
        <Dialog open={open} onOpenChange={handleClose}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editMode ? "Edit SIP" : "Create New SIP"}
              </DialogTitle>
              <DialogDescription>
                {editMode
                  ? "Update the systematic investment plan details"
                  : "Set up a systematic investment plan with optional split allocation"}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Customer</Label>
                  <Select
                    defaultValue={editMode ? selectedSip?.customer : undefined}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Rajesh Sharma">
                        Rajesh Sharma
                      </SelectItem>
                      <SelectItem value="Priya Patel">Priya Patel</SelectItem>
                      <SelectItem value="Amit Verma">Amit Verma</SelectItem>
                      <SelectItem value="Sunita Reddy">Sunita Reddy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>SIP Amount</Label>
                  <Input
                    type="text"
                    placeholder="Enter amount"
                    defaultValue={editMode ? selectedSip?.amount : ""}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Frequency</Label>
                  <Select
                    defaultValue={editMode ? selectedSip?.frequency : undefined}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Monthly">Monthly</SelectItem>
                      <SelectItem value="Quarterly">Quarterly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Allocation Strategy</Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSplitMode(!splitMode)}
                  >
                    {splitMode ? "Single Strategy" : "Enable Split"}
                  </Button>
                </div>
                {!splitMode ? (
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select strategy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="large-cap">Large Cap</SelectItem>
                      <SelectItem value="multi-cap">Multi Cap</SelectItem>
                      <SelectItem value="debt">Debt</SelectItem>
                      <SelectItem value="balanced">Balanced</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <Card className="bg-muted/50">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium">
                          Total Allocation
                        </span>
                        <Badge
                          variant={
                            totalAllocation === 100 ? "default" : "destructive"
                          }
                        >
                          {totalAllocation}%
                        </Badge>
                      </div>
                      {allocations.map((allocation, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm">
                              {allocation.strategy}
                            </Label>
                            <span className="text-sm font-bold text-kotak-navy">
                              {allocation.percentage}%
                            </span>
                          </div>
                          <Slider
                            value={[allocation.percentage]}
                            onValueChange={(value) =>
                              handleAllocationChange(index, value[0])
                            }
                            max={100}
                            step={5}
                            className="w-full"
                          />
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="w-full">
                        + Add Another Strategy
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
              <div className="space-y-2">
                <Label>Link to Mandate</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select mandate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">HDFC Mandate - ₹2,00,000</SelectItem>
                    <SelectItem value="2">ICICI Mandate - ₹5,00,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                className="bg-kotak-red hover:bg-kotak-red/90"
                onClick={handleSubmit}
                disabled={splitMode && totalAllocation !== 100}
              >
                {editMode ? "Update SIP" : "Create SIP"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-2 border-l-green-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active SIPs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">156</p>
          </CardContent>
        </Card>
        <Card className="border-l-2 border-l-kotak-navy">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Monthly Inflow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-kotak-navy">₹45 Cr</p>
          </CardContent>
        </Card>
        <Card className="border-l-2 border-l-blue-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Split SIPs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">42</p>
          </CardContent>
        </Card>
        <Card className="border-l-2 border-l-red-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Failed This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-600">3</p>
          </CardContent>
        </Card>
      </div>

      {/* SIPs Table */}
      <Card>
        <CardHeader>
          <CardTitle>All SIPs</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead>Strategy/Split</TableHead>
                <TableHead>Next Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sips.map((sip) => (
                <TableRow key={sip.id}>
                  <TableCell className="font-medium">{sip.customer}</TableCell>
                  <TableCell className="font-bold text-kotak-navy">
                    {sip.amount}
                  </TableCell>
                  <TableCell>{sip.frequency}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {sip.split && (
                        <TrendingUp className="h-4 w-4 text-kotak-red" />
                      )}
                      {sip.strategy}
                    </div>
                  </TableCell>
                  <TableCell>{sip.nextDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        sip.status === "Active" ? "default" : "secondary"
                      }
                    >
                      {sip.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {sip.status === "Active" ? (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            handleAction("Pause SIP", sip.customer)
                          }
                        >
                          <Pause className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            handleAction("Resume SIP", sip.customer)
                          }
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(sip)}
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

export default SIPManagement;
