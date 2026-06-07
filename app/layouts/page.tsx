import { Activity, DollarSign, LineChart, Users } from "lucide-react";
import { ChartCard } from "@/components/charts/chart-card";
import { StatCard } from "@/components/cards/stat-card";
import { PageHeader } from "@/components/layouts/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { revenueData } from "@/data/charts";

const layouts = ["Trading Dashboard", "CRM Dashboard", "POS Dashboard", "Analytics Dashboard", "Settings Dashboard"];

export default function LayoutsPage() {
  return (
    <>
      <PageHeader eyebrow="Dashboard Architecture" title="Reusable SaaS Layouts" description="Composable dashboard blueprints with KPI cards, charts, activity feeds, navigation, and settings surfaces." />
      <div className="grid gap-6">
        {layouts.map((layout) => (
          <Card key={layout}>
            <CardHeader><div><CardTitle>{layout}</CardTitle><CardDescription>Reusable dashboard composition for rapid product builds.</CardDescription></div></CardHeader>
            <div className="grid gap-4 md:grid-cols-4">
              <StatCard title="Revenue" value="$128k" change="+12%" icon={DollarSign} />
              <StatCard title="Users" value="8.2k" change="+9%" icon={Users} />
              <StatCard title="Activity" value="1.4k" change="+22%" icon={Activity} />
              <StatCard title="Growth" value="34%" change="+7%" icon={LineChart} />
            </div>
            <div className="mt-4"><ChartCard title={`${layout} Overview`} description="Embedded reusable chart module." data={revenueData} kind="line" /></div>
          </Card>
        ))}
      </div>
    </>
  );
}
