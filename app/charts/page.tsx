import { ChartCard } from "@/components/charts/chart-card";
import { PageHeader } from "@/components/layouts/page-header";
import { acquisitionData, productShareData, revenueData } from "@/data/charts";

export default function ChartsPage() {
  return (
    <>
      <PageHeader eyebrow="Reusable Data Viz" title="Chart Components" description="Composable Recharts patterns for revenue, trading performance, growth, sales, and acquisition reporting." />
      <div className="grid gap-6 xl:grid-cols-2">
        <ChartCard title="Revenue Chart" description="Area chart with reusable title, description, and data props." data={revenueData} kind="area" />
        <ChartCard title="Trading Performance Chart" description="Line chart for balance and benchmark comparison." data={revenueData} kind="line" />
        <ChartCard title="Growth Chart" description="Bar chart for product or acquisition movement." data={acquisitionData} kind="bar" />
        <ChartCard title="Customer Acquisition Chart" description="Donut split by product adoption." data={productShareData} kind="donut" />
        <ChartCard title="Sales Chart" description="Pie chart for POS reporting surfaces." data={productShareData} kind="pie" />
      </div>
    </>
  );
}
