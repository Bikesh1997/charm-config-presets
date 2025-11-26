import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  PlusCircle, 
  Calendar, 
  RefreshCw, 
  Download, 
  TrendingDown, 
  ArrowLeftRight, 
  UserCheck 
} from "lucide-react";

const actions = [
  {
    icon: PlusCircle,
    label: "Add More Funds",
    variant: "default" as const,
    className: "bg-kotak-red hover:bg-kotak-red/90",
  },
  {
    icon: Calendar,
    label: "Set Up/Modify SIP",
    variant: "outline" as const,
  },
  {
    icon: RefreshCw,
    label: "Rebalance Portfolio",
    variant: "outline" as const,
  },
  {
    icon: Download,
    label: "Download Statements",
    variant: "outline" as const,
  },
  {
    icon: TrendingDown,
    label: "Book Tax Loss",
    variant: "outline" as const,
  },
  {
    icon: ArrowLeftRight,
    label: "Schedule Withdrawal",
    variant: "outline" as const,
  },
  {
    icon: UserCheck,
    label: "Contact RM",
    variant: "outline" as const,
  },
];

export const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className={`flex items-center justify-center gap-2 h-auto py-4 ${action.className || ""}`}
            >
              <action.icon className="h-4 w-4" />
              <span className="text-sm">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
