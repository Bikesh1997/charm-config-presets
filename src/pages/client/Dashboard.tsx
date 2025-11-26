import { pmsData } from "@/data/pmsData";
import { TopSummary } from "@/components/dashboard/TopSummary";
import { AssetAllocation } from "@/components/dashboard/AssetAllocation";
import { HoldingsTable } from "@/components/dashboard/HoldingsTable";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { TransactionsSection } from "@/components/dashboard/TransactionsSection";
import { StrategySection } from "@/components/dashboard/StrategySection";
import { RiskMetrics } from "@/components/dashboard/RiskMetrics";
import { ReportsSection } from "@/components/dashboard/ReportsSection";
import { SupportSection } from "@/components/dashboard/SupportSection";
import { NotificationsSection } from "@/components/dashboard/NotificationsSection";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-kotak-blue">Welcome, {pmsData.user.name}</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Account: {pmsData.user.account_id} | Last Updated: {new Date(pmsData.user.last_valuation_date).toLocaleDateString("en-IN")}
        </p>
      </div>

      {/* Top Summary */}
      <TopSummary
        currentValue={pmsData.portfolio_summary.current_value}
        netContribution={pmsData.portfolio_summary.net_contribution}
        netGain={pmsData.portfolio_summary.net_gain}
        netGainPercent={pmsData.portfolio_summary.net_gain_percent}
        xirr={pmsData.portfolio_summary.xirr}
        benchmark={pmsData.portfolio_summary.benchmark}
      />

      {/* Asset Allocation */}
      <AssetAllocation
        byAssetClass={pmsData.asset_allocation.by_asset_class}
        byMarketCap={pmsData.asset_allocation.by_market_cap}
        bySector={pmsData.asset_allocation.by_sector}
      />

      {/* Holdings Table */}
      <HoldingsTable holdings={pmsData.holdings} />

      {/* Performance Chart */}
      <PerformanceChart
        portfolioValues={pmsData.performance_chart.portfolio_values}
        benchmarkValues={pmsData.performance_chart.benchmark_values}
      />

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TransactionsSection transactions={pmsData.transactions} />
        <StrategySection strategyInfo={pmsData.strategy_info} />
      </div>

      {/* Risk Metrics */}
      <RiskMetrics
        beta={pmsData.risk_metrics.beta}
        standard_deviation={pmsData.risk_metrics.standard_deviation}
        sharpe_ratio={pmsData.risk_metrics.sharpe_ratio}
        max_drawdown_percent={pmsData.risk_metrics.max_drawdown_percent}
        top_5_holdings_concentration_percent={pmsData.risk_metrics.top_5_holdings_concentration_percent}
      />

      {/* Reports and Support */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReportsSection reports={pmsData.reports} />
        <SupportSection support={pmsData.support} />
      </div>

      {/* Notifications */}
      <NotificationsSection notifications={pmsData.notifications} />
    </div>
  );
};

export default Dashboard;
