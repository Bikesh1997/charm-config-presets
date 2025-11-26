import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, CreditCard } from "lucide-react";

export const SIPDetails = () => {
  const sipActive = true;
  const nextDebitDate = new Date(2025, 11, 5); // December 5, 2025
  const daysUntilDebit = Math.ceil((nextDebitDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  if (!sipActive) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">No Active SIP</h3>
          <p className="text-muted-foreground mb-4">
            Set up a monthly SIP to invest regularly and benefit from rupee cost averaging
          </p>
          <Button className="bg-kotak-red hover:bg-kotak-red/90">
            Set Up Monthly SIP
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Recurring Investments</CardTitle>
          <Badge className="bg-kotak-success/10 text-kotak-success hover:bg-kotak-success/20">
            ACTIVE
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Main SIP Amount */}
          <div className="bg-muted/30 rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Monthly Investment</p>
            <h3 className="text-3xl font-bold text-kotak-red">₹3,50,000</h3>
          </div>

          {/* Next Debit Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kotak-navy/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-kotak-navy" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Next Debit Date</p>
                <p className="font-semibold">
                  {nextDebitDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                </p>
                <p className="text-xs text-kotak-red">In {daysUntilDebit} days</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kotak-navy/10 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-kotak-navy" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Linked Account</p>
                <p className="font-semibold">HDFC Bank</p>
                <p className="text-xs text-muted-foreground">****8765</p>
              </div>
            </div>
          </div>

          {/* Strategy Distribution */}
          <div>
            <p className="text-sm font-semibold mb-3">Distribution Across Strategies</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm">Equity Revival Strategy (ERS)</span>
                <span className="font-semibold">₹2,00,000</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm">DDD+ Strategy</span>
                <span className="font-semibold">₹1,50,000</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button variant="outline" className="border-kotak-red text-kotak-red hover:bg-kotak-red/10">
              Modify SIP
            </Button>
            <Button variant="outline">Pause SIP</Button>
            <Button variant="outline">Change Allocation</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
