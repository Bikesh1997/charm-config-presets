import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import Client from "./pages/Client";
import Dashboard from "./pages/client/Dashboard";
import Portfolio from "./pages/client/Portfolio";
import Transactions from "./pages/client/Transactions";
import Reports from "./pages/client/Reports";
import Profile from "./pages/client/Profile";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import RMPortalLayout from "./pages/rm/RMPortalLayout";
import RMDashboard from "./pages/rm/RMDashboard";
import Customers from "./pages/rm/Customers";
import CustomerDetail from "./pages/rm/CustomerDetail";
import Mandates from "./pages/rm/Mandates";
import SIPManagement from "./pages/rm/SIPManagement";
import RMTransactions from "./pages/rm/Transactions";
import Documents from "./pages/rm/Documents";
import RMReports from "./pages/rm/Reports";
import RMSettings from "./pages/rm/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/client" element={<Client />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="reports" element={<Reports />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/rm-portal" element={<RMPortalLayout />}>
            <Route path="dashboard" element={<RMDashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="customers/:id" element={<CustomerDetail />} />
            <Route path="mandates" element={<Mandates />} />
            <Route path="sips" element={<SIPManagement />} />
            <Route path="transactions" element={<RMTransactions />} />
            <Route path="documents" element={<Documents />} />
            <Route path="reports" element={<RMReports />} />
            <Route path="settings" element={<RMSettings />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
