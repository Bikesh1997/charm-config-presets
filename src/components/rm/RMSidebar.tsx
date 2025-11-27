import {
  LayoutDashboard,
  Users,
  FileText,
  RepeatIcon,
  ArrowLeftRight,
  FolderOpen,
  BarChart3,
  Settings,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import kotakLogo from "@/assets/kotak.svg";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/rm-portal/dashboard" },
  { icon: Users, label: "Customers", path: "/rm-portal/customers" },
  { icon: FileText, label: "Mandates", path: "/rm-portal/mandates" },
  { icon: RepeatIcon, label: "SIP Management", path: "/rm-portal/sips" },
  {
    icon: ArrowLeftRight,
    label: "Transactions",
    path: "/rm-portal/transactions",
  },
  { icon: FolderOpen, label: "Documents", path: "/rm-portal/documents" },
  { icon: BarChart3, label: "Reports", path: "/rm-portal/reports" },
  { icon: Settings, label: "Settings", path: "/rm-portal/settings" },
];

export const RMSidebar = () => {
  return (
    <aside className="w-64 bg-card border-r border-border h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-border">
        <img src={kotakLogo} alt="Kotak PMS" className="h-10" />
        {/* <p className="text-xs text-muted-foreground mt-2">RM Portal</p> */}
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
            activeClassName="bg-kotak-red/10 text-kotak-red font-medium"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="px-4 py-3 bg-muted rounded-lg">
          <p className="text-xs font-semibold text-foreground">RM Name</p>
          <p className="text-xs text-muted-foreground">rm@kotakpms.com</p>
        </div>
      </div>
    </aside>
  );
};
