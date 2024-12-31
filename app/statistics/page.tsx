import { StatsOverview } from "@/components/statistics/stats-overview";
import { StatsCharts } from "@/components/statistics/stats-charts";

export default function StatisticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">İstatistikler</h1>
      <StatsOverview />
      <StatsCharts />
    </div>
  );
}