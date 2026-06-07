import { ChartCard } from "@/components/charts/chart-card";
import { DataTable } from "@/components/tables/data-table";
import { PageHeader } from "@/components/layouts/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { revenueData } from "@/data/charts";

function ThemeColumn({ mode }: { mode: "light" | "dark" }) {
  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <div className="rounded-2xl border bg-background p-4 text-foreground">
        <h2 className="mb-4 text-lg font-semibold capitalize">{mode} Mode</h2>
        <div className="grid gap-4">
          <Card><CardHeader><div><CardTitle>Card Showcase</CardTitle><CardDescription>Token-backed reusable surface.</CardDescription></div></CardHeader><div className="flex gap-2"><Button>Primary</Button><Button variant="outline">Outline</Button></div></Card>
          <div className="flex flex-wrap gap-2"><Badge variant="success">Success</Badge><Badge variant="warning">Warning</Badge><Badge variant="danger">Danger</Badge><Badge variant="premium">Premium</Badge></div>
          <Input placeholder="Form showcase" />
          <ChartCard title={`${mode} Chart`} description="Chart colors remain legible in both themes." data={revenueData} kind="area" />
        </div>
      </div>
    </div>
  );
}

export default function ThemeShowcasePage() {
  return (
    <>
      <PageHeader eyebrow="Theme QA" title="Light and Dark Comparison" description="Every component can be checked side-by-side before it is promoted into Julio UI Kit." />
      <div className="grid gap-6 xl:grid-cols-2">
        <ThemeColumn mode="light" />
        <ThemeColumn mode="dark" />
      </div>
      <div className="mt-6"><DataTable /></div>
    </>
  );
}
