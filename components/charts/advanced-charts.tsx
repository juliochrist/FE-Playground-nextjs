"use client";

import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Funnel,
  FunnelChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const timeSeries = [
  { name: "Mon", value: 42, users: 22, revenue: 32 },
  { name: "Tue", value: 58, users: 28, revenue: 44 },
  { name: "Wed", value: 51, users: 35, revenue: 39 },
  { name: "Thu", value: 74, users: 42, revenue: 57 },
  { name: "Fri", value: 88, users: 49, revenue: 70 },
  { name: "Sat", value: 81, users: 44, revenue: 66 },
  { name: "Sun", value: 96, users: 55, revenue: 82 },
];

const funnelData = [
  { name: "Visitors", value: 5200, fill: "#2563eb" },
  { name: "Signups", value: 2400, fill: "#7c3aed" },
  { name: "Trials", value: 1200, fill: "#16a34a" },
  { name: "Paid", value: 520, fill: "#f59e0b" },
];

const candles = [
  { day: "M", open: 42, close: 56, high: 62, low: 37 },
  { day: "T", open: 58, close: 49, high: 64, low: 44 },
  { day: "W", open: 51, close: 72, high: 78, low: 48 },
  { day: "T", open: 72, close: 68, high: 83, low: 63 },
  { day: "F", open: 68, close: 88, high: 94, low: 66 },
  { day: "S", open: 87, close: 81, high: 93, low: 75 },
  { day: "S", open: 81, close: 96, high: 103, low: 78 },
];

const heatmap = Array.from({ length: 35 }, (_, index) => ({
  id: index,
  value: (index * 17) % 100,
}));

const treemap = [
  { name: "TradeIntel", value: 34, color: "bg-primary" },
  { name: "Career AI", value: 26, color: "bg-accent" },
  { name: "Analytics", value: 18, color: "bg-success" },
  { name: "CRM", value: 14, color: "bg-danger" },
  { name: "POS", value: 8, color: "bg-muted" },
];

export function AdvancedChartGrid() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <ChartFrame title="Area Chart" description="Reusable trend surface for analytics dashboards.">
        <AreaChart data={timeSeries}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.16} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Area dataKey="value" type="monotone" stroke="#2563eb" fill="#2563eb" fillOpacity={0.18} strokeWidth={3} />
        </AreaChart>
      </ChartFrame>
      <ChartFrame title="Stacked Bar" description="Compare product segments over time.">
        <BarChart data={timeSeries}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.16} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Bar dataKey="users" stackId="a" fill="#2563eb" radius={[8, 8, 0, 0]} />
          <Bar dataKey="revenue" stackId="a" fill="#7c3aed" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ChartFrame>
      <Card>
        <CardHeader><div><CardTitle>Heatmap</CardTitle><CardDescription>Density grid for usage, commits, habits, or market activity.</CardDescription></div></CardHeader>
        <div className="grid grid-cols-7 gap-2">
          {heatmap.map((cell) => (
            <div
              key={cell.id}
              title={`${cell.value}% activity`}
              className="aspect-square rounded-lg border"
              style={{ backgroundColor: `color-mix(in srgb, var(--primary) ${cell.value}%, transparent)` }}
            />
          ))}
        </div>
      </Card>
      <Card>
        <CardHeader><div><CardTitle>Treemap</CardTitle><CardDescription>Portfolio or product distribution without heavy chart dependencies.</CardDescription></div></CardHeader>
        <div className="flex h-72 gap-2 overflow-hidden rounded-2xl">
          {treemap.map((item) => (
            <div key={item.name} className={`${item.color} flex min-w-16 items-end rounded-xl p-3 text-white`} style={{ flex: item.value }}>
              <div><p className="text-sm font-bold">{item.name}</p><p className="text-xs opacity-80">{item.value}%</p></div>
            </div>
          ))}
        </div>
      </Card>
      <ChartFrame title="Funnel Chart" description="Conversion flow for onboarding, sales, and hiring pipelines.">
        <FunnelChart>
          <Tooltip />
          <Funnel dataKey="value" data={funnelData} isAnimationActive>
            {funnelData.map((entry) => <Cell key={entry.name} fill={entry.fill} />)}
          </Funnel>
        </FunnelChart>
      </ChartFrame>
      <Card>
        <CardHeader><div><CardTitle>Candlestick Chart</CardTitle><CardDescription>Trading-ready chart pattern for price action UI.</CardDescription></div></CardHeader>
        <div className="flex h-72 items-end justify-between gap-3 rounded-2xl border bg-background p-4">
          {candles.map((candle, index) => {
            const up = candle.close >= candle.open;
            const top = Math.max(candle.open, candle.close);
            const bottom = Math.min(candle.open, candle.close);
            return (
              <div key={`${candle.day}-${index}`} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="relative h-56 w-full">
                  <div className="absolute left-1/2 w-px -translate-x-1/2 bg-muted" style={{ top: `${100 - candle.high}%`, bottom: `${candle.low}%` }} />
                  <div
                    className={`absolute left-1/2 w-7 -translate-x-1/2 rounded ${up ? "bg-success" : "bg-danger"}`}
                    style={{ top: `${100 - top}%`, bottom: `${bottom}%` }}
                  />
                </div>
                <span className="text-xs text-muted">{candle.day}</span>
              </div>
            );
          })}
        </div>
      </Card>
      <ChartFrame title="Trading Chart" description="Composed chart combining price trend and volume.">
        <ComposedChart data={timeSeries}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.16} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Bar dataKey="users" fill="#1f2937" opacity={0.32} />
          <Line dataKey="value" type="monotone" stroke="#22c55e" strokeWidth={3} dot={false} />
        </ComposedChart>
      </ChartFrame>
    </div>
  );
}

function ChartFrame({ title, description, children }: { title: string; description: string; children: React.ReactElement }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Card>
      <CardHeader><div><CardTitle>{title}</CardTitle><CardDescription>{description}</CardDescription></div></CardHeader>
      <div className="h-72">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
            {children}
          </ResponsiveContainer>
        ) : (
          <div className="h-full rounded-xl bg-muted/10" />
        )}
      </div>
    </Card>
  );
}
