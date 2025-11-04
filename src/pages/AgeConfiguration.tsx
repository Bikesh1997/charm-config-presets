import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Filter, Plus } from "lucide-react";
import { toast } from "sonner";

interface AgeConfig {
  id: string;
  ageMin: number;
  ageMax: number;
  price: number;
  multiplier: number;
}

const mockProducts = [
  { id: "1", name: "Product A - Premium Plan" },
  { id: "2", name: "Product B - Standard Plan" },
  { id: "3", name: "Product C - Basic Plan" },
];

const initialConfigs: AgeConfig[] = [
  { id: "1", ageMin: 18, ageMax: 25, price: 49.99, multiplier: 1.0 },
  { id: "2", ageMin: 26, ageMax: 35, price: 59.99, multiplier: 1.2 },
  { id: "3", ageMin: 36, ageMax: 45, price: 69.99, multiplier: 1.4 },
  { id: "4", ageMin: 46, ageMax: 55, price: 79.99, multiplier: 1.6 },
  { id: "5", ageMin: 56, ageMax: 65, price: 89.99, multiplier: 1.8 },
];

const AgeConfiguration = () => {
  const [configs, setConfigs] = useState<AgeConfig[]>(initialConfigs);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const handleApplyConfiguration = () => {
    if (!selectedProduct) {
      toast.error("Please select a product");
      return;
    }
    setShowConfirmDialog(true);
  };

  const confirmApply = () => {
    const productName = mockProducts.find((p) => p.id === selectedProduct)?.name;
    toast.success(`Configuration from "${productName}" applied successfully!`, {
      description: "All age tiers have been updated with the selected product's settings.",
    });
    setShowConfirmDialog(false);
    setSelectedProduct("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Age Configuration</h2>
        <p className="text-muted-foreground mt-2">
          Manage age-based pricing tiers and configurations
        </p>
      </div>

      {/* Copy Configuration Section */}
      <div className="flex items-end gap-4 rounded-lg border border-border bg-muted/30 p-4">
        <div className="flex-1 space-y-2">
          <Label htmlFor="copy-product" className="text-sm font-medium">
            Copy configuration from:
          </Label>
          <Select value={selectedProduct} onValueChange={setSelectedProduct}>
            <SelectTrigger id="copy-product" className="bg-background">
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent>
              {mockProducts.map((product) => (
                <SelectItem key={product.id} value={product.id}>
                  {product.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleApplyConfiguration} disabled={!selectedProduct}>
          Apply
        </Button>
      </div>

      {/* Main Configuration Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Age Tiers</CardTitle>
              <CardDescription>Configure pricing based on age ranges</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Tier
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {showFilters && (
            <div className="mb-4 grid grid-cols-3 gap-4 p-4 border border-border rounded-lg bg-muted/20">
              <div className="space-y-2">
                <Label htmlFor="filter-age">Age Range</Label>
                <Input id="filter-age" placeholder="e.g., 18-25" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="filter-price">Price Range</Label>
                <Input id="filter-price" placeholder="e.g., 50-100" />
              </div>
              <div className="flex items-end">
                <Button variant="secondary" className="w-full">
                  Apply Filters
                </Button>
              </div>
            </div>
          )}

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Age Range</TableHead>
                  <TableHead>Min Age</TableHead>
                  <TableHead>Max Age</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Multiplier</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {configs.map((config) => (
                  <TableRow key={config.id}>
                    <TableCell className="font-medium">
                      {config.ageMin} - {config.ageMax} years
                    </TableCell>
                    <TableCell>{config.ageMin}</TableCell>
                    <TableCell>{config.ageMax}</TableCell>
                    <TableCell>${config.price.toFixed(2)}</TableCell>
                    <TableCell>{config.multiplier}x</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Configuration Copy</AlertDialogTitle>
            <AlertDialogDescription>
              Applying this configuration will overwrite existing age tier values. This action
              cannot be undone. Continue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmApply}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AgeConfiguration;
