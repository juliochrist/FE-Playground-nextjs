"use client";

import dynamic from "next/dynamic";
import { Activity, Image as ImageIcon, Search, Timer, Zap } from "lucide-react";
import { memo, useMemo, useState, useTransition } from "react";
import { EmptyState } from "@/components/feedback/empty-state";
import { SkeletonLoader } from "@/components/feedback/loading-patterns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const LazyChart = dynamic(() => import("@/components/charts/chart-card").then((mod) => mod.ChartCard), {
  loading: () => <SkeletonLoader />,
  ssr: false,
});

const rows = Array.from({ length: 1000 }, (_, index) => ({ id: index + 1, name: `Component ${index + 1}`, score: (index * 17) % 100 }));
const chartData = ["Jan", "Feb", "Mar", "Apr", "May"].map((name, index) => ({ name, value: 40 + index * 12 }));

export function PerformanceLab() {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(20);
  const [isPending, startTransition] = useTransition();
  const filtered = useMemo(() => rows.filter((row) => row.name.toLowerCase().includes(query.toLowerCase())), [query]);
  const virtualRows = useMemo(() => filtered.slice(0, visible), [filtered, visible]);

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Metric icon={Zap} label="LCP Target" value="< 2.5s" />
        <Metric icon={Timer} label="Input Delay" value="< 100ms" />
        <Metric icon={Activity} label="Route Splits" value="23" />
        <Metric icon={ImageIcon} label="Lazy Modules" value="Dynamic" />
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <Card><CardHeader><div><CardTitle>Dynamic Import</CardTitle><CardDescription>Heavy chart module loads client-side with skeleton fallback.</CardDescription></div></CardHeader><LazyChart title="Lazy Loaded Chart" description="Loaded only when this route needs it." data={chartData} kind="area" /></Card>
        <Card><CardHeader><div><CardTitle>Debounced Search Pattern</CardTitle><CardDescription>Transition-based search keeps typing responsive.</CardDescription></div></CardHeader><div className="relative mb-4"><Search className="absolute left-3 top-3 size-4 text-muted" /><Input className="pl-9" placeholder="Search 1,000 rows" value={query} onChange={(event) => startTransition(() => setQuery(event.target.value))} /></div>{isPending ? <Badge variant="warning">Updating</Badge> : <Badge variant="success">{filtered.length} results</Badge>}</Card>
        <Card className="xl:col-span-2"><CardHeader><div><CardTitle>Virtualized Table Simulation</CardTitle><CardDescription>Render a small window instead of every row. Infinite scrolling loads more on demand.</CardDescription></div></CardHeader><div className="grid max-h-96 gap-2 overflow-auto">{virtualRows.map((row) => <MemoRow key={row.id} row={row} />)}</div><div className="mt-4 flex items-center justify-between"><span className="text-sm text-muted">Showing {virtualRows.length} of {filtered.length}</span><Button variant="secondary" onClick={() => setVisible((value) => Math.min(value + 20, filtered.length))}>Load More</Button></div></Card>
        <Card><CardHeader><div><CardTitle>Image Optimization</CardTitle><CardDescription>Use stable dimensions, responsive containers, and Next Image for production assets.</CardDescription></div></CardHeader><div className="grid aspect-video place-items-center rounded-2xl border bg-background"><ImageIcon className="size-10 text-primary" /></div></Card>
        <EmptyState icon={Activity} title="Empty Performance State" description="Empty states are cheaper than rendering hidden complex tables." action="Profile Again" />
      </div>
    </div>
  );
}

function Metric({ icon: Icon, label, value }: { icon: typeof Zap; label: string; value: string }) {
  return <Card><Icon className="size-5 text-primary" /><p className="mt-3 text-sm text-muted">{label}</p><p className="mt-1 text-2xl font-bold">{value}</p></Card>;
}

const MemoRow = memo(function MemoRow({ row }: { row: { id: number; name: string; score: number } }) {
  return <div className="flex items-center justify-between rounded-xl border bg-background p-3 text-sm"><span>{row.name}</span><Badge variant="neutral">{row.score}%</Badge></div>;
});
