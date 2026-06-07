"use client";

import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type ChartKind = "line" | "area" | "bar" | "pie" | "donut";

const colors = ["#2563eb", "#7c3aed", "#16a34a", "#f59e0b", "#dc2626"];

export function ChartCard({
  title,
  description,
  data,
  kind = "area",
}: {
  title: string;
  description: string;
  data: Array<{ name: string; value: number; secondary?: number }>;
  kind?: ChartKind;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chart = (() => {
    if (kind === "line") {
      return (
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.16} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
          <YAxis tickLine={false} axisLine={false} fontSize={12} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="secondary" stroke="#7c3aed" strokeWidth={3} dot={false} />
        </LineChart>
      );
    }
    if (kind === "bar") {
      return (
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.16} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
          <YAxis tickLine={false} axisLine={false} fontSize={12} />
          <Tooltip />
          <Bar dataKey="value" radius={[10, 10, 0, 0]} fill="#2563eb" />
        </BarChart>
      );
    }
    if (kind === "pie" || kind === "donut") {
      return (
        <PieChart>
          <Tooltip />
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={kind === "donut" ? 52 : 0} outerRadius={82} paddingAngle={3}>
            {data.map((_, index) => <Cell key={index} fill={colors[index % colors.length]} />)}
          </Pie>
        </PieChart>
      );
    }
    return (
      <AreaChart data={data}>
        <defs>
          <linearGradient id={`${title}-gradient`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
            <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" opacity={0.16} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
        <YAxis tickLine={false} axisLine={false} fontSize={12} />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} fill={`url(#${title}-gradient)`} />
      </AreaChart>
    );
  })();

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <div className="h-72">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
            {chart}
          </ResponsiveContainer>
        ) : (
          <div className="h-full rounded-xl bg-muted/10" />
        )}
      </div>
    </Card>
  );
}
