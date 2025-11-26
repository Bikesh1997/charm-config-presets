import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, User } from "lucide-react";

interface SupportInfo {
  rm_name: string;
  rm_email: string;
  rm_phone: string;
}

interface SupportSectionProps {
  support: SupportInfo;
}

export const SupportSection = ({ support }: SupportSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Your Relationship Manager
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Name</p>
          <p className="text-lg font-semibold mt-1">{support.rm_name}</p>
        </div>

        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href={`mailto:${support.rm_email}`}>
              <Mail className="h-4 w-4 mr-2" />
              {support.rm_email}
            </a>
          </Button>

          <Button variant="outline" className="w-full justify-start" asChild>
            <a href={`tel:${support.rm_phone}`}>
              <Phone className="h-4 w-4 mr-2" />
              {support.rm_phone}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
