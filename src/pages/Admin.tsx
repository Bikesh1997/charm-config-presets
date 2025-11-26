import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-kotak-red p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-kotak-navy">Kotak PMS</h1>
              <p className="text-xs text-muted-foreground">Admin Dashboard</p>
            </div>
          </div>
          <Button variant="outline" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </header>

      <div className="container max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-kotak-navy mb-4">Admin Dashboard</h1>
        <p className="text-xl text-muted-foreground mb-8">Coming Soon</p>
        <p className="text-muted-foreground">
          The admin portal will allow you to manage client mandates, review applications, and oversee operations.
        </p>
      </div>
    </div>
  );
};

export default Admin;
