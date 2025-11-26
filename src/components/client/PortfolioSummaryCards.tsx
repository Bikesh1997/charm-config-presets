import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, TrendingUp, DollarSign, PiggyBank } from "lucide-react";

export const PortfolioSummaryCards = () => {
  const cards = [
    {
      title: "Total Investment",
      value: "₹2.50 Cr",
      subtitle: "Deployed Capital",
      icon: PiggyBank,
      color: "text-kotak-navy",
    },
    {
      title: "Current Value",
      value: "₹3.12 Cr",
      subtitle: `As of ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}`,
      icon: TrendingUp,
      color: "text-kotak-success",
      badge: { text: "+24.8%", variant: "default" as const },
    },
    {
      title: "Returns (Absolute)",
      value: "₹62.00 L",
      subtitle: "Since inception",
      icon: DollarSign,
      color: "text-kotak-success",
      badge: { text: "XIRR: 18.5%", variant: "default" as const },
    },
    {
      title: "Available Balance",
      value: "₹15.00 L",
      subtitle: "Ready to deploy",
      icon: Wallet,
      color: "text-kotak-red",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
      {cards.map((card, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <p className="text-xs text-muted-foreground">{card.title}</p>
              <card.icon className={`h-4 w-4 ${card.color}`} />
            </div>
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-bold">{card.value}</h3>
                {card.badge && (
                  <Badge
                    variant={card.badge.variant}
                    className="bg-kotak-success/10 text-kotak-success hover:bg-kotak-success/20 border-transparent"
                  >
                    {card.badge.text}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{card.subtitle}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
