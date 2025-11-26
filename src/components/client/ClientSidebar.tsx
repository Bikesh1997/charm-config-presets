import { LayoutDashboard, Briefcase, ArrowLeftRight, FileText, User, ChevronRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/client/dashboard", icon: LayoutDashboard, end: false },
  { title: "Portfolio", url: "/client/portfolio", icon: Briefcase, end: false },
  { title: "Transactions", url: "/client/transactions", icon: ArrowLeftRight, end: false },
  { title: "Reports", url: "/client/reports", icon: FileText, end: false },
  { title: "Profile", url: "/client/profile", icon: User, end: false },
];

export function ClientSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className="border-r top-16" collapsible="icon">
      <SidebarContent className="pt-2">
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.end}
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                      activeClassName="bg-muted text-kotak-red font-medium"
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
