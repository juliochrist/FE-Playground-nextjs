"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSettingsStore } from "@/hooks/use-settings-store";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SettingsPanel() {
  const { setTheme, theme } = useTheme();
  const { density, radius, motion, setDensity, setRadius, setMotion } = useSettingsStore();

  return (
    <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
      <Card>
        <CardHeader><div><CardTitle>Appearance</CardTitle><CardDescription>Changes preview instantly and persist locally.</CardDescription></div></CardHeader>
        <div className="grid gap-5">
          <ControlGroup label="Theme">
            {[["light", Sun], ["dark", Moon], ["system", Monitor]].map(([value, Icon]) => {
              const TypedIcon = Icon as typeof Sun;
              return <Button key={value as string} variant={theme === value ? "primary" : "secondary"} onClick={() => setTheme(value as string)}><TypedIcon className="size-4" />{value as string}</Button>;
            })}
          </ControlGroup>
          <ControlGroup label="Density">
            {(["compact", "comfortable", "spacious"] as const).map((value) => <Button key={value} variant={density === value ? "primary" : "secondary"} onClick={() => setDensity(value)}>{value}</Button>)}
          </ControlGroup>
          <ControlGroup label="Border Radius">
            {(["small", "medium", "large"] as const).map((value) => <Button key={value} variant={radius === value ? "primary" : "secondary"} onClick={() => setRadius(value)}>{value}</Button>)}
          </ControlGroup>
          <ControlGroup label="Animation">
            {(["reduced", "normal", "premium"] as const).map((value) => <Button key={value} variant={motion === value ? "primary" : "secondary"} onClick={() => setMotion(value)}>{value}</Button>)}
          </ControlGroup>
        </div>
      </Card>
      <Card>
        <CardHeader><div><CardTitle>Live Preview</CardTitle><CardDescription>Token changes cascade through reusable primitives.</CardDescription></div></CardHeader>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-background p-4">
            <p className="text-sm text-muted">KPI Card</p>
            <p className="mt-2 text-3xl font-bold">$84.2k</p>
            <Button className="mt-4">Primary Action</Button>
          </div>
          <div className="glass-panel rounded-2xl border p-4">
            <p className="text-sm text-muted">Glass Surface</p>
            <p className="mt-2 font-semibold">AI insight preview</p>
            <p className="mt-2 text-sm text-muted">Spacing, radius, and motion update globally.</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ControlGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
