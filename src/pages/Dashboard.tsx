import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, TrendingUp, Activity } from "lucide-react";

const stats = [
  {
    title: "Total Products",
    value: "24",
    description: "+12% from last month",
    icon: FileText,
    trend: "up",
  },
  {
    title: "Active Users",
    value: "1,429",
    description: "+5% from last month",
    icon: Users,
    trend: "up",
  },
  {
    title: "Configurations",
    value: "18",
    description: "Age-based pricing",
    icon: TrendingUp,
    trend: "neutral",
  },
  {
    title: "System Health",
    value: "98.5%",
    description: "Uptime this month",
    icon: Activity,
    trend: "up",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Dashboard Overview</h2>
        <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest changes to your products and configurations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Product A configuration updated</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-success" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New age tier added</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-warning" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Product B pricing modified</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <a
              href="/age-config"
              className="block rounded-lg border border-border p-3 hover:bg-muted/50 transition-colors"
            >
              <p className="font-medium text-sm">Configure Age Tiers</p>
              <p className="text-xs text-muted-foreground">Manage age-based pricing</p>
            </a>
            <a
              href="/products"
              className="block rounded-lg border border-border p-3 hover:bg-muted/50 transition-colors"
            >
              <p className="font-medium text-sm">Manage Products</p>
              <p className="text-xs text-muted-foreground">View and edit all products</p>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
