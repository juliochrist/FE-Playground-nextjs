import { DashboardWidgets } from "@/components/widgets/dashboard-widgets";
import { PageHeader } from "@/components/layouts/page-header";

export default function WidgetsPage() {
  return (
    <>
      <PageHeader eyebrow="Dashboard Widgets" title="Reusable Analytics Widgets" description="Revenue cards, KPI cards, user growth, activity feed, recent transactions, and progress trackers." />
      <DashboardWidgets />
    </>
  );
}
