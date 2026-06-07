import { BarChart3, Blocks, Component, PanelsTopLeft, Table2 } from "lucide-react";
import { ChartCard } from "@/components/charts/chart-card";
import { StatCard } from "@/components/cards/stat-card";
import { PageHeader } from "@/components/layouts/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { componentStats, productPillars, recentComponents, usageMetrics } from "@/data/navigation";
import { revenueData } from "@/data/charts";

export default function DashboardPage() {
  const stats = [
    { title: "Total Components", value: componentStats.components, icon: Component },
    { title: "Total Charts", value: componentStats.charts, icon: BarChart3 },
    { title: "Total Forms", value: componentStats.forms, icon: Blocks },
    { title: "Total Tables", value: componentStats.tables, icon: Table2 },
    { title: "Total Layouts", value: componentStats.layouts, icon: PanelsTopLeft },
  ];

  return (
    <>
      <PageHeader eyebrow="Design System Overview" title="Frontend Playground" description="A reusable component laboratory for building consistent Julio products with one shared design language." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((stat) => <StatCard key={stat.title} title={stat.title} value={String(stat.value)} change="+12%" icon={stat.icon} />)}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <ChartCard title="Design System Statistics" description="Reusable patterns added across Julio product families." data={revenueData} kind="area" />
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Recent Components</CardTitle>
              <CardDescription>Recently updated reusable primitives.</CardDescription>
            </div>
          </CardHeader>
          <div className="grid gap-3">
            {recentComponents.map((component) => (
              <div key={component.name} className="flex items-center justify-between rounded-xl border bg-background p-3">
                <div>
                  <p className="font-medium">{component.name}</p>
                  <p className="text-sm text-muted">{component.area}</p>
                </div>
                <Badge variant={component.status === "stable" ? "success" : component.status === "beta" ? "warning" : "premium"}>{component.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader><div><CardTitle>Most Used Components</CardTitle><CardDescription>Adoption by product foundation.</CardDescription></div></CardHeader>
          <div className="grid gap-3">
            {usageMetrics.map((item) => <div key={item.name} className="flex items-center justify-between"><span>{item.name}</span><Badge variant="neutral">{item.components} components</Badge></div>)}
          </div>
        </Card>
        <Card>
          <CardHeader><div><CardTitle>Platform Principles</CardTitle><CardDescription>Every pattern must be reusable across future apps.</CardDescription></div></CardHeader>
          <div className="flex flex-wrap gap-2">
            {productPillars.map((pillar) => <Badge key={pillar} variant="premium">{pillar}</Badge>)}
          </div>
        </Card>
      </div>
    </>
  );
}
