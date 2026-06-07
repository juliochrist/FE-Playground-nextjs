"use client";

import dynamic from "next/dynamic";
import { Plus, SlidersHorizontal } from "lucide-react";
import { StatCard } from "@/components/cards/stat-card";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { revenueData } from "@/data/charts";

const ChartCard = dynamic(() => import("@/components/charts/chart-card").then((mod) => mod.ChartCard), { ssr: false });
const DataTable = dynamic(() => import("@/components/tables/data-table").then((mod) => mod.DataTable), { ssr: false });

export function PlaygroundCanvas() {
  return (
    <div className="grid gap-6 xl:grid-cols-[18rem_1fr]">
      <Card>
        <CardHeader><div><CardTitle>Builder Controls</CardTitle><CardDescription>Select patterns to assemble a dashboard.</CardDescription></div></CardHeader>
        <div className="grid gap-3">
          {["Sidebar", "KPI Cards", "Charts", "Tables", "Forms", "Modals"].map((item) => <Button key={item} variant="secondary" className="justify-start"><Plus className="size-4" />{item}</Button>)}
          <Button className="justify-start"><SlidersHorizontal className="size-4" />Apply Prototype</Button>
        </div>
      </Card>
      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard title="Prototype Revenue" value="$92k" change="+14%" icon={Plus} />
          <StatCard title="Active Leads" value="418" change="+8%" icon={Plus} />
          <StatCard title="Conversion" value="12.8%" change="+3%" icon={Plus} />
        </div>
        <ChartCard title="Prototype Chart" description="Dynamically imported chart module for code splitting." data={revenueData} kind="area" />
        <DataTable />
      </div>
    </div>
  );
}
