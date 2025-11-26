import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
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
import { RepeatIcon, Plus, Pause, Play, Edit, TrendingUp } from "lucide-react";

const SIPManagement = () => {
  const [open, setOpen] = useState(false);
  const [splitMode, setSplitMode] = useState(false);
  const [allocations, setAllocations] = useState([
    { strategy: "Multi Cap", percentage: 40 },
    { strategy: "Large Cap", percentage: 40 },
    { strategy: "Cash Equivalent", percentage: 20 },
  ]);

  const sips = [
    { id: 1, customer: "Rajesh Sharma", amount: "₹2,00,000", frequency: "Monthly", strategy: "Large Cap", nextDate: "01-Feb-2025", status: "Active", split: false },
    { id: 2, customer: "Priya Patel", amount: "₹5,00,000", frequency: "Quarterly", strategy: "Multi Cap", nextDate: "15-Mar-2025", status: "Active", split: false },
    { id: 3, customer: "Amit Verma", amount: "₹1,50,000", frequency: "Monthly", strategy: "Split (3 strategies)", nextDate: "05-Feb-2025", status: "Active", split: true },
    { id: 4, customer: "Sunita Reddy", amount: "₹3,00,000", frequency: "Monthly", strategy: "Balanced", nextDate: "10-Feb-2025", status: "Paused", split: false },
  ];

  const handleAllocationChange = (index: number, value: number) => {
    const newAllocations = [...allocations];
    newAllocations[index].percentage = value;
    setAllocations(newAllocations);
  };

  const totalAllocation = allocations.reduce((sum, item) => sum + item.percentage, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-kotak-navy flex items-center gap-2">
            <RepeatIcon className="h-8 w-8 text-kotak-red" />
            SIP Management
          </h1>
          <p className="text-muted-foreground">Manage systematic investment plans with split allocation support</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-kotak-red hover:bg-kotak-red/90">
              <Plus className="h-4 w-4 mr-2" />
              Create New SIP
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New SIP</DialogTitle>
              <DialogDescription>Set up a systematic investment plan with optional split allocation</DialogDescription>
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
                  <Label>SIP Amount</Label>
                  <Input type="number" placeholder="Enter amount" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Frequency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
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
                        <span className="text-sm font-medium">Total Allocation</span>
                        <Badge variant={totalAllocation === 100 ? "default" : "destructive"}>
                          {totalAllocation}%
                        </Badge>
                      </div>
                      {allocations.map((allocation, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm">{allocation.strategy}</Label>
                            <span className="text-sm font-bold text-kotak-navy">
                              {allocation.percentage}%
                            </span>
                          </div>
                          <Slider
                            value={[allocation.percentage]}
                            onValueChange={(value) => handleAllocationChange(index, value[0])}
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
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button
                className="bg-kotak-red hover:bg-kotak-red/90"
                onClick={() => setOpen(false)}
                disabled={splitMode && totalAllocation !== 100}
              >
                Create SIP
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active SIPs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">156</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Inflow</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-kotak-navy">₹45 Cr</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Split SIPs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">42</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Failed This Month</CardTitle>
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
                  <TableCell className="font-bold text-kotak-navy">{sip.amount}</TableCell>
                  <TableCell>{sip.frequency}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {sip.split && <TrendingUp className="h-4 w-4 text-kotak-red" />}
                      {sip.strategy}
                    </div>
                  </TableCell>
                  <TableCell>{sip.nextDate}</TableCell>
                  <TableCell>
                    <Badge variant={sip.status === "Active" ? "default" : "secondary"}>
                      {sip.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {sip.status === "Active" ? (
                        <Button size="sm" variant="ghost">
                          <Pause className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button size="sm" variant="ghost">
                          <Play className="h-4 w-4" />
                        </Button>
                      )}
                      <Button size="sm" variant="ghost">
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
    </div>
  );
};

export default SIPManagement;
