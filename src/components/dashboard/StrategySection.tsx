import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

interface StrategyInfo {
  strategy_name: string;
  objective: string;
  style: string;
  factsheet_url: string;
  manager_commentary: string;
}

interface StrategySectionProps {
  strategyInfo: StrategyInfo;
}

export const StrategySection = ({ strategyInfo }: StrategySectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Strategy Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-lg text-kotak-blue">
            {strategyInfo.strategy_name}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Objective</p>
            <p className="text-sm mt-1">{strategyInfo.objective}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Style</p>
            <p className="text-sm font-semibold mt-1">{strategyInfo.style}</p>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">
            Manager Commentary
          </p>
          <p className="text-sm">{strategyInfo.manager_commentary}</p>
        </div>

        <Button variant="outline" className="w-full" asChild>
          <a
            href={strategyInfo.factsheet_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Factsheet
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
