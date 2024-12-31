import { ReportsOverview } from "@/components/reports/reports-overview";
import { ReportsList } from "@/components/reports/reports-list";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Raporlar</h1>
      <ReportsOverview />
      <ReportsList />
    </div>
  );
}