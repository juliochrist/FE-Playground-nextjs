"use client";

import { useEffect, useState } from "react";
import { ChartCard } from "@/components/charts/chart-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const themes = [
  { name: "Blue Theme", className: "theme-blue", color: "#2563eb" },
  { name: "Purple Theme", className: "theme-purple", color: "#7c3aed" },
  { name: "Emerald Theme", className: "theme-emerald", color: "#059669" },
  { name: "Rose Theme", className: "theme-rose", color: "#e11d48" },
  { name: "Orange Theme", className: "theme-orange", color: "#ea580c" },
];

const data = [{ name: "A", value: 30 }, { name: "B", value: 46 }, { name: "C", value: 58 }, { name: "D", value: 74 }];

export function ThemeBuilder() {
  const [theme, setTheme] = useState(themes[0]);

  useEffect(() => {
    const root = document.documentElement;
    themes.forEach((item) => root.classList.remove(item.className));
    root.classList.add(theme.className);
    return () => root.classList.remove(theme.className);
  }, [theme]);

  return (
    <div className="grid gap-6 xl:grid-cols-[18rem_1fr]">
      <Card>
        <CardHeader><div><CardTitle>Theme Presets</CardTitle><CardDescription>CSS variables update the design system instantly.</CardDescription></div></CardHeader>
        <div className="grid gap-3">
          {themes.map((item) => <button key={item.name} onClick={() => setTheme(item)} className="flex items-center gap-3 rounded-xl border bg-background p-3 text-left hover:border-primary"><span className="size-5 rounded-full" style={{ background: item.color }} /><span className="font-medium">{item.name}</span></button>)}
        </div>
      </Card>
      <div className="grid gap-6">
        <Card><CardHeader><div><CardTitle>{theme.name} Preview</CardTitle><CardDescription>Buttons, cards, charts, sidebar active states, and badges inherit semantic tokens.</CardDescription></div></CardHeader><div className="flex flex-wrap gap-3"><Button>Primary</Button><Button variant="outline">Outline</Button><Badge variant="premium">Accent Badge</Badge><Badge variant="success">Success</Badge></div></Card>
        <ChartCard title="Themed Chart" description="Chart shell follows the active design language." data={data} kind="area" />
      </div>
    </div>
  );
}
